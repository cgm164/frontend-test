import React from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);
  
  React.useEffect(
    () => {
      const idEventLoop = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(idEventLoop);
      };
    },
    [value, delay]
  );

  return debouncedValue;
}

export default useDebounce;