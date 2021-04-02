import {useRef} from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({avatar: inputRef.current.value})
      onClose();
      e.target.reset();
  }

  return (
    <PopupWithForm name='avatar' title='Обновить аватар' submit='Сохранить' isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <input
        type='url'
        name='avatar'
        className='popup__input'
        placeholder='Ссылка на изображение'
        required
        autoComplete='off'
        ref={inputRef}
      />
      <span className='popup__input-error'></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;