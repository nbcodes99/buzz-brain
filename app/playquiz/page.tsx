"use client";

import { Button, Select } from "@radix-ui/themes";
import React, { useState, useEffect } from "react";

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

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const handleAnswer = (option: string) => {
    if (!answered) {
      setSelectedOption(option);
      if (option === currentQuestion.answer) {
        setScore((prev) => prev + 1);
      }
      setAnswered(true);

      setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev + 1);
        setAnswered(false);
        setSelectedOption(null);
      }, 1200);
    }
  };

  return (
    <section className="pb-24 pt-36 px_10 md:px-20 flex flex-col items-center w-full">
      <h1 className="font-bold text-3xl md:text-4xl text-zinc-200">
        Play <span className="text-amber-600">Quiz</span>
      </h1>
      <p className="text-sm font-medium text-zinc-500 text-center mb-6">
        Choose category of questions to answer.
      </p>

      <div className="w-full flex flex-col items-center mx-3">
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
                className="bg-zinc-900 p-6 md:px-14 md:py-10 rounded-md shadow-md animate-zoomIn m-4"
              >
                <p className="text-zinc-200 font-medium mb-10 text-center text-xl md:text-2xl">
                  {currentQuestion.question}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-6">
                  {currentQuestion.options.map((opt, i) => {
                    const isCorrect = opt === currentQuestion.answer;
                    const isSelected = selectedOption === opt;

                    return (
                      <Button
                        key={i}
                        size="3"
                        color="orange"
                        variant="soft"
                        onClick={() => handleAnswer(opt)}
                        disabled={answered}
                      >
                        {opt}
                      </Button>
                    );
                  })}
                </div>
                <p className="text-zinc-400 text-sm mt-6 md:mt-10 font-medium text-center">
                  Score: {score}
                  {/* / {shuffledQuestions.length} */}
                </p>
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
