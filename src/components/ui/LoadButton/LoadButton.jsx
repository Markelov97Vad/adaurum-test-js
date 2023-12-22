import DownloadIcon from "../../icons/DownloadIcon";
import UpdateIcon from "../../icons/UpdateIcon";
import styles from './LoadButton.module.scss';

function LoadButton() {

  return (
    // <button type="button"><UpdateIcon/></button>
    <button className={styles[['load-button']]} type="button"><DownloadIcon/></button>
  );
}

export default LoadButton;