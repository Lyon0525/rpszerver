// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Webshop from './pages/Webshop';
import Staff from './pages/Staff';
import Rules from './pages/Rules'; // ÚJ
import Contact from './pages/Contact'; // ÚJ
import Community from './pages/Community';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Webshop />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/community" element={<Community />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;