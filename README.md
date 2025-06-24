# TypeScript Exoress MongoDB API

A backend project built using **Typescript**, **Express JS**, **MongoDB** with Mongoose, It supports hot-reloading during development schema validation using Zod, and clean production builds with `tsc`

---

### Features

- TypeScript support
- hot reload in development with `ts-node-dev`
- MongoDB integration with Mongoose
- Request validation using Zod

## Project Structure

```bash

├──src/
├── app/
│ └── modules/
│ ├── books/
│ │ ├── books.controller.ts
│ │ ├── books.interface.ts
│ │ ├── books.model.ts
│ │ ├── books.router.ts
│ │ └── books.validation.ts
│ │
│ └── Borrow/
│ ├── borrow.controller.ts
│ ├── borrow.interface.ts
│ ├── borrow.model.ts
│ ├── borrow.router.ts
│ └── borrow.validation.ts
│
├── errors
├── interface
├── middleware
├── routes
├── app.ts
├── server.ts `

```

## 🛠️ How to get started

### 1. Clone the repository

```bash
git clone https://github.com/web-shahadat-hossain/Assignment_Library_Management
cd Assignment_Library_Management


npm install
```

## Project endpoint:

- GET https://library-management-qza5.onrender.com/api/books
- GET https://library-management-qza5.onrender.com/api/books/:id
- POST https://library-management-qza5.onrender.com/api/books
- PATCH https://library-management-qza5.onrender.com/api/books/:id
- DELETE https://library-management-qza5.onrender.com/api/books/:id
- POST https://library-management-qza5.onrender.com/api/borrow
- GET https://library-management-qza5.onrender.com/api/borrow
