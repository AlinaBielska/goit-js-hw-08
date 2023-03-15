import throttle from 'lodash.throttle';

const form = document.querySelector("form");
const KEY_STORAGE = "feedback-form-state";

let formMemory = {};

const setLocalStorage = e => {
    e.preventDefault();
    saveLocalStorage(KEY_STORAGE, formMemory);
    formMemory[e.target.name] = e.target.value;
}

form.addEventListener("input", throttle(setLocalStorage, 500));



const saveLocalStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error(error.message);
  }
};

const loadLocalStorage = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error(error.message);
  }
};

const formFromStorage = loadLocalStorage(KEY_STORAGE);

//uzupełnić pola w formularzu
if (formFromStorage) {
    for (const key in formFromStorage) {
        
    }
}

const cleanForm = e => {
    console.log(formMemory);
    localStorage.removeItem("KEY_STORAGE");
    
}

form.addEventListener("submit", cleanForm);