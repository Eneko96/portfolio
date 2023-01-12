import { ILIcon } from './types'

export default function FolderIcon({ active }: ILIcon) {
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
        d="M20.2486 7.0005H11.464L10.1712 4.41591C10.0442 4.16195 9.78428 4.00098 9.50033 4.00098H2.75141C2.33747 4.00098 2.00153 4.33692 2.00153 4.75086V18.2487C2.00153 19.2135 2.7864 19.9984 3.75125 19.9984H20.2486C21.2135 19.9984 21.9983 19.2135 21.9983 18.2487V8.75022C21.9983 7.78537 21.2135 7.0005 20.2486 7.0005Z"
        fill="#1C304B"
      />
    </svg>
  )
}
