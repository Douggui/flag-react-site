import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./pages/News";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="apropos" element={<About />} />
        <Route path="nouvelles" element={<News />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

