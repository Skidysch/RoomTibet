import React from "react";

export interface BlogCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
}

const BlogCard = ({ ...props }: BlogCardProps) => {
  return (
    <div className="h-full w-full blog-card-shadow bg-white max-w-[580px] max-sm:w-[285px] rounded-xl p-4 max-lg:p-0 flex max-lg:flex-col items-start gap-6 max-lg:gap-4">
      <a
        href="#"
        className="h-full w-1/2 rounded-md max-lg:rounded-tl-xl max-lg:rounded-tr-xl max-lg:rounded-bl-none max-lg:rounded-br-none overflow-hidden flex-shrink-0 max-lg:h-[280px] max-md:h-[250px] max-lg:w-full"
      >
        <picture>
          <source srcSet={props.image} type="image/jpg"/>
          <img
            src={props.image}
            alt="Blog card image"
            className="transition-transform duration-300 scale-[1.001] hover:scale-110 w-full h-full object-cover"
          />
        </picture>
      </a>
      <div className="flex flex-col basis-1/2 gap-6 max-lg:gap-4 max-lg:w-full py-4 max-lg:px-4 max-lg:py-0 max-lg:pb-4 text-black h-full">
        <h3 className="text-2xl max-sm:text-xl font-bold leading-normal hover:text-gray-600 transition-colors duration-300">
          <a href="#">{props.title}</a>
        </h3>
        <p className="text-sm flex-grow">{props.description}</p>
        <div className="flex justify-between text-sm">
          <span className="text-secondary-main font-bold ">{props.date}</span>
          <span className=" hover:text-primary-main hover:cursor-pointer font-bold">
            читать статью
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
