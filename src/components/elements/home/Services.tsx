import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'ДЛЯ ЛИЧНОЙ ЖИЗНИ',
      buttonText: 'Подобрать жильё и варианты',
      image: 'https://status-media.com/wp-content/uploads/2022/06/f1.jpg',
    },
    {
      title: 'ДЛЯ ИНВЕСТИЦИЙ',
      buttonText: 'Подобрать доходные объекты',
      image: 'https://avatars.mds.yandex.net/get-altay/4465779/2a000001799aa96ebd129ddca393ef485c48/orig',
    },
  ];

  return (
    <section id={'services'} className="w-full py-16 px-5 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg group h-[450px] sm:h-[500px] md:h-[600px] lg:h-[650px] flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${service.image})`}}></div>

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative flex flex-col items-center text-center gap-4 px-4 sm:px-6 md:px-8 max-w-[90%] lg:max-w-[500px]">
              <h3 className="text-white font-bold uppercase  text-[2.0rem] xl:text-[2.7rem] lg:text-[2.0rem]">Недвижимость</h3>

              <p className="text-orange-500 font-bold  text-[1.2rem] xl:text-[2rem] lg:text-[1.2rem]">{service.title}</p>

              <a
                href="#form"
                className="whitespace-nowrap cursor-pointer bg-orange-500 font-bold text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-lg hover:bg-orange-600 transition mt-4 min-w-[250px] text-[1rem] xl:text-[0.9rem]">
                {service.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
