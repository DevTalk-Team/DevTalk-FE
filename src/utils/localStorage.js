const getLocalStorage = (name) => {
  return localStorage.getItem(name);
};

const setLocalStorage = (name, data) => {
  localStorage.setItem(name, data);
};

const removeLocalStorage = (name) => {
  localStorage.removeItem(name);
};

export { getLocalStorage, setLocalStorage, removeLocalStorage };
