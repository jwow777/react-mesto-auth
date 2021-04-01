function PopupWithForm({isOpen, onClose, onSubmit, children, submit, name, title}) {
  return (
    <>
      <div className={`popup popup_overlay_form popup_type_${name}${isOpen ? ' popup_opened': ''}`}>
        <div className='popup__container'>
          <form className={`popup__form popup__form_type_${name}`} onSubmit={onSubmit}>
            <h2 className='popup__title'>{title}</h2>
            {children}
            <button type='submit' className='popup__button btn'>{submit}</button>
          </form>
        </div>
        <button type='button' className='popup__btn-close btn' onClick={onClose}></button>
      </div>
    </>
  );
}

export default PopupWithForm;