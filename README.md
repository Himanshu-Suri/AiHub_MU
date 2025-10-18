

# Project Title: Project Chronos — The AI Archeologist

### 👩‍💻 Student Details

**Himanshu Suri** — SE23UMCS059
**Bhavesh Gunreddy** — SE23UMCS014

---

## 📘 Project Description

**Project Chronos** is an AI-powered web application that reconstructs fragmented or incomplete digital texts from early internet archives.
It integrates **Google Gemini** for intelligent text reconstruction and **Perplexity AI** for contextual web searches — producing coherent, modern interpretations of fragmented digital messages, along with verified source links.

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Himanshu-Suri/AiHub_MU.git
cd AiHub_MU
```

---

### 2️⃣ Backend Setup

```bash
cd chronos-backend
npm install
```

Create a `.env` file in the `chronos-backend/` directory and add:

```
GEMINI_API_KEY=your_google_gemini_api_key_here
PERPLEXITY_API_KEY=your_perplexity_api_key_here
```

Run the backend:

```bash
node server.js
```

The backend runs on: **[http://localhost:5000](http://localhost:5000)**

---

### 3️⃣ Frontend Setup

```bash
cd ../project-chronos
npm install
npm run dev
```

The frontend runs on: **[http://localhost:5173](http://localhost:5173)**

---

## 🚀 Usage Guide

1. Open **[http://localhost:5173](http://localhost:5173)** in your browser.
2. Enter a digital fragment, for example:

   ```
   smh at the top 8 drama. ppl need to chill. g2g, ttyl.
   ```
3. Click **[RECONSTRUCT_DATA]**
4. The AI will output:

   * Reconstructed text
   * Contextual web sources with hyperlinks

---

## 📦 Dependencies File

### 🖥 Backend → `package.json`

Includes:

* express
* axios
* cors
* dotenv

### 💻 Frontend → `package.json`

Includes:

* react
* react-dom
* vite
* tailwindcss

---

✅ **Note:**
Ensure your `.env` file is not committed to GitHub.
Add this to `.gitignore`:

```
node_modules/
.env
dist/
build/
```

---

Would you like me to make a **PDF version** of this README (formatted nicely with proper headings and page layout) for college submission?
