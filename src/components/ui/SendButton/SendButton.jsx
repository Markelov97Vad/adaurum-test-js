import SendIcon from "../../icons/SendIcon";
import styles from './SendButton.module.scss';

function SendButton() {
  return (
    <div className={styles['send-button']}>
      <button className={styles['send-button__button']} type="submit">
        <SendIcon />
      </button>
      <span className={styles['send-button__span']}>Enter</span>
    </div>
  );
}

export default SendButton;
