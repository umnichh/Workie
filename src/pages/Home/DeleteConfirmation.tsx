export const DeleteConfiramtion = () => {
  return (
    <div className="confirmation">
      <span className="confirmation__text">Вы уверены что хотите удалить проект?</span>
      <div className="confrimation__buttons">
        <button className="confirmation__confirm">Да</button>
        <button className="confirmation__deny">Нет</button>
      </div>
    </div>
  )
}