import { useEffect } from 'react'

interface IuseEvent {
  type: string
  listener: (...args: any[]) => void
  origin: 'window' | 'document' | 'documentBody'
}

type TuseEvent = ({ type, listener, origin }: IuseEvent, ...deps: any[]) => void

export const useEvent: TuseEvent = ({ type, listener, origin }, ...deps) => {
  const target = {
    window,
    document,
    documentBody: document.body,
    origin
  }[origin]

  useEffect(() => {
    target.addEventListener(type, listener)
    return () => target.removeEventListener(type, listener)
  }, [deps])
}
