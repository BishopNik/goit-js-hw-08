import throttle from 'lodash.throttle';
const ref = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input[name="email"]'),
  textarea: document.querySelector('textarea[name="message"]'),
};

const LOCALSTR_KEY = 'feedback-form-state';
const feedbackFormState = {
  email: '',
  message: '',
};

dataFilling();
console.log(feedbackFormState);

ref.input.addEventListener('input', throttle(onChangeInput, 500));
ref.textarea.addEventListener('input', throttle(onChangeInput, 500));
ref.form.addEventListener('submit', onFormSubmit);

function onChangeInput(evt) {
  feedbackFormState.email = ref.input.value;
  feedbackFormState.message = ref.textarea.value;
  localStorage.setItem(LOCALSTR_KEY, JSON.stringify(feedbackFormState));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  onChangeInput();

  console.log(feedbackFormState);

  localStorage.removeItem(LOCALSTR_KEY);
  ref.form.reset();
}

function dataFilling() {
  readDataFormSaved();
  ref.input.value =
    feedbackFormState.email !== null && feedbackFormState.email !== ''
      ? feedbackFormState.email
      : '';
  ref.textarea.value =
    feedbackFormState.message !== null && feedbackFormState.message !== ''
      ? feedbackFormState.message
      : '';
}

function readDataFormSaved() {
  const formState = localStorage.getItem(LOCALSTR_KEY);

  try {
    feedbackFormStateParse = JSON.parse(formState);
    feedbackFormState.email = feedbackFormStateParse.email;
    feedbackFormState.message = feedbackFormStateParse.message;
  } catch (error) {
    feedbackFormState.email = '';
    feedbackFormState.message = '';
    console.log(error.name);
    console.log(error.message);
  }
}
