import { useUIContext } from '@/hooks/useUIContext';
import { ComponentType, useEffect } from 'react';
import { useParams } from 'react-router-dom';

type ButtonProps = {
  BeforeIcon?: ComponentType;
  AfterIcon?: ComponentType;
  text: string;
  Modal?: ComponentType
};

export const HomeButton = ({ BeforeIcon, text, AfterIcon, Modal }: ButtonProps) => {
  const { projectId } = useParams();
  const { setIsModal, isModal } = useUIContext();

  useEffect(() => {
    console.log(isModal)
    setIsModal(false);
  }, [projectId])

  useEffect(() => {
    console.log(isModal)
  }, [isModal])

  const handleClick = () => {
    setIsModal(text)
  }

  return (
    <div>
      <button className="main__button" onClick={handleClick}>
        {BeforeIcon && <BeforeIcon />}
        {text}
        {AfterIcon && <AfterIcon />}
      </button>
      {isModal === text && Modal && <Modal />}
    </div>
  );
};