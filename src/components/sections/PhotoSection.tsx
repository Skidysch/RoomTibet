import React from "react";
import SectionInfo, { SectionInfoProps } from "../SectionInfo";
import { Swiper, SwiperSlide } from "swiper/react";

interface PhotoSectionListItemsProps {
  label: string;
}

const PhotoSection = ({ isMobileView }) => {
  const PhotoSectionListItems: PhotoSectionListItemsProps[] = [
    {
      label: "photo-section-1.jpg",
    },
    {
      label: "photo-section-2.jpg",
    },
    {
      label: "photo-section-3.jpg",
    },
    {
      label: "photo-section-4.jpg",
    },
    {
      label: "photo-section-5.jpg",
    },
    {
      label: "photo-section-6.jpg",
    },
  ];

  const SwiperLayout = (
    <Swiper slidesPerView={"auto"} spaceBetween={20} rewind={true} className="w-full">
      {PhotoSectionListItems.map((item, index) => (
        <SwiperSlide key={index} className="w-auto h-auto">
          <div className="h-full w-full max-sm:w-[280px] max-sm:h-[250px]">
            <img
              src={item.label}
              alt="Memories image"
              className="h-full w-full rounded-xl transition-transform duration-500 object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  const GridLayout = (
    <ul className="flex sm:grid sm:grid-cols-4 sm:grid-rows-2 gap-5">
      {PhotoSectionListItems.map((item, index) => (
        <li
          key={index}
          className={`${index === 0 || index === 4 ? "sm:col-span-2" : ""}`}
        >
          <div className="h-full w-full max-sm:w-[280px] max-sm:h-[250px]">
            <img
              src={item.label}
              alt="Memories image"
              className="h-full w-full rounded-xl hover:scale-125 transition-transform duration-500 object-cover"
            />
          </div>
        </li>
      ))}
    </ul>
  );

  const PhotoSectionProps: SectionInfoProps = {
    titleDescription: "фото-отчет",
    title: "Делимся впечатлениями",
    body: isMobileView ? SwiperLayout : GridLayout,
    button: "Наш pinterest",
    centered: true,
  };

  return (
    <section className="pt-20 pb-52 max-lg:pb-[490px]">
      <div className="container px-4">
        <SectionInfo {...PhotoSectionProps} />
      </div>
    </section>
  );
};

export default PhotoSection;
