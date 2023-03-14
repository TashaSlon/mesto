export default class Card {
  constructor(cardData, templateSelector, handleCardClick) {
    this._cardData = cardData;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
    this._element = null;
  }

  _setLikeListeners() {
		this._likeButton.addEventListener('click', () => {
			this._likeCard();
		});
	}

  _likeCard() {
    this._likeButton.classList.toggle('btn_type_like_active');
  }

  _setImageListeners() {
		this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._cardData);
		});
	}

  createCard () {
    this._element = this._getElement();
    this._likeButton = this._element.querySelector('.btn_type_like');
    this._cardImage = this._element.querySelector('.card__image');
    this._cardImage.src = this._cardData.link;
    this._cardImage.alt = this._cardData.name;
    this._element.querySelector('.card__name').textContent = this._cardData.name;

    this._setDeleteListeners();
    this._setLikeListeners();
    this._setImageListeners();

    return this._element;
  }
}
