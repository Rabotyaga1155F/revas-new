import React from 'react';

const steps = [
  {
    number: 1,
    title: 'Отправка заявки',
    description:
      'Вы оставляете заявку на нашем сайте или связываетесь с нами любым удобным способом. Мы сразу получаем вашу информацию и готовим персональный подход для каждого клиента, учитывая ваши пожелания и требования к недвижимости.',
  },
  {
    number: 2,
    title: 'Первичный звонок',
    description:
      'Наш менеджер связывается с вами, уточняет детали, задаёт важные вопросы о предпочтениях, бюджете и целях покупки. На этом этапе мы формируем индивидуальный план действий и подбираем первичные варианты.',
  },
  {
    number: 3,
    title: 'Встреча онлайн или офлайн',
    description:
      'В зависимости от вашего удобства мы проводим встречу онлайн или лично. Обсуждаем ваши приоритеты, показываем подходящие объекты, отвечаем на все вопросы и даём профессиональные рекомендации по каждому варианту.',
  },
  {
    number: 4,
    title: 'Согласование условий',
    description:
      'После выбора подходящего объекта мы согласовываем все условия сделки: стоимость, сроки, юридические аспекты. На этом этапе вы получаете полное сопровождение и помощь в подготовке документов для безопасной покупки.',
  },
  {
    number: 5,
    title: 'Оформление сделки',
    description:
      'Заключаем договор купли-продажи и сопровождаем вас на всех этапах до передачи ключей. Наши эксперты гарантируют, что сделка пройдёт безопасно, быстро и без лишних хлопот с вашей стороны.',
  },
  {
    number: 6,
    title: 'Клиент счастлив',
    description:
      'Вы получаете ключи от новой квартиры и наслаждаетесь результатом нашей работы. Мы сопровождаем вас даже после сделки, чтобы убедиться, что вы довольны выбором и процесс покупки прошёл максимально комфортно и безопасно.',
  },
];

const StepsProcess: React.FC = () => {
  return (
    <section id={'steps'} className="w-full py-20 bg-white px-5 md:px-16">
      <div className="max-w-7xl mx-auto lg:flex lg:gap-16">
        {/* Левая картинка на всю высоту на больших экранах, авто на мобильных */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 flex-shrink-0">
          <img src="6.jpg" alt="Процесс" className="rounded-2xl shadow-lg w-full h-64 sm:h-80 md:h-96 lg:h-full object-cover" />
        </div>

        {/* Правая часть с этапами */}
        <div className="lg:w-1/2 flex flex-col gap-8">
          {steps.map(step => (
            <div key={step.number} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black">{step.title}</h3>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsProcess;
