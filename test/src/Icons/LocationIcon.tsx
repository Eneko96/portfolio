import { ILIcon } from './types'

export default function LocationIcon({ active }: ILIcon) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`lay-icon ${active ? 'active' : ''}`}
    >
      <path
        d="M12.0322 2C7.64225 2 4.0722 5.60998 4.0722 10.05C4.0722 10.64 4.12222 11.18 4.24222 11.69C4.48222 12.95 5.05222 14.16 5.89222 15.18L11.2622 21.64C11.2822 21.67 11.3122 21.7 11.3422 21.72C11.4122 21.79 11.4922 21.84 11.5822 21.89C11.6522 21.92 11.7222 21.95 11.8022 21.97C11.8722 21.99 11.9522 22 12.0322 22C12.1123 22 12.1922 21.99 12.2722 21.97C12.3523 21.95 12.4222 21.92 12.4922 21.89C12.5422 21.86 12.6022 21.83 12.6422 21.79C12.6922 21.75 12.7423 21.71 12.7822 21.66C12.8122 21.64 12.8322 21.61 12.8522 21.58L18.1822 15.17C19.0123 14.16 19.5823 12.95 19.8223 11.72C19.9423 11.19 20.0023 10.64 20.0023 10.05C20.0023 5.60998 16.4323 2 12.0322 2ZM17.8622 11.3C17.6822 12.25 17.2522 13.15 16.6423 13.9L16.0423 14.62C16.0123 14.55 15.9822 14.48 15.9422 14.41C15.4922 13.53 14.6722 13 13.6522 13H10.3122C9.39219 13 8.5722 13.53 8.1222 14.4C8.08222 14.47 8.05222 14.54 8.0322 14.62L7.4322 13.9C6.81219 13.15 6.3822 12.25 6.19222 11.27C6.1122 10.89 6.07222 10.49 6.07222 10.05C6.07222 6.71998 8.74222 3.99997 12.0322 3.99997C15.3223 3.99997 18.0022 6.71998 18.0022 10.05C18.0022 10.49 17.9622 10.89 17.8622 11.3Z"
        fill="#1C304B"
      />
      <path
        d="M14.0022 7.99997V9.99998C14.0022 10.55 13.5522 11 13.0022 11H12.0022C10.8922 11 10.0022 10.1 10.0022 9V7.99997C10.0022 6.89995 10.9022 6 12.0022 6C13.1022 6 14.0022 6.89995 14.0022 7.99997Z"
        fill="#1C304B"
      />
    </svg>
  )
}