import React, { useEffect, useState } from "react";
import BurgerButton from "./BurgerButton";
import Menu, { MenuProps } from "./FooterMenu";

const Header = () => {
  const [burgerIsactive, setBurgerIsActive] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  const HeaderMenuItems: MenuProps = {
    items: [
      {
        label: "Про гида",
        link: "#",
      },
      {
        label: "Программа тура",
        link: "#",
      },
      {
        label: "Стоимость",
        link: "#",
      },
      {
        label: "Блог",
        link: "#",
      },
      {
        label: "Контакты",
        link: "#",
      },
    ],
  };

  useEffect(() => {
    const header = document.getElementById("header") as HTMLElement;
    const headerHeight: number = header.offsetHeight;

    const handleScroll = () => {
      const scrollOffset = window.scrollY;

      if (scrollOffset > headerHeight) {
        setHeaderScrolled(true);
      } else {
        setHeaderScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`fixed w-full py-4 z-50 ${
        headerScrolled ? "bg-primary-main" : ""
      } transition-colors duration-300`}
    >
      <div className="px-4 container">
        <div className="flex justify-between">
          <a href='#' className="flex items-center justify-center max-sm:h-11 max-sm:w-20 z-[1000]">
            <img src="logo.png" alt="logo" />
          </a>

          <nav className="flex items-center gap-12 md:max-lg:gap-6">
            <ul className="max-md:hidden flex justify-between items-center gap-5 md:max-lg:gap-2">
              {HeaderMenuItems.items.map((item, index) => (
                <li
                  key={index}
                  className="hover:text-secondary-main ease-in-out duration-300"
                >
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>
            <button className={`max-md:hidden ${headerScrolled ? 'bg-white text-black' : 'bg-primary-main'}  rounded px-6 py-3 hover:bg-primary-dark hover:text-white ease-in-out duration-300`}>
              Консультация
            </button>
            <BurgerButton
              isActive={burgerIsactive}
              setIsActive={setBurgerIsActive}
            />
            <ul
              className={`${
                burgerIsactive ? "" : "translate-x-full"
              } transition-transform duration-300 w-[100dvw] h-[100dvh] bg-primary-main absolute grid place-items-center top-0 left-0`}
            >
              <Menu {...HeaderMenuItems} />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
