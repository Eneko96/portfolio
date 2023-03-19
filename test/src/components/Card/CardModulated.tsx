import { useMemo, useState } from 'react';
import { Card } from './Card';
import './stylesCardModulated.css';
interface ICardModulatedProps {
  date: Date;
  title: string;
  subtitle: string;
  description: string[];
}

export const CardModulated: React.FC<ICardModulatedProps> = ({
  date,
  description,
  subtitle,
  title,
}) => {
  const [more, setMore] = useState(false);
  const variableDescription = useMemo(
    () =>
      description?.length > 3 && more ? description : description.slice(0, 3),
    [description, more]
  );

  const toggleMore = (e: any) => {
    e.preventDefault();
    setMore(!more);
  };

  return (
    <Card>
      <small className="case-study-date">
        {date &&
          Intl.DateTimeFormat('default', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          }).format(date)}
      </small>
      <div className="case-study-title">{title}</div>
      <div className="base case-study-position">{subtitle}</div>
      <div className="case-study-description-container">
        {variableDescription.length &&
          variableDescription.map((desc, idx) => (
            <p
              className="case-study-description"
              key={idx + 'case-study-description'}
            >
              {desc}
            </p>
          ))}
      </div>
      {description?.length > 3 && (
        <a style={{ whiteSpace: 'nowrap' }} onClick={toggleMore} href="#">
          {more ? 'See less' : 'See more'}
        </a>
      )}
    </Card>
  );
};
