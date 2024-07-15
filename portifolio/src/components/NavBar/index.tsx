'use client';

import Link from 'next/link';
import style from './style.min.module.css';
import BtnContact from '../BtnContact';

const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.container_menu}>
        <div id={style.logo}>
          <img src="img/logo.png" alt="Logo hydrah tech" />
          <h2 className={style.logo_title}>
            <Link href={'/'}>Portfolio</Link>
          </h2>
        </div>
        <ul id={style.menu}>
          <li>
            <Link href={'/about'}>Sobre</Link>
          </li>
          <li>
            <Link href={'/habilidade'}>Habilidades</Link>
          </li>
          <li>
            <Link href={'/projetos'}>Projetos</Link>
          </li>
        </ul>
        <div id={style.BtnContact}>
          <BtnContact />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
