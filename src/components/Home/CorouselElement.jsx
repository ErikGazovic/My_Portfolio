export default function CorouselElement({ img, languageName }) {
    let languageClass = `text-center font-display text-[0.4rem] md:text-[0.7rem]  text-[#222831] w-full`;
  return (
    <>
      <img src={img} alt="" className="mx-auto w-8 h-8  md:w-15 md:h-15" />
      <p className={languageClass}>{languageName}</p>
    </>
  );
}
