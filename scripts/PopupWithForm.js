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
    console.log(data);
    return data;
  }

  _submit(evt) {
    evt.preventDefault();
    this._submitForm(this._getInputValues());
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submit);
  }

  close() {
    super.close();
    this._form.reset();
    this._form.removeEventListener('submit', this._submit);
  }
}
