import { useState, useEffect } from "react";

export default function Hero() {
  const [showGlow, setShowGlow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGlow(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="flex justify-center gap-12 mt-16 items-center flex-col h-[70vh] sm:h-[90vh] mx-15 md:mx-20 relative">
              <div className={`glow ${showGlow ? "show-glow" : ""}`}></div>
        <svg viewBox="0 0 600 600">
          <circle cx="300" cy="300" r="280" />
        </svg>
      <h1 className={`${showGlow ? "glow-h1" : ""} text-[2.8rem] font-display text-center lg:text-7xl md:text-[3.45rem] sm:text-[3.3rem]`}>
        Hi, I'm Erik - <br />{" "}
        <span className={`${showGlow ? "glow-h1" : ""}`}>
          Full-Stack Web Developer
        </span>

      </h1>
      <h2 className="text-[0.8rem] text-[#EEEEEE] text-center font-secondary tracking-widest font-semibold lg:text-2xl sm:text-[1.3rem] ">
        I create modern, responsive, and user-friendly web experiences.
      </h2>
    </main>
  );
}
