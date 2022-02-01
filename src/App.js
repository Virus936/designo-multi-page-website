import Pages from './page/Pages'
import { Routes, Route, Link } from "react-router-dom";
import HomePage from './page/HomePage'
import AboutPage from './page/AboutPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pages page={<HomePage />}/>}/>
      <Route path="/about" element={<Pages page={<AboutPage />} />}/>
    </Routes>
  );
}

export default App;
