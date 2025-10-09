import FadeInSection from "../FadeInComponent";
export default function Introduction({forWhat}) {

  let absolute = forWhat ? "absolute -top-20 left-1/2 -translate-x-1/2 mt-10 " : " my-20 ";

  return (
    <FadeInSection  where={"down-up"}>
      <section className={`${
          absolute
        } bg-[hsla(183,65%,42%,1)] w-5/6 h-fit  mx-auto p-4 sm:p-8 flex  flex-col items-center gap-6 shadow-2xl`}>
        <h2 className="font-display text-[#222831] text-4xl md:text-7xl text-center font-semibold">
          {forWhat ? "About Me" : "Projects"}
        </h2>
        <p className="bg-[#222831] text-[#EEEEEE] font-secondary tracking-widest text-center text-[0.8rem] md:text-2xl w-full md:w-2/3 mx-auto p-2 sm:p-4">
          {forWhat ? "I want to learn as much as I can to create the best projects" : "Here is a collection of few of my projects"}
        </p>
      </section>
    </FadeInSection>
  );
}
