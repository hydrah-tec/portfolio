import style from './habilidade.module.css';
import CardSkill from '@/components/CardSkill';
import DataSkill from '@/database/SkilDataBase';

const Habilidade = () => {
  const skills = DataSkill;
  return (
    <main className={style.habilidade}>
      <h2 className={style.title}>{'<'}Habilidades e conhecimentos{'>'}</h2>
      <section className={style.skills} id="skills">
        <div className={style.container}>
          {skills &&
            skills.map((skill, idx) => {
              return (
                <CardSkill
                  key={idx}
                  src={skill.src}
                  alt={skill.alt}
                  title={skill.title}
                  p={skill.p}
                  href={skill.href}
                  txt_link={skill.txt_link}
                />
              );
            })}
        </div>
      </section>
    </main>
  );
};

export default Habilidade;
