export const Settings = ({ setActiveModal, setActiveNav }: any) => {

  const handleDelete = () => {
    setActiveModal('settings')
    setActiveNav(undefined)
  }

  const handleInfo = () => {
    setActiveModal('info')
    setActiveNav(undefined)
  }


  return (
    <div className="project-options">
      <button
        className=" project-options__delete"
        onClick={handleDelete}>
        Удалить проект
      </button>
      <button
        className="project-options__text"
        onClick={handleInfo}>
        О проекте
      </button>
    </div>

  )
}

