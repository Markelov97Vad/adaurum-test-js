import Convert from "../icons/Convert";
import Logout from "../icons/Logout";
import Profile from "../icons/Profile";
import Settings from "../icons/Settings";
import Logo from "../logo/Logo";
// import Logo from "../icons/Logo";
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      {/* <Logo gray={false}/> */}
      <Logo colored={true}/>
      <div className={styles.header__wrapper}>
        <div className={styles.header__info}>
          <div className={styles['header__info-wrapper']}>
            <i className={styles.header__icon} type="button"><Convert/></i>
            <span className={`${styles.header__text} ${styles.header__text_type_convert}`}>
              5% <span className={styles['header__text-description']}>выручки</span>
            </span>
          </div>
          <div className={styles['header__info-wrapper']}>
            <i className={styles.header__icon} type="button"><Profile/></i>
            <span className={`${styles.header__text} ${styles.header__text_type_profile}`}>Username@adaurum.ru</span>
          </div>
        </div>
        <nav className={styles['header__nav']}>
          <button className={styles.header__button} type="button"><Settings/></button>
          <button className={styles.header__button} type="button"><Logout/></button>
        </nav>
      </div>
    </header>
  );
}

export default Header;