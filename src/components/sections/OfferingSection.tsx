import React from "react";
import SectionInfo, { SectionInfoProps } from "../SectionInfo";

interface OfferingListItemsProps {
  title: string;
  description: string;
  icon: string;
}

const OfferingSection = () => {
  const OfferingListItems: OfferingListItemsProps[] = [
    {
      title: "Опытный гид",
      description:
        "Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.",
      icon: "offering-icon-1.png",
    },
    {
      title: "Безопасный поход",
      description:
        "Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.",
      icon: "offering-icon-2.png",
    },
    {
      title: "Лояльные цены",
      description:
        "Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.",
      icon: "offering-icon-3.png",
    },
  ];

  const OfferingSectionProps: SectionInfoProps = {
    titleDescription: "наше предложение",
    title: "Лучшие программы для тебя",
    body: (
      <div className="flex flex-col gap-10">
        <p className="text-lg max-sm:text-base leading-normal text-black">
          Его корни уходят в один фрагмент классической латыни 45 года н.э., то
          есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни
          из колледжа.
        </p>
        <ul className="flex flex-col gap-10">
          {OfferingListItems.map((item, index) => (
            <li key={index} className="flex items-center gap-4">
              <img
                className="rounded-sm w-12 h-12"
                src={item.icon}
                alt={`${item.title} иконка`}
              />
              <div className="flex flex-col gap-1 text-black">
                <h4 className="text-lg font-bold">{item.title}</h4>
                <p className="text-sm">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    ),
    button: "Стоимость программ",
    centered: false,
  };

  return (
    <section className="py-20 max-sm:py-12 bg-[#F3F5F4]">
      <div className="container px-4 flex flex-row max-sm:flex-col gap-28 max-lg:gap-10">
        <div className="w-[50%] max-md:w-full">
          <SectionInfo {...OfferingSectionProps} />
        </div>
        <div className="flex max-md:hidden items-center justify-center max-lg:items-start flex-grow">
          <div className="grid grid-cols-2 gap-2">
            <img
              className="rounded-tr-[50px] rounded-bl-[50px] hover:scale-125 transition duration-300"
              src="offering-image-1.png"
              alt="Travel image"
            />
            <img
              className="rounded-tl-[50px] rounded-br-[50px] hover:scale-125 transition duration-300"
              src="offering-image-2.png"
              alt="Travel image"
            />
            <img
              className="rounded-tl-[50px] rounded-br-[50px] hover:scale-125 transition duration-300"
              src="offering-image-3.png"
              alt="Travel image"
            />
            <img
              className="rounded-tr-[50px] rounded-bl-[50px] hover:scale-125 transition duration-300"
              src="offering-image-4.png"
              alt="Travel image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingSection;
