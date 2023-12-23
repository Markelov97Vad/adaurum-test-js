import styles from './MessageOwner.module.scss';
function MessageOwner({ textValue }) {
  return (
    <div className={styles['message-owner']}>
      <div className={styles['message-owner__text-wrapper']}>
        <p className={styles['message-owner__text']}>
        {textValue.text}
        </p>
      </div>
      <span className={styles['message-owner__time']}>
        {textValue.time}
      </span>
    </div>
  );
}

export default MessageOwner;