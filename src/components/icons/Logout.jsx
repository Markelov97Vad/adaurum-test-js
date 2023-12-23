import styles from './Icons.module.scss'

function Logout() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className={styles['logout-icon']} width="40" height="40" rx="20" fill="white" />
      <path
        d="M10 20H22.88"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.65 16.65L24 20L20.65 23.35"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.5 21V23.26C29.5 27.73 27.71 29.52 23.24 29.52H23.11C19.09 29.52 17.24 28.07 16.91 24.53"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.9 15.56C17.21 11.96 19.06 10.49 23.11 10.49H23.24C27.71 10.49 29.5 12.28 29.5 16.75"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Logout;
