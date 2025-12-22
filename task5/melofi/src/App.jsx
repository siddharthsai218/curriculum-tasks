
import { Routes, Route } from "react-router-dom";


import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import Playlist from "./pages/playlist";
import MySongs from "./pages/likedsongs";
import Player from "./pages/player";
import Settings from "./pages/settings";
import Download from "./pages/downloads";

function App() {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Main pages */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/playlists" element={<Playlist />} />
      <Route path="/liked-songs" element={<MySongs />} />
      <Route path="/downloads" element={<Download />} />
      <Route path="/player" element={<Player />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
