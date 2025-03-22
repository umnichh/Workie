import { ComponentType, useState } from 'react';
import { CreateOptionsList } from './CreateOptionsList';


export const CreateOptions = () => {
  const [ActiveOption, setActiveOption] = useState<ComponentType | undefined>()
  return (
    <div className="modal create">
      <div className="create__options">
        <CreateOptionsList ActiveOption={ActiveOption} setActiveOption={setActiveOption} />
      </div>
    </div>
  );
}
