import throttle from 'lodash.throttle';
const ref = {
  form: document.querySelector('.feedback-form'),
};

const LOCALSTR_KEY = 'feedback-form-state';
let feedbackFormState = {};

dataFilling();

ref.form.addEventListener('submit', onFormSubmit);
ref.form.addEventListener('input', throttle(onChangeInput, 500));

function onChangeInput(evt) {
  feedbackFormState[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTR_KEY, JSON.stringify(feedbackFormState));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  localStorage.removeItem(LOCALSTR_KEY);
  this.reset();
}

function dataFilling() {
  readDataFormSaved();
  ref.form.email.value = feedbackFormState.email || '';
  ref.form.message.value = feedbackFormState.message || '';
}

function readDataFormSaved() {
  const formState = localStorage.getItem(LOCALSTR_KEY);

  try {
    feedbackFormState = JSON.parse(formState);
  } catch (error) {
    feedbackFormState.email = '';
    feedbackFormState.message = '';
    console.log(error.name);
    console.log(error.message);
  }
}
