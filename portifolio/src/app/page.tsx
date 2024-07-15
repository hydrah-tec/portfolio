import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.text_Home}>
        <h1>A tecnologia nos move</h1>
        <p>
          Ela tem o poder de nos <span>conectar</span>, nos <span>informar</span> e{' '}
          nos <span>divertir</span>.
        </p>
      </div>
    </main>
  );
}
