import React from "react";
import FooterMenu, { MenuProps } from "./FooterMenu";
import NewsletterForm from "../containers/NewsletterForm";

const Footer = () => {
  const FooterServicesMenu: MenuProps = {
    title: "Наши услуги",
    items: [
      {
        label: "Прогулки в горы летом",
        link: "#",
      },
      {
        label: "Зимние походы в горы",
        link: "#",
      },
      {
        label: "Посещение храмов в горах",
        link: "#",
      },
      {
        label: "Экстремальные виды туризма",
        link: "#",
      },
      {
        label: "Походы в джунглях Амазонии",
        link: "#",
        newItem: true,
      },
      {
        label: "Поездка в Африку",
        link: "#",
      },
    ],
  };
  const FooterTooltipsMenu: MenuProps = {
    title: "Важно для путешествий",
    items: [
      {
        label: "Как собрать в долгий поход?",
        link: "#",
      },
      {
        label: "Жизненно важные предметы для похода",
        link: "#",
      },
      {
        label: "Медицинская страховка, гарантии безопасности",
        link: "#",
      },
      {
        label: "Если вы врач - загляните сюда",
        link: "#",
      },
    ],
  };

  return (
    <footer className="bg-primary-main relative">
      <div className="container px-4">
        <div className="absolute sm:max-w-[608px] md:max-w-[736px] lg:max-w-[992px] xl:max-w-[1248px] -top-[98px] max-lg:-top-[440px]" style={{ width: 'calc(100% - 32px)'}}>
          <NewsletterForm />
        </div>
      </div>
      <div className="container px-4 flex max-lg:flex-wrap max-sm:flex-col max-sm:items-center justify-between pt-52 max-lg:pt-12 pb-20 gap-12 max-lg:gap-y-20 max-lg:gap-x-0">
        <div className="w-1/3 max-lg:w-full flex flex-col">
          <h2 className="font-bold text-xl mb-4">Компания «РумТибет»</h2>
          <p className="text-sm mb-20 max-lg:mb-8">
            Его корни уходят в один фрагмент классической латыни 45 года н.э.,
            то есть более двух тысячелетий назад. Ричард МакКлинток, профессор
            латыни из колледжа Hampden-Sydney.
          </p>
          <div className="flex gap-6 max-lg:gap-2 mb-8 max-lg:flex-col">
            <p>
              <a
                href="mailto:info@domain.com"
                className="underline font-semibold"
              >
                info@domain.com
              </a>
            </p>
            <p>
              <a href="tel:+71234567890" className="underline font-semibold">
                +7 (123) 456-78-90
              </a>
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <a href="#">
              <img
                src="tg-logo.svg"
                alt="Telegram logo"
                className="hover:scale-125 transition-transform duration-300"
              />
            </a>
            <a href="#">
              <img
                src="vk-logo.svg"
                alt="VK logo"
                className="hover:scale-125 transition-transform duration-300"
              />
            </a>
            <a href="#">
              <img
                src="pinterest-logo.svg"
                alt="Pinterest logo"
                className="hover:scale-125 transition-transform duration-300"
              />
            </a>
            <a href="#">
              <img
                src="skype-logo.svg"
                alt="Skype logo"
                className="hover:scale-125 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
        <div className="w-1/4 max-lg:w-1/2 max-sm:w-full">
          <FooterMenu {...FooterServicesMenu} />
        </div>
        <div className="w-1/4 max-lg:w-1/2 max-sm:w-full">
          <FooterMenu {...FooterTooltipsMenu} />
        </div>
      </div>
      <div className="bg-black">
        <div className="font-semibold text-sm container px-4 flex max-sm:flex-col max-sm:items-center justify-between py-6 max-sm:py-5">
          <p>ИП Константинопольский К.К., 2023</p>
          <a href="#">
            <p>Политика обработки персональных данных</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
