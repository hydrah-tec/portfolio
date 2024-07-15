'use client';

import Link from 'next/link';
import style from './style.min.module.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import BtnContact from '../BtnContact';

const Footer = () => {
  const date = new Date();
  const yearNow = date.getFullYear();

  return (
    <footer className={style.footer}>
      <div className={style.redes}>
        <ul>
          <li>
            <Link
              href="https://github.com/hydrahtec"
              target="_blank"
              rel="external noreferrer noopener"
            >
              <FaGithub /> Github
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/eliel-silva-51146565/"
              target="_blank"
              rel="external noreferrer noopener"
            >
              <FaLinkedinIn /> Linkedin
            </Link>
          </li>
        </ul>
      </div>
      <BtnContact />
      <div className={style.copy}>
        <Link href="assets/Politica-de-Privacidade.pdf" target="_blank">
          Politica de privacidade
        </Link>
        <Link href="assets/Termos-e-condicoes.pdf" target="_blank">
          Termos de uso
        </Link>
        <p>
          &#9400; - Hydrah Tecnologia - Todos os Direitos Reservados - {yearNow}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
