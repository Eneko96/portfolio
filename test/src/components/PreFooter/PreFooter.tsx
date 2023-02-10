import { useRef } from 'react'
import './styles.css'

export const PreFooter = () => {
  const ref = useRef<HTMLAnchorElement>(null)
  return (
    <div className="prefooter-container">
      <div className="prefooter">
        <h2>{"Let's Book a Call"}</h2>
        <p className="base">
          Would you like to chat and get to know me a bit better? Don&apos;t
          hesitate. Come in and book a call with me!
        </p>
        <button
          className="button-primary_large"
          onClick={() => {
            ref.current?.click()
          }}
        >
          <a hidden href='/Book' ref={ref}></a>
          Start <span className="material-icons">trending_flat </span>
        </button>
      </div>
    </div>
  )
}
