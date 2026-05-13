# 📍 Educase - School Management API

Educase is a RESTful School Management API built using Node.js, Express.js, and MySQL that allows users to register schools and retrieve nearby schools based on geographical coordinates using distance-based sorting.

The project uses the Haversine Formula to calculate distances between user and school locations and returns schools sorted from nearest to farthest.

---

# 🚀 Live Demo

## 🌐 Live API
https://schoolmanagement-production-21cd.up.railway.app

## 📮 Postman Collection
https://maintenance-astronomer-28491974-7692070.postman.co/workspace/Personal-Workspace~a05113b0-9bc1-4f36-89f7-553385e38d42/collection/47014699-dcc0e09e-c70f-4c95-a42a-434e394a3685?action=share&creator=47014699

---

# ⚙️ Tech Stack

- Node.js
- Express.js
- MySQL
- mysql2
- dotenv
- Railway
- Postman

---

# ✨ Features

- Add school details
- Fetch schools sorted by nearest distance
- RESTful API architecture
- MySQL database integration
- Environment variable support
- Distance calculation using Haversine Formula
- Fully deployed backend using Railway
- Error handling and validation

---

# 📁 Project Structure

```txt
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── schoolController.js
│
├── routes/
│   └── schoolRoutes.js
│
├── utils/
│   └── distance.js
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

---

# 🛠️ Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/your-username/educase-school-management-api.git
```

---

## 2. Navigate to Project Folder

```bash
cd backend
```

---

## 3. Install Dependencies

```bash
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=school_management
PORT=3000
```

---

# 🗄️ Database Setup

## Create Database

```sql
CREATE DATABASE school_management;
```

---

## Use Database

```sql
USE school_management;
```

---

## Create Schools Table

```sql
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# ▶️ Running the Application

## Development Mode

```bash
npm run dev
```

---

## Production Mode

```bash
node server.js
```

---

# 🌐 Server

Backend runs on:

```txt
http://localhost:3000
```

---

# 📡 API Endpoints

# 1️⃣ Add School

## Endpoint

```http
POST /addSchool
```

## Live Endpoint

```txt
https://schoolmanagement-production-21cd.up.railway.app/addSchool
```

## Request Body

```json
{
  "name": "ABC School",
  "address": "Delhi",
  "latitude": 28.7041,
  "longitude": 77.1025
}
```

## Success Response

```json
{
  "message": "School added successfully"
}
```

## Error Response

```json
{
  "message": "All fields are required"
}
```

---

# 2️⃣ List Schools (Sorted by Distance)

## Endpoint

```http
GET /listSchools?latitude=28.7&longitude=77.1
```

## Live Endpoint

```txt
https://schoolmanagement-production-21cd.up.railway.app/listSchools?latitude=28.7&longitude=77.1
```

## Success Response

```json
[
  {
    "id": 1,
    "name": "ABC School",
    "address": "Delhi",
    "latitude": 28.7041,
    "longitude": 77.1025,
    "distance": "0.28"
  }
]
```

## Error Response

```json
{
  "message": "Latitude and Longitude required"
}
```

---

# 📍 Distance Calculation Logic

This project uses the Haversine Formula to calculate the distance between:

- User Location
- School Location

Schools are returned sorted from nearest to farthest.

---

# 🧪 API Testing

You can test APIs using:

- Postman
- Thunder Client
- Hoppscotch

---

# ☁️ Deployment

This project is deployed using:

- Railway (Backend + MySQL)

---

# 🔒 Environment Security

Sensitive credentials are stored securely using environment variables with `.env`.

---

