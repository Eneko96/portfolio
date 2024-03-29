import { ILIcon } from './types'

export default function DownloadIcon({ active }: ILIcon) {
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
        d="M13 9.8C12.6 9.8 12.2 9.5 12.2 8.99998V2H6.00002C4.9 2 4 2.89995 4 3.99997V20C4 21.1 4.9 22 6.00002 22H18C19.1 22 20 21.1 20 20V9.8H13ZM15.2 16.5L12.7 19C12.5 19.2 12.3 19.3 12 19.3C11.7 19.3 11.5 19.2 11.3 19L8.8 16.5C8.40002 16.1 8.40002 15.5 8.8 15.1C9.19998 14.7 9.80003 14.7 10.2 15.1L11 15.9V13C11 12.4 11.4 12 12 12C12.6 12 13 12.4 13 13V15.8L13.8 15C14.2 14.6 14.8 14.6 15.2 15C15.6 15.4 15.6 16.1 15.2 16.5Z"
        fill="#1C304B"
      />
      <path d="M20 8.19997H13.8V2L20 8.19997Z" fill="#1C304B" />
    </svg>
  )
}
