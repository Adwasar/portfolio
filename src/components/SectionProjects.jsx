import HayBossImg from '../assets/img/HeyBoss.png';
import ReactPizza from '../assets/img/react-pizza.png';
import SneakerStore from '../assets/img/sneakers-store.png';
import RsHealthy from '../assets/img/rs-healthy.png';

function SectionProjects() {
  return (
    <>
      <section id="projects" className="min-vh-100 d-flex align-items-center">
        <div className="container my-5">
          <h2 className="display-2">Projects</h2>
          <div className="projects text-center ">
            <div className="row bg-grey project shadow-lg p-4 p-sm-5 mt-5 align-items-center">
              <div className="project__img p-0 mt-4 mt-md-0 col-12 col-md-5 order-1 order-md-0">
                <a href="https://marketplace-landing-29h.pages.dev/">
                  <img src={HayBossImg}></img>
                </a>
              </div>
              <div className="text-start col-12 col-md-7 px-0 px-md-5 mt-4 mt-sm-5 mt-md-0">
                <h3 className="display-4 fw-normal">Team project: "HeyBoss"</h3>
                <p className="mt-4 mb-1">
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
                <p>
                  <a className="fw-semi" href="https://marketplace-landing-29h.pages.dev/">
                    Live Demo
                  </a>
                </p>
              </div>
            </div>
            <div className="row bg-grey project shadow-lg p-4 p-sm-5 mt-5 align-items-center">
              <div className="project__img p-0 mt-4 mt-md-0 col-12 col-md-5 order-1">
                <a href="https://react-pizza-70179.netlify.app/">
                  <img src={ReactPizza}></img>
                </a>
              </div>
              <div className="text-start col-12 col-md-7 px-0 px-md-5 mt-4 mt-sm-5 mt-md-0">
                <h3 className="display-4 fw-normal">Project "Pizzas store"</h3>
                <p className="mt-4 mb-1">
                  <span className="fw-semi">Description:</span> Pizzas store
                </p>
                <p className="mb-1">
                  <span className="fw-semi">Functional:</span> add cards on cart (storage on
                  server), filter cards by name or category
                </p>
                <p>
                  <span className="fw-semi">Tools:</span> React, JavaScript, Redux toolkit, React
                  Router, React Spinners, React Skeleton, Axios, REST APIs, SCSS, ESlint, Prettier
                </p>
                <div className="d-flex gap-4">
                  <p>
                    <a className="fw-semi" href="https://github.com/Adwasar/react-pizza">
                      GitHub
                    </a>
                  </p>
                  <p>
                    <a className="fw-semi" href="https://react-pizza-70179.netlify.app/">
                      Live Demo
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="row bg-grey project shadow-lg p-4 p-sm-5 mt-5 align-items-center">
              <div className="project__img p-0 mt-4 mt-md-0 col-12 col-md-5 order-1 order-md-0">
                <a href="https://sneakers-store-3950213.netlify.app">
                  <img src={SneakerStore}></img>
                </a>
              </div>
              <div className="text-start col-12 col-md-7 px-0 px-md-5 mt-4 mt-sm-5 mt-md-0">
                <h3 className="display-4 fw-normal">Project "Sneakers store"</h3>
                <p className="mt-4 mb-1">
                  <span className="fw-semi">Description:</span> Sneakers store
                </p>
                <p className="mb-1">
                  <span className="fw-semi">Functional:</span> add cards on cart (storage on
                  server), add cards on favorites, filter by name, order history on the user page
                  (storage on server)
                </p>
                <p>
                  <span className="fw-semi">Tools:</span> React, JavaScript, React Router, React
                  Spinners, React Skeleton, Axios, REST APIs, SCSS, ESlint, Prettier
                </p>
                <div className="d-flex gap-3">
                  <p>
                    <a className="fw-semi" href="https://github.com/Adwasar/react-sneakers">
                      GitHub
                    </a>
                  </p>
                  <p>
                    <a className="fw-semi" href="https://sneakers-store-3950213.netlify.app">
                      Live Demo
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="row bg-grey project shadow-lg p-4 p-sm-5 mt-5 align-items-center">
              <div className="project__img p-0 mt-4 mt-md-0 col-12 col-md-5 order-1">
                <a href="https://rs-clone-adwasar-pnmrvvtl-zhannach.netlify.app/">
                  <img src={RsHealthy}></img>
                </a>
              </div>
              <div className="text-start col-12 col-md-7 px-0 px-md-5 mt-4 mt-sm-5 mt-md-0">
                <h3 className="display-4 fw-normal">Team project "RS-Healthy"</h3>
                <p className="mt-4 mb-1">
                  <span className="fw-semi">Description: </span>The application that helps with meal
                  planning
                </p>
                <p className="mb-1">
                  <span className="fw-semi">Functional:</span> after user input some values about
                  himself our app can propose personal data for this user about health and propose
                  meal plan for user.
                </p>
                <p>
                  <span className="fw-semi">Tools:</span> React, TypeScript, REST APIs, SCSS, Jest,
                  ESlint, Prettier
                </p>
                <div className="d-flex gap-3">
                  <p>
                    <a className="fw-semi" href="https://github.com/pnmrvvtl/rs-clone">
                      GitHub
                    </a>
                  </p>
                  <p>
                    <a
                      className="fw-semi"
                      href="https://rs-clone-adwasar-pnmrvvtl-zhannach.netlify.app/">
                      Live Demo
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionProjects;
