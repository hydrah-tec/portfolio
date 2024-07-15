import Link from 'next/link';
import style from './cardproject.module.css';

interface TProjectProps {
  src: string;
  alt: string;
  title: string;
  p: string;
  h3: string;
  href_site: string;
  href_git: string;
  txt_site: string;
  txt_git: string;
}
const CardProjects = ({
  src,
  alt,
  title,
  h3,
  p,
  href_site,
  href_git,
  txt_site,
  txt_git,
}: TProjectProps) => {
  return (
    <div className={style.project}>
      <div className={style.project_img}>
        <img src={src} alt={alt} title={title} />
      </div>
      <div className={style.content}>
        <h3>{h3}</h3>
        <p>{p}</p>
        <div className={style.vermais}>
          <Link href={href_site} rel="noreferrer noopener" target="_blank">
            {txt_site}
          </Link>
          <Link
            href={href_git}
            target="_blank"
            rel="external noreferrer noopener"
          >
            {txt_git}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProjects;
