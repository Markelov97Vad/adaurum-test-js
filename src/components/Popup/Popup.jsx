import styles from './Popup.module.scss';
function Popup() {
  return (
    <div className={styles.popup}>
      <span className={styles.popup__span}>Обратная связь о работе сервиса</span>
      <span className={styles.popup__span}>Сменить помощника</span>
    </div>
  );
}

export default Popup;