import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export interface MenuProps {
  title?: string;
  items: {
    label: string;
    link: string;
    newItem?: boolean;
  }[];
}

const Menu = ({ ...props }: MenuProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-bold text-xl">{props.title}</h2>
      <ul className="flex flex-col gap-4">
        {props.items.map((item, index) => (
          <li key={index}>
            <div className="flex gap-2 items-center">
              <a
                href={item.link}
                className="hover:text-secondary-main text-sm hover:underline ease-in-out duration-300 flex gap-2 items-center"
              >
                <FontAwesomeIcon icon={faChevronRight} />
                {item.label}
              </a>
              {item.newItem && (
                <div className="bg-white rounded px-2 text-xs text-primary-main font-bold">
                  new
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
