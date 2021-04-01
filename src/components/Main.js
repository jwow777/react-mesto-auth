import {useContext} from 'react';
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main({onEditAvatar, onEditProfile, onAddPlace, cards, onCardClick, onCardLike, onCardDelete}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className='content'>
      <section className='profile'>
        <div className='profile__avatar' style={{backgroundImage: `url(${currentUser.avatar})`}} onClick={onEditAvatar}></div>
        <div className='profile__info'>
          <div className='profile__info-container'>
            <h1 className='profile__full-name'>{currentUser.name}</h1>
            <button type='button' className='profile__btn-edit btn' onClick={onEditProfile}></button>
          </div>
          <p className='profile__description'>{currentUser.about}</p>
        </div>
        <button type='button' className='profile__btn-add btn' onClick={onAddPlace}></button>
      </section>
      <section className='elements'>
        <ul className='elements__container'>
          {cards.map(item => (
            <Card card={item} 
            onCardClick={onCardClick} 
            onCardLike={onCardLike} 
            onCardDelete={onCardDelete} 
            key={item._id}/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;