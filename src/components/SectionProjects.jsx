import HayBossImg from '../assets/img/HeyBoss.png';

function SectionProjects() {
  return (
    <>
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
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis,
              </div>
            </div>
            <div className="row bg-grey project shadow-lg px-5 py-5 mt-5 align-items-center">
              <div className="project__img p-0 col-12 col-md-5 mt-5 mt-md-0 order-2">
                <a href="https://marketplace-landing-29h.pages.dev/">
                  <img src={HayBossImg}></img>
                </a>
              </div>
              <div className="col-12 col-md-7 px-0 px-md-5 order-1 ">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis,
              </div>
            </div>
            <div className="row bg-grey project shadow-lg px-5 py-5 mt-5 align-items-center">
              <div className="project__img p-0 col-12 col-md-5 order-1">
                <a href="https://marketplace-landing-29h.pages.dev/">
                  <img src={HayBossImg}></img>
                </a>
              </div>
              <div className="col-12 col-md-7 px-0 px-md-5 mt-5 mt-md-0 order-2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis,
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionProjects;
