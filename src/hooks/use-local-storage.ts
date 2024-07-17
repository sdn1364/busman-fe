const useLocalStorage = (key: string) => {
  const getItem = () => {
    return localStorage.getItem(key);
  };
  const setItem = (value: any) => {
    localStorage.setItem(key, value);
  };

  return [setItem, getItem] as const;
};

export default useLocalStorage;
