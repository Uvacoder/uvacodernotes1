---
title: Mongo Shell
---

:::note
All the commands listed here can be used in any Mongo application. For example, in a Node.js project.
:::

## Basic Shell Commands

| Command           | Definition                                             |
| ----------------- | ------------------------------------------------------ |
| mongosh           | Open a connection to a local MongoDB instance          |
| show dbs          | Show all databases in the current MongoDB instance     |
| use <db_name>     | Switch to the selected database by it's name `db_name` |
| db                | Show current database name                             |
| show collections  | Show all collections in the current database           |
| db.dropDatabase() | Delete the current database                            |
| cls               | Clear the terminal screen                              |
| exit              | Exit the current session                               |

## CRUD operations commands

:::note
Each one of these commands is run on a specific collection. Meaning we have to select a collection first in order to execute te command.

`db.<collectionName>.<command>`
:::

### Create

### Read

### Update

### Delete

#### `deleteOne`

Delete the first document that matches the filter object.

```shell
$ db.users.deleteOne({ age: 10 })
```

#### `deleteMany`

Delete all documents that matches the filter object

```shell
$ db.users.deleteMany({ age: 15 })
```

### Filter and Queries
