import { useEffect, useRef } from "react";
import MessageOwner from "./MessageOwner/MessageOwner";
import MessagePerson from "./MessagePerson/MessagePerson";
import styles from './MessageWrapper.module.scss';
import { getCurrentTime } from "../../utils";

function MessageWrapper({ messagesValue }) {
  const div = useRef();

  useEffect(() => {
    div.current.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" })
  }, [messagesValue]);

  return (
    <div ref={div} className={styles['message-wrapper']}>
      <p className={styles['message-wrapper__text']}>Сегодня, {getCurrentTime()}</p>
      <MessagePerson/>
      {
        messagesValue.map((value, i) => (
          <MessageOwner key={i} textValue={value}/>
        ))
      }
      {/* <MessagePerson/>
      <MessageOwner/> */}
    </div>
  );
}

export default MessageWrapper;