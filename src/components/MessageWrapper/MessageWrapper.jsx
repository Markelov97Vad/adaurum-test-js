import MessageOwner from "./MessageOwner/MessageOwner";
import MessagePerson from "./MessagePerson/MessagePerson";
import styles from './MessageWrapper.module.scss';

function MessageWrapper({ textValue }) {
  return (
    <div className={styles['message-wrapper']}>
      <p className={styles['message-wrapper__text']}>Сегодня, 20:43</p>
      <MessagePerson/>
      {
        textValue.map((text, i) => (
          <MessageOwner key={i} textValue={text}/>
        ))
      }
      {/* <MessagePerson/>
      <MessageOwner/> */}
    </div>
  );
}

export default MessageWrapper;