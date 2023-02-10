
interface CardProps {
  children: React.ReactNode
  className?: string
  [key: string]: any
}

const styles = {
    padding: '0 24px 24px 24px',
    boxShadow: '6px 4px 24px rgba(28, 48, 75, 0.08)',
    borderRadius: '8px'
} as const

export const Card: React.FC<CardProps> = ({ children, className, ...rest }) => {
  return (
    <div className={className ?? ''} style={styles} {...rest}>
      {children}
    </div>
  )
}
