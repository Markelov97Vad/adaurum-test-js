import styles from './Files.module.scss';
import fileImg from '../../assets/images/files-img.png'
import Button from '../ui/Button/Button';
import BootData from '../BootData/BootData';

function Files() {
  return (
    <section className={styles.files}>
      <h2 className={styles.files__title}>
        Файлы
      </h2>
      <div className={styles['files__data-container']}>
        <BootData title={'Медиапланы'}/>
        <BootData title={'Отчеты'}/>
      </div>
      {/* <div className={styles.files__container}>
        <img className={styles.files__image} src={fileImg} alt="files" />
        <p className={styles.files__subtitle}>Закажи у личного помощника медиаплан. Он появится в этом разделе</p>
      </div> */}
    <div className={styles.files__modification}>
      <Button gray={true} text={'Медиапланы'}/>
      <Button gray={true} text={'Отчеты'}/>
    </div>
    </section>
  );
}

export default Files;