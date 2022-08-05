import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";
import { Home } from "./components/pages/home/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
