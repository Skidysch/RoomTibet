import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export interface TravelCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  rating: number;
}

const TravelCard = (props: TravelCardProps) => {
  return (
    <div
      className="w-[380px] max-xl:w-[285px] h-[500px] max-xl:h-[400px] relative flex items-end rounded-[32px] overflow-hidden"
      style={{
        backgroundImage: `url('${props.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute right-0 top-12 px-2 py-1 flex items-center gap-1 rounded-tl rounded-bl bg-whiteGlass-400">
        <FontAwesomeIcon icon={faStar} color="#F2BE22" />
        <span className="text-black py-[3px] font-bold text-sm">
          {props.rating}
        </span>
      </div>
      <div className="w-full px-8 py-6 max-xl:px-6 rounded-br-[32px] rounded-bl-[32px] bg-whiteGlass-200 backdrop-blur-sm flex justify-between gap-6 items-center">
        <div>
          <h3 className="text-2xl max-xl:text-lg text-white text-bold hover:text-gray-400 transition-colors duration-300">
            <a href="#">{props.title}</a>
          </h3>
          <p className="text-sm text-white max-xl:hidden">
            {props.description}
          </p>
        </div>
        <div className="bg-whiteGlass-300 text-[20px] max-xl:text-base rounded-sm px-4 py-2 max-xl:px-3 max-xl:py-[6px]">
          {props.price + " $"}
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
