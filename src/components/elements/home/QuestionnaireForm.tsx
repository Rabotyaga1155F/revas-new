'use client';
import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {IMaskInput} from 'react-imask';
import {sendMessageToEmail} from '@/actions';

type FormData = {
  name: string;
  phone: string;
  agree: boolean;
};

const steps = [
  {key: 'purpose', question: 'Для чего вы планируете покупку квартиры?', options: ['Для себя', 'Для инвестиций', 'Для сдачи в аренду']},
  {key: 'budget', question: 'Какой у вас бюджет?', options: ['До 5 млн', '5-10 млн', '10-20 млн', 'Более 20 млн']},
  {key: 'type', question: 'Какой тип квартиры вы рассматриваете?', options: ['Студия', '1-комнатная', '2-комнатная', '3+ комнатная']},
  {key: 'rooms', question: 'Сколько человек будут проживать?', options: ['1', '2', '3-4', 'Более 4']},
  {key: 'deadline', question: 'Когда планируете совершить покупку?', options: ['Сейчас', 'В течение 3 месяцев', '6-12 месяцев', 'Более года']},
];

const MultiStepQuestionnaire = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {name: '', phone: '', agree: false},
  });

  const currentStep = stepIndex < steps.length ? steps[stepIndex] : null;
  const selectedValue = currentStep ? answers[currentStep.key] : null;
  const progress = ((stepIndex + 1) / (steps.length + 1)) * 100;

  const handleAnswer = (key: string, value: string) => {
    setAnswers(prev => ({...prev, [key]: value}));
  };

  const nextStep = () => {
    if (currentStep && selectedValue) setStepIndex(stepIndex + 1);
  };
  const prevStep = () => stepIndex > 0 && setStepIndex(stepIndex - 1);

  const onSubmit = async (data: FormData) => {
    try {
      const message = `
        Цель: ${answers.purpose}
        Бюджет: ${answers.budget}
        Тип квартиры: ${answers.type}
        Кол-во проживающих: ${answers.rooms}
        Срок покупки: ${answers.deadline}
        Имя: ${data.name}
        Телефон: ${data.phone}
      `;
      await sendMessageToEmail(message);
      reset();
      setAnswers({});
      setStepIndex(0);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Ошибка при отправке', error);
    }
  };

  return (
    <section id="questionnaire" className="w-full py-20 px-5 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
          Ответьте на <span className="text-orange-500">5 вопросов</span> и получите <span className="text-orange-500">персональную подборку</span>
        </h2>

        {isSubmitted ? (
          <div className="border border-orange-300 rounded-2xl shadow-lg bg-white max-w-3xl mx-auto p-10 flex flex-col items-center gap-6">
            <div className="w-full bg-gray-200 h-2 mb-6 rounded-full overflow-hidden">
              <div className="h-2 bg-orange-500 transition-all duration-300 w-full" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4 text-center">Спасибо!</h3>
            <p className="text-lg text-black text-center">
              Ваша анкета успешно отправлена. <br />
              Наш менеджер свяжется с вами в ближайшее время, чтобы подобрать лучшие варианты согласно вашим предпочтениям.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="cursor-pointer mt-4 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
              Отправить ещё одну анкету
            </button>
          </div>
        ) : stepIndex < steps.length && currentStep ? (
          <div className="border border-orange-300 rounded-2xl shadow-lg bg-white max-w-3xl mx-auto overflow-hidden">
            <div className="w-full bg-gray-200 h-2">
              <div className="h-2 bg-orange-500 transition-all duration-300" style={{width: `${progress}%`}} />
            </div>

            <div className="p-10">
              <p className="text-lg text-black font-semibold mb-6">{currentStep.question}</p>
              <div className="flex flex-col gap-4">
                {currentStep.options.map(opt => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleAnswer(currentStep.key, opt)}
                    className={`cursor-pointer px-6 py-4 rounded-xl border transition text-left font-medium text-black ${
                      selectedValue === opt ? 'bg-orange-500 text-white border-orange-500' : 'bg-white border-orange-300 hover:bg-orange-100'
                    }`}>
                    {opt}
                  </button>
                ))}
              </div>

              <div className="flex justify-between mt-8">
                {stepIndex > 0 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 cursor-pointer bg-orange-100 text-orange-500 font-semibold rounded-lg hover:bg-orange-200 transition">
                    Назад
                  </button>
                )}
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!selectedValue}
                  className={`px-6 py-3 font-semibold rounded-lg transition ml-auto cursor-pointer ${
                    selectedValue ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-orange-200 text-white cursor-not-allowed'
                  }`}>
                  Далее
                </button>
              </div>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border border-orange-300 rounded-2xl p-10 shadow-lg bg-white max-w-3xl mx-auto flex flex-col gap-6">
            <div className="w-full bg-gray-200 h-2 mb-6 rounded-full overflow-hidden">
              <div className="h-2 bg-orange-500 transition-all duration-300 w-full" />
            </div>

            <Controller
              name="name"
              control={control}
              rules={{required: 'Введите имя'}}
              render={({field}) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Ваше имя"
                  className={`w-full p-4 border text-[#464646] rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                    errors.name ? 'border-red-500' : 'border-orange-300'
                  }`}
                />
              )}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}

            <Controller
              name="phone"
              control={control}
              rules={{required: 'Введите номер телефона'}}
              render={({field}) => (
                <IMaskInput
                  {...field}
                  mask="+7 (000) 000-00-00"
                  placeholder="Номер телефона"
                  className={`w-full p-4 border text-[#464646] rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                    errors.phone ? 'border-red-500' : 'border-orange-300'
                  }`}
                />
              )}
            />
            {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}

            <label className="text-sm text-gray-700">
              <input
                type="checkbox"
                {...control.register('agree', {required: 'Необходимо согласие'})}
                className="inline-block w-4 h-4 mr-2 align-middle bg-orange-500 checked:bg-orange-500 checked:text-white text-white border border-orange-300 rounded"
              />
              Я согласен с{' '}
              <a href="#" className="underline text-orange-500">
                политикой конфиденциальности
              </a>{' '}
              и{' '}
              <a href="#" className="underline text-orange-500">
                обработки персональных данных
              </a>
            </label>
            {errors.agree && <span className="text-red-500 text-sm">{errors.agree.message}</span>}

            <button
              type="submit"
              className="bg-orange-500 cursor-pointer text-white font-semibold py-4 rounded-lg hover:bg-orange-600 transition mt-2">
              Отправить анкету
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default MultiStepQuestionnaire;
