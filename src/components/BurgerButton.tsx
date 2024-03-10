import React from "react";

const BurgerButton = ({ isActive, setIsActive }) => {
  const handleBurger = () => {
    setIsActive(!isActive);
    document.body.classList.toggle('overflow-hidden');
  }

  return (
    <button
      className="group flex flex-col justify-between w-5 h-4 bg-transparent border-none p-0 z-[1000] md:hidden"
      onClick={handleBurger}
    >
      <span className={`${isActive ? '-rotate-45 translate-y-[6px]' : ''} h-[2px] w-5 rounded-md bg-white transition-transform duration-300 pointer-events-none`}></span>
      <span className={`${isActive ? 'rotate-45' : ''} h-[2px] w-5 rounded-md bg-white transition-transform duration-300 pointer-events-none`}></span>
      <span className={`${isActive ? 'w-0' : 'w-3'} h-[2px] rounded-md ml-auto bg-white transition-all duration-300 pointer-events-none`}></span>
    </button>
  );
};

export default BurgerButton;
