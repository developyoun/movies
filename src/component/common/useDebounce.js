import { useState, useEffect } from "react";

const useDebounce = (inputValue, delay) => {
  const [debounce, setDebounce] = useState(inputValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(inputValue)
    }, delay)

    return () => clearTimeout(timer);
  }, [inputValue, delay])

  return debounce
}
export default useDebounce;