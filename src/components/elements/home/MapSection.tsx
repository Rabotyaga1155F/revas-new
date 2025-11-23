import React from 'react';

const MapSection: React.FC = () => {
  return (
    <section id={'office'} className="w-full py-20 bg-white px-5 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          <span className="text-orange-500">Наш офис на карте</span>
        </h2>
        <div className="w-full rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A7de0c7955e93a12f4d9028de8c20692931a23f2d2b2d6d1d09b254b48295535b&amp;source=constructor"
            width="100%"
            height="500"
            className="border-0"
            allowFullScreen
            loading="lazy"></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
