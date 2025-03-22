import { CreateOptionsButtons } from "@/constants/sidebar.data";
import { ComponentType } from "react";

interface ActiveOption {
  ActiveOption: undefined | ComponentType
  setActiveOption: React.Dispatch<React.SetStateAction<undefined | ComponentType>>;
}

export const CreateOptionsList = ({ ActiveOption, setActiveOption }: ActiveOption) => {

  return (
    CreateOptionsButtons.map((item) => {
      return (
        <>
          <button
            key={item.text}
            className={`create__options-button`}
            data-button={item.text}
            type='submit'
            onClick={() => setActiveOption(item.component)}
          >
            <item.src />
            {item.text}
          </button>
          {ActiveOption && <ActiveOption />}
        </>

      );
    })

  )
}