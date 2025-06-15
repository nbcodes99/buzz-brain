import { Button, TextField } from "@radix-ui/themes";
import Link from "next/link";
import { MdQuiz } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { MdSportsBasketball } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { BiMessageAltCheck } from "react-icons/bi";
import Image from "next/image";
import buzzbrain1 from "./assets/buzzbrain1.png";
import logo1 from "./assets/logo1.png";
import FaqCard from "./components/FaqCard";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      <Reveal animationClass="slideinright">
        <section className="pt-36 pb-24 px-10 md:px-20 w-full flex items-center justify-between">
          <div>
            <h1 className="font-bold text-3xl md:text-5xl mb-3 text-zinc-200 animate-slideInLeft">
              Ready to test <br /> your knowledge?
            </h1>
            <p className="font-medium tracking-wide text-sm text-zinc-400 mb-10 animate-slideInRight">
              Play quizzes, climb the leaderboard, <br />
              and challenge your friends!
            </p>
            <Link href="/playquiz" className="animate-zoomIn">
              <Button variant="soft" size="3">
                <MdQuiz /> Play Quiz
              </Button>
            </Link>
          </div>
          <div className="hidden lg:block">
            <Image
              src={buzzbrain1}
              alt="Image"
              className="w-48 animate-bounceSlow rounded-full mr-20"
            />
          </div>
        </section>
        <section className="w-full pt-8 pb-16 px-4 md:px-20 bg-zinc-900 flex items-center justify-between">
          <div>
            <h1 className="font-bold text-2xl md:text-3xl text-center md:text-left text-zinc-200 mb-10 animate-slideInRight">
              Featured Categories
            </h1>
            <div className="flex items-center justify-evenly gap-x-6 animate-slideInLeft">
              <div className="flex flex-col w-20 md:w-36 items-center justify-center gap-y-2 bg-zinc-800 shadow-md px-4 py-4 md:py-6 rounded-md">
                <GiMaterialsScience className="text-2xl md:text-4xl" />
                <p className="font-medium text-sm md:text-base text-zinc-300">
                  Science
                </p>
              </div>
              <div className="flex flex-col w-20 md:w-36 items-center justify-center gap-y-2 bg-zinc-800 shadow-md px-4 py-4 md:py-6 rounded-md">
                <MdSportsBasketball className="text-2xl md:text-4xl" />
                <p className="font-medium text-sm md:text-base text-zinc-300">
                  Sports
                </p>
              </div>
              <div className="flex flex-col w-20 md:w-36 items-center justify-center gap-y-2 bg-zinc-800 shadow-md px-4 py-4 md:py-6 rounded-md">
                <FaLaptopCode className="text-2xl md:text-4xl" />
                <p className="font-medium text-sm md:text-base text-zinc-300">
                  Tech
                </p>
              </div>
            </div>
            <p className="mt-10 font-normal text-zinc-400 text-sm text-center md:text-left">
              Explore the most popular quiz categories and challenge yourself!
            </p>
            <p className="mt-2 font-medium text-zinc-400 text-sm text-center md:text-left">
              Ready to dive deeper?
            </p>
            <p className="mt-2 font-normal text-zinc-400 text-sm text-center md:text-left">
              Discover{" "}
              <Link href="/categories" className="text-indigo-500">
                more
              </Link>{" "}
              categories tailored to your interests.
            </p>
          </div>
          <div className="hidden lg:block">
            <Image
              src={logo1}
              alt="Image"
              className="w-64 animate-bounceSlow rounded-full"
            />
          </div>
        </section>
        <section className="w-full py-8 px-4 md:px-20 flex join flex-col items-center md:items-start animate-slideInLeft">
          <h1 className="text-xl md:text-4xl font-semibold text-zinc-300 my-4 text-center md:text-left">
            Join the Quiz Challenge Today!
          </h1>
          <p className="text-zinc-400 text-center md:text-left text-sm mb-8">
            Sign up now to take quizzes, track your scores, and compete with
            friends!
          </p>
          <div className="flex gap-x-3 items-center">
            <Link href="/signup">
              <Button variant="solid" size="3">
                Sign Up
              </Button>
            </Link>
            <Link href="/signin">
              <Button variant="outline" size="3">
                Login
              </Button>
            </Link>
          </div>
        </section>
        <section className="w-full py-8 px-4 md:px-20 flex flex-col items-center md:items-start bg-zinc-900">
          <h1 className="font-bold text-xl md:text-4xl text-zinc-300 mb-6 md:mb-3 text-center md:text-left">
            Join Our Community & <br /> Stay Updated!
          </h1>
          <p className="text-sm text-zinc-500 text-center md:text-left">
            Subscribe to our newsletter for the latest quizzes and exciting new
            features delivered to you!
          </p>
          <div className="flex items-center gap-x-3 my-6">
            <TextField.Root size="2" placeholder="Your Email" />
            <Button variant="classic" size="2" className="flex items-center">
              <BiMessageAltCheck className="text-xl" />
            </Button>
          </div>
        </section>
        <section
          className="w-full py-8 flex flex-col items-center bg-amber-900"
          id="faq"
        >
          <h1 className="font-bold text-4xl text-zinc-100">FAQs</h1>
          <p className="text-sm font-normal text-zinc-200 text-center mb-10 mx-3">
            Find answers to your questions about using our quiz platform
            effectively.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-3 w-80 lg:w-2/3">
            <FaqCard
              question={"How do I start?"}
              answer={
                "To start, simply create an account or log in. Once you're in, choose a category that interests you. Then, select a quiz & begin!"
              }
            />
            <FaqCard
              question={"How to track progress?"}
              answer={
                "Your progress is automatically saved after each quiz. You can view your scores & completed quizzes in your profile. This helps you monitor your improvement over time."
              }
            />
            <FaqCard
              question={"Can I change categories?"}
              answer={
                "Absolutely! You can switch categories at anytime at the menu before you start a quiz."
              }
            />
            <FaqCard
              question={"What if I need help?"}
              answer={
                "If you have further questions, our support team is here to assist you. You can reach out via the contact form. We're committed  to ensuring you have a great experience!"
              }
            />
          </div>
          <h1 className="text-zinc-100 font-bold text-2xl mt-14">
            Still have questions?
          </h1>
          <p className="text-sm text-zinc-200 mt-3 mb-4">We're to help you!</p>
          <Button variant="classic">Contact</Button>
        </section>
      </Reveal>
      {/* <section>
        <Footer />
      </section> */}
    </>
  );
}
