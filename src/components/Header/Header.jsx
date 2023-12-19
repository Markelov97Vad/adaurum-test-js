import Convert from "../icons/Convert";
import Logout from "../icons/Logout";
import Profile from "../icons/Profile";
import Settings from "../icons/Settings";
import Logo from "../icons/Logo";
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <Logo/>
      <div className={styles.header__wrapper}>
        <div className={styles.header__info}>
          <div className={styles['header__info-wrapper']}>
            <button className={styles.header__button} type="button"><Convert/></button>
            <span className={`${styles.header__text} ${styles.header__text_type_convert}`}>5%</span>
          </div>
          <div className={styles['header__info-wrapper']}>
            <button className={styles.header__button} type="button"><Profile/></button>
            <span className={`${styles.header__text} ${styles.header__text_type_profile}`}>Username@adaurum.ru</span>
          </div>
        </div>
        <div className={styles['header__nav']}>
          <button className={styles.header__button} type="button"><Settings/></button>
          <button className={styles.header__button} type="button"><Logout/></button>
        </div>
      </div>
    </header>
  );
}

export default Header;