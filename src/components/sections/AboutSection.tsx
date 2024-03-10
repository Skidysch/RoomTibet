import React from "react";
import SectionInfo, { SectionInfoProps } from "../SectionInfo";

const AboutSection = () => {
  const AboutSectionProps: SectionInfoProps = {
    titleDescription: "о нашем походе",
    title: "Исследуйте все горные массивы мира вместе с нами",
    body: (
      <p className="text-lg max-sm:text-base leading-normal text-black">
        Его корни уходят в один фрагмент классической латыни 45 года н.э., то
        есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни
        из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных
        слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической
        латинской литературе.
      </p>
    ),
    button: "Программа тура",
    centered: false,
  };

  return (
    <section className="py-24 max-sm:py-14">
      <div className="container flex max-sm:flex-col px-4 flex-row gap-28 max-xl:gap-10">
        <div className="max-sm:order-2 sm:max-lg:py-10 relative flex-grow max-sm:flex max-sm:justify-center">
          <div className="sm:max-lg:w-[250px] sm:max-lg:top-10 max-sm:hidden rounded-3xl overflow-hidden absolute top-0 left-0 inline-block">
            <img
              src="about-section-1.png"
              alt="Trip images"
              className="scale-[1.001] hover:scale-110 transition-transform ease-in-out duration-500"
            />
          </div>
          <div className="sm:max-lg:w-[250px] sm:max-lg:bottom-10 rounded-3xl overflow-hidden absolute max-sm:relative right-0 bottom-0 inline-block">
            <img
              src="about-section-2.png"
              alt="Trip images"
              className="scale-[1.001] hover:scale-110 object-cover transition-transform ease-in-out duration-500"
            />
          </div>
        </div>
        <div className="w-[50%] max-sm:w-full py-16 max-lg:py-0">
          <SectionInfo {...AboutSectionProps} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
