import styles from "./Chat.module.scss";
import avatarHelper from "../../../assets/images/avatar-helper.png";
import SendButton from "../../ui/SendButton/SendButton";
import ImageButton from "../../ui/imageButton/ImageButton";
import AddFileButton from "../../ui/AddFileButton/AddFileButton";
import Button from "../../ui/Button/Button";
import MessageWrapper from "../../MessageWrapper/MessageWrapper";
import { useState } from "react";

function Chat(props) {

  const { orderMediaplan, orderReport, dataMediaplan, dataReport } = props;
  const [inputValue, setInputValue] = useState('');
  const [textValue, setTextValue] = useState([]);

  const handleInputChange = (evt) => {
    const { value } = evt.target
    setInputValue(() => value)
    console.log(value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    // console.log('inputValue',inputValue);
    setTextValue(textValue => [
      ...textValue,
      inputValue
    ])

  }

  return (
    <div className={styles.chat}>
      <div className={styles["chat__chat-wrapper"]}>
        {
          dataMediaplan.length === 0 && dataReport.length === 0 && textValue.length === 0 ?
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
          <MessageWrapper textValue={textValue}/>
        }
      </div>
      <form className={styles["chat__input-wrapper"]} onSubmit={handleSubmit}>
        <div className={styles['chat__order-wrapper']}>
          <Button pink={true} onClick={orderMediaplan} text='Заказать медиаплан'/>
          <Button blue={true} onClick={orderReport} text='Заказать отчет'/>
        </div>
        <textarea value={inputValue} onChange={handleInputChange} className={styles['chat__input']} placeholder="Введите сообщение для администратора" ></textarea>
        <div className={styles['chat__button-wrapper']}>
          <div className={styles['chat__modification']}>
            <ImageButton/>
            <AddFileButton/>
          </div>
          <div className={styles['chat__send']}>
            <SendButton />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Chat;
