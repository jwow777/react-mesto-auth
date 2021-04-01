import PopupWithForm from './PopupWithForm';

function DeletePopup({isOpen, onClose, onDeleteCard}) {
  function handleSubmit(e) {
    e.preventDefault();
    onDeleteCard(isOpen);
    onClose();
  }

  return <PopupWithForm 
          name='delete '
          title='Вы уверены?'
          submit='Да'
          isOpen={isOpen} 
          onClose={onClose} 
          onSubmit={handleSubmit} 
         />;
}

export default DeletePopup;