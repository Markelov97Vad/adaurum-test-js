import { forwardRef } from 'react';
import styles from './Popup.module.scss';
const Popup = forwardRef(function Popup (prop, ref) {
  return (
    <div ref={ref} className={styles.popup}>
      <span className={styles.popup__span}>Обратная связь о работе сервиса</span>
      <span className={styles.popup__span}>Сменить помощника</span>
    </div>
  );
})

export default Popup;