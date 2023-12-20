import styles from './Files.module.scss';
import fileImg from '../../assets/images/files-img.png'

function Files() {
  return (
    <section className={styles.files}>
      <h2 className={styles.files__title}>
        Файлы
      </h2>
      <img className={styles.files__image} src={fileImg} alt="files" />
      <p className={styles.files__subtitle}>Закажи у личного помощника медиаплан. Он появится в этом разделе</p>
    </section>
  );
}

export default Files;