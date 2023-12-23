import { useEffect, useRef, useState } from 'react';
import Popup from '../Popup/Popup';
import Chat from './Chat/Chat';
import styles from './Helper.module.scss';

function Helper(props) {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const popupRef = useRef(null);
  const popupChildRef = useRef(null);
  const buttonMenuRef = useRef(null);
  
  const handleOpenPopup = () => {
    setIsOpenPopup(!isOpenPopup)
  }

  useEffect(() => {
    const onClick = (evt) => {
      if (evt.target !== popupRef.current && evt.target !== buttonMenuRef.current && evt.target !== popupChildRef.current) {
        setIsOpenPopup(false)
      }
    }
    document.addEventListener('click', onClick);

    return () => document.removeEventListener('click', onClick)
  },[])

  return (
    <section className={styles.helper}>
      <div className={styles.helper__header}>
        <h2 className={styles.helper__title}>
          Личный помощник 
        </h2>
        <div className={styles.helper__info}>
          <p className={styles.helper__text}>
            Jim Davidson
          </p>
          <p className={`${styles.helper__text} ${styles.helper__text_type_mail}`}>
            Jim Davidson@adaurum.ru
          </p>
        </div>
        <button ref={buttonMenuRef} onClick={handleOpenPopup} className={styles['helper__button-menu']} type="button">
        </button>
        {
          isOpenPopup && 
          <div ref={popupRef} className={styles['helper__popup-wrapper']} >
            <Popup ref={popupChildRef}/>
          </div>
        }
      </div>
      <Chat {...props}/>
    </section>
  );
}

export default Helper;