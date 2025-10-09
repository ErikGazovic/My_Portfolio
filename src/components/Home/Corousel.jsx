import ReactIcon from "../../assets/react-icon.svg";
import JavascriptIcon from "../../assets/javascript-icon.svg";
import CSSIcon from "../../assets/css-icon.svg";
import HTMLIcon from "../../assets/html5-icon.svg";
import NodeJsIcon from "../../assets/nodejs-icon.svg";
import PostgreSQLIcon from "../../assets/postgresql-icon.svg";
import NextJsIcon from "../../assets/nextjs-icon.svg";
import TailwindIcon from "../../assets/tailwind-icon.svg";
import GitIcon from "../../assets/git-icon.svg";
import JavaIcon from "../../assets/java-icon.svg";
import CorouselElement from "./CorouselElement";
import { useRef, useEffect, useState } from "react";

const IMGS = [
  ReactIcon,
  JavascriptIcon,
  CSSIcon,
  HTMLIcon,
  NodeJsIcon,
  PostgreSQLIcon,
  NextJsIcon,
  TailwindIcon,
  GitIcon,
  JavaIcon,
];

let speed = 2;

const LanguageNames = [
  "React.js",
  "Javascript",
  "CSS",
  "HTML5",
  "Node.js",
  "PostgreSQL",
  "Next.js",
  "Tailwind.css",
  "Git",
  "Java",
];
function calcProps(width) {
  return { width: width / 10 };
}

export default function Carousel({}) {
  const [itemProps, setItemProps] = useState(() =>
    calcProps(window.innerWidth)
  );
  const [positions, setPositions] = useState(() =>
    IMGS.map(
      (_, i) =>
        i * calcProps(window.innerWidth + (2 / 5) * window.innerWidth).width
    )
  );

  const rafId = useRef(null);
  const timeoutId = useRef(null);
  const speedRef = useRef(speed);
  function animate() {
    setPositions((prev) =>
      prev.map((p) => {
        let newPos = p + speedRef.current;
        if (
          newPos >
          window.innerWidth + (2 / 5) * window.innerWidth - itemProps.width
        ) {
          newPos = -itemProps.width;
        }
        return newPos;
      })
    );
    rafId.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const newProps = calcProps(w + (2 / 5) * w);
      if (w < 600) {
        speedRef.current = 1.5;
      }

      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
        timeoutId.current = null;
      }

      // update item properties (width + gap)
      setItemProps(() => {
        return { width: newProps.width };
      });

      const startPositions = positions.map((_, i) => i * newProps.width);
      setPositions(startPositions);

      timeoutId.current = setTimeout(() => {
        rafId.current = requestAnimationFrame(animate);
        timeoutId.current = null;
      }, 1000);
    };

    // start animation initially
    rafId.current = requestAnimationFrame(animate);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // re-run only if items array changes
  let wrapperClass = `bg-[#EEEEEE]  w-[calc(120vw+3px)]  h-2/3 flex items-center relative -left-[10vw]`;
  let divClass = `flex flex-col justify-center absolute h-full`;
  return (
    <section className="bg-[#222831] w-[calc(100vw+2px)] md:h-50 h-37 flex items-center flex-col py-5 gap-5 overflow-x-hidden">
      <h2 className="font-secondary text-[#00c6d0] text-[1.1rem] lg:[text-3xl] md:text-[1.4rem] tracking-wider text-center w-full">
        Languages I Understand
      </h2>
      <div className={wrapperClass}>
        {positions.map((pos, index) => (
          <>
            <div
              key={index}
              className={divClass}
              style={{
                width: `${itemProps.width}px`,
                left: `${pos}px`,
              }}
            >
              <CorouselElement
                img={[IMGS[index]]}
                languageName={LanguageNames[index]}
              />
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
