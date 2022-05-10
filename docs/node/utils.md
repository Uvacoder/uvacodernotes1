---
title: Utility Functions for Node
---

## Generate JWT Secrete using Node

In the terminal:

```bash
$ node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
```

The `-e` flag tells node to evaluate the code inside the quotes.
