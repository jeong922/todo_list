export const Repository = {
  setLocalStorage(name, item) {
    localStorage.setItem(`${name}`, JSON.stringify(item));
  },

  getLocalStorage(name) {
    return JSON.parse(localStorage.getItem(`${name}`));
  },
};
