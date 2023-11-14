function Header({ openMenu }) {
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
    </>
  );
}

export default Header;
