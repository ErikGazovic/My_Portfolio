const currYear = new Date().getFullYear();

export default function Footer() {
    return <footer className="bg-[#222831] h-25 w-full flex justify-center items-center px-4">
        <p className="text-center bg-gradient-to-r from-[hsla(183,65%,42%,1)] to-[hsla(183,100%,83%,1)] bg-clip-text text-transparent text-[0.6rem] sm:text-[0.75rem] md:text-xl font-secondary tracking-[4px]">
            Erik Gažovič, Copyright © Since {currYear}
        </p>
    </footer>
}