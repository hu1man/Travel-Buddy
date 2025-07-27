# Travel Buddy - Sri Lanka Travel Guide Web App

## Overview
Travel Buddy is a modern, responsive travel guide web app designed specifically for Sri Lanka. It features animated cards of famous tourist attractions, user location detection, and live route guidance using Google Maps API.

---

## Tech Stack
- React
- TailwindCSS
- Framer Motion (animations)
- FontAwesome (icons)
- Google Maps JavaScript API (Directions Service)

---

## Folder Structure
```
Travel Buddy/
├── public/
│   ├── index.html
│   └── assets/
│       └── images/ (high-quality images of Sri Lankan attractions)
├── src/
│   ├── components/
│   │   ├── LandingPage.jsx
│   │   ├── LocationPopup.jsx
│   │   ├── MapView.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── DarkModeToggle.jsx
│   ├── App.jsx
│   ├── index.js
│   ├── styles/
│   │   └── index.css
│   └── utils/
│       └── places.js
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## Setup Instructions

### 1. Install Dependencies
Make sure you have Node.js and npm installed. Then run:

```bash
npm install
```

This will install React, TailwindCSS, Framer Motion, FontAwesome, and other dependencies.

### 2. Get Google Maps API Key
- Go to [Google Cloud Console](https://console.cloud.google.com/).
- Create a new project or select an existing one.
- Navigate to **APIs & Services > Credentials**.
- Click **Create Credentials > API key**.
- Restrict the API key to **Google Maps JavaScript API** and **Directions API**.
- Copy the API key.

### 3. Add Google Maps API Key
Create a `.env` file in the root directory and add:

```
REACT_APP_GOOGLE_MAPS_API_KEY=your_api_key_here
```

### 4. Running Locally
Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Deployment
You can deploy the app using:

- **Vercel**: Connect your GitHub repo and deploy.
- **Netlify**: Drag and drop the build folder or connect repo.
- **GitHub Pages**: Use `gh-pages` package to deploy.

### 6. Testing Location and Maps Feature
- When you select a destination, the app will ask for location permission.
- Allow location access to see the route and directions.
- If denied, a fallback message will appear.

### 7. Fallback for Location Denied
If location access is denied, the app shows a message and a button to return to the destinations list.

### 8. Ensuring No Errors
- The app uses React Strict Mode.
- All API calls have error handling.
- Location API fallback is implemented.

---

## Disclaimer
This is a non-commercial web app developed solely for educational purposes. If any links to commercial sites are included and it is illegal or inappropriate to do so, please inform me via email at youremail@example.com, and I will promptly remove them.

---

## License
MIT License

---

## Contact
Developed by Your Name  
GitHub: [yourgithub](https://github.com/yourgithub)  
Email: youremail@example.com
