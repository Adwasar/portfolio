function BurgerMenu({ closeMenu, menuIsOpen }) {
  return (
    <>
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
    </>
  );
}

export default BurgerMenu;
