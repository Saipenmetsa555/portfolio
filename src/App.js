import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./components/Home";
import Bio from "./components/Biography";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dattu's Portfolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Helmet application" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Biography" element={<Bio />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Skill" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
