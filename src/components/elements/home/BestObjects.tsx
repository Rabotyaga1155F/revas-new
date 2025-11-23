import React from 'react';

const objects = [
  {
    title: 'Панорамные апартаменты у воды',
    description: 'Современная архитектура, приватность и вид, который вдохновляет каждый день.',
    image: '1.jpg',
  },
  {
    title: 'Дома в зелёных районах',
    description: 'Тишина, свежий воздух, развитая инфраструктура и максимум комфорта для семьи.',
    image: '2.jpg',
  },
  {
    title: 'Премиальные жилые комплексы',
    description: 'Безопасность, статусность и продуманное пространство для жизни.',
    image: '3.jpg',
  },
  {
    title: 'Инвестиционно привлекательные проекты',
    description: 'Высокий спрос, надёжные застройщики и потенциал роста стоимости.',
    image: '4.jpg',
  },
];

const FeaturedObjects = () => {
  return (
    <section id={'objects'} className="w-full py-20 bg-white px-5 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
          Мы отбираем только <span className="text-orange-500">лучшие объекты</span>
        </h2>

        <div className="flex flex-col gap-10">
          {objects.map((obj, index) => (
            <div key={index} className="relative h-[380px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{backgroundImage: `url(${obj.image})`}}></div>

              <div className="absolute inset-0 bg-black/50"></div>

              <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10 text-white max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-semibold mb-3">{obj.title}</h3>
                <p className="text-base md:text-lg text-white/90">{obj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedObjects;
