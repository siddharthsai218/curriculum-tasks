// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Login from './pages/login.jsx'
// import Signup from './pages/signup.jsx'
// import Navbar from './components/navbar.jsx'
// import Bottombar from './components/bottombar.jsx'
// import Songcard from './components/songcard.jsx'
// import Searchbar from './components/searchbar.jsx'
// import DownloadApp from './components/downloadapp.jsx'
// import Profile from './components/profile.jsx'
// import Home from './components/home.jsx'
// import Dashboard from './pages/dashboard.jsx'
// import Playcard from './components/playcard.jsx'
// import Playlist from './pages/playlist.jsx'
// import MySongs from './pages/likedsongs.jsx'
// import Player from './pages/player.jsx'
// import Settings from './pages/settings.jsx'
// import { BrowserRouter } from "react-router-dom";



import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Playlist from "./pages/playlist.jsx";
import Dashboard from "./pages/dashboard.jsx";
import MySongs from "./pages/likedsongs.jsx";
import Topbar from "./components/topbar.jsx";
import { PlayerProvider } from "./components/PlayerContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PlayerProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PlayerProvider>
  </StrictMode>
);

