import { useState } from 'react';

import SectionProjects from './components/SectionProjects';
import SectionHero from './components/SectionHero';
import SectionContacts from './components/SectionContacts';
import Header from './layout/Header';
import BurgerMenu from './layout/BurgerMenu';

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
      <Header openMenu={openMenu} />
      <main>
        <SectionHero />
        <SectionProjects />
        <SectionContacts />
        <BurgerMenu closeMenu={closeMenu} menuIsOpen={menuIsOpen} />
      </main>
    </>
  );
}

export default App;
