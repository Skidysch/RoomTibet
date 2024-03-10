import React, { ReactElement } from "react";

export interface SectionInfoProps {
  titleDescription: string;
  title: string;
  body: ReactElement;
  button: string;
  centered: boolean;
}

const SectionInfo = ({ ...props }: SectionInfoProps) => {
  return (
    <>
      <div className="flex flex-col gap-12 max-lg:gap-8">
        <div
          className={`flex flex-col max-sm:text-left ${
            props.centered ? "text-center" : ""
          }`}
        >
          <p className="text-secondary-main mb-2 text-2xl max-sm:text-base">
            {props.titleDescription}
          </p>
          <h2 className="font-extrabold text-3xl max-sm:text-2xl leading-tight text-black">
            {props.title}
          </h2>
        </div>
        {props.body}
        <button
          className={`flex max-sm:mx-auto place-items-center leading-tight bg-primary-main rounded px-9 py-4 max-sm:px-6 max-sm:py-3 h-[52px] text-white font-semibold hover:bg-primary-dark ${
            !props.centered ? "mr-auto" : "mx-auto"
          } ease-in-out duration-300`}
        >
          {props.button}
        </button>
      </div>
    </>
  );
};

export default SectionInfo;
