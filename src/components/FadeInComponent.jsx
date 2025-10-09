import React from "react";
import { useInView } from "../observer.js";

export default function FadeInSection({ children, where }) {
  const [ref, isInView] = useInView();

  let fadeDirection = `transition-all duration-700 ease-out transform `;

  switch (where) {
    case "left-right":
      fadeDirection += `${
        isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
      }`;
      break;
    case "right-left":
      fadeDirection += `${
        isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
      }`;
      break;
    case "down-up":
      fadeDirection += `${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`;
      break;
    case "no-dir":
      fadeDirection += `${
        isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-0"
      }`;
      break;
  }

  return (
    <div ref={ref} className={fadeDirection}>
      {children}
    </div>
  );
}
