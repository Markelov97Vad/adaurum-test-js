import styles from './MessageOwner.module.scss';
function MessageOwner({ textValue }) {
  return (
    <div className={styles['message-owner']}>
      <div className={styles['message-owner__text-wrapper']}>
        <p className={styles['message-owner__text']}>
        {textValue}
        {/* Lörem ipsum suparad pepött då satsig och soskap metrosocial. Sapongar trenåvis i hypol innan visiskap, heterovybelt. Besav ditugen stenosade om exopagt.  */}
        </p>
      </div>
      <span className={styles['message-owner__time']}>
        20:55
      </span>
    </div>
  );
}

export default MessageOwner;