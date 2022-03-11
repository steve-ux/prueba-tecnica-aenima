import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tendencias from "./pages/Tendencias";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tendencias" element={<Tendencias />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
