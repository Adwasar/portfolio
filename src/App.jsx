import { useState } from 'react';

import SectionProjects from './components/SectionProjects';
import SectionHero from './components/SectionHero';

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const closeMenu = () => {
    setMenuIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const openMenu = () => {
    setMenuIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <header className="position-fixed z-1 w-100 shadow-b bg-white">
        <div className="container">
          <nav className="d-flex justify-content-between py-5 align-items-center">
            <a href="#about">
              <h2 className="m-0">Vladislav_dev</h2>
            </a>
            <ul className="d-none d-sm-flex justify-content-between gap-5 m-0">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contacts">Contacts</a>
              </li>
            </ul>
            <div onClick={openMenu} className="burger d-block d-sm-none">
              <span className="tt"></span>
              <span className="mm"></span>
              <span className="bb"></span>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <SectionHero />
        <SectionProjects />
        <section id="contacts" className="vh-100 d-flex align-items-center bg-grey">
          <div className="container mt-5">
            <h2>Contacts</h2>
            <ul>
              <li>Contact1</li>
              <li>Contact2</li>
              <li>Contact3</li>
              <li>Contact4</li>
            </ul>
          </div>
        </section>
        <div className={`burger-menu z-2 ${menuIsOpen ? 'burger-menu_open' : ''}`}>
          <div className="container">
            <div onClick={closeMenu} className="burger-menu__close">
              <span></span>
              <span></span>
            </div>
            <ul>
              <li>
                <a onClick={closeMenu} href="#about">
                  About
                </a>
              </li>
              <li>
                <a onClick={closeMenu} href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a onClick={closeMenu} href="#contacts">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
