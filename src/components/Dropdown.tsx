import React, { BaseSyntheticEvent, ReactElement, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface OptionProps {
  label: string;
}

export interface DropdownProps {
  type: "datepicker" | "select" | "multiselect";
  placeholder: string;
  options: OptionProps[];
  icon: IconDefinition;
  bottomLabel: string;
}

const toggleActive = (e: HTMLElement) => {
  e.classList.toggle("active");
};

const Dropdown = ({ ...props }: DropdownProps): ReactElement => {
  const [option, setOption] = useState("");
  const [optionsHidden, setOptionsHidden] = useState(true);

  return (
    <div className="flex flex-col gap-2 w-1/4 sm:max-lg:w-full">
      <button
        className="group w-full h-[60px] border border-white relative rounded-lg p-4 flex justify-between items-center font-bold"
        onClick={(e) => {
          toggleActive(e.target as HTMLElement);
          setOptionsHidden(!optionsHidden);
        }}
      >
        <span
          className={`${
            option ? "-top-[14px] -left-[4px] bg-white text-black scale-75" : "group-[:not(.active)]:top-4 group-[:not(.active)]:left-2"
          } absolute rounded pointer-events-none px-2 group-[.active]:-top-[14px] group-[.active]:-left-[4px] group-[.active]:bg-white group-[.active]:text-black group-[.active]:scale-75 transition-all duration-300`}
        >
          {props.placeholder}
        </span>
        <span className="text-white pointer-events-none">{option}</span>
        <FontAwesomeIcon
          icon={props.icon}
          className={`${
            props.type === "datepicker"
              ? ""
              : `${optionsHidden ? "" : "rotate-180"}`
          } transition-transform duration-300 pointer-events-none`}
        />
        <ul
          className={`absolute border border-black w-full ${
            optionsHidden ? "hidden" : "block"
          } overflow-hidden bg-white rounded top-[120%] left-0`}
        >
          {props.options.map((item, index) => (
            <li
              key={index}
              className="w-full min-h-10 px-4 py-2 cursor-pointer hover:bg-gray-200 text-black text-left"
              onClick={(e: BaseSyntheticEvent) => {
                setOption(item.label);
                setOptionsHidden(true);
                console.log(e.target);
                let parentButton: HTMLElement = e.target.parentNode.parentNode;
                console.log(parentButton);
                toggleActive(parentButton);
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </button>
      <p className="text-sm ml-2">{props.bottomLabel}</p>
    </div>
  );
};

export default Dropdown;
