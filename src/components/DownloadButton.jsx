import { div } from "framer-motion/client"


export default function DownloadButton({lang, change, link, ...props}) {
    let size;
    change ? size = "w-[90%] h-45" : size = "xl:h-0 w-55 w-36 sm:w-40 md:w-45 lg:w-55 h-68 md:h-70 lg:h-80 hover:xl:h-80";
    return <div className={` transition-all duration-500 shadow-[0_0_0_0_black] hover:shadow-[0_0_18px_0.001px_black] bg-cover bg-center flex items-center justify-center ` + size } {...props}>
            <a href={link} download className="h-18 px-5 bg-[rgb(79,206,213)] shadow-[0_0_18px_0.001px_black] transition-all flex justify-center items-center duration-500 cursor-pointer hover:bg-[rgb(7,170,178)]">
        <p className="text-[#EEEEEE] text-center font-secondary text-shadow-[0_0_4px_black]">Download CV ({lang})</p>
    </a>
</div>

}