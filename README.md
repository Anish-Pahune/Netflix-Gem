# Netflix-Gemini

Netflix-Gem (Netflix-Gemini) is a Netflix-inspired movie discovery platform that combines **TMDB API** for real-time movie data and **Gemini AI** for intelligent movie search and recommendations. The application is built with **React (Vite)** and **Firebase Authentication**, and features a **Tailwind CSS** for modern, responsive Netflix-style UI.

---

## Features

* AI-powered movie search using **Gemini**
* Real-time movie data from **TMDB API**
* Secure user authentication with **Firebase**
* Trailer video background (YouTube embed)
* Fully responsive Netflix-style UI
* Smart movie containers (Now Playing, Popular, Top Rated, Upcoming)
* Clean UI using **Tailwind CSS**

---

## Tech Stack

* **Frontend:** React + Vite
* **Styling:** Tailwind CSS
* **Authentication:** Firebase
* **API:** TMDB (The Movie Database)
* **AI:** Gemini AI
* **State Management:** Redux

---

## Installation

1. Clone the repository

```bash
git clone https://github.com/Anish-Pahune/Netflix-Gem.git
```

2. Go to the project folder

```bash
cd netflix-gem
```

3. Install dependencies

```bash
npm install
```

4. Create `.env` file and add:

```env
VITE_TMDB_KEY=your_tmdb_key
VITE_GEM_KEY=your_gemini_api_key
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

5. Run the app

```bash
npm run dev
```

---

## Important

* Do NOT push your `.env` file to GitHub
* Add `.env` to `.gitignore`
* Restrict Firebase API key to your domain in Firebase settings

---

## ⭐ If you like this project, give it a star!
