import React from "react";

type CategoryCardProps = {
  category: string;
  description: string;
};

export default function CategoryCard({
  category,
  description,
}: CategoryCardProps) {
  return (
    <>
      <div className="flex flex-col items-center bg-zinc-900 shadow-md rounded-md max-w-3xl py-4 px-8">
        <h1 className="font-bold text-zinc-200 text-xl md:text-2xl mb-4">
          {category}
        </h1>
        <p className="text-sm text-zinc-500 text-center">{description}</p>
      </div>
    </>
  );
}
