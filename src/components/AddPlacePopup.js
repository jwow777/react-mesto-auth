import {useState} from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({name, link});
    onClose();
    setName('');
    setLink('');
  }

  return (
    <PopupWithForm name='add' title='Новое место' submit='Создать' isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <input 
        type='text'
        name='name' 
        className='popup__input' 
        placeholder='Название' 
        required 
        minLength='2' 
        maxLength='30' 
        autoComplete='off' 
        value={name || ''}
        onChange={handleChangeName}
      />
      <span className='popup__input-error'></span>
      <input 
        type='url'
        name='link' 
        className='popup__input' 
        placeholder='Ссылка на изображение' 
        required 
        autoComplete='off' 
        value={link || ''}
        onChange={handleChangeLink}
      />
      <span className='popup__input-error'></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;