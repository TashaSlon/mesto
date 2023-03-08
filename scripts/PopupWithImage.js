import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
  constructor(selector, name, link) {
    super(selector);
    this._name = name;
    this._link = link;
    this._fullCardImage = this._popup.querySelector('.popup__image');
    this._fullCardTitle = this._popup.querySelector('.popup__title-small');
  }

  open () {
    super.open();

    this._fullCardImage.src = this._link;
    this._fullCardImage.alt = this._name;
    this._fullCardTitle.textContent = this._name;
  }
}
