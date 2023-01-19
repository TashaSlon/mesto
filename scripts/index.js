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

    const cardTemplate = document.querySelector('#full-card').content;
    const page = document.querySelector('.page');

    const cardElement = cardTemplate.querySelector('.popup').cloneNode(true);

    cardElement.querySelector('.popup__image').src = image;
    cardElement.querySelector('.popup__image').alt = name;
    cardElement.querySelector('.popup__title-small').textContent = name;

    const closeBtn = cardElement.querySelector('.btn_type_close');
    closeBtn.addEventListener('click', function() {
      const popup = closeBtn.closest('.popup');
      popup.remove();
    });

    page.append(cardElement);
  }
}

function deleteCard(evt) {
  const delButton = evt.target;
  console.log(delButton.parentElement);
  const delCard = delButton.closest('.card__block');
  const name = delCard.querySelector('.card__name').textContent;
  let i = 0;
  cards.forEach (function (el) {
    if (el.name === name) {
      cards.splice(i, 1);
    }
    i += 1;
  });

  console.log(name);
  delCard.remove();
}

function likeCard(evt) {
  const likeButton = evt.target;
  likeButton.classList.toggle('btn_type_like_active');
}

function openProfile() {
  const popup = document.querySelector('#popup').content;
  const page = document.querySelector('.page');

  const popupElement = popup.querySelector('.popup').cloneNode(true);

  popupElement.querySelector('.popup__title').textContent = 'Редактировать профиль';
  popupElement.querySelector('.btn_type_save').textContent = 'Сохранить';

  const userName = document.createElement('input');
  userName.className = 'form__field form__field_type_name';
  userName.type = 'text';
  userName.placeholder = 'Имя';
  userName.name = 'name';
  userName.value = nameProfile.textContent;

  const activity = document.createElement('input');
  activity.className = 'form__field form__field_type_activity';
  activity.type = 'text';
  activity.placeholder = 'О себе';
  activity.name = 'activity';
  activity.value = activityProfile.textContent;

  const form = popupElement.querySelector('.form');
  form.prepend(activity);
  form.prepend(userName);
  form.addEventListener('submit', savePopup);

  formType = 'profile';

  const closeBtn = popupElement.querySelector('.btn_type_close');
  closeBtn.addEventListener('click', function() {
    const popup = closeBtn.closest('.popup');
    popup.remove();
  });

  page.append(popupElement);
}

function openAdd() {
  const popup = document.querySelector('#popup').content;
  const page = document.querySelector('.page');

  const popupElement = popup.querySelector('.popup').cloneNode(true);

  popupElement.querySelector('.popup__title').textContent = 'Новое место';
  popupElement.querySelector('.btn_type_save').textContent = 'Создать';

  formType = 'add';

  const title = document.createElement('input');
  title.className = 'form__field form__field_type_title';
  title.type = 'text';
  title.placeholder = 'Название';
  title.name = 'title';

  const link = document.createElement('input');
  link.className = 'form__field form__field_type_link';
  link.type = 'text';
  link.placeholder = 'Ссылка на картинку';
  link.name = 'link';

  const form = popupElement.querySelector('.form');
  form.prepend(link);
  form.prepend(title);
  form.addEventListener('submit', savePopup);

  const closeBtn = popupElement.querySelector('.btn_type_close');
  closeBtn.addEventListener('click', function() {
    const popup = closeBtn.closest('.popup');
    popup.remove();
  });

  page.append(popupElement);
}

function closePopup() {
  const popup = closeBtn.closest('.popup');

  popup.remove();
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

  popup.remove();
}

editBtn.addEventListener('click', openProfile);
addBtn.addEventListener('click', openAdd);

createGallery(initialCards);
