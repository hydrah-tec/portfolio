import style from './about.module.css';

const About = () => {
  return (
    <main className={style.main}>
      <h2 className={style.title}>
        {'<'}Sobre{'>'}
      </h2>
      <section className={style.about} id="about">
        <div className={style.about_box}>
          <div className={style.about_img}>
            <img
              src="/img/develiel1.png"
              alt="Foto de Eliel Silva programador"
            />
          </div>
          <div className={style.about_text}>
            <h2>Eliel Silva</h2>
            <p>
              Atuo como <span>desenvolvedor freelancer</span> desde 2023.
            </p>
            <p>
              Minha paixão por tecnologia me motiva a buscar novos desafios e a
              me
              <span> superar</span> <span>constantemente</span>.
            </p>
            <p>
              Recentemente, iniciei minha <span>formação</span> em{' '}
              <span>Análise</span> <span>e</span> <span>Desenvolvimento</span>
              <span>de</span> <span>Sistemas</span> para ampliar ainda mais meus{' '}
              <span>conhecimentos</span>.
            </p>
            <p>
              Venho aprimorando minhas <span>habilidades</span> em
              <span> JavaScript</span>, <span>React</span>, <span>HTML</span> e
              <span> CSS</span>.
            </p>
            <p>
              Acredito que minhas <span>habilidades</span> em programação,
              combinadas com meu
              <span> espírito</span> <span>empreendedor</span> e minha
              <span> paixão</span> por <span>aprender</span>, me tornam um
              candidato ideal para a sua equipe.
            </p>
            <p>
              Estou ansioso para trabalhar com você e contribuir para o{' '}
              <span>sucesso </span>
              da sua <span>empresa</span>!
            </p>
            <p>
              Para saber mais sobre minhas qualificações, consulte a pagina de
              habilidades.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
