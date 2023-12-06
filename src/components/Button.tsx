import { MouseEventHandler, ReactNode } from 'react';

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
};

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      type="button"
      className="border-white text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
