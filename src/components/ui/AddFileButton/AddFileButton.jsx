import AddFileIcons from '../../icons/AddFileicon';
import styles from './AddFileButton.module.scss';
function AddFileButton() {
  return (
    <button className={styles['add-file-button']} type="button">
      <AddFileIcons/>
    </button>
  );
}

export default AddFileButton;