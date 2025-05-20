
# 📝 Full Stack Blog Editor Application

A full-stack web application that enables users to write, auto-save, and publish blog posts. This project demonstrates the integration of React (Vite) on the frontend with a Node.js + Express.js backend and MongoDB database, following modern development practices.
---
How to set up the Frontend 
 Has To run the commands in the vs code Terminal
 1. npm vite@latest my react-app init -y 
 2. npm install
 3. cd my create-app
 4. npm run dev(To run the Frontend )

How to set up the Backend  Server 
1.npm init -y 
2.npm install
3.npm i express mongodb mongoose 
4.npm i nodemon
5.npm i cors
6.npm dotenv 
7.In package.json file in scripts has to change 
"start" : "node filename"  (here the filename refers to main file )
"dev"   : "nodemon filename"
8.To run the code "npm start"
9.For testing or development "npm run dev"
   or By without changing the scripts 
   To run server is "npm node filename.js"
   To run server is "npx nodemon filename.js"


  It has two has Branches main  and backend branch 
Here the Backend branch contains the backend code and  main branch contains the frontend code 
## 📂 Project Structure

```
.
├── blogeditorbackend
│   ├── models
│   │   └── blog.js             # Blog Mongoose schema
│   ├── routes
│   │   └── blogs.js            # Blog-related API routes
│   ├── .env                    # Environment variables
│   ├── index.js                # Express app entry point
│   ├── package.json
│   └── ...
├── blogeditorfrontend
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── App.jsx             # Blog editor UI with auto-save
│   │   ├── index.css
│   │   └── main.jsx            # React entry point
│   ├── index.html
│   ├── vite.config.js
│   └── ...
└── README.md                   # You're here!
```

---

## ⚙️ Tech Stack

### Frontend
- **Framework**: React.js (with Vite)
- **Features**:
  - Title, content, and tags input fields
  - Auto-save drafts every 5 seconds after typing
  - Manual "Save as Draft" and "Publish" buttons
  - Visual timestamp on auto-save

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Endpoints**:
  - `POST /api/blogs/save-draft` – Save or update a draft
  - `POST /api/blogs/publish` – Publish a blog
  - `GET /api/blogs` – Retrieve all blogs
  - `GET /api/blogs/:id` – Retrieve a blog by ID

---

## 📦 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/blog-editor-app.git
cd blog-editor-app
```

### 2. Backend Setup
```bash
cd blogeditorbackend
npm install
```

Create a `.env` file with:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd ../blogeditorfrontend
npm install
npm run dev
```

---

## 🧠 Features in Action

### ✏️ Auto-Save Logic
Implemented using `setTimeout` in React's `useEffect`, auto-saves after 5 seconds of user inactivity. Backend handles saving/updating drafts.

### 🔘 Buttons
- **Save as Draft**: Triggers `save-draft` API to store blog with status `"draft"`
- **Publish**: Triggers `publish` API to store blog with status `"published"`

### ✅ Schema (Mongoose)
```js
{
  title: String,
  content: String,
  tags: [String],
  status: String, // 'draft' or 'published'
  created_at: Date,
  updated_at: Date
}
```

---

## 🧪 API Sample (POST Save Draft)
```http
POST /api/blogs/save-draft
Content-Type: application/json

{
  "title": "My First Blog",
  "content": "Hello world!",
  "tags": "react,blog",
  "status": "draft"
}
```

---

## 🎯 Future Improvements
- Add blog listing page (published and drafts)
- Blog editing functionality
- JWT-based authentication
- Toast notifications for save/publish
- Rich text editor (e.g., Quill, TinyMCE)

---

## 👨‍💻 Author

**Bhukya Upender**  
B.Tech, Electronics and Communication Engineering  
IIT BHU Varanasi

---
