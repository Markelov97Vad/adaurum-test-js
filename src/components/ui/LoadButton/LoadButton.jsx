import DownloadIcon from "../../icons/DownloadIcon";
import UpdateIcon from "../../icons/UpdateIcon";
import styles from './LoadButton.module.scss';

function LoadButton({ onClick , isUploaded }) {
  return (
    <button onClick={onClick} className={styles[['load-button']]} type="button">
      {isUploaded ? <DownloadIcon/> : <UpdateIcon/>}
    </button>
  );
}

export default LoadButton;