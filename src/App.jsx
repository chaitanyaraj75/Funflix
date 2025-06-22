import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import Search from "./Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:type/:id" element={<Details />} />
      <Route path="/search/:query" element={<Search />} />
    </Routes>
  );
}


export default App
