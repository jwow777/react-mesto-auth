function ImagePopup({card, onClose}) {
  return (
    <div className={`popup popup_overlay_image${card ? ' popup_opened' : ''}`}>
      <div className='popup__container popup__container_image'>
        <img className='popup__image' src={card ? card.link : ''} alt={card ? card.name : ''}/>
        <p className='popup__description'>{card ? card.name : ''}</p>
      </div>
      <button type='button' className='popup__btn-close btn' onClick={onClose}></button>
    </div>
  );
}

export default ImagePopup;