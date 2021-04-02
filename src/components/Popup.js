export default function Popup({isOpen, onClose, children, name}) {
  return (
    <div className={`popup popup_overlay_form popup_type_${name}${isOpen ? ' popup_opened': ''}`}>
      <div className='popup__container'>
        {children}
      </div>
      <button type='button' className='popup__btn-close btn' onClick={onClose}></button>
    </div>
  );
}