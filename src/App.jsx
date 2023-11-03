import { useState } from 'react';

function App() {
  return (
    <>
      <header className="position-fixed w-100 shadow-b bg-white">
        <div className="container">
          <nav className="d-flex justify-content-between py-5 align-items-center">
            <a href="#about">
              <h2>Vladislav_dev</h2>
            </a>
            <ul className="d-flex justify-content-between gap-5 m-0">
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
          </nav>
        </div>
      </header>
      <main>
        <section id="about" className="vh-100 d-flex align-items-center bg-grey">
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
        <section id="projects" className="vh-100 d-flex align-items-center">
          <div className="container mt-5">
            <h2>Projects</h2>
            <ul>
              <li>Project1</li>
              <li>Project2</li>
              <li>Project3</li>
              <li>Project4</li>
            </ul>
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
      </main>
    </>
  );
}

export default App;
