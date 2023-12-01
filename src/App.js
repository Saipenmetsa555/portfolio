import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Bio from "./components/Biography";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Biography" element={<Bio />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Skill" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
