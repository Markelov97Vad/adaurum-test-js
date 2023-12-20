import ImageIcon from "../../icons/ImageIcon";
import styles from './ImageButton.module.scss';

function ImageButton() {
  return (
    <button className={styles['image-button']} type="button">
      <ImageIcon/>
    </button>
  );
}

export default ImageButton;