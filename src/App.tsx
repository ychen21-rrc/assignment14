import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/pages/HomePage';
import { WorkPage } from './components/pages/WorkPage';
import { SkillsPage } from './components/pages/SkillsPage';
import { ResourcesPage } from './components/pages/ResourcesPage';
import { DevSetupPage } from './components/pages/DevSetupPage';

export const App: React.FC = () => {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="logo">
          Yaohuang Chen – Portfolio
        </div>

        <nav className="main-nav">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/work" className="nav-link">
            Work
          </NavLink>
          <NavLink to="/skills" className="nav-link">
            Skills
          </NavLink>
          <NavLink to="/resources" className="nav-link">
            Resources
          </NavLink>
          <NavLink to="/dev-setup" className="nav-link">
            Dev Setup
          </NavLink>
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/dev-setup" element={<DevSetupPage />} />
        </Routes>
      </main>

      <footer className="app-footer">
        © {new Date().getFullYear()} Yaohuang Chen • WEBD-3012 Business Systems Build and Testing
      </footer>
    </div>
  );
};

export default App;
