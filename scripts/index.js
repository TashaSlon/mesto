const editBtn = document.querySelector('.btn_type_edit');
const addBtn = document.querySelector('.btn_type_add');

let formType = 'form';
const nameProfile = document.querySelector('.profile__name');
const activityProfile = document.querySelector('.profile__activity');

const initialCards = [
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

let cards = initialCards;

function createGallery(cards) {
  document.querySelector('.cards').innerHTML = '';

  cards.forEach(element => {
    createCard(element);
  });

}

function createCard(cardData) {
  const cardTemplate = document.querySelector('#card').content;
  const cards = document.querySelector('.cards');

  const cardElement = cardTemplate.querySelector('.card__block').cloneNode(true);
  cardElement.querySelector('.card__image').src = cardData.link;
  cardElement.querySelector('.card__image').alt = cardData.name;
  cardElement.querySelector('.card__name').textContent = cardData.name;

  const delBtn = cardElement.querySelector('.btn_type_delete');
  delBtn.addEventListener('click', deleteCard);

  const likeBtn = cardElement.querySelector('.btn_type_like');
  likeBtn.addEventListener('click', likeCard);

  cardElement.addEventListener('click', openCard);

  cards.append(cardElement);
}

function openCard(evt) {
  const element = evt.target;

  if (!((element.classList.value === "btn btn_type_delete")||(element.classList.value.includes("btn_type_like")))) {
    const card = element.parentElement;

    const image = card.querySelector('.card__image').src;
    const name = card.querySelector('.card__name').textContent;

    const popup = document.querySelector('#full-card');

    popup.classList.add('popup_opened');
    popup.querySelector('.popup__image').src = image;
    popup.querySelector('.popup__image').alt = name;
    popup.querySelector('.popup__title-small').textContent = name;
  }
}

function deleteCard(evt) {
  const delButton = evt.target;
  const delCard = delButton.closest('.card__block');
  const name = delCard.querySelector('.card__name').textContent;
  let i = 0;
  cards.forEach (function (el) {
    if (el.name === name) {
      cards.splice(i, 1);
    }
    i += 1;
  });

  delCard.remove();
}

function likeCard(evt) {
  const likeButton = evt.target;
  likeButton.classList.toggle('btn_type_like_active');
}

function openProfile() {
  const popup = document.querySelector('#profile');
  popup.classList.add('popup_opened');

  const userName = popup.querySelector('.form__field_type_name');
  userName.value = nameProfile.textContent;

  const activity = popup.querySelector('.form__field_type_activity');
  activity.value = activityProfile.textContent;

  const form = popup.querySelector('.form');
  form.addEventListener('submit', savePopup);

  formType = 'profile';
}

function openAdd() {
  const popup = document.querySelector('#add');
  popup.classList.add('popup_opened');

  formType = 'add';

  const form = popup.querySelector('.form');
  form.addEventListener('submit', savePopup);
}

function savePopup(evt) {
  evt.preventDefault();
  const target = evt.target;
  const popup = target.closest('.popup');

  if (formType === 'profile') {
    nameProfile.textContent = popup.querySelector('.form__field_type_name').value;
    activityProfile.textContent = popup.querySelector('.form__field_type_activity').value;
  }
  if (formType === 'add') {
    const newCard = {
      name: popup.querySelector('.form__field_type_title').value,
      link: popup.querySelector('.form__field_type_link').value
    };

    cards = [newCard, ...cards];
    createGallery(cards);
  }

  popup.querySelectorAll('.form__field').forEach (function (el) {
    el.value = '';
  });
  popup.classList.remove('popup_opened');
}

editBtn.addEventListener('click', openProfile);
addBtn.addEventListener('click', openAdd);

const closeBtn = document.querySelectorAll('.btn_type_close');
closeBtn.forEach (function (el) {
  el.addEventListener ('click', function () {
    const popup = el.closest('.popup');
    popup.classList.remove('popup_opened');
  });
});

createGallery(initialCards);
