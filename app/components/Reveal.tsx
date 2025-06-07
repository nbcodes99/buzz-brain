"use client";

import { useRef, useEffect, useState } from "react";

export default function Reveal({
  children,
  animationClass = "animate-slideinright",
}: {
  children: React.ReactNode;
  animationClass?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-900 ease-out ${
        isVisible ? `${animationClass} opacity-100` : "opacity-0 translate-x-40"
      }`}
    >
      {children}
    </div>
  );
}
