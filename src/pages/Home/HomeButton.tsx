import { ReactNode } from 'react';

type ButtonProps = {
  svg: ReactNode | null;
  buttonText: string;
  className?: string;
};

export default function HomeButton({
  svg,
  buttonText,
  className,
}: ButtonProps) {
  return (
    <button className={className}>
      {svg} {buttonText}
    </button>
  );
}
