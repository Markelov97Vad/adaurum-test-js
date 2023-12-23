import { useEffect, useState } from "react";
import SubtractIcon from "../icons/SubtractIcon";
import XmlIcon from "../icons/xmlIcon";
import LoadButton from "../ui/LoadButton/LoadButton";
import styles from "./LoadingWrapper.module.scss";
import SuccessIcon from "../icons/SuccessIcon";

function LoadingWrapper({ text, notificationName, status, isOpen, date }) {
  const [isUploaded, setIsUploaded] = useState(false);
  const [isStatusDisplayed, setIsStatusDisplayed] = useState(true);

  useEffect(() => {
    const timeout =  setTimeout(() => {
      setIsUploaded(true)
    }, Math.floor(Math.random() * 5000))
    return () => clearTimeout(timeout)
  }, [text]);

  useEffect(() => {
    if (!isOpen) {
      setIsStatusDisplayed(false)
    }
  }, [isOpen])

  const setTextNotificarion = (notificationName) => {
    switch (notificationName) {
      case 'Медиаплан':
        return `${notificationName} в процессе составления`;
      case 'Отчет':
        return `${notificationName} формируется`;
    
      default:
        return `${notificationName} формируется`;
    }
  }

  return (
    <div className={`${styles['loading-wrapper']} ${!status ? '' : styles[['loading-wrapper_hidden']]}`}>
      <div className={`${styles["loading-element"]}`}>
        <div className={styles["loading-element__wrapper"]}>
          <div className={styles[["loading-element__info"]]}>
            <XmlIcon />
            <span className={styles["loading-element__text"]}>{text}</span>
          </div>
          <LoadButton isUploaded={isUploaded} />
        </div>
      </div>
      {
        isStatusDisplayed &&
        <div className={`${styles['process-notification']} ${styles['loading-wrapper__process-notification']}`}>
          {
            isUploaded ? <>
              <SuccessIcon/>
              <span className={styles['process-notification__text']}>{notificationName} от {date} готов</span>
            </> : <>
              <SubtractIcon/>
              <span className={styles['process-notification__text']}>{setTextNotificarion(notificationName)}</span>
            </>
          }
        </div>
      }
    </div>
  );
}

export default LoadingWrapper;
