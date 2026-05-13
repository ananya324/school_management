# 📍 Educase - School Management API

Educase is a RESTful backend API built using Node.js, Express.js, and MySQL that allows users to add school details and retrieve nearby schools sorted by distance using geographical coordinates.

The system uses the Haversine Formula to calculate real-world distances between the user and schools and returns results sorted from nearest to farthest.

---

# 🚀 Live Demo

## 🌐 Live API

https://schoolmanagement-production-21cd.up.railway.app

---

## 📮 Postman Collection

Postman collection is included inside the repository:

- `postman/Educase-APIs.json`
---

# ⚙️ Tech Stack

- Node.js
- Express.js
- MySQL
- mysql2
- dotenv
- Railway (Deployment)
- Postman (API Testing)

---

# ✨ Features

- Add school with name, address, latitude, longitude
- Retrieve schools sorted by nearest distance
- RESTful API architecture
- MySQL database integration
- Environment variable support
- Distance calculation using Haversine Formula
- Fully deployed backend on Railway
- Proper error handling and validation

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
├── postman/
│   ├── Educase-APIs.json
│  
│
├── server.js
├── package.json
├── .env
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

## Create Table

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

# ▶️ Running the Project

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

Local server runs at:

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

---

## Live URL

```txt
https://schoolmanagement-production-21cd.up.railway.app/addSchool
```

---

## Request Body

```json
{
  "name": "ABC School",
  "address": "Delhi",
  "latitude": 28.7041,
  "longitude": 77.1025
}
```

---

## Success Response

```json
{
  "message": "School added successfully"
}
```

---

## Error Response

```json
{
  "message": "All fields are required"
}
```

---

# 2️⃣ Get Schools (Sorted by Distance)

## Endpoint

```http
GET /listSchools?latitude=28.7&longitude=77.1
```

---

## Live URL

```txt
https://schoolmanagement-production-21cd.up.railway.app/listSchools?latitude=28.7&longitude=77.1
```

---

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

---

## Error Response

```json
{
  "message": "Latitude and Longitude required"
}
```

---

# 📍 Distance Calculation

This project uses the Haversine Formula to calculate the distance between:

- User coordinates
- School coordinates

Schools are returned sorted from nearest to farthest.

---

# 🧪 API Testing (Postman)

All APIs were tested using Postman.

## Postman Collection (inside repo)

- `postman/Educase-APIs.json` → Import into Postman
- `postman/postman.md` → API usage documentation

👉 Import the JSON file into Postman and run directly.

---

# ☁️ Deployment

- Backend hosted on Railway
- MySQL database integrated with Railway

---

# 🔒 Security

All sensitive credentials are managed using environment variables (`.env` file).
