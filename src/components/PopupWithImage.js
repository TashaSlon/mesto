import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
  constructor(selector) {
    super(selector);
    this._fullCardImage = this._popup.querySelector('.popup__image');
    this._fullCardTitle = this._popup.querySelector('.popup__title-small');
  }

  open ({link, name}) {
    super.open();

    this._fullCardImage.src = link;
    this._fullCardImage.alt = name;
    this._fullCardTitle.textContent = name;
  }
}
