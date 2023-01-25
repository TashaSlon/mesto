const gallery = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card').content;
const fullCard = document.querySelector('#full-card');
const fullCardImage = fullCard.querySelector('.popup__image');
const fullCardTitle = fullCard.querySelector('.popup__title-small');

const profile = document.querySelector('#profile');
const popupNameProfile = profile.querySelector('.form__field_type_name');
const popupActivityProfile = profile.querySelector('.form__field_type_activity');
const formProfile = profile.querySelector('.form');
formProfile.addEventListener('submit', submitProfile);
const fieldName = profile.querySelector('.form__field_type_name');
const fieldActivity = profile.querySelector('.form__field_type_activity');

const add = document.querySelector('#add');
const formAdd = add.querySelector('.form');
formAdd.addEventListener('submit', submitAdd);
const fieldTitle = add.querySelector('.form__field_type_title');
const fieldLink = add.querySelector('.form__field_type_link');
const addBtn = document.querySelector('.btn_type_add');
addBtn.addEventListener('click', openAdd);

const editBtn = document.querySelector('.btn_type_edit');
editBtn.addEventListener('click', openProfile);

const nameProfile = document.querySelector('.profile__name');
const activityProfile = document.querySelector('.profile__activity');

const cards = [
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

function createGallery(cards) {
  gallery.innerHTML = '';

  cards.forEach(element => {
    const card = createCard(element);
    gallery.append(card);
  });

}

function createCard(cardData) {
  const cardElement = cardTemplate.querySelector('.card__block').cloneNode(true);
  const image = cardElement.querySelector('.card__image');
  image.src = cardData.link;
  image.alt = cardData.name;
  cardElement.querySelector('.card__name').textContent = cardData.name;

  const delBtn = cardElement.querySelector('.btn_type_delete');
  delBtn.addEventListener('click', deleteCard);

  const likeBtn = cardElement.querySelector('.btn_type_like');
  likeBtn.addEventListener('click', likeCard);

  image.addEventListener('click', openCard);

  return cardElement;
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}


function openCard(evt) {
  openPopup(fullCard);

  const element = evt.target;

  const card = element.closest('.card');

  const image = card.querySelector('.card__image').src;
  const name = card.querySelector('.card__name').textContent;

  fullCardImage.src = image;
  fullCardImage.alt = name;
  fullCardTitle.textContent = name;
}

function deleteCard(evt) {
  const delButton = evt.target;
  const delCard = delButton.closest('.card__block');

  delCard.remove();
}

function likeCard(evt) {
  const likeButton = evt.target;
  likeButton.classList.toggle('btn_type_like_active');
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
  openPopup(add);
}

function submitAdd(evt) {
  evt.preventDefault();
  const newCard = {
    name: fieldTitle.value,
    link: fieldLink.value
  };

  gallery.prepend(createCard(newCard));

  evt.target.reset();
  closePopup(add);
}

const closeBtns = document.querySelectorAll('.btn_type_close');
closeBtns.forEach (function (el) {
  const popup = el.closest('.popup');
  el.addEventListener ('click', () => closePopup(popup));
});

createGallery(cards);
