import Pages from './page/Pages';
import { Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import LocationPage from './page/LocationPage';
import ContactPage from './page/ContactPage';
import WebDesignPage from './page/WebDesignPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pages page={<HomePage />} />} />
      <Route path="/about" element={<Pages page={<AboutPage />} />} />
      <Route path="/location" element={<Pages page={<LocationPage />} />} />
      <Route path="/contact" element={<Pages page={<ContactPage />} />} />
      <Route
        path="/design/:design"
        element={<Pages page={<WebDesignPage />} />}
      />
    </Routes>
  );
}

export default App;
