# TypeScript Exoress MongoDB API

A backend project built using **Typescript**, **Express JS**, **MongoDB** with Mongoose, It supports hot-reloading during development schema validation using Zod, and clean production builds with `tsc`

---

### Features

- TypeScript support
- hot reload in development with `ts-node-dev`
- MongoDB integration with Mongoose
- Request validation using Zod

## Project Structure

src/
├── config/ # Database and environment config
├── models/ # Mongoose schemas
├── controllers/ # Route logic
├── routes/ # API routes
├── middlewares/ # Error handlers, validators
└── server.ts # Entry point

## 🛠️ How to get started

### 1. Clone the repository

```bash
git clone https://github.com/web-shahadat-hossain/Assignment_Library_Management
cd Assignment_Library_Management


npm install
```

## Project endpoint:

- GET /api/books
- GET /api/books/:id
- POST /api/books
- PATCH /api/books/:id
- DELETE /api/books/:id
- POST /api/borrows
- GET /api/borrows
