export default class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    const closeBtn = this._popup.querySelector('.btn_type_close');
    closeBtn.addEventListener('click', () => this.close());

    this._popup.addEventListener ('click', (evt) => {
      const classes = evt.target.classList;
      if (classes.contains('popup')) {
        this.close();
      }
    });
  }
}
