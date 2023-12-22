import styles from "./Chat.module.scss";
import avatarHelper from "../../../assets/images/avatar-helper.png";
import SendButton from "../../ui/SendButton/SendButton";
import ImageButton from "../../ui/imageButton/ImageButton";
import AddFileButton from "../../ui/AddFileButton/AddFileButton";
import Button from "../../ui/Button/Button";

function Chat() {
  return (
    <div className={styles.chat}>
      <div className={styles["chat__chat-wrapper"]}>
        <img
          className={styles["chat__image"]}
          src={avatarHelper}
          alt="avatar helper"
        />
        <p className={styles.chat__subtitle}>
          Это чат с администратором. Ты можешь с ним пообщаться по любому
          вопросу о нашем сервисе и узнать о ходе работы
        </p>
        <div className={styles['chat__order-wrapper']}>
          <Button pink={true} onClick={null} text='Заказать медиаплан'/>
          <Button blue={true} onClick={null} text='Заказать отчет'/>
        </div>
      </div>
      <form className={styles["chat__input-wrapper"]}>
        <textarea className={styles['chat__input']} placeholder="Введите сообщение для администратора" ></textarea>
        {/* <input className={styles['chat__input']} type="text" name="" id="" /> */}
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
