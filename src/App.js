import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/react-fundamentals" element={<Home />} />
        <Route path="/react-fundamentals/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
