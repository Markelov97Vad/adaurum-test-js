import styles from "./Chat.module.scss";
import avatarHelper from "../../../assets/images/avatar-helper.png";
import SendButton from "../../ui/SendButton/SendButton";
import ImageButton from "../../ui/imageButton/ImageButton";
import AddFileButton from "../../ui/AddFileButton/AddFileButton";
import Button from "../../ui/Button/Button";
import MessageWrapper from "../../MessageWrapper/MessageWrapper";
import { useState } from "react";
import { getCurrentTime } from "../../../utils";

function Chat(props) {
  const { orderMediaplan, orderReport, dataMediaplan, dataReport } = props;
  const [inputValue, setInputValue] = useState('');
  const [messagesValue, setMessagesValue] = useState([]);
  const isMissingData = dataMediaplan.length === 0 && dataReport.length === 0 && messagesValue.length === 0

  const handleInputChange = (evt) => {
    const { value } = evt.target
    setInputValue(() => value)
  }

  const handleEnterKey = (evt) => {
    if(evt.key === 'Enter') {
      handleSubmit(evt)
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (inputValue.length === 0) {
      return
    }

    setMessagesValue(messageValue => [
      ...messageValue,
      { text: inputValue, time: getCurrentTime()}
    ]);

    setInputValue(() => '');
  }

  return (
    <div className={`${styles.chat} ${isMissingData ? '' : styles.chat_size_big}`}>
      <div className={styles["chat__chat-wrapper"]}>
        {
          isMissingData ?
          <>
            <img
              className={styles["chat__image"]}
              src={avatarHelper}
              alt="avatar helper"
            />
            <p className={styles.chat__subtitle}>
              Это чат с администратором. Ты можешь с ним пообщаться по любому
              вопросу о нашем сервисе и узнать о ходе работы
            </p>
          </> : 
          <MessageWrapper messagesValue={messagesValue}/>
        }
      </div>
      <div className={styles['chat__form-wrapper']}>
        <div className={styles['chat__order-wrapper']}>
          <Button pink={true} onClick={orderMediaplan} text='Заказать медиаплан'/>
          <Button blue={true} onClick={orderReport} text='Заказать отчет'/>
        </div>
        <form className={styles["chat__form"]} onSubmit={handleSubmit}>
          <textarea onKeyDown={handleEnterKey} value={inputValue} onChange={handleInputChange} className={styles['chat__input']} placeholder="Введите сообщение для администратора"></textarea>
          <div className={styles['chat__button-wrapper']}>
            <div className={styles['chat__modification']}>
              <AddFileButton/>
              <ImageButton/>
            </div>
            <div className={styles['chat__send']}>
              <SendButton />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chat;
