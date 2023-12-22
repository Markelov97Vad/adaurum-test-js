import logoColor from '../../assets/images/logo-color.svg'
import logoDisabled from '../../assets/images/logo-disabled.svg'
import styles from './Logo.module.scss';

function Logo({colored}) {
  return (
    <img className={styles.logo} src={colored ? logoColor : logoDisabled} alt="logo" />
  );
}

export default Logo;