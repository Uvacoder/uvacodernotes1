---
---

Used when you want to run something after a delay. For example, when we want a delay of 1 or 2 seconds after the user stops typing, before making the api call. Or with search functionality.

```js
import { useEffect } from 'react';
import useTimeout from './hooks';

export default function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = useTimeout(callback, delay);

  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}
```

## Usage

```js
import { useState } from 'react';
import useDebounce from './hooks';

export default function MyComponent() {
  const [count, setCount] = useState(10);
  useDebounce(() => alert(count), 1000, [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
```

This will trigger the alert box 1 second after the last click on the button.
