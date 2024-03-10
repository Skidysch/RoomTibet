import React from "react";
import SectionInfo, { SectionInfoProps } from "../SectionInfo";
import BlogCard, { BlogCardProps } from "../BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';

const BlogSection = ({ isMobileView }) => {

  const BlogSectionCards: BlogCardProps[] = [
    {
      title: "Красивая Италия, какая она в реальности?",
      description:
        "Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.",
      date: "01/04/2023",
      image: "blog-card-1.jpg",
    },
    {
      title: "Долой сомнения! Весь мир открыт для вас!",
      description:
        "Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.",
      date: "01/04/2023",
      image: "blog-card-2.jpg",
    },
    {
      title: "Как подготовиться к путешествию в одиночку?",
      description:
        "Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.",
      date: "01/04/2023",
      image: "blog-card-3.jpg",
    },
    {
      title: "Индия ... летим?",
      description:
        "Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.",
      date: "01/04/2023",
      image: "blog-card-4.jpg",
    },
  ];

  const SwiperLayout = () => (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={20}
      rewind={true}
      className="w-full pb-1"
    >
      {BlogSectionCards.map((item, index) => (
        <SwiperSlide key={index} className="swiper-slide w-auto h-auto">
          <BlogCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  const GridLayout = () => (
    <ul className="grid gap-5 grid-cols-2">
      {BlogSectionCards.map((item, index) => (
        <li key={index} className="flex justify-center">
          <BlogCard {...item} />
        </li>
      ))}
    </ul>
  );

  const BlogSectionProps: SectionInfoProps = {
    titleDescription: "делимся впечатлениями",
    title: "Блог о путешествиях",
    body: isMobileView ? <SwiperLayout /> : <GridLayout />,
    button: "Другие материалы",
    centered: true,
  };

  return (
    <section className="bg-[#F3F5F4] py-20 max-sm:py-14">
      <div className="container px-4">
        <SectionInfo {...BlogSectionProps} />
      </div>
    </section>
  );
};

export default BlogSection;
