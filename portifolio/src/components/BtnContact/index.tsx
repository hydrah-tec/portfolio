'use client';

import style from './style.module.css';

const BtnContact = () => {
  const open_form = () => {
    const form = document.querySelector('#contato') as HTMLElement;

    const mascara = document.querySelector('#mascara_form') as HTMLElement;

    form.style.right = '50px';
    mascara.style.visibility = 'visible';
  };

  return (
    <div>
      <button className={style.btn_rodape} type="button" onClick={open_form}>
        Contato
      </button>
    </div>
  );
};

export default BtnContact;
