---
title: Create Servers
sidebar_position: 1
---

The following are different ways of creating a Node Server.

### With Node modules (Vanilla Node)

```js title='server.js'
const http = require('http');

const server = http.createServer();

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Node server running on port: ${PORT}`));
```

### With Express

```js title='server.js'
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Express server running on port: ${PORT}`));
```

### For bigger applications

```js title='app.js'
const express = require('express'); // Needs to be installed
const cors = require('cors'); // Needs to be installed

// Import api routes 👇
const router = require('./router')

// Create express app
const app = express();

// Apply app middlewares
app.use(
  cors({
    origin: 'http://localhost:3000';
  })
)
// ... other middlewares

// Apply routers
app.use('/api/v1', router);

module.exports = app;
```

```js title='server.js'
const http = require('http');

const app = require('./app');

const PORT = process.env.PORT || 8000;

async function startServer() {
  const server = http.createServer(app);

  server.listen(PORT, () => console.log(`Server running on port: ${PORT}...`));
}

startServer();
```
