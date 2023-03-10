import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';
import UserInfo from './components/UserInfo.js';
import './styles/index.css';

import {
  addBtn,
  editBtn,
  cards,
  gallery,
  popupNameProfile,
  nameProfile,
  activityProfile,
  popupActivityProfile,
  selectors
} from './components/utils.js';

const validatorProfile = new FormValidator(selectors, document.querySelector('.form-profile'));
validatorProfile.enableValidation();

const validatorAdd = new FormValidator(selectors, document.querySelector('.form-card'));
validatorAdd.enableValidation();

addBtn.addEventListener('click', openAdd);
editBtn.addEventListener('click', openProfile);

const popupProfile = new PopupWithForm('#profile', submitProfile);
popupProfile.setEventListeners();

const popupAdd = new PopupWithForm('#add', submitAdd);
popupAdd.setEventListeners();

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
  popupProfile.open();
  const userData = userInfo.getUserInfo();

  popupNameProfile.value = userData.name;
  popupActivityProfile.value = userData.info;
}

function submitProfile(userData) {
  userInfo.setUserInfo(userData, nameProfile, activityProfile);
}

function openAdd() {
  popupAdd.open();
}

function submitAdd(cardData) {
  gallery.prepend(createCard({
    name: cardData.name,
    link: cardData.link
  }));
}

createGallery(cards);
