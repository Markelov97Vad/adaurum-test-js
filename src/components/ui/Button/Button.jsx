import styles from './Button.module.scss';
function Button({ text, onClick, blue, pink, gray }) {
  const arrStyles = [
    blue ? "button_color_blue" : null,
    pink ? "button_color_pink" : null,
    gray ? "button_color_gray" : null,
  ];
  const style = arrStyles.filter((style) => style !== null);
  const styleString = style.join(" ");
  return (
    <button className={`${styles.button} ${styles[styleString]}`} onClick={onClick} type="button">{text}</button>
  );
}

export default Button;