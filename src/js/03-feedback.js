const form = document.querySelector("form");
const KEY_STORAGE = "feedback-form-state";

let formMemory = {};

form.addEventListener("input", setLocalStorage);

const setLocalStorage = e => {
    e.preventDefault();
    saveLocalStorage(KEY_STORAGE, formMemory);
    formMemory[e.target.name] = e.target.value;
}

const saveLocalStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error(error.message);
  }
};

const formFromStorage = loadLocalStorage(KEY_STORAGE);

const loadLocalStorage = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error(error.message);
  }
};

//uzupełnić pola w formularzu
if (formFromStorage) {
    for (const key in formFromStorage) {
        
    }
}

form.addEventListener("submit", cleanForm);

const cleanForm = e => {
    console.log(formMemory);
    localStorage.removeItem("KEY_STORAGE");
    
}