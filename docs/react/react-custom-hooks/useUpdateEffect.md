---
---

Similar to useEffect, with the exeption that it doesn't gets triggered when the component is mounted.

```js
import { useEffect, useRef } from 'react';

export default function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;

      return;
    }

    return callback();
  }, dependencies);
}
```

## Usage

```js
import { useState } from 'react';
import useUpdateEffect from './hooks';

export default function MyComponent() {
  const [count, setCount] = useState(10);
  useUpdateEffect(() => alert(count), [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
```
