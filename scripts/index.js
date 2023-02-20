import Card from './Card.js';
import FormValidator from './FormValidator.js';
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
  selectors
} from './utils.js';

const validatorProfile = new FormValidator(selectors, document.querySelector('.form-profile'));
validatorProfile.enableValidation();
formProfile.addEventListener('submit', submitProfile);

const validatorAdd = new FormValidator(selectors, document.querySelector('.form-card'));
validatorAdd.enableValidation();
formAdd.addEventListener('submit', submitAdd);

addBtn.addEventListener('click', openAdd);
editBtn.addEventListener('click', openProfile);


function createGallery(cards) {
  gallery.innerHTML = '';

  cards.forEach(element => {
    gallery.append(createCard(element));
  });

}

function createCard(item) {
  const card = new Card(item, '#card', openPopup);
  const cardElement = card.createCard();
  return cardElement;
}


function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}

function openProfile() {
  openPopup(profile);

  popupNameProfile.value = nameProfile.textContent;
  popupActivityProfile.value = activityProfile.textContent;
}

function submitProfile(evt) {
  evt.preventDefault();
  nameProfile.textContent = fieldName.value;
  activityProfile.textContent = fieldActivity.value;

  evt.target.reset();
  closePopup(profile);
}

function openAdd() {
  openPopup(cardAdd);
}

function submitAdd(evt) {
  evt.preventDefault();

  gallery.prepend(createCard({
    name: fieldTitle.value,
    link: fieldLink.value
  }));

  evt.target.reset();
  closePopup(cardAdd);
}

const closeBtns = document.querySelectorAll('.btn_type_close');
closeBtns.forEach (function (el) {
  const popup = el.closest('.popup');
  el.addEventListener ('click', () => closePopup(popup));
});

const overlays = document.querySelectorAll('.popup');
overlays.forEach (function (el) {
  el.addEventListener ('click', (evt) => {
    const classes = evt.target.classList;
    if (classes.contains('popup')) {
      closePopup(el);
    }
  });
});

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

createGallery(cards);
