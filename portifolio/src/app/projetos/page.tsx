import style from './projetos.module.css';
import CardProjects from '@/components/CardProjects';
import DataProject from '@/database/ProjectDataBase';

const Projetos = () => {
  const projects = DataProject;

  return (
    <main className={style.main}>
      <h2 className={style.title}>{'<'}Projetos{'>'}</h2>
      <section className={style.projects} id={style.projects}>
        {projects &&
          projects.map((project, idx) => {
            return (
              <CardProjects
                key={idx}
                src={project.src}
                alt={project.alt}
                title={project.title}
                p={project.p}
                h3={project.h3}
                href_git={project.href_git}
                href_site={project.href_site}
                txt_git={project.txt_git}
                txt_site={project.txt_site}
              />
            );
          })}
      </section>
    </main>
  );
};

export default Projetos;
