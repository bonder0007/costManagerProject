# Cost Manager – Final Project

RESTful Web Service for managing personal expenses, built with Node.js, Express, and MongoDB.

## 📦 Features

- Add cost items by category (food, health, sport, housing, education)
- Monthly report by user and grouped by category
- Get total cost sum per user
- About page showing development team

## 📁 Endpoints

| Method | Endpoint           | Description                          |
|--------|--------------------|--------------------------------------|
| POST   | `/api/add`         | Add a new cost item                  |
| GET    | `/api/report`      | Get monthly cost report              |
| GET    | `/api/users/:id`   | Get user details and total spending |
| GET    | `/api/about`       | List team members                    |

## 🛠 Technologies

- Node.js
- Express.js
- MongoDB (Mongoose)
- JSDoc
- Postman (for testing)

## 👨‍💻 Developers

- Onn Bondarman
- Nadav Nini

## 🌐 Deployment (Railway)
https://costmanagerproject-production.up.railway.app/api/about

## Live Deployment

You can access the deployed application at:

🌐 https://costmanagerproject-production.up.railway.app

Example endpoint:
🧪 `/api/about` – returns developer names from the database


## 📂 Folder Structure

```
project/
├── controllers/
├── models/
├── routes/
├── utils/
├── views/
├── app.js
└── .env
```

## 📝 License

This project was developed as part of the Asynchronous Server-Side Programming course (HIT).
