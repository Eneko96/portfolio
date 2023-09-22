import './card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const Card: React.FC<CardProps> = ({ children, className, ...rest }) => {
  return (
    <div className={className ?? 'home-card'} {...rest}>
      {children}
    </div>
  );
};
