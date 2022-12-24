---
title: Getting Started
sidebar_position: 1
---
## Important Links

- [Reactjs Homepage](https://reactjs.org) - A JavaScript library for building user interfaces
- [Awesome Reactjs Repo](https://github.com/enaqx/awesome-react) - A collection of awesome things regarding React ecosystem
- [React Patterns](https://reactpatterns.com) - Curated collection of react patterns
- [React Cheatsheet](https://reactcheatsheet.com) - Great cheatsheet for react v16
- [TanStack](https://tanstack.com) - Open source libraries including, React Ranger, React Charts, TanStack Table, TanStack Query
- [SWR](https://swr.vercel.app) - React Hooks for Data Fetching
- [Awesome React Hooks Repo](https://github.com/rehooks/awesome-react-hooks) - A collection of all the awesome repos for react hooks
- [React Router](https://reactrouter.com/en/main) - Declarative routing for React
- [Awesome React Components Repo](https://github.com/brillout/awesome-react-components) - Curated List of React Components & Libraries
- [React Icons](https://react-icons.github.io/react-icons/) - Svg react icons of popular icon packs

## Basic Setup

The easiest way to start a react app is using [Create React App (CRA)](https://reactjs.org/docs/create-a-new-react-app.html).

```shell
$ npx create-react-app my-app
$ cd my-app
$ cd yarn start # or npm run start
```

:::note
If `npx create-react-app` fails with: _You are running `create-react-app` 4.0.3, which is behind the latest release (5.0.0). We no longer support global installation of Create React App_

Try:

```shell
$ npx create-react-app@latest my-app
```

:::

## With Typescript

To create a new project using Typescript, you can add a `--template` flag to the CRA command:

```shell
$ npx create-react-app@latest my-app --template typescript

# or using yarn

$ yarn create react-app my-app --template typescript
```

## With Vite

Another way to bootstrap a React app is using [Vite.js](https://vitejs.dev/)

```shell
# npm 6.x
$ npm init vite@latest my-app --template react

# npm 7+, extra double-dash is needed:
$ npm init vite@latest my-app -- --template react

# yarn
$ yarn create vite my-app --template react

# pnpm
$ pnpm create vite my-app -- --template react
```

Other available templates: `vanilla`, `vanilla-ts`, `vue`, `vue-ts`, `react`, `react-ts`, `preact`, `preact-ts`, `lit`, `lit-ts`, `svelte`, `svelte-ts`.

After the command execution ends, install dependencies (vite doesn't install dependencies) and start the develpment server:

```shell
$ yarn install
$ yarn dev
```

### Adding path aliases with Vite

If using Vite, you need to add an extra config to the `vite.config.js` file in order to use path aliases:

```js
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```
