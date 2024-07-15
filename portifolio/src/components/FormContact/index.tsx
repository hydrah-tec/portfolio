'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FaRectangleXmark } from 'react-icons/fa6';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { z } from 'zod';

import style from './style.min.module.css';

const valueInputSchema = z.object({
  name: z.string().min(3, 'Falta inserir seu nome'),
  email: z.string().email('Formato de email inválido'),
  message: z.string().min(3, 'Por favor escreva sua mensagem'),
});

type ValueInputSchema = z.infer<typeof valueInputSchema>;

const FormContact = () => {
  const [boxSucess, setBoxSucess] = useState(false);
  const [boxError, setBoxError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ValueInputSchema>({
    resolver: zodResolver(valueInputSchema),
  });

  const [cpval, setCpval] = useState('');

  const sendEmailForm = (data: ValueInputSchema) => {
    const templateParams = {
      from_name: data.name,
      email: data.email,
      message: data.message,
    };

    emailjs
      .send(
        'service_ghgr5ih',
        'template_cagw7p9',
        templateParams,
        'CxMcDO-AXsu57uwN3',
      )
      .then(
        (res) => {
          console.log('Email enviado', res.status);

          setValue('name', '');
          setValue('email', '');
          setValue('message', '');

          setBoxSucess(true);

          setTimeout(() => {
            setBoxSucess(false);
          }, 3000);
        },
        (err) => {
          console.log('Mensagem não enviado', err.message);

          setBoxError(true);

          setTimeout(() => {
            setBoxError(false);
          }, 3000);
        },
      );
  };

  const close_form = () => {
    const form = document.querySelector('#contato') as HTMLElement;

    const mascara = document.querySelector('#mascara_form') as HTMLElement;

    form.style.right = '-500px';
    mascara.style.visibility = 'hidden';
  };

  return (
    <>
      <div
        id="mascara_form"
        className={style.mascara_form}
        onClick={close_form}
      ></div>
      <form
        className={style.contato}
        id="contato"
        onSubmit={handleSubmit(sendEmailForm)}
      >
        <div className={style.close}>
          <button
            type="button"
            className={style.btn_close}
            onClick={close_form}
            title="fechar"
          >
            <FaRectangleXmark />
          </button>
        </div>
        <h2>Formulário de contato</h2>
        <label form="nome">Nome: </label>
        <input
          type="text"
          id="nome"
          placeholder="João da silva"
          {...register('name')}
        />
        {errors.name && <span>{errors.name.message}</span>}
        <label form="email">E-mail: </label>
        <input
          type="email"
          {...register('email')}
          id="email"
          placeholder="e-mail@exemplo.com"
        />
        {errors.email && <span>{errors.email.message}</span>}
        <label form="mensagem">Como posso te ajudar?</label>
        <textarea
          {...register('message')}
          id="msg"
          cols={30}
          rows={10}
          placeholder="Escreva aqui..."
        ></textarea>
        {errors.message && <span>{errors.message.message}</span>}
        <ReCAPTCHA
          sitekey="6LevdAsqAAAAAB01Kbxr7yGq6duAJTFYh2cJ9Psa"
          onChange={(val) => setCpval(val as string)}
        />
        <button disabled={!cpval} type="submit" id={style.btn_email}>
          Enviar
        </button>
        {boxSucess && (
          <div className={style.sucess}>
            <p>Mensagem enviada com sucesso! </p>
            <p>Agradeço seu contato</p>
          </div>
        )}
        {boxError && (
          <div className={style.error}>
            <p>Não foi possível enviar a mensagem! </p>
            <p>Favor tentar novamente mais tarde</p>
          </div>
        )}
      </form>
    </>
  );
};

export default FormContact;
