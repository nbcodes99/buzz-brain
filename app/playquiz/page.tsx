"use client";

import { Select } from "@radix-ui/themes";
import React, { useState, useEffect } from "react";
import { GrStatusGood } from "react-icons/gr";
import { MdOutlineCancel } from "react-icons/md";
import { FaGrinStars } from "react-icons/fa";
import CustomButton from "../components/CustomButton";

type Question = {
  category: string;
  question: string;
  options: string[];
  answer: string;
};

function shuffleArray(array: Question[]): Question[] {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export default function PlayQuiz() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedCategory) return;

    setLoading(true);
    setScore(0);
    setCurrentQuestionIndex(0);
    setAnswered(false);
    setSelectedOption(null);

    async function loadQuestions() {
      try {
        const categoryFile = selectedCategory.toLowerCase();
        const module = await import(`../data/${categoryFile}.json`);
        const questions: Question[] = module.default;

        setShuffledQuestions(shuffleArray(questions));
      } catch (error) {
        console.error(
          "Failed to load questions for category",
          selectedCategory,
          error
        );
        setShuffledQuestions([]);
      } finally {
        setLoading(false);
      }
    }

    loadQuestions();
  }, [selectedCategory]);

  const updateBackendScore = async (newScore: number) => {
    try {
      const res = await fetch("/api/update-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ score: newScore }),
      });

      const data = await res.json();
      console.log("Score update response:", data);

      if (!res.ok) {
        throw new Error(data.error || "Score update failed");
      }
    } catch (error) {
      console.error("Failed to update score:", error);
    }
  };

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const handleAnswer = async (option: string) => {
    if (!answered) {
      setSelectedOption(option);

      if (option === currentQuestion.answer) {
        const newScore = score + 1;
        setScore(newScore);
        await updateBackendScore(newScore);
      }

      setAnswered(true);

      setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev + 1);
        setAnswered(false);
        setSelectedOption(null);
      }, 1500);
    }
  };

  return (
    <section className="pb-24 pt-36 px-10 md:px-20 flex flex-col items-center w-full">
      <h1 className="font-bold text-3xl md:text-4xl text-zinc-200 animate-slideInLeft">
        Play <span className="text-amber-600">Quiz</span>
      </h1>
      <p className="text-sm font-medium text-zinc-500 text-center mb-6 animate-slideInRight">
        Choose category of questions to answer.
      </p>

      <div className="w-full flex flex-col items-center mx-3 animate-zoomIn">
        <Select.Root size="3" onValueChange={setSelectedCategory}>
          <Select.Trigger
            color="orange"
            variant="soft"
            placeholder="Pick a category"
          />
          <Select.Content color="orange">
            <Select.Item value="General">General</Select.Item>
            <Select.Item value="Science">Science</Select.Item>
            <Select.Item value="Football">Football</Select.Item>
            <Select.Item value="Geography">Geography</Select.Item>
            <Select.Item value="Games">Games</Select.Item>
            <Select.Item value="Coding">Coding</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
      {loading && (
        <p className="text-zinc-400 mt-10 font-medium">Loading questions...</p>
      )}

      {selectedCategory && !loading && (
        <div className="w-full flex flex-col items-center space-y-6 mt-14 transition-all duration-500 ease-in-out">
          <p className="text-lg text-zinc-400 font-medium">
            Category → {selectedCategory}
          </p>
          {shuffledQuestions.length > 0 ? (
            currentQuestionIndex < shuffledQuestions.length ? (
              <div
                key={currentQuestionIndex}
                className="bg-zinc-900 p-6 md:px-14 md:py-10 rounded-md shadow-md animate-zoomIn m-4 max-w-3xl"
              >
                <p className="text-zinc-200 font-medium mb-10 text-center text-xl md:text-2xl">
                  {currentQuestion.question}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-6">
                  {currentQuestion.options.map((opt, i) => (
                    <CustomButton
                      key={i}
                      onClick={() => handleAnswer(opt)}
                      disabled={answered}
                    >
                      {opt}
                    </CustomButton>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-x-2 text-zinc-400 text-sm mt-6 md:mt-10 font-medium text-center">
                    <FaGrinStars />→<p>{score}</p>
                  </div>
                  {answered && (
                    <p className="mt-6 font-medium text-base text-center">
                      {selectedOption === currentQuestion.answer ? (
                        <GrStatusGood className="text-lime-600 animate-zoomIn" />
                      ) : (
                        <MdOutlineCancel className="text-orange-500 animate-zoomIn" />
                      )}
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center mt-12">
                <h2 className="text-2xl font-bold text-amber-500">
                  Quiz Completed!
                </h2>
                <p className="text-lg text-zinc-300 mt-4 font-medium">
                  Final Score: {score} / {shuffledQuestions.length}
                </p>
              </div>
            )
          ) : (
            <p className="text-zinc-600 text-center">
              No questions available in this category.
            </p>
          )}
        </div>
      )}
    </section>
  );
}
