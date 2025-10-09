import FadeInSection from "../FadeInComponent";

export default function ProjectComponents({
  position,
  projectUrl,
  projectImg,
  projectDescription,
  projectLanguage
}) {
  let pos = position === "right" ? "justify-self-start" : "justify-self-end";
  let fadeDir = position === "right" ? "left-right" : "right-left";
  let borderPos = position !== "right" ? " left-0 bottom-0 " :  ' right-0 top-0 ';
  return (
    <FadeInSection where={fadeDir}>
      <a href={projectUrl}
      style={{backgroundImage: `url(${projectImg})`}}
        className={`w-4/5 bg-[#EEEEEE] h-25 sm:h-40 md:h-55 flex mb-4 sm:mb-10 cursor-pointer transition-all duration-500 bg-cover bg-center hover:scale-110 shadow-[0px_0px_12px_0.3px_#222831] project relative  ${pos} `}
      ><div className=" hover:opacity-100 opacity-0 transition-all duration-500 inset-0 absolute bg-[rgb(0,0,0,0.7)]">
        <p className="font-secondary text-[rgb(79,206,213)] text-center text-[0.85rem] md:text-[1.1rem] lg:text-2xl w-4/6 tracking-wide absolute top-1/2 left-1/2 -translate-1/2"><span className="text-[1.1rem] md:text-[1.45rem] lg:text-[1.7rem] font-semibold text-[#a8fbff]">{projectDescription}</span> <br /> {projectLanguage}</p>
        </div><div className={`absolute ${borderPos} transition-all duration-500 w-[3px] h-0 bg-[#a8fbff]`}></div></a>
    </FadeInSection>
  );
}
