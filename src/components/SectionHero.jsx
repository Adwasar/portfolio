function SectionHero() {
  return (
    <>
      <section id="about" className="hero min-vh-100 d-flex align-items-center bg-grey">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
              <div className="hero-img"></div>
            </div>
            <div className="col-12 col-md-7 mt-5 mt-md-0">
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
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionHero;
