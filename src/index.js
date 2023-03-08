import Card from '../scripts/Card.js';
import FormValidator from '../scripts/FormValidator.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import UserInfo from '../scripts/UserInfo.js';

import {
  formProfile,
  formAdd,
  addBtn,
  editBtn,
  cards,
  gallery,
  cardAdd,
  popupNameProfile,
  fieldActivity,
  fieldLink,
  fieldName,
  fieldTitle,
  nameProfile,
  activityProfile,
  popupActivityProfile,
  selectors,
  fullCard,
  fullCardImage,
  fullCardTitle
} from '../scripts/utils.js';

const validatorProfile = new FormValidator(selectors, document.querySelector('.form-profile'));
validatorProfile.enableValidation();

const validatorAdd = new FormValidator(selectors, document.querySelector('.form-card'));
validatorAdd.enableValidation();
formAdd.addEventListener('submit', submitAdd);

addBtn.addEventListener('click', openAdd);
editBtn.addEventListener('click', openProfile);

const userInfo = new UserInfo('.profile__name', '.profile__activity');


function createGallery(cards) {
  gallery.innerHTML = '';

  cards.forEach(element => {
    gallery.append(createCard(element));
  });

}

function createCard(item) {
  const card = new Card(item, '#card', handleCardClick);
  const cardElement = card.createCard();
  return cardElement;
}

function handleCardClick(name, link) {
  const popup = new PopupWithImage('#full-card', name, link);
  popup.open();
  popup.setEventListeners();
}

function openProfile() {
  const popup = new PopupWithForm('#profile', submitProfile);
  popup.open();
  popup.setEventListeners();
  const userData = userInfo.getUserInfo();

  popupNameProfile.value = userData.name;
  popupActivityProfile.value = userData.info;
}

function submitProfile(userData) {
  userInfo.setUserInfo(userData, nameProfile, activityProfile);
}

function openAdd() {
  const popup = new PopupWithForm('#add', submitAdd);
  popup.open();
  popup.setEventListeners();
}

function submitAdd(cardData) {
  gallery.prepend(createCard({
    name: cardData.name,
    link: cardData.link
  }));
}

createGallery(cards);
