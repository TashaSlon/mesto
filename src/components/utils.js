export const gallery = document.querySelector('.cards');

export const popupNameProfile = profile.querySelector('.form__input_type_name');
export const popupActivityProfile = profile.querySelector('.form__input_type_activity');

export const addBtn = document.querySelector('.btn_type_add');
export const editBtn = document.querySelector('.btn_type_edit');

export const nameProfile = document.querySelector('.profile__name');
export const activityProfile = document.querySelector('.profile__activity');


const arkhyz = new URL('../images/arkhyz.jpg', import.meta.url);
const chelybinsk = new URL('../images/chelyabinsk-oblast.jpg', import.meta.url);
const ivanovo = new URL('../images/ivanovo.jpg', import.meta.url);
const kamchatka = new URL('../images/kamchatka.jpg', import.meta.url);
const kholmogorsk = new URL('../images/kholmogorsky-rayon.jpg', import.meta.url);
const baikal = new URL('../images/baikal.jpg', import.meta.url);


export const cards = [
  {
    name: 'Архыз',
    link: arkhyz
  },
  {
    name: 'Челябинская область',
    link: chelybinsk
  },
  {
    name: 'Иваново',
    link: ivanovo
  },
  {
    name: 'Камчатка',
    link: kamchatka
  },
  {
    name: 'Холмогорский район',
    link: kholmogorsk
  },
  {
    name: 'Байкал',
    link: baikal
  }
];

export const selectors = {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'btn_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};
