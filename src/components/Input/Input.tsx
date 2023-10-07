import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  useRef,
  useState,
} from 'react';
import { Resend } from 'resend';
import './styles.css';

interface CommonInputProps {
  label?: string;
  name: string;
  id?: string;
  defaultValue?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  validation: Function;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}

type TCommonInputProps<T> = T & CommonInputProps;

export const Input = ({
  label,
  required,
  name,
  className,
  placeholder,
  type,
  onChange,
  validation,
  ...rest
}: TCommonInputProps<React.InputHTMLAttributes<HTMLInputElement>>) => {
  const [error, setError] = useState(false);

  const onChangeValue = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = validation(evt.target.value);
    if (!isValid) setError(true);
    else {
      if (!error) setError(false);
      onChange?.(evt);
    }
  };
  return (
    <div className="input-wrapper" style={{ width: '100%' }}>
      {label && (
        <label className="caption">
          {label}
          {required && <small>*</small>}
        </label>
      )}
      <input
        name={name}
        placeholder={placeholder}
        type={type || 'text'}
        onChange={onChangeValue}
        {...rest}
      />
      {error && <p className="input-helper-text input-error-text">{error}</p>}
    </div>
  );
};

export const Radio = ({
  label,
  name,
  id,
  validation: _validation,
  ...rest
}: TCommonInputProps<InputHTMLAttributes<HTMLInputElement>>) => {
  if (!name) console.error(Error('Radio must have a name'));
  return (
    <div className="tag-ds radio-container">
      <input id={id} type="radio" name={name} {...rest} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export const TextArea = ({
  label,
  required,
  name,
  placeholder,
  error,
  onChange,
  ...rest
}: TCommonInputProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>>) => {
  if (!name) console.error(Error('TextArea must have a name'));
  return (
    <div className="tag-ds input-wrapper ">
      <label className="caption">
        {label}
        {required && <span className="required">*</span>}
      </label>
      <textarea
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        {...rest}
      />
      {error && <p className="input-helper-text input-error-text">{error}</p>}
    </div>
  );
};

export const SendButton = ({
  type,
  children,
}: {
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  children: React.ReactNode;
}) => {
  const isSent = useRef(false);

  const onSend = () => {
    // if (!isSent.current) {
    //   isSent.current = true;
    //   const resend = new Resend(import.meta.env.RESEND_KEY);
    //   resend.emails.send({
    //     from: 'imoreno.main+portfolio@gmail.com',
    //     to: 'imoreno.main+portfolio@gmail.com',
    //     subject: 'Hello World',
    //     html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
    //   });
    // }
  };

  return (
    <button
      className="button large"
      style={{ width: 'fit-content' }}
      type={type}
      onClick={onSend}
    >
      {children}
    </button>
  );
};
