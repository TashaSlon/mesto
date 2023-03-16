import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import './index.css';

import {
  addBtn,
  editBtn,
  cards,
  popupNameProfile,
  popupActivityProfile,
  selectors
} from '../components/utils.js';

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

const popupImage = new PopupWithImage('#full-card');
popupImage.setEventListeners();

const userInfo = new UserInfo('.profile__name', '.profile__activity');

const section = new Section({ items: cards, renderer }, '.cards');

function renderer(item) {
  section.addItem(createCard(item));
}

function createCard(item) {
  const card = new Card(item, '#card', handleCardClick);
  const cardElement = card.createCard();
  return cardElement;
}

function handleCardClick(data) {
  popupImage.open(data);
}

function openProfile() {
  validatorProfile.resetValidation();
  popupProfile.open();
  const userData = userInfo.getUserInfo();

  popupNameProfile.value = userData.name;
  popupActivityProfile.value = userData.info;
}

function submitProfile(userData) {
  userInfo.setUserInfo(userData);
}

function openAdd() {
  validatorAdd.resetValidation();
  popupAdd.open();
}

function submitAdd(cardData) {
  section.addItem(createCard({
    name: cardData.name,
    link: cardData.link
  }));
}

section.renderItems();
