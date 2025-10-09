import FadeInSection from "../FadeInComponent";
import Skill from "./Skill";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SKILLS = {
  Experience:
    "I have around 1 and a half years of experience in Web Development and over 2 years in programming",
  "My Skills":
    "Quick learning, motivation, self-organization, sense for details, reliabilty and responsibilty, analythic thinking",
  Languages: [
    "React.js",
    "Javascript",
    "HTML5",
    "CSS",
    "Node.js",
    "Next.js",
    "Tailwind",
    "Git",
    "PostgreSQL",
    "Java",
  ],
  Projects: [15, "Home Schooled", 1.5],
};

const LANGUAGE_COLORS = [
  "#14E0C8",
  "#CCCC47",
  "#F54927",
  "#614EF5",
  "#38EB3F",
  "#4D4B4B",
  "#08C1C7",
  "#F05141",
  "#C168F7",
  "#455D82",
];

export default function MySkills() {
  const [skillShown, setSkillShown] = useState(1);
  const [buttonToChange, setButtonToChange] = useState(1);
  const [change, setChange] = useState(false);
  const [years, setYears] = useState(0);

  useEffect(() => {
    if (skillShown !== 4) return;
    let current = 0;
    const interval = 700 / 15;

    const timer = setInterval(() => {
      current += 1;
      setYears(current);

      if (current >= 15) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [skillShown]);

  function showSkill(position) {
    setSkillShown(position);
    setButtonToChange(position);
  }

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setChange(true);
      } else {
        setChange(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  return (
    <FadeInSection  where={"down-up"}>
      {change && (
        <div className="sm:hidden grid grid-cols-2 auto-rows-auto w-5/6 gap-5 absolute top-40 left-1/2 -translate-x-1/2 ">
          <Skill
            key={1}
            skillName={Object.keys(SKILLS)[0].toUpperCase()}
            position={1}
            onClick={showSkill}
            change={change}
            isClicked={
              buttonToChange === Object.keys(SKILLS).indexOf("Experience") + 1
            }
          />
          <Skill
            key={2}
            skillName={Object.keys(SKILLS)[1].toUpperCase()}
            position={2}
            onClick={showSkill}
            change={change}
            isClicked={
              buttonToChange === Object.keys(SKILLS).indexOf("My Skills") + 1
            }
          />
          <Skill
            key={3}
            skillName={Object.keys(SKILLS)[2].toUpperCase()}
            position={3}
            onClick={showSkill}
            change={change}
            isClicked={
              buttonToChange === Object.keys(SKILLS).indexOf("Languages") + 1
            }
          />
          <Skill
            key={4}
            skillName={Object.keys(SKILLS)[3].toUpperCase()}
            position={4}
            onClick={showSkill}
            change={change}
            isClicked={
              buttonToChange === Object.keys(SKILLS).indexOf("Projects") + 1
            }
          />
        </div>
      )}

      <section className="bg-[#222831] w-3/4 relative left-1/2 h-[260px] sm:h-[35vh] md:h-[50vh] -translate-x-1/2 sm:top-90 top-[435px]">
        {!change && (
          <>
            <Skill
              key={1}
              skillName={Object.keys(SKILLS)[0].toUpperCase()}
              position={1}
              onClick={showSkill}
              change={change}
              isClicked={
                buttonToChange === Object.keys(SKILLS).indexOf("Experience") + 1
              }
            />
            <Skill
              key={2}
              skillName={Object.keys(SKILLS)[1].toUpperCase()}
              position={2}
              onClick={showSkill}
              change={change}
              isClicked={
                buttonToChange === Object.keys(SKILLS).indexOf("My Skills") + 1
              }
            />
            <Skill
              key={3}
              skillName={Object.keys(SKILLS)[2].toUpperCase()}
              position={3}
              onClick={showSkill}
              change={change}
              isClicked={
                buttonToChange === Object.keys(SKILLS).indexOf("Languages") + 1
              }
            />
            <Skill
              key={4}
              skillName={Object.keys(SKILLS)[3].toUpperCase()}
              position={4}
              onClick={showSkill}
              change={change}
              isClicked={
                buttonToChange === Object.keys(SKILLS).indexOf("Projects") + 1
              }
            />
          </>
        )}

        <motion.h3
          key={`title-${skillShown}`}
          className={`text-center text-[#a8fbff] text-[1.1rem] md:text-3xl font-secondary relative top-6 left-1/2 -translate-x-1/2 w-fit`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {Object.keys(SKILLS)[skillShown - 1].toUpperCase()}
        </motion.h3>
        {skillShown === 3 ? (
          <motion.ul
            className={`mx-auto w-[80%] grid grid-cols-2 sm:grid-cols-3 ${
              !change ? "gap-1" : "gap-3"
            } md:gap-3 auto-rows-auto absolute top-[60%] sm:top-1/2 left-1/2 -translate-1/2 lg:grid-cols-4`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            {SKILLS.Languages.map((lang, i) => (
              <li
                key={i}
                className={`text-[#EEEEEE] font-secondary font-semibold text-[0.7rem] lg:text-[1rem] text-center md:p-2 p-1`}
                style={{ backgroundColor: LANGUAGE_COLORS[i] }}
              >
                {lang}
              </li>
            ))}
          </motion.ul>
        ) : skillShown !== 4 ? (
          <motion.p
            key={`text-${skillShown}`}
            className={`text-center  font-secondary w-4/5 md:w-3/5 text-[#EEEEEE] text-[0.85rem] md:text-2xl sm:text-[1.2rem]  tracking-wider  absolute top-1/2 left-1/2 -translate-1/2`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            {Object.values(SKILLS)[skillShown - 1]}
          </motion.p>
        ) : (
          <motion.ul
            key={`text-${skillShown}`}
            className=" absolute top-1/2 left-1/2 -translate-1/2 flex flex-col gap-6 md:gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <li
              key={"001"}
              className="text-[#EEEEEE] font-secondary text-5xl md:text-6xl w-full text-center"
            >
              {years} +{" "}
            </li>
            <div className="flex">
              <li
                key={"002"}
                className=" text-[#c7c7c7] font-secondary text-[1.2rem] md:text-2xl border-r-2 px-4  border-[#EEEEEE] text-center"
              >
                {Object.values(SKILLS)[skillShown - 1][1]}
              </li>
              <li
                key={"003"}
                className="text-[#c7c7c7] font-secondary text-[1.2rem] md:text-2xl text-center px-4"
              >
                {Object.values(SKILLS)[skillShown - 1][2]} years
              </li>
            </div>
          </motion.ul>
        )}
      </section>
    </FadeInSection>
  );
}
