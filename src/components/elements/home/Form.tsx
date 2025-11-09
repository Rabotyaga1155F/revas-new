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

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      phone: '',
      agree: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await sendMessageToEmail(`Имя - ${data.name} \nНомер телефона - ${data.phone}`);
      reset();
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Ошибка при отправке', error);
    }
  };

  return (
    <section className="w-full py-16 px-5 md:px-16 mt-18 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold text-center text-[#323232] mb-12 leading-tight">
          СВОЯ КВАРТИРА <span className="text-orange-500">БЕЗ ХЛОПОТ</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start md:items-center">
          <div className="md:w-3/5 text-[#464646] text-lg md:text-xl space-y-6 text-center md:text-left">
            <p>Мы полностью берём на себя оформление сделки, подберём лучшие варианты с выгодными условиями и завершим всё дистанционно за 1 день.</p>
            <p>Юридические и документальные моменты мы решим сами, чтобы вы могли спокойно планировать своё новоселье.</p>
          </div>

          <div className="md:w-2/5 w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <Controller
                name="name"
                control={control}
                rules={{required: 'Введите имя'}}
                render={({field}) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Ваше имя"
                    className={`w-full p-3 border text-[#464646] rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
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
                    className={`w-full p-3 border text-[#464646] rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                )}
              />
              {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}

              <label className="text-sm text-gray-700">
                <input
                  type="checkbox"
                  {...control.register('agree', {required: 'Необходимо согласие'})}
                  className="inline-block w-4 h-4 mr-2 align-middle bg-orange-500 checked:bg-orange-500 checked:text-white text-white border border-gray-300 rounded"
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
                className="bg-orange-500 cursor-pointer text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition mt-2">
                {isSubmitted ? 'Отправлено, ожидайте звонка!' : 'Получить консультацию'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
