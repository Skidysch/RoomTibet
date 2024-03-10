import React, { useState } from "react";

const NewsletterForm = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="newsletter-box-shadow w-full px-[100px] py-10 max-lg:p-6 flex max-lg:flex-col gap-16 max-lg:gap-3 justify-between bg-white rounded-md">
      <div className="flex flex-col gap-2 w-[40%] max-lg:w-full">
        <p className="text-secondary-main text-lg max-sm:text-base leading-[20px]">актуально</p>
        <h2 className="font-extrabold text-[26px] max-sm:text-2xl leading-tight text-black">
          Получайте полезные
          <br /> рассылки о путешествиях
        </h2>
      </div>
      <div className="flex flex-col gap-2 max-lg:gap-4 text-black">
        <form action="#" method="post" className="pt-9 relative flex flex-wrap gap-4">
          <input
            type="email"
            name="email"
            id="email"
            value={inputValue}
            placeholder=""
            onChange={(e) => setInputValue(e.target.value)}
            className="peer bg-[#f3f5f4] w-60 px-4 py-3 font-light text-sm outline-none border border-black rounded"
          />
          <p className="font-semibold top-12 left-4 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:left-0 peer-focus:top-0 peer-focus:left-0 pointer-events-none absolute transition-all duration-300">
            Введите e-mail адрес
          </p>
          <button
            type="submit"
            className="px-6 py-3 rounded text-white self-start bg-primary-main hover:bg-primary-dark transition-colors duration-300"
          >
            Подписаться на новости
          </button>
        </form>
        <p className="font-semibold text-sm leading-tight">
          подписываясь на новости, вы автоматически соглашаетесь с{" "}
          <a href="#" className="underline">
            условиями обработки персональных данных
          </a>{" "}
          и{" "}
          <a href="#" className="underline">
            правилами рекламных рассылок
          </a>
        </p>
      </div>
    </div>
  );
};

export default NewsletterForm;
