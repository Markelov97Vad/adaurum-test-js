import SubtractIcon from "../icons/SubtractIcon";
import XmlIcon from "../icons/xmlIcon";
import LoadButton from "../ui/LoadButton/LoadButton";
import styles from "./LoadingWrapper.module.scss";
function LoadingWrapper({ text }) {
  return (
    <div className={styles['loading-wrapper']}>
      <div className={`${styles["loading-element"]}`}>
        <div className={styles["loading-element__wrapper"]}>
          <div className={styles[["loading-element__info"]]}>
            <XmlIcon />
            <span className={styles["loading-element__text"]}>{text}</span>
          </div>
          <LoadButton />
        </div>
      </div>
      {/* <div className={styles['notification']}>
        notification
        <SubtractIcon/>
        <span >Медиаплан в процессе составления</span>
      </div> */}
      {/* <ProcessNotification /> */}
      <div className={`${styles['process-notification']} ${styles['loading-wrapper__process-notification']}`}>
        <SubtractIcon/>
        <span className={styles['process-notification__text']}>Медиаплан в процессе составления</span>
      </div>
    </div>
  );
}

export default LoadingWrapper;
