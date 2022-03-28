---
---

Used to get and store variables from `localStorage`.

```js
import { useCallback, useState, useEffect } from 'react';

function useStorage(key, defaultValue, storageObject) {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);

    if (jsonValue !== null) return JSON.parse(jsonValue);

    if (typeof initialValue === 'function') {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);

    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);
}

const remove = useCallback(() => {
  setValue(undefined);
}, []);

export function useLocalStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.localStorage);
}

export function useSessionStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.sesstionStorage);
}

return [value, setValue, remove];
```

## useStorage alternative

```js
import { useState } from 'react';

const useLocalStorage = (key = '', initialValue = '') => {
  const [state, setState] = useState({
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setLocalStorageState = newState => {
    try {
      const newStateValue = typeof newState === 'function' ? newState(state) : newState;
      setState(newStateValue);

      window.localStorage.setItem(key, JSON.stringify(newStateValue));
    } catch (error) {
      console.error(`Unable to store new value for ${key} in localStorage.`);
    }
  }

  return [state, setLocalStorage];
};

export default useLocalStorage;
```

## Usage of `useLocalStorage`

```js
import { useLocalStorage } from './hooks';

const defaultSettings = {
  notifications: 'weekly';
}

export default function MyComponent() {
  const [appSetings, setAppSettings] = useLocalStorage('app-settings', defaultSettings)

  return (
    // Component
  )
}
```
