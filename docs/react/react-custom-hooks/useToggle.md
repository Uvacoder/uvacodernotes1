---
---

Useful when needed to toggle a value between `true` or `false` (modals, themes, etc).

```js
import { useState } from 'react';

export default function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value) {
    setValue((currentValue) =>
      typeof value === 'boolean' ? value : !currentValue
    );
  }

  return [value, toggleValue];
}
```
