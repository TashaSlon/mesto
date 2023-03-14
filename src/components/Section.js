export default class Section {
  constructor({ items, renderer}, selector) {
    this._items = items.reverse();
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  renderItems() {
    this._container.innerHTML = '';
    this._items.forEach(item => this._renderer(item));
  }

  addItem(element) {
    this._container.prepend(element);
  }

}
