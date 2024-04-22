import { useState, useEffect } from "react";

interface Props {
  key: string;
  initialState: unknown;
}

export function useLocalStorageState({initialState, key} : Props) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}