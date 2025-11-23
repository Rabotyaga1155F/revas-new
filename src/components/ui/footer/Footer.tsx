'use client';
import React from 'react';
import {ArrowUp} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <footer className="w-full bg-white text-black py-8 px-5 md:px-16 border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-center md:text-left text-sm md:text-base">
          © 2025, Порядин Андрей |{' '}
          <a href="https://github.com/Rabotyaga1155F" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700 transition">
            Разработка мобильных приложений и сайтов
          </a>
        </p>

        <div className="flex items-center gap-4">
          <p className="text-center md:text-right text-sm md:text-base"></p>

          {/* Кнопка скролла вверх */}
          <button
            onClick={scrollToTop}
            className="cursor-pointer ml-4 w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-lg hover:bg-orange-600 transition"
            aria-label="Scroll to top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
