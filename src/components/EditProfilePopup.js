import {useEffect, useState, useContext} from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({name, about:description}).then(() => {
      onClose();
      setName('');
      setDescription('');
    })
  }

  return (
    <PopupWithForm name='edit' title='Редактировать профиль' submit='Сохранить' isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        className='popup__input'
        placeholder='Имя'
        required
        minLength='2'
        maxLength='40'
        autoComplete='off'
        value={name || ''}
        onChange={handleChangeName}
      />
      <span className="popup__input-error"></span>
      <input
        type='text'
        name='about'
        className='popup__input'
        placeholder='О себе'
        required
        minLength='2'
        maxLength='200'
        autoComplete='off'
        value={description || ''}
        onChange={handleChangeDescription}
      />
      <span className='popup__input-error'></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;