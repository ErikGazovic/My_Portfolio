import { useEffect, useState } from "react";
import FadeInSection from "./FadeInComponent";

export default function Contact() {
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [response, setResponse] = useState(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (response) {
      setAnimate(true);
      const timer = setTimeout(() => {
        setAnimate(false);
        setResponse(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [response]);

  function onTyping(identifier, value) {
    setContactData((prev) => {
      const newData = {
        ...prev,
        [identifier]: value,
      };
      return newData;
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://my-portfolio-2-3tw8.onrender.com/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactData),
    });

    const data = await res.json();
    setResponse(data);
    setContactData(() => {
      return {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      };
    });
  };

  let labelCss =
    "text-[rgb(79,206,213)] font-secondary text-[0.7rem] md:text-[0.9rem] lg:text-[1.3rem]";
  return (
    <section id="contact" className="py-12">
      <h2 className="font-display text-[#a8fbff] text-5xl md:text-6xl px-4 lg:text-8xl text-center tracking-[15px]">
        Contact Me
      </h2>
      <section className="bg-[#EEEEEE] w-5/6 md:w-11/12 lg:w-5/6 mx-auto shadow-[0_0_20px_1px_black] px-6 mt-10 gap-14 md:gap-6 flex md:flex-row flex-col justify-center md:justify-around items-center h-[560px] md:h-[430px] lg:h-[70vh] relative">
        {response && (
          <p
            className={`absolute bottom-4 mx-auto left-1/2 text-[0.9rem] text-center px-8 z-10 w-full -translate-1/2 bg-[#EEEEEE] font-secondary ${
              response?.success ? "text-green-700" : "text-red-700"
            } ${animate ? "slowFade" : ""}`}
          >
            {response?.success
              ? "Message has been sent successfully, Thank you."
              : "Your message has not been sent"}
          </p>
        )}
        <FadeInSection where={"left-right"}>
          <p className="font-secondary text-[#2b2e34] text-[0.95rem] sm:text-[1.3rem] md:text-[1.1rem] lg:text-[1.5rem] w-[70vw] md:w-[300px] lg:w-[400px] xl:w-[490px] leading-10 md:leading-12 ">
            If you need website or if you have a job for me, please email:{" "}
            <span className="text-[#222831] font-semibold underline">
              erikgazovic879@gmail.com
            </span>
            <br />
            or{" "}
            <span className="text-[#222831] font-semibold">
              Send a messege via this form.
            </span>
          </p>
        </FadeInSection>
        <FadeInSection where={"right-left"}>
          <div>
            <form
              className="flex flex-col  w-[70vw] md:w-[300px] lg:w-[400px] xl:w-[490px] bg-[#222831] p-4 gap-2 mx-auto"
              onSubmit={handleSubmit}
            >
              <div className="flex justify-between">
                <div className="flex flex-col font-secondary w-[45%]">
                  <label htmlFor="first-name" className={labelCss}>
                    First name:
                  </label>
                  <input
                    type="text"
                    onChange={(e) => onTyping("firstName", e.target.value)}
                    value={contactData.firstName}
                    name="first-name"
                    id="first-name"
                    autoComplete="off"
                    required
                    className="outline-0 bg-transparent h-6 text-[0.6rem]  sm:h-8 px-2 border-[1px] border-[#a8fbff] text-[#EEEEEE] focus:border-[2px] focus:bg-[#4a505b] "
                  />
                </div>

                <div className="flex flex-col font-secondary w-[45%]">
                  <label htmlFor="last-name" className={labelCss}>
                    Last name:
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    onChange={(e) => onTyping("lastName", e.target.value)}
                    value={contactData.lastName}
                    id="last-name"
                    autoComplete="off"
                    required
                    className="outline-0 bg-transparent h-6  sm:h-8 px-2 border-[1px] border-[#a8fbff] text-[#EEEEEE] focus:border-[2px] focus:bg-[#4a505b] "
                  />
                </div>
              </div>
              <div className="flex flex-col font-secondary">
                <label htmlFor="email" className={labelCss}>
                  Email:
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  onChange={(e) => onTyping("email", e.target.value)}
                  value={contactData.email}
                  id="email"
                  autoComplete="off"
                  className="outline-0 bg-transparent h-6  sm:h-8 px-2 border-[1px] border-[#a8fbff] text-[#EEEEEE] focus:border-[2px] focus:bg-[#4a505b] "
                />
              </div>
              <div className="flex flex-col font-secondary">
                <label htmlFor="messegee" className={labelCss}>
                  Messege:
                </label>
                <textarea
                  name="messege"
                  id="messege"
                  onChange={(e) => onTyping("message", e.target.value)}
                  value={contactData.message}
                  required
                  className="outline-0 py-1 bg-transparent font-secondary h-12  sm:h-16 px-2 border-[1px] border-[#a8fbff] text-[#EEEEEE] focus:border-[2px] focus:bg-[#4a505b] "
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex justify-self-start bg-[rgb(79,206,213)] w-fit py-1 px-3 sm:px-5 sm:py-2 cursor-pointer transition-all duration-100 hover:bg-[#a8fbff]"
              >
                <p className="font-display text-[#222831]">Submit</p>
              </button>
            </form>
          </div>
        </FadeInSection>
      </section>
    </section>
  );
}
