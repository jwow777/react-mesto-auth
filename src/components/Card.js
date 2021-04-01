import {useContext} from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Card({card, onCardClick, onCardLike, onCardDelete}) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `element__btn-delete btn ${isOwn ? 'element__btn-delete_visible' : 'element__btn-delete_hidden'}`
  ); 

  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `element__btn-like btn ${isLiked && 'element__btn-like_active'}`
  );

  function handleClick() {
    onCardClick(card);
  }  

  function handleLikeClick() {
    onCardLike(card);
  }  

  function handleDeleteClick() {
    onCardDelete(card);
  }  

  return (
    <li className='element'>
      <div className='element__image' style={{backgroundImage: `url(${card.link})`}} onClick={handleClick}></div>
      <button type='button' className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
      <div className='element__container'>
        <h2 className='element__location'>{card.name}</h2>
        <div className='element__like-container'>
          <button type='button' className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
          <span className='element__like-counter'>{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;