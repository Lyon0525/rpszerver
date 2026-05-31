// src/App.tsx
import { HashRouter, Routes, Route } from 'react-router-dom'; // <-- Itt a csere
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Webshop from './pages/Webshop';
import Staff from './pages/Staff';
import Rules from './pages/Rules';
import Contact from './pages/Contact';
import Community from './pages/Community';

function App() {
  return (
    <HashRouter> {/* <-- És itt is */}
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
    </HashRouter>
  );
}

export default App;