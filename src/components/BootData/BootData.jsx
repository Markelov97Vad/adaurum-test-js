import { useEffect, useState } from "react";
import LoadingElement from "../LoadingWrapper/LoadingWrapper";
import ArrowIcon from "../icons/ArrowIcon";
import styles from './BootData.module.scss';

function BootData({ title, data, notificationName}) {
  const [isOpen, setIsOpen] = useState(true);
  const [count, setCount] = useState(4);
  const [reset, setReset] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setCount(() => 4)
    setReset(true);
  }

  const handleShowButton = () => {
    setCount(() => count + 4)
  }

  useEffect(() => {
    setCount(() => data.length)
  }, [data])

  return (
    <div className={styles['boot-data']}>
      <div className={styles['boot-data__header']} onClick={handleOpen}>
        <h3 className={styles['boot-data__title']}>{title}</h3>
        <i className={`${styles['boot-data__header-icon']} ${isOpen ? '' : styles['boot-data__header-icon_close']}`} ><ArrowIcon/></i>
      </div>
      <div className={`${styles['boot-data__element-container']} ${isOpen ? '' : styles['boot-data__element-container_disabled']}`}>
        {
          data.map((file, i) => {
            const isVisible = i >= count
            return (
              <LoadingElement
                key={file.id}
                text={`${file.name} ${file.count}`}
                date={file.date}
                notificationName={notificationName}
                status={isVisible}
                isOpen={isOpen}
              />
            )
          })
        }
        {
          (data.length > 4 && count < data.length && reset) &&
          <button onClick={handleShowButton} className={styles['boot-data__button-show']} type="button">Показать еще</button>
        }
      </div>
    </div>
  );
}

export default BootData;