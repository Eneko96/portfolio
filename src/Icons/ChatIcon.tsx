import { ILIcon } from './types'

export default function ChatIcon({ active }: ILIcon) {
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
        d="M15.2495 4.00293H8.75051C5.0311 4.00293 2.00159 7.03245 2.00159 10.7518V19.2505C2.00159 19.6604 2.34153 20.0004 2.75147 20.0004H15.2495C18.9689 20.0004 21.9984 16.9709 21.9984 13.2514V10.7518C21.9984 7.03245 18.9689 4.00293 15.2495 4.00293ZM17.2291 12.2416C17.2092 12.3216 17.1892 12.4016 17.1492 12.4816C17.1192 12.5516 17.0792 12.6216 17.0392 12.6915C16.9892 12.7615 16.9392 12.8215 16.8792 12.8815C16.8292 12.9415 16.7592 12.9915 16.6892 13.0415C16.6292 13.0815 16.5493 13.1215 16.4793 13.1515C16.3993 13.1815 16.3193 13.2115 16.2393 13.2215C16.1593 13.2415 16.0793 13.2514 15.9993 13.2514C15.6694 13.2514 15.3495 13.1115 15.1195 12.8815C15.0595 12.8215 15.0095 12.7615 14.9595 12.6915C14.9195 12.6216 14.8795 12.5516 14.8495 12.4816C14.8095 12.4016 14.7895 12.3216 14.7695 12.2416C14.7595 12.1616 14.7495 12.0816 14.7495 12.0016C14.7495 11.6717 14.8795 11.3518 15.1195 11.1118C15.1695 11.0618 15.2395 11.0018 15.3095 10.9618C15.3694 10.9118 15.4494 10.8718 15.5194 10.8418C15.5994 10.8118 15.6794 10.7918 15.7594 10.7718C16.1593 10.6919 16.5992 10.8218 16.8792 11.1118C17.1192 11.3518 17.2491 11.6717 17.2491 12.0016C17.2491 12.0816 17.2391 12.1616 17.2291 12.2416ZM13.2498 12.0016C13.2498 12.3316 13.1198 12.6515 12.8798 12.8815C12.8299 12.9415 12.7599 12.9915 12.6899 13.0415C12.6299 13.0815 12.5499 13.1215 12.4799 13.1515C12.3999 13.1815 12.3199 13.2115 12.2399 13.2215C12.16 13.2415 12.08 13.2514 12 13.2514C11.92 13.2514 11.84 13.2415 11.76 13.2215C11.68 13.2115 11.6001 13.1815 11.5201 13.1515C11.4501 13.1215 11.3701 13.0815 11.3101 13.0415C11.2401 12.9915 11.1701 12.9415 11.1201 12.8815C10.8802 12.6515 10.7502 12.3316 10.7502 12.0016C10.7502 11.6717 10.8802 11.3518 11.1201 11.1118C11.1701 11.0618 11.2401 11.0018 11.3101 10.9618C11.3701 10.9118 11.4501 10.8818 11.5201 10.8418C11.6001 10.8118 11.68 10.7918 11.76 10.7718C11.92 10.7419 12.08 10.7419 12.2399 10.7718C12.3199 10.7918 12.3999 10.8118 12.4799 10.8418C12.5499 10.8818 12.6299 10.9118 12.6899 10.9618C12.7599 11.0018 12.8299 11.0618 12.8798 11.1118C13.1198 11.3518 13.2498 11.6717 13.2498 12.0016ZM7.12077 11.1218C7.17076 11.0618 7.24075 11.0018 7.31074 10.9618C7.37073 10.9118 7.45071 10.8818 7.5207 10.8418C7.60069 10.8118 7.68068 10.7918 7.76067 10.7718C7.92064 10.7419 8.08061 10.7419 8.24059 10.7718C8.32058 10.7918 8.40056 10.8118 8.48055 10.8418C8.55054 10.8818 8.63053 10.9118 8.69052 10.9618C8.76051 11.0018 8.83049 11.0618 8.88049 11.1218C9.12045 11.3518 9.25043 11.6717 9.25043 12.0016C9.25043 12.3216 9.12045 12.6515 8.88049 12.8815C8.83049 12.9415 8.76051 12.9915 8.69052 13.0415C8.63053 13.0815 8.55054 13.1215 8.48055 13.1515C8.40056 13.1815 8.32058 13.2115 8.24059 13.2215C8.1606 13.2415 8.08061 13.2514 8.00063 13.2514C7.92064 13.2514 7.84065 13.2415 7.76067 13.2215C7.68068 13.2115 7.60069 13.1815 7.5207 13.1515C7.45071 13.1215 7.37073 13.0815 7.31074 13.0415C7.24075 12.9915 7.17076 12.9415 7.12077 12.8815C6.88081 12.6515 6.75083 12.3216 6.75083 12.0016C6.75083 11.6717 6.88081 11.3518 7.12077 11.1218Z"
        fill="#1C304B"
      />
    </svg>
  )
}