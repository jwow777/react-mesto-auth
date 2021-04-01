import success from '../images/popup/success.svg';
import failed from '../images/popup/failed.svg';

export default function InfoTooltip({isOpen, image, text, onClose}) {
  return (
    <div className={`popup popup_overlay${isOpen ? ' popup_opened': ''}`}>
      <div className='popup__container popup__container_info'>
        <div className='popup__image-info' style={{backgroundImage: `url(${image ? success : failed})`}}></div>
        <p className='popup__text'>{text}</p>
      </div>
      <button type='button' className='popup__btn-close btn' onClick={onClose}/>
    </div>
  );
}