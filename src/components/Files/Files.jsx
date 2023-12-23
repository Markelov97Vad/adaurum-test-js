import styles from './Files.module.scss';
import fileImg from '../../assets/images/files-img.png'
import Button from '../ui/Button/Button';
import BootData from '../BootData/BootData';
import SuccessIcon from '../icons/SuccessIcon';

function Files({ dataMediaplan, dataReport }) {
  return (
    <section className={styles.files}>
      <h2 className={styles.files__title}>
        Файлы
      </h2>
      {
        dataMediaplan.length === 0 && dataReport.length === 0 ?
          <div className={styles.files__container}>
            <img className={styles.files__image} src={fileImg} alt="files" />
            <p className={styles.files__subtitle}>Закажи у личного помощника медиаплан. Он появится в этом разделе</p>
          </div> :
          <div className={styles['files__data-container']}>
            {dataMediaplan.length > 0 && <BootData data={dataMediaplan} title={'Медиапланы'} notificationName={'Медиаплан'}/>}
            {dataReport.length > 0 && <BootData data={dataReport} title={'Отчеты'} notificationName={'Отчет'}/>}
          </div>
      }
    <div className={styles.files__modification}>
      {
        dataMediaplan.length === 0 ? 
          <Button gray={true} text={'Медиапланы'}/> 
          :
          <button className={`${styles.files__button} ${styles.files__button_type_plan}`} type="button">
            Медиапланы <SuccessIcon/>
          </button>
      }

      {
        dataReport.length === 0 ?
          <Button gray={true} text={'Отчеты'}/>
        :
          <button className={`${styles.files__button} ${styles.files__button_type_report}`} type="button">
            Отчеты <SuccessIcon/>
          </button>
      }
    </div>
    </section>
  );
}

export default Files;