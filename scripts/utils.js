export const gallery = document.querySelector('.cards');
export const fullCard = document.querySelector('#full-card');
export const fullCardImage = fullCard.querySelector('.popup__image');
export const fullCardTitle = fullCard.querySelector('.popup__title-small');

export const profile = document.querySelector('#profile');
export const popupNameProfile = profile.querySelector('.form__input_type_name');
export const popupActivityProfile = profile.querySelector('.form__input_type_activity');
export const formProfile = profile.querySelector('.form');
export const fieldName = profile.querySelector('.form__input_type_name');
export const fieldActivity = profile.querySelector('.form__input_type_activity');

export const cardAdd = document.querySelector('#add');
export const formAdd = cardAdd.querySelector('.form');
export const fieldTitle = cardAdd.querySelector('.form__input_type_title');
export const fieldLink = cardAdd.querySelector('.form__input_type_link');
export const addBtn = document.querySelector('.btn_type_add');

export const editBtn = document.querySelector('.btn_type_edit');

export const nameProfile = document.querySelector('.profile__name');
export const activityProfile = document.querySelector('.profile__activity');

export const cards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const selectors = {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'btn_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};
