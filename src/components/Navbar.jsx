import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

    const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  function clickBurger() {
    setShowMenu((prev) => !prev);
  }

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setShowMenu(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let navBarLiCss;
  let burgerMenuCss =
    `bg-[#EEEEEE] w-fit flex flex-col fixed top-14 right-0 overflow-y-hidden transition-all duration-300 ease-in-out px-3 shadow-[0px_0px_8px_0.015px_#00c6d0] ${showNavbar ? "-translate-y-0" : "-translate-y-90"}`;

  if (!showMenu) {
    navBarLiCss =
      "text-[hsla(183,65%,42%,1)] font-secondary py-4 xl:text-[1.2rem] font-semibold lg:text-[1rem]  md:text-[0.8rem] sm:text-[0.8rem] cursor-pointer h-full flex items-center justify-center  transition duration-150 hover:text-[hsla(183,100%,83%,1)] ";
    burgerMenuCss += " p-0  max-h-0";
  } else {
    burgerMenuCss += " p-3 max-h-80 z-2";
    navBarLiCss =
      "text-[#222831] py-4 bg-[#EEEEEE] font-secondary font-semibold text-[1rem] cursor-pointer flex items-center justify-center transition duration-150 hover:text-[#00c6d0] hover:bg-[#222831] ";
  }

  return (
    <>
      <nav className={`bg-[#222831] fixed top-0 transition-all duration-400 z-10 h-14 md:h-18 w-[calc(100vw+2px)] flex justify-between items-center lg:px-16 md:px-12 px-8 ${showNavbar ? "-translate-y-0" : "-translate-y-full"}`}>
        <h2 className="font-secondary bg-gradient-to-r from-[hsla(183,65%,42%,1)] to-[hsla(183,100%,83%,1)] bg-clip-text text-transparent text-[1.3rem] md:text-2xl lg:text-[1.7rem] font-medium cursor-pointer ">
          Erik Gažovič
        </h2>
        <ul role="list" className=" gap-3 h-full  hidden sm:flex md:gap-8 p-0">
          <li><Link to="home" className={navBarLiCss} duration={500} smooth={true} offset={-80}>Home</Link></li>
          <li><Link to="about"  className={navBarLiCss} duration={500} smooth={true} offset={-80}>About</Link></li>
          <li><Link to="projects" className={navBarLiCss} duration={500} smooth={true} offset={-20}>Projects</Link></li>
          <li><Link to="downloadCV" className={navBarLiCss} duration={500} smooth={true} offset={0}>Download CV</Link></li>
          <li><Link to="contact" className={navBarLiCss} duration={500} smooth={true} offset={0}>Contact</Link></li>
        </ul>

        {showMenu ? (
          <svg
                      onClick={() => clickBurger()}
            className="w-10 h-10 block sm:hidden"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
          >
            <path fill="#00c6d0" d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
          </svg>
        ) : (
          <svg
            onClick={() => clickBurger()}
            className="w-10 h-10 block sm:hidden"
            viewBox="0 0 32 32"
            enableBackground="new 0 0 32 32"
            id="Editable-line"
            version="1.1"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <line
              fill="#00c6d0"
              id="XMLID_103_"
              stroke="#00c6d0"
              strokeLinecap="square"
              strokeLinejoin="square"
              strokeMiterlimit="10"
              strokeWidth="2"
              x1="15"
              x2="40"
              y1="16"
              y2="16"
            />
            <line
              fill="#00c6d0"
              id="XMLID_102_"
              stroke="#00c6d0"
              strokeLinecap="square"
              strokeLinejoin="square"
              strokeMiterlimit="10"
              strokeWidth="2"
              x1="7"
              x2="40"
              y1="25"
              y2="25"
            />
            <line
              fill="#00c6d0"
              id="XMLID_101_"
              stroke="#00c6d0"
              strokeLinecap="square"
              strokeLinejoin="square"
              strokeMiterlimit="10"
              strokeWidth="2"
              x1="7"
              x2="40"
              y1="7"
              y2="7"
            />
          </svg>
        )}
      </nav>
      <ul className={burgerMenuCss}>
        <li className={navBarLiCss}><Link to="home" duration={500} smooth={true} offset={-80}>Home</Link></li>
        <li className={navBarLiCss}><Link to="about" duration={500} smooth={true} offset={-80}>About</Link></li>
        <li className={navBarLiCss}><Link to="projects" duration={500} smooth={true} offset={-20}>Projects</Link></li>
        <li className={navBarLiCss}><Link to="downloadCV" duration={500} smooth={true} offset={0}>Download CV</Link></li>
        <li className={navBarLiCss}><Link to="contact" duration={500} smooth={true} offset={0}>Contact</Link></li>
      </ul>
    </>
  );
}
