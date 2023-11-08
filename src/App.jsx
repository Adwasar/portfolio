import { useState } from 'react';

import HayBossImg from './assets/img/HeyBoss.png';

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
      <header className="custom-header position-fixed zindex-fixed w-100 shadow-b bg-white">
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
        <section id="about" className="min-vh-100 d-flex align-items-center bg-grey">
          <div className="container">
            <h1>Front-End React Developer</h1>
            <p>
              Hi, I'm Vladislav Bryl. A passionate Front-end React Developer based in Kharkiv,
              Ukrain.
            </p>
            <h2>Tech Stack</h2>
            <ul>
              <li>HTML 5, CSS</li>
              <li>JavaScript, TypeScript</li>
              <li>SCSS, Bootstrap</li>
              <li>React, Redux Toolkit</li>
              <li>Figma (Software)</li>
            </ul>
          </div>
        </section>
        <section id="projects" className="min-vh-100 d-flex align-items-center">
          <div className="container my-5">
            <h2>Projects</h2>
            <div className="projects text-center ">
              <div className="row bg-grey project shadow-lg px-5 py-5 mt-5 align-items-center">
                <div className="project__img p-0 col-12 col-md-5">
                  <a href="https://marketplace-landing-29h.pages.dev/">
                    <img src={HayBossImg}></img>
                  </a>
                </div>
                <div className="col-12 col-md-7 px-0 px-md-5 mt-5 mt-md-0">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                  eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Donec quam felis,
                </div>
              </div>
              <div className="row bg-grey project shadow-lg px-5 py-5 mt-5 align-items-center">
                <div className="project__img p-0 col-12 col-md-5 mt-5 mt-md-0 order-2">
                  <a href="https://marketplace-landing-29h.pages.dev/">
                    <img src={HayBossImg}></img>
                  </a>
                </div>
                <div className="col-12 col-md-7 px-0 px-md-5 order-1 ">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                  eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Donec quam felis,
                </div>
              </div>
              <div className="row bg-grey project shadow-lg px-5 py-5 mt-5 align-items-center">
                <div className="project__img p-0 col-12 col-md-5 order-1">
                  <a href="https://marketplace-landing-29h.pages.dev/">
                    <img src={HayBossImg}></img>
                  </a>
                </div>
                <div className="col-12 col-md-7 px-0 px-md-5 mt-5 mt-md-0 order-2">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                  eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Donec quam felis,
                </div>
              </div>
            </div>
          </div>
        </section>
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
        <div className={`burger-menu ${menuIsOpen ? 'burger-menu_open' : ''}`}>
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
