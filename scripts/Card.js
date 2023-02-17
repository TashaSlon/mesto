import { fullCard, fullCardImage, fullCardTitle } from './utils.js';

export default class Card {
  constructor(cardData, templateSelector, openPopup) {
    this._cardData = cardData;
    this._templateSelector = templateSelector;
    this._openPopup = openPopup;
  }

  _getElement() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card__block')
      .cloneNode(true);

    return cardElement;
  }

  _setDeleteListeners() {
		this._element.querySelector('.btn_type_delete').addEventListener('click', () => {
			this._deleteCard();
		});
	}

  _deleteCard() {
    this._element.remove();
  }

  _setLikeListeners() {
		this._element.querySelector('.btn_type_like').addEventListener('click', () => {
			this._likeCard();
		});
	}

  _likeCard() {
    this._element.querySelector('.btn_type_like').classList.toggle('btn_type_like_active');
  }

  _setImageListeners() {
		this._element.querySelector('.card__image').addEventListener('click', () => {
			this._openCard();
		});
	}

  _openCard() {
    this._openPopup(fullCard);

    const image = this._cardData.link;
    const name = this._cardData.name;

    fullCardImage.src = image;
    fullCardImage.alt = name;
    fullCardTitle.textContent = name;
  }

  createCard () {
    this._element = this._getElement();
    const image = this._element.querySelector('.card__image');
    image.src = this._cardData.link;
    image.alt = this._cardData.name;
    this._element.querySelector('.card__name').textContent = this._cardData.name;

    this._setDeleteListeners();
    this._setLikeListeners();
    this._setImageListeners();

    return this._element;
  }
}
