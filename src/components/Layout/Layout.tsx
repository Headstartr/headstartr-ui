import Image from 'next/image';
import React, { PropsWithChildren, useState } from 'react';
import menuIcon from '@/assets/images/menu-icon.svg';
import HeadstartrLogoWithText from '@/components/HeastartrLogoWithText/HeadstartrLogoWithText';
import BurgerMenu from '@/components/Layout/BurgerMenu/BurgerMenu';
import Footer from '@/components/Layout/Footer/Footer';

function Layout({ children }: PropsWithChildren) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <main>
        <header className="flex w-full items-center justify-between px-[14%] py-8">
          <HeadstartrLogoWithText
            imageClasses="h-auto w-12"
            textClasses="text-xl lg:text-2xl"
            variant="gradient"
          />
          <button onClick={openMenu} data-testid="burger-button">
            <Image
              src={menuIcon}
              alt="Open hamburger menu button"
              className="h-auto w-11 lg:w-12"
            />
          </button>
        </header>
        <div>{children}</div>
        {isMenuOpen ? <BurgerMenu closeMenu={closeMenu} /> : null}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
