import React from "react";
import { IoIosArrowDown } from "react-icons/io";

type faqCardProps = {
  question: string;
  answer: string;
};

export default function FaqCard({ question, answer }: faqCardProps) {
  return (
    <>
      <div className="p-4 flex flex-col w-full border-t-2 border-zinc-200">
        <div className="flex items-center justify-between mb-3">
          <h1 className="font-bold text-zinc-100 text-base">{question}</h1>
          <IoIosArrowDown />
        </div>
        <p className="text-zinc-200 text-sm text-left">{answer}</p>
      </div>
    </>
  );
}
