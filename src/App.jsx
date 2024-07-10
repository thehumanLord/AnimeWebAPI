/* eslint-disable no-unused-vars */
import { fetchTheme } from "./providers/ThemeProvider";
import { useThemeColors } from "./constants/Colors";
import Header from "./components/General/Header";
import Home from './pages/Home';
import AnimeDetails from './pages/AnimeDetails';
import { HashRouter, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Streaming from "./pages/Streaming";
import Search from './pages/Search';
import MangaHome from "./pages/Manga/Home";

function App() {
  const { theme, setTheme } = fetchTheme();
  const themeColors = useThemeColors();

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/home" element={<Home />} />
        <Route path="/anime/:id" element={<AnimeDetails />} />
        <Route path="/watch/:id" element={<Streaming />} />
        <Route path="/manga/home" element={<MangaHome/>} />
        <Route path="/search/:query?" element={<Search />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </HashRouter>
  );
}

export default App;