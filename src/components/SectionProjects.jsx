import HayBossImg from '../assets/img/HeyBoss.png';

function SectionProjects() {
  return (
    <>
      <section id="projects" className="min-vh-100 d-flex align-items-center">
        <div className="container my-5">
          <h2 className="display-2">Projects</h2>
          <div className="projects text-center ">
            <div className="row bg-grey project shadow-lg p-4 p-sm-5 mt-5 align-items-center">
              <div className="project__img p-0 col-12 col-md-5">
                <a href="https://marketplace-landing-29h.pages.dev/">
                  <img src={HayBossImg}></img>
                </a>
              </div>
              <div className="text-start col-12 col-md-7 px-0 px-md-5 mt-4 mt-sm-5 mt-md-0">
                <h3 className="display-4 mt-5 fw-normal">Team project: "HeyBoss"</h3>
                <p className="mt-5 mb-1">
                  <span className="fw-semi">Description:</span> Landing for marketplace
                </p>
                <p className="mb-1">
                  <span className="fw-semi">Functional:</span> Product description, Feedback form,
                  Localization of 2 languages
                </p>
                <p>
                  <span className="fw-semi">Tools:</span> React, JavaScript, Bootstrap, React
                  Router, React Spinners, react-i18next, REST APIs, SCSS, ESlint, Prettier
                </p>
              </div>
            </div>

            <div className="row bg-grey project shadow-lg p-4 p-sm-5 mt-5 align-items-center">
              <div className="project__img order-md-2 p-0 col-12 col-md-5">
                <a href="https://marketplace-landing-29h.pages.dev/">
                  <img src={HayBossImg}></img>
                </a>
              </div>
              <div className="text-start col-12 col-md-7 px-0 px-md-5 mt-4 mt-sm-5 mt-md-0">
                <h3 className="display-4 mt-5 fw-normal">Team project: "HeyBoss"</h3>
                <p className="mt-5 mb-1">
                  <span className="fw-semi">Description:</span> Landing for marketplace
                </p>
                <p className="mb-1">
                  <span className="fw-semi">Functional:</span> Product description, Feedback form,
                  Localization of 2 languages
                </p>
                <p>
                  <span className="fw-semi">Tools:</span> React, JavaScript, Bootstrap, React
                  Router, React Spinners, react-i18next, REST APIs, SCSS, ESlint, Prettier
                </p>
              </div>
            </div>

            <div className="row bg-grey project shadow-lg p-4 p-sm-5 mt-5 align-items-center">
              <div className="project__img p-0 col-12 col-md-5">
                <a href="https://marketplace-landing-29h.pages.dev/">
                  <img src={HayBossImg}></img>
                </a>
              </div>
              <div className="text-start col-12 col-md-7 px-0 px-md-5 mt-4 mt-sm-5 mt-md-0">
                <h3 className="display-4 mt-5 fw-normal">Team project: "HeyBoss"</h3>
                <p className="mt-5 mb-1">
                  <span className="fw-semi">Description:</span> Landing for marketplace
                </p>
                <p className="mb-1">
                  <span className="fw-semi">Functional:</span> Product description, Feedback form,
                  Localization of 2 languages
                </p>
                <p>
                  <span className="fw-semi">Tools:</span> React, JavaScript, Bootstrap, React
                  Router, React Spinners, react-i18next, REST APIs, SCSS, ESlint, Prettier
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionProjects;
