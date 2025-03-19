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
  const { setModal, modal } = useUIContext();

  useEffect(() => {
    console.log(modal)
    setModal('');
  }, [projectId])

  useEffect(() => {
    console.log(modal)
  }, [modal])

  const handleClick = () => {
    setModal(text)
  }

  return (
    <div>
      <button className="main__button" onClick={handleClick}>
        {BeforeIcon && <BeforeIcon />}
        {text}
        {AfterIcon && <AfterIcon />}
      </button>
      {modal === 'Настройки' && Modal && <Modal />}
    </div>
  );
};