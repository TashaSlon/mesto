import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(selector, submitForm) {
    super(selector);
    this._submitForm = submitForm;
    this._form = this._popup.querySelector('.form');
  }

  _getInputValues() {
    const data = {};
    const fields = this._popup.querySelectorAll('input');
    fields.forEach(field => {
      data[field.name] = field.value;
    });
    return data;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
