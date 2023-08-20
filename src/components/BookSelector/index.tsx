import { useMemo, useRef, useState } from 'react';
import './styles.css';

interface IBookCard {
  onClick: ({ id, day }: { id: number; day: string }) => any;
  id: number;
  active: boolean;
  day: string;
}

const dateBookings = (): any => {
  const today = new Date();
  const weekDay = today.getDay();
  const randomDay = Math.floor(Math.random() * 7);
  const tempDay = today.setDate(today.getDate() + randomDay);
  if (new Date(tempDay).getDay() <= 5)
    return new Date(tempDay).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  else return dateBookings();
};

const Card = ({
  children,
  className,
  onClick,
}: {
  children: any;
  onClick: any;
  className: string;
}) => (
  <div className={className} onClick={onClick}>
    {children}
  </div>
);

const BookCard: React.FC<IBookCard> = ({ onClick, id, active, day }) => {
  return (
    <Card
      className={`book-card ${active ? 'active' : ''}`}
      onClick={() => onClick({ id, day })}
    >
      <input
        type="checkbox"
        style={{
          appearance: 'none',
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          border: 'none',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        value={day}
        name="calendar"
      />
      <div
        style={{
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span className={`material-icons${!active ? '-outlined' : ''}`}>
          calendar_month
        </span>
        <span className="small">{day}</span>
      </div>
      <div
        style={{
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span className={`material-icons${!active ? '-outlined' : ''}`}>
          timer
        </span>
        <span className="small">17:30 PM</span>
      </div>
    </Card>
  );
};

export const BookSelector: React.FC<any> = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const days: string[] = useMemo(
    () =>
      Array(5)
        .fill(0)
        .map(() => dateBookings()),
    [],
  );

  const changeHandler = ({ id, day }: { id: number; day: string }) => {
    setSelected(id);
    window.calendar = { id, day };
  };

  return (
    <div>
      <div
        className="small"
        style={{ textTransform: 'uppercase', marginBottom: '8px' }}
      >
        Choose Next Slot Available
      </div>
      <div
        className="bookcard-list"
        style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}
      >
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <BookCard
              key={index}
              day={days[index]}
              onClick={(id) => changeHandler({ id: id.id, day: id.day })}
              active={selected === index}
              id={index}
            />
          ))}
      </div>
    </div>
  );
};
