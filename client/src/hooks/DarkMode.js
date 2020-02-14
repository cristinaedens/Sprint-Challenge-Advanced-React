import {useEffect} from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode() {
  const [value, setValue] = useLocalStorage("darkmode");

  useEffect(() => {
    if (value) {
      window.document.body.classList.add("dark-mode");
    } else {
      window.document.body.classList.remove("dark-mode");
    } //this closes else
  }, [value]); //this closes useEffect
  return [value,setValue];
}//this closes useDarkMode