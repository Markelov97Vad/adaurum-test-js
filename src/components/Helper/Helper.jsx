import { useEffect, useRef, useState } from 'react';
import Popup from '../Popup/Popup';
import MenuIcon from '../icons/MenuIcon';
import Chat from './Chat/Chat';
import styles from './Helper.module.scss';

function Helper(props) {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const popupRef = useRef();

  const handleOpenPopup = (evt) => {
    if (evt.target !== evt.currentTarget) {
      console.log('target',evt.target);
      console.log('current',evt.currentTarget);
      setIsOpenPopup(false);
    }

    if (evt.key === 'Escape') {
      setIsOpenPopup(false);
    }
    // if (evt.target === evt.currentTarget) {
    //   console.log('target!');
    //   setIsOpenPopup(true)
    // }
  }
  
  const handleOpenPopup2 = (evt) => {
    // if (evt.target !== evt.currentTarget) {
    //   console.log('target',evt.target);
    //   console.log('current',evt.currentTarget);
    //   console.log('target');
    // } else {
    //   setIsOpenPopup(false);
    // }
    setIsOpenPopup(!isOpenPopup)
  }

  // useEffect(() => {
  //   // const onClick = (evt) => {
  //   //   if (evt.target !== evt.currentTarget) {
  //   //     setIsOpenPopup(false)
  //   //     console.log('sas');
  //   //   }
  //   // }
  //   document.addEventListener('click', onClick);

  //   return () => document.removeEventListener('click', onClick)
  // },[])

  return (
    <section className={styles.chat}>
      <div className={styles.chat__header}>
        <h2 className={styles.chat__title}>
          Личный помощник 
        </h2>
        <div className={styles.chat__info}>
          <p className={styles.chat__text}>
            Jim Davidson
          </p>
          <p className={`${styles.chat__text} ${styles.chat__text_type_mail}`}>
            Jim Davidson@adaurum.ru
          </p>
        </div>
        <button onClick={handleOpenPopup2} className={styles['chat__button-menu']} type="button">
          <MenuIcon/>
        </button>
        {
          isOpenPopup && 
          <div ref={popupRef} className={styles[['chat__popup-wrapper']]} onClick={handleOpenPopup}>
            <Popup/>
          </div>
        }
      </div>
      <Chat {...props}/>
    </section>
  );
}

export default Helper;