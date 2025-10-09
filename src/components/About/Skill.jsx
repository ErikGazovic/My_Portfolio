import { useState } from "react";

export default function Skill({
  skillName,
  position,
  onClick,
  change,
  isClicked,
}) {
  function click() {
    onClick(position);
  }
  let positionClass;
  switch (position) {
    case 1:
      positionClass = change
        ? `flex justify-self-center items-center`
        : `absolute -left-[40px] md:-left-18 xl:-left-22.5 md:-top-13 -top-[45px]`;
      break;
    case 2:
      positionClass = change
        ? "flex justify-self-center items-center"
        : "absolute -right-[40px] md:-right-18 xl:-right-22.5 md:-top-13 -top-[45px]  ";
      break;
    case 3:
      positionClass = change
        ? "flex justify-self-center items-center"
        : "absolute -left-[40px] md:-left-18 xl:-left-22.5 md:-bottom-13 -bottom-[45px]  ";
      break;
    case 4:
      positionClass = change
        ? "flex justify-self-center items-center"
        : "absolute -right-[40px] md:-right-18 xl:-right-22.5 md:-bottom-13 -bottom-[45px] ";
      break;
    default:
      break;
  }
  return (
    <button
      className={
        `${
          isClicked ? "bg-[#EEEEEE]" : "bg-[hsla(183,65%,42%,1)]"
        } cursor-pointer aspect-square p-3 w-[110px] md:w-[150px] lg:w-[180px] transition-all duration-150 hover:bg-[#EEEEEE] ` +
        positionClass
      }
      onClick={() => click()}
    >
      <p className="font-display text-[#4a505b] font-semibold  lg:text-[1.2rem] md:text-[1rem] text-[0.7rem] w-full text-center cursor-pointer">
        {skillName}
      </p>
    </button>
  );
}
