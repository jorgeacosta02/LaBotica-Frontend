import styles from './_NavBarLayout.module.scss';
import React, { useEffect, useState } from 'react';
import NavBarLogoComp from "../../components/navBarLogoComp/NavBarLogoComp";
import NavBarNavListComp from "../../components/navBarNavListComp/NavBarNavListComp";
import NavBarMenuComp from "../../components/navBarMenuComp/NavBarMenuComp";


const NavBarLayout: React.FC = () => {

  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      setScrollingDown(currentScrollPosition > 0); // Cambio aquí, utilizando un valor fijo
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollingStyles = `${styles.navBar} ${
    scrollingDown ?
    styles.backgDark:
    ''
  }`

  return (
    <div className={scrollingStyles}>
      <NavBarLogoComp/>
      <NavBarMenuComp/>
      <NavBarNavListComp/>
    </div>
  )
}

export default NavBarLayout

