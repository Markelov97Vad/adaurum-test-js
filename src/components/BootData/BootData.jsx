import LoadingElement from "../LoadingWrapper/LoadingWrapper";
import ArrowIcon from "../icons/ArrowIcon";
import styles from './BootData.module.scss';

function BootData({ title, data}) {
  return (
    <div className={styles['boot-data']}>
      <div className={styles['boot-data__header']}>
        <h3 className={styles['boot-data__title']}>{title}</h3>
        <i className={styles[['boot-data__header-icon']]}><ArrowIcon/></i>
      </div>
      <LoadingElement text={'Companyname 11/23'}/>
      <button className={styles['boot-data__button-show']} type="button">Показать еще</button>
      {/* <div>
        <i></i>
        <span>Companyname 11/23</span>
        <button type="button"></button>
        <div>
          notification
          <i></i>
          <span>Медиаплан в процессе составления</span>
        </div>
        <button> Показать еще</button>
      </div> */}
    </div>
  );
}

export default BootData;