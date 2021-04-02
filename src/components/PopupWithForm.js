import Popup from "./Popup";

export default function PopupWithForm({isOpen, onClose, onSubmit, children, submit, name, title}) {
  return (
    <Popup isOpen={isOpen} onClose={onClose} name={name}>
      <form className={`popup__form popup__form_type_${name}`} onSubmit={onSubmit}>
        <h2 className='popup__title'>{title}</h2>
        {children}
        <button type='submit' className='popup__button btn'>{submit}</button>
      </form>
    </Popup>      
  );
};