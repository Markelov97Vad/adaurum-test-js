import GlobalIcon from "../icons/GlobalIcon";
// import Logo from "../icons/Logo";
import MailIcon from "../icons/MailIcon";
import TelegramIcon from "../icons/Telegram";
import WhatsappIcon from "../icons/WhatsappIcon";
import Logo from "../logo/Logo";
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>

      {/* <Logo gray={true}/> */}
        <div className={styles.footer__logo}>
          <Logo colored={false} />
        </div>
        <a className={`${styles.footer__text} ${styles.footer__text_type_politic}`} href="" target="_blank">Политика конфиденциальности</a>
        <a className={`${styles.footer__text} ${styles.footer__text_type_mail}`} href="" target="_blank">
          <span className={styles.footer__icon}>
            <MailIcon/>
          </span>
          pinkchicken@adaurum.ru
        </a>
        <nav className={styles['footer__nav-languages']}>
          <ul className={styles['footer__nav-list']}>
            <li><GlobalIcon/></li>
            <li className={styles.footer__text}>RU</li>
            <li className={styles.footer__text}>EN</li>
            <li className={styles.footer__text}>TUR</li>
          </ul>
        </nav>
        <nav className={styles['footer__nav-social']}>
          <ul className={styles['footer__nav-list']}>
            <li><TelegramIcon/></li>
            <li><WhatsappIcon/></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;