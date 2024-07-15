import Link from 'next/link';
import style from './cardskill.module.css';

interface TSkillProps {
  src: string;
  alt: string;
  title: string;
  p: string;
  href: string;
  txt_link: string;
}
const CardSkill = ({ src, alt, title, p, href, txt_link }: TSkillProps) => {
  console.log(href);
  
  return (
    <div className={style.skill}>
      <div className={style.disc}>
        <img src={src} alt={alt} className={style.img_skill} title={title} />
        <p>{p}</p>
      </div>
      <Link href={href} target="_blank" rel="external noreferrer noopener">
        {txt_link}
      </Link>
    </div>
  );
};

export default CardSkill;
