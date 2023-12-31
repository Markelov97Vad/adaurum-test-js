import avatar from '../../../assets/images/avatar-person.png';
import { getCurrentTime } from '../../../utils';
import styles from './MessagePerson.module.scss';

function MessagePerson() {
  return (
    <div className={styles['message-person']}>
      <div className={styles['message-person__img-wrapper']}>
        <img className={styles['message-person__img']} src={avatar} alt="avatar person" />
      </div>
      <div className={styles['message-person__info-wrapper']}>
        <div className={styles[['message-person__text-wrapper']]}>
          <p className={styles['message-person__text']}>
            Lörem ipsum suparad pepött då satsig och soskap metrosocial. Sapongar trenåvis i hypol innan visiskap, heterovybelt. Besav ditugen stenosade om exopagt. 
          </p>
        </div>
        <div className={styles['message-person__about-wrapper']}>
          <h4 className={styles['message-person__name']}>Jim</h4>
          <span className={styles[['message-person__time']]}>{getCurrentTime()}</span>
        </div>
      </div>
    </div>
  );
}

export default MessagePerson;