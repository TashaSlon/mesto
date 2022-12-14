const editBtn = document.querySelector('.btn_type_edit');
const editForm = document.querySelector('.popup');
const closeBtn = editForm.querySelector('.btn_type_close');
const form = document.querySelector('.edit-profile');
const nameProfile = document.querySelector('.profile__name');
const activityProfile = document.querySelector('.profile__activity');
const nameForm = editForm.querySelector('.edit-profile__field_type_name');
const activityForm = editForm.querySelector('.edit-profile__field_type_activity');

function openProfile(event) {
  editForm.classList.add('popup_opened');
  nameForm.value = nameProfile.textContent;
  activityForm.value = activityProfile.textContent;
}

function closeProfile(event) {
  editForm.classList.remove('popup_opened');
}

function saveProfile(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameForm.value;
  activityProfile.textContent = activityForm.value;
  editForm.classList.remove('popup_opened');
}

editBtn.addEventListener('click', openProfile);
closeBtn.addEventListener('click', closeProfile);
form.addEventListener('submit', saveProfile);
