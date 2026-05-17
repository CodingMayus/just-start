// "use client"
// import {useEffect, useState} from 'react';


// const useLocalStorage = (key, initalValue)=>{
//     const [storedValue, setStoredValue] = useState(()=>{

//         try{
//             const item = window.localStorage.getItem(key);
//             return item ? JSON.parse(item):initalValue;
//         }catch(err){
//             console.log(err);
//             return initalValue;
//         }
//     });
//     const setValue = (value)=>{
//         try{
//             const valueToStore = value instanceof Function ? value(storedValue):value;
//             setStoredValue(valueToStore);
//             window.localStorage.setItem(key, JSON.stringify(valueToStore));
//         }catch(err){
//             console.log(err);
//         }
//     };
//     return [storedValue, setValue];
// };


// const useDarkMode = ()=>{
// const [enabled,setEnabled]=useLocalStorage('dark-theme');
// const isEnabled = typeof enabledState === 'undefined' && enabled;
// //creates booleanish value called isEnabled.
// //const isEnabled = enabledState is undefined AND enabled is truthy;
// useEffect(()=>{
// const bodyClass = window.document.body.classList;
// const className = 'dark';
// isEnabled?bodyClass.add(className):bodyClass.remove(className);
// },[enabled,isEnabled]);
// return [enabled,setEnabled];
// };

// export default useDarkMode;
import { useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
};

const useDarkMode = () => {
  const [enabled, setEnabled] = useLocalStorage('dark-theme');
  const isEnabled = typeof enabledState === 'undefined' && enabled;

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
  }, [enabled, isEnabled]);

  return [enabled, setEnabled];
};

export default useDarkMode;