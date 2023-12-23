import styles from './Icons.module.scss'

function Settings() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className={styles['settings-icon']} width="40" height="40" rx="20" fill="white" />
      <path
        d="M23 20C23 18.34 21.66 17 20 17C18.34 17 17 18.34 17 20C17 21.66 18.34 23 20 23C20.41 23 20.81 22.92 21.17 22.76"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.88 28.58L15.97 29.21C16.76 29.68 17.78 29.4 18.25 28.61L18.36 28.42C19.26 26.85 20.74 26.85 21.65 28.42L21.76 28.61C22.23 29.4 23.25 29.68 24.04 29.21L25.77 28.22C26.68 27.7 26.99 26.53 26.47 25.63C25.56 24.06 26.3 22.78 28.11 22.78C29.15 22.78 30.01 21.93 30.01 20.88V19.12C30.01 18.08 29.16 17.22 28.11 17.22C27.1 17.22 26.42 16.82 26.18 16.19C25.99 15.7 26.07 15.06 26.47 14.37C26.99 13.46 26.68 12.3 25.77 11.78L24.96 11.32"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.64 11.58C20.74 13.15 19.26 13.15 18.35 11.58L18.24 11.39C17.78 10.6 16.76 10.32 15.97 10.79L14.24 11.78C13.33 12.3 13.02 13.47 13.54 14.38C14.45 15.94 13.71 17.22 11.9 17.22C10.86 17.22 10 18.07 10 19.12V20.88C10 21.92 10.85 22.78 11.9 22.78C13.71 22.78 14.45 24.06 13.54 25.63"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Settings;
