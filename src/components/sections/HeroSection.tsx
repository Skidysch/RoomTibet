import React from "react";
import Dropdown, { DropdownProps } from "../Dropdown";
import {
  faCalendarDay,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  const location: DropdownProps = {
    type: "select",
    placeholder: "Локация для тура",
    options: [
      { label: "" },
      { label: "Spain" },
      { label: "France" },
      { label: "Italy" },
      { label: "Germany" },
    ],
    icon: faChevronDown,
    bottomLabel: "выберите из списка",
  };
  // TODO: Change this field to datepicker, add logic for separating datepicker dropdown from select dropdown.
  const date: DropdownProps = {
    type: "datepicker",
    placeholder: "Дата похода",
    options: [
      { label: "" },
      { label: "Today" },
      { label: "Tomorrow" },
      { label: "This week" },
      { label: "This month" },
    ],
    icon: faCalendarDay,
    bottomLabel: "укажите диапазон",
  };
  const persons: DropdownProps = {
    type: "multiselect",
    placeholder: "Участники",
    options: [
      { label: "" },
      { label: "Alice" },
      { label: "Bob" },
      { label: "Charlie" },
      { label: "Dalai Lama" },
    ],
    icon: faChevronDown,
    bottomLabel: "минимум 4 человека",
  };

  return (
    <section className="h-[100dvh] bg-no-repeat bg-cover" style={{backgroundImage: "url('hero-bg.jpg')"}}>
      <div className="max-sm:relative px-4 container h-full pb-20 max-sm:pb-12">
        <div className="flex flex-col justify-end items-start gap-10 h-full">
          <h1 className="max-sm:text-[28px] max-sm:leading-normal text-5xl uppercase leading-normal font-bold">
            Насладись прогулкой в горах
            <br />с командой единомышленников
          </h1>
          <div className="max-sm:hidden max-lg:grid sm:max-lg:grid-cols-2 sm:max-lg:grid-rows-2 flex justify-between gap-6 rounded-[10px] bg-whiteGlass-200 p-10 w-full">
            <Dropdown {...location} />
            <Dropdown {...date} />
            {/* TODO: Turn single option select into multioption */}
            <Dropdown {...persons} />
            <button className="flex place-items-center bg-white rounded px-9 py-4 h-[60px] text-black font-bold hover:bg-primary-main hover:text-white ease-in-out duration-300">
              Найти программу
            </button>
          </div>
          <button className="hidden max-sm:flex items-center bg-white rounded px-9 py-4 h-12 text-black font-bold leading-tight hover:bg-primary-main hover:text-white ease-in-out duration-300">
            Найти программу
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
