import React from "react";
import CategoryCard from "../components/CategoryCard";
import { Button } from "@radix-ui/themes";

export default function Categories() {
  return (
    <>
      <section className="pb-24 pt-36 px-10 md:px-20 w-full flex flex-col items-center justify-between">
        <h1 className="font-bold text-2xl md:text-4xl text-zinc-200 mb-2 text-center">
          Explore Trivia Categories
        </h1>
        <p className="text-sm text-zinc-500 mb-14 text-center max-w-xl">
          Discover the wide range of quiz categories we offer.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 w-full">
          <CategoryCard
            category={"General"}
            description={
              "A mix of everything! These questions test your overall awareness of the world, including history, geography, culture, and more."
            }
          />
          <CategoryCard
            category={"Science"}
            description={
              "Explore the wonders of biology, chemistry, physics, and the universe. Ideal for curious minds who love facts and logic."
            }
          />
          <CategoryCard
            category={"Geography"}
            description={
              "Mountains, countries, capitals, and maps — a perfect category to explore the physical and political landscape of the world."
            }
          />
          <CategoryCard
            category={"Football"}
            description={
              "From World Cup trivia to legendary players and clubs, this category is a must for football fanatics."
            }
          />
          <CategoryCard
            category={"Games"}
            description={
              "Video games, board games, arcade classics — challenge your memory and mastery of the gaming universe."
            }
          />
          <CategoryCard
            category={"Coding"}
            description={
              "Test your knowledge of programming languages, software development concepts, and the evolution of code."
            }
          />
        </div>
        <p className="text-base text-center font-medium text-zinc-500 mt-10 mb-4">
          Interested?
        </p>
        <a href="/playquiz">
          <Button variant="soft" color="orange" className="animate-bounce">
            Play Now
          </Button>
        </a>
      </section>
    </>
  );
}
