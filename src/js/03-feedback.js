// // import throttle from 'lodash.throttle';

// // const formEl = document.querySelector('.feedback-form');
// // const inputEl = document.querySelector('input');
// // const textareaEl = document.querySelector('textarea');

// // const STORAGE_KEY = 'feedback-form-state';
// // const formData = { email: "", message: "" };

// // formEl.addEventListener('click', throttle(onFormClick, 500));
// // formEl.addEventListener('submit', onFormSubmit);

// // populateMsgInput();


// // function onFormClick(event) {
// //     const formData = {
//         email: inputEl.value.trim(),
//         message: textareaEl.value.trim()
//     };
//    return localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// // };

// // function populateMsgInput(event) {
// //     const savedMsg = localStorage.getItem(STORAGE_KEY);
// //     inputEl.value = savedMsg.email || '';
// //     textareaEl.value = savedMsg.message || '';
// //     return savedMsg;
// // };

// // function onFormSubmit(event) {
// //     event.preventDefault();
   
// //   console.log(populateMsgInput());
// //     event.target.reset();

// //     localStorage.removeItem(STORAGE_KEY);
 
// // };


import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';
const formData = { email: "", message: "" }

formEl.addEventListener('click', throttle(onFormClick, 500));
formEl.addEventListener('submit', onFormSubmit);

populateMsgInput();


function onFormClick(event) {
    
    formData.email = inputEl.value.trim();
    formData.message = textareaEl.value.trim();
    
   return localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function populateMsgInput() {
    const savedMsg = JSON.parse(localStorage.getItem(STORAGE_KEY));
  
        inputEl.value = savedMsg.email || '';
        textareaEl.value = savedMsg.message || '';
   
    return savedMsg;
};

function onFormSubmit(event) {
    event.preventDefault();
  
    console.log(populateMsgInput());
    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);
};


// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';
// const formData = {};

// const formEl = document.querySelector('.feedback-form');
// const inputEl = document.querySelector('input');
// const textareaEl = document.querySelector('textarea');

// formEl.addEventListener('submit', onFormSubmit);
// formEl.addEventListener('input', throttle(onInput, 500));

// populateFormInput();

// function onFormSubmit(e) {
//   e.preventDefault();
//   if (textareaEl.value === '' || inputEl.value === '') {
//     return;
//   }
//   console.log(populateFormInput());
//   e.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function onInput(e) {
//   formData.email = inputEl.value.trim();
//   formData.message = textareaEl.value.trim();

//   return localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

// function populateFormInput() {
//   const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   if (parsedData) {
//     (inputEl.value = parsedData.email || ''),
//       (textareaEl.value = parsedData.message || '');
//   }
//   return parsedData;
// }







