import {useState} from "react";

export const useLocalStorage = (key, intitialValue) => {
  const [storedValue, setStoredValue] = useState (() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : intitialValue;
  }); //This closes useState

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };//this closes setValue

  return [storedValue, setValue];

} //this closes localStorage