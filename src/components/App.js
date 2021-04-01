import {useEffect, useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from './ImagePopup';
import DeletePopup from './DeletePopup';
import api from '../utils/api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import {Switch, Route, withRouter} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ProtectRoute from "./ProtectedRoute";
import {getContent} from "./Auth";
import InfoTooltip from './InfoTooltip';

function App(props) {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState(false);
  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isErrorRegistration, setIsErrorRegistration] = useState(false);
  const [isSuccessRegistration, setIsSuccessRegistration] = useState(false);

  useEffect(() => 
    api.getUserInfo()
    .then(userDataFromServer => setCurrentUser(userDataFromServer))
    .catch(err => console.log(err)
  ), [])

  // Открытие попапов
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardDeleteClick(card) {
    setIsDeletePopupOpen(card);
  }

  // Закрытие попапов
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsDeletePopupOpen(false);
    setSelectedCard(false);
  }

  // Обновление данных пользователя
  function handleUpdateUser(userData) {
    api.setUserInfo(userData)
    .then(res => setCurrentUser(res))
    .catch(err => console.log(err));
  }

  function handleUpdateAvatar(userData) {
    api.setUserAvatar(userData)
    .then(res => setCurrentUser(res))
    .catch(err => console.log(err));
  }

  useEffect(() => 
    api.getInitialCards()
    .then(cardsFromServer => setCards(cardsFromServer))
    .catch(err => console.log(err)
  ), []); 

  // Лайк/дизлайк карточки
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    if (!isLiked) {
      api.like(card._id)
      .then(newCard => setCards(state => state.map(c => c._id === card._id ? newCard : c)))
      .catch(err => console.log(err));
    } else {
      api.dislike(card._id)
      .then(newCard => setCards(state => state.map(c => c._id === card._id ? newCard : c)))
      .catch(err => console.log(err));
    }
  } 

  // Добавление карточки
  function handleAddPlace(cardData) {
    api.postCard(cardData)
    .then(newCard => setCards([newCard, ...cards]))
    .catch(err => console.log(err));
  }

  // Удаление карточки
  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then(() => setCards(cards.filter(c => c._id !== card._id)))
    .catch(err => console.log(err));
  }

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      getContent(token).then(res => {
        if (res) {
          setLoggedIn(true);
          props.history.push('/');
        }
      })
    };
  }, []);

  function handleLogin() {
    setLoggedIn(true);
  }

  function closeSuccessToolTip() {
    setIsSuccessRegistration(false);
    props.history.push('/sign-in');
  }

  function closeErrorToolTip() {
    setIsErrorRegistration(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header 
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
      <main className="content">
        <Switch>
          <ProtectRoute 
            exact path='/' 
            loggedIn={loggedIn} 
            component={Main} 
            cards={cards}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardDelete={handleCardDeleteClick}
            onCardClick={setSelectedCard}
            onCardLike={handleCardLike}/>
          <Route path='/sign-in'>
            <Login
              handleLogin={handleLogin}
            />
          </Route>
          <Route path='/sign-up'>
            <Register 
              setIsSuccessRegistration={setIsSuccessRegistration}
              setIsErrorRegistration={setIsErrorRegistration}
            />
          </Route>
        </Switch>
      </main>
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlace}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />
      <DeletePopup
        isOpen={isDeletePopupOpen}
        onClose={closeAllPopups}
        onDeleteCard={handleCardDelete}
      />
      <ImagePopup 
        card={selectedCard} 
        onClose={closeAllPopups} 
      />
      <InfoTooltip 
        text={'Вы успешно зарегистрировались!'}
        image={true}
        isOpen={isSuccessRegistration}
        onClose={closeSuccessToolTip}
      />
      <InfoTooltip 
        text={'Что-то пошло не так! Попробуйте ещё раз.'}
        image={false}
        isOpen={isErrorRegistration}
        onClose={closeErrorToolTip}
      />
      <Footer />
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);