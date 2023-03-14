export default class UserInfo {
  constructor(selectorName, selectorInfo) {
    this._name = document.querySelector(selectorName);
    this._info = document.querySelector(selectorInfo);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      info: this._info.textContent
    }
  }

  setUserInfo(userInfo) {
    this._name.textContent = userInfo.name;
    this._info.textContent = userInfo.info;
  }
}
