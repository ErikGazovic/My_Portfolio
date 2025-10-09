import FadeInSection from "./FadeInComponent";
import DownloadButton from "./DownloadButton";
import SlovakFlag from "../assets/svk-flag.png";
import EnglishFlag from "../assets/eng-flag.png";
import EngFlagHor from "../assets/eng-flag-hor.webp";
import SvkFlagHor from "../assets/svk-flag-hor.webp";
import { useState, useEffect } from "react";
import DownloadBg from "../assets/download-bg.jpg";

export default function DownloadCV() {
  const [flags, setFlags] = useState({ svk: SlovakFlag, eng: EnglishFlag });
  const [change, setChange] = useState(window.innerWidth < 640);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setFlags(() => {
          return {
            svk: SvkFlagHor,
            eng: EngFlagHor,
          };
        });
        setChange(true);
      } else {
        setFlags(() => {
          return {
            svk: SlovakFlag,
            eng: EnglishFlag,
          };
        });
        setChange(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    

    if (change) {
      setFlags(() => {
        return {
          svk: SvkFlagHor,
          eng: EngFlagHor,
        };
      });
    } else {
      return;
    }
  }, [change]);

  return (
    <section
      id="downloadCV"
      className="bg-[#222831] w-full h-screen mt-30 py-20 shadow-[0_0_25px_2px_black]"
    >
      <FadeInSection where={"down-up"}>
        <section className="bg-[#4a505b] w-5/6  h-[600px] mx-auto box group relative transition-all duration-500">
          <h2 className="text-[#EEEEEE] relative top-5 xl:text-8xl text-5xl sm:text-6xl font-display uppercase tracking-widest text-center transition-all duration-300 text-shadow-[0_0px_35px_#a8fbff]  group-hover:text-shadow-[0_0px_10px_#a8fbff]">
            Get Resume
          </h2>
          <div className="flex w-full justify-between gap-14 flex-col sm:flex-row px-0 sm:px-[10%] lg:px-[20%] h-fit  sm:h-80 items-center absolute left-1/2 top-40 sm:top-65 lg:top-48 -translate-x-1/2">
            <DownloadButton
              lang={"SVK"}
              style={{ backgroundImage: `url(${flags.svk})` }}
              change={change}
              link={"/Erik-Gažovič-Životopis.pdf"}
            />
            <DownloadButton
              lang={"ENG"}
              style={{ backgroundImage: `url(${flags.eng})` }}
              change={change}
              link={"/Erik-Gažovič-CV-(English).pdf"}
            />
          </div>
        </section>
      </FadeInSection>
    </section>
  );
}
