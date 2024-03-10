import React from "react";
import SectionInfo, { SectionInfoProps } from "../SectionInfo";
import TravelCard, { TravelCardProps } from "../TravelCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const PopularSection = () => {
  const PopularSectionCards: TravelCardProps[] = [
    {
      title: "Озеро возле гор",
      description: "романтическое приключение",
      price: 480,
      image: "popular-1.jpg",
      rating: 4.9,
    },
    {
      title: "Ночь в горах",
      description: "в компании друзей",
      price: 500,
      image: "popular-2.jpg",
      rating: 4.5,
    },
    {
      title: "Йога в горах",
      description: "для тех, кто заботится о себе",
      price: 230,
      image: "popular-3.jpg",
      rating: 5.0,
    },
    {
      title: "Поход в горы",
      description: "незабываемые ощущения",
      price: 350,
      image: "popular-4.jpg",
      rating: 4.8,
    },
  ];

  const PopularSectionProps: SectionInfoProps = {
    titleDescription: "по версии отдыхающих",
    title: "Популярные направления",
    body: (
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        rewind={true}
        className="w-full"
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {PopularSectionCards.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide w-auto">
            <TravelCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    ),
    button: "Рейтинг направлений",
    centered: true,
  };

  return (
    <section className="py-20 max-sm:py-14">
      <div className="container px-4">
        <SectionInfo {...PopularSectionProps} />
      </div>
    </section>
  );
};

export default PopularSection;
