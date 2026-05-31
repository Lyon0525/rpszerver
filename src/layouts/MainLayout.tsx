// src/layouts/MainLayout.tsx
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      {/* Az <Outlet /> helyére tölti be a React Router az éppen aktuális aloldalt */}
      <main className="flex-grow">
        <Outlet />
      </main>
      {/* Ide jön majd később a Footer (lábléc) */}
      <footer className="bg-darker border-t border-gray-800 py-6 text-center text-gray-500 text-sm mt-auto">
        &copy; {new Date().getFullYear()} RP Server. Minden jog fenntartva.
      </footer>
    </div>
  );
}