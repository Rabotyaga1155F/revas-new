import React from 'react';

import {Home, Users, Clock, Heart, Shield, Search, FileText, Star, Handshake} from 'lucide-react';

const advantages = [
  {
    icon: Home,
    title: 'Подбор недвижимости',
    description: 'Находим квартиры и дома, идеально подходящие под ваши требования.',
  },
  {
    icon: Users,
    title: 'Клиентский подход',
    description: 'Каждому клиенту обеспечиваем индивидуальный и внимательный сервис.',
  },
  {
    icon: Clock,
    title: 'Экономия времени',
    description: 'Берём на себя всю работу по поиску, просмотрам и оформлению сделок.',
  },
  {
    icon: Heart,
    title: 'Доверие и безопасность',
    description: 'Все сделки проходят с юридической чистотой и полной прозрачностью.',
  },
  {
    icon: Shield,
    title: 'Гарантия качества',
    description: 'Мы проверяем каждый объект, чтобы избежать неприятных сюрпризов.',
  },
  {
    icon: Search,
    title: 'Современные инструменты',
    description: 'Используем базы, аналитику и технологии для поиска лучших объектов.',
  },
  {
    icon: FileText,
    title: 'Прозрачная документация',
    description: 'Все договоры и бумаги оформляются корректно и понятно.',
  },
  {
    icon: Star,
    title: 'Профессиональные агенты',
    description: 'Команда с опытом и знаниями рынка недвижимости.',
  },
  {
    icon: Handshake,
    title: 'Поддержка после сделки',
    description: 'Помогаем с адаптацией и последующими вопросами после покупки.',
  },
];

const AdvantagesSticky: React.FC = () => {
  return (
    <section id={'advantages'} className="w-full py-16 px-5 md:px-16 bg-white text-black">
      <div className="max-w-7xl mx-auto lg:flex lg:gap-20 lg:items-start ">
        <div className="lg:w-1/3 mb-10 lg:mb-0 lg:sticky lg:top-1/2 lg:-translate-y-1/2 lg:pt-90">
          <h2 className="md:text-2xl xl:text-3xl font-semibold leading-snug">
            Выбор
            <span className="text-orange-500"> недвижимости </span>— это не просто сделка, а начало новой
            <span className="text-orange-500"> истории. </span>
            <br />
            Мы рядом, чтобы помочь найти
            <span className="text-orange-500"> комфорт, </span>
            <span className="text-orange-500"> надёжность </span>и пространство, которое станет по-настоящему
            <span className="text-orange-500"> вашим. </span>
          </h2>
        </div>

        <div className="lg:w-2/3 flex flex-col gap-8">
          {advantages.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="flex items-start gap-4 sm:gap-5 border border-orange-500/40 rounded-2xl p-6 sm:p-8 lg:p-10 bg-white shadow-md hover:shadow-lg hover:border-orange-500 transition-all duration-300">
                <div className="bg-orange-500 text-white p-2.5 sm:p-3.5 rounded-xl shadow-sm flex items-center justify-center">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                </div>

                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-black mb-1.5 sm:mb-2">{item.title}</h3>

                  <p className="text-sm sm:text-base lg:text-lg text-black/70 leading-relaxed max-w-2xl">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSticky;
