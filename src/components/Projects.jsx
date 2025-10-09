
import ProjectComponents from "./Projects/ProjectComponent";
import BookStore from "../assets/book-store-miniature.png";
import MovieBox from "../assets/movie-box-miniature.png";
import Watchlist from "../assets/watchlist-miniature.png";
import eShop from "../assets/my-eshop-miniature.png";
import Introduction from "./About/Introduction";
export default function Projects() {
  return (
    <section id="projects">
      <Introduction forWhat={undefined}/>
      <div className="bg-[#222831] border-2 border-[#a8fbff] absolute -mt-10 left-1/2 rounded-[30px] -translate-x-1/2 -z-1 w-5/6 h-[530px] sm:h-[840px] md:h-[125vh] lg:h-[125vh] xl:h-[1100px]">

      </div>
      <ProjectComponents position={"right"} projectName={"Book Store"} projectImg={BookStore} projectUrl={"http://gazovic-webapps.s3-website.eu-north-1.amazonaws.com"} projectDescription={`Simple library for managing books`} projectLanguage={"React.js, Tailwind"}/>
      <ProjectComponents position={"left"} projectName={"Movie Box"} projectImg={MovieBox} projectUrl={"https://movie-box-5.onrender.com"} projectDescription={`Become a critic in Movie Box`} projectLanguage={" Javascript, CSS, HTML, PostgreSQL, Node.js, Express.js"}/>
      <ProjectComponents position={"right"} projectName={"Watchlist"} projectImg={Watchlist} projectUrl={"http://movie-watchlist-webapp-gazovic.s3-website.eu-north-1.amazonaws.com"} projectDescription={ `Save all amazing movies you want to watch`} projectLanguage={"React.js, Tailwind"}/>
      <ProjectComponents position={"left"} projectName={"Day Hype Shop"} projectImg={eShop} projectUrl={"https://my-shop-3-vi36.onrender.com"} projectDescription={ `Fully functional e-shop DayHype`} projectLanguage={" Javascript, CSS, HTML, PostgreSQL, Node.js, Express.js"}/>
    </section>
  );
}
