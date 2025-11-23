'use client';
import React, {useState} from 'react';
import vk from '@/assets/svg/vk.svg';
import tg from '@/assets/svg/tg.svg';
import wa from '@/assets/svg/whatsapp.svg';
import logo from '@/assets/svg/logo.svg';
import close from '@/assets/svg/close.svg';
import hamburger from '@/assets/svg/hamburger.svg';
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-5">
        <div className="flex flex-row items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <Image src={logo} alt="logo" width={45} height={45} />
          <div className="w-[0.5px] h-10 bg-black" />
          <div className="text-2xl sm:text-3xl font-semibold text-gray-800">Ревас</div>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <a href="#services" className="text-gray-700 hover:text-orange-500 transition">
            Услуги
          </a>
          <a href="#advantages" className="text-gray-700 hover:text-orange-500 transition">
            Преимущества
          </a>
          <a href="#questionnaire" className="text-gray-700 hover:text-orange-500 transition">
            Анкета
          </a>
          <a href="#steps" className="text-gray-700 hover:text-orange-500 transition">
            Этапы
          </a>

          <a href="#faq" className="text-gray-700 hover:text-orange-500 transition">
            FAQ
          </a>
          <a href="#office" className="text-gray-700 hover:text-orange-500 transition">
            Наш офис
          </a>
        </nav>

        <div className="hidden lg:flex items-center space-x-3">
          <a href="https://vk.com/revas_n" target="_blank" rel="noopener noreferrer">
            <Image src={vk} alt="vk" width={30} height={30} />
          </a>
          <a href="https://t.me/an_revas" target="_blank" rel="noopener noreferrer">
            <Image src={tg} alt="tg" width={30} height={30} />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=79090091110" target="_blank" rel="noopener noreferrer">
            <Image src={wa} alt="wa" width={30} height={30} />
          </a>
          <a
            href="tel:+73432077015"
            className="hidden md:block cursor-pointer bg-orange-500 text-white text-sm font-medium px-4 py-4 rounded-lg hover:bg-orange-600 transition">
            +7 (343) 207-70-15
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 rounded-lg border-2 border-orange-500 bg-orange-500 text-white focus:outline-none shadow-md hover:bg-orange-600 transition`}>
          <Image src={hamburger} alt="menu" width={30} height={30} />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-[60%] bg-black text-white flex flex-col justify-between px-6 py-8 z-50 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-white text-2xl focus:outline-none">
          <Image src={close} alt="close" width={20} height={20} />
        </button>

        <div className="flex flex-col space-y-6 text-sm mt-12">
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Услуги
          </a>
          <a href="#advantages" onClick={() => setMenuOpen(false)}>
            Преимущества
          </a>
          <a href="#steps" onClick={() => setMenuOpen(false)}>
            Этапы
          </a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </a>
          <a href="#contacts" onClick={() => setMenuOpen(false)}>
            Контакты
          </a>
        </div>

        <div className="flex flex-col items-start space-y-4">
          <div className="flex space-x-4">
            <a href="https://vk.com/revas_n" target="_blank" rel="noopener noreferrer">
              <Image src={vk} alt="vk" width={30} height={30} />
            </a>
            <a href="https://t.me/an_revas" target="_blank" rel="noopener noreferrer">
              <Image src={tg} alt="tg" width={30} height={30} />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=79090091110" target="_blank" rel="noopener noreferrer">
              <Image src={wa} alt="wa" width={30} height={30} />
            </a>
          </div>
          <span className="text-sm text-gray-300">+7 (343) 207-70-15</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
