// Объявление переменных
const editButton = document.querySelector(".profile__btn-edit");
const editProfilePopup = document.querySelector(".popup_type_edit");
const editProfileForm = document.querySelector(".popup__form_type_edit");
const authorName = document.querySelector(".profile__full-name");
const authorDescription = document.querySelector(".profile__description");
const authorAvatar = document.querySelector(".profile__avatar-image");
const nameInput = document.querySelector(".popup__input_type_name");
const descriptionInput = document.querySelector(".popup__input_type_desc");

const addButton = document.querySelector(".profile__btn-add");
const addCardPopup = document.querySelector(".popup_type_add");
const addCardForm = document.querySelector(".popup__form_type_add");
const titleCardInput = document.querySelector(".popup__input_type_title");
const linkCardInput = document.querySelector(".popup__input_type_link");

const cardsContainerElement = document.querySelector(".elements__container");
const cardSelector = document.querySelector("#card-template");

const openPopupImage = document.querySelector(".popup_overlay_image");
const popupImage = document.querySelector(".popup__image");
const popupDescription = document.querySelector(".popup__description");

const updateAvatarPopup = document.querySelector(".popup_type_avatar");
const updateAvatarForm = document.querySelector(".popup__form_type_avatar");
const avatarButton = document.querySelector(".profile__overlay");

const deletePopup = document.querySelector(".popup_type_delete");

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

export {
  editButton, editProfilePopup, editProfileForm, avatarButton,
  authorName, authorDescription, authorAvatar,
  nameInput, descriptionInput, deletePopup,
  addButton, addCardPopup, addCardForm,
  titleCardInput, linkCardInput,
  cardsContainerElement, cardSelector,
  config, updateAvatarPopup, updateAvatarForm,
  openPopupImage, popupImage, popupDescription
};