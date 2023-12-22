import MenuIcon from '../icons/MenuIcon';
import Chat from './Chat/Chat';
import styles from './Helper.module.scss';
function Helper() {
  return (
    <section className={styles.chat}>
      <div className={styles.chat__header}>
        <h2 className={styles.chat__title}>
          Личный помощник 
        </h2>
        <div className={styles.chat__info}>
          <p className={styles.chat__text}>
            Jim Davidson
          </p>
          <p className={`${styles.chat__text} ${styles.chat__text_type_mail}`}>
            Jim Davidson@adaurum.ru
          </p>
        </div>
        <button className={styles['chat__button-menu']} type="button">
          <MenuIcon/>
        </button>
      </div>
      <Chat/>
    </section>
  );
}

export default Helper;