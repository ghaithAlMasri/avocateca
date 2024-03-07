// helpers.js

import React from "react";
import { Image } from "next/image";
import { MdMenu } from "react-icons/md";


function DesktopMenu({ NavItem, windowWidth }) {
  return (
    <div className="flex justify-between items-center w-full h-fit">
      <div className="flex justify-center items-center">
        <a href="#home">
          <Image
            src={"/logo-no-background.png"}
            width={windowWidth > 1250 ? 125 : 100}
            height={windowWidth > 1250 ? 125 : 100}
            alt={"Avocateca Logo"}
            className="object-contain w-auto h-auto"
            priority
          />
        </a>
      </div>
      <div className="flex justify-center items-center gap-10 list-none text-sm lg:text-sm xl:text-md 2xl:text-lg">
        <NavItem href="#home">Acasă</NavItem>
        <NavItem href="#services">Servicii</NavItem>
        <NavItem href="#about">Despre noi</NavItem>
        <NavItem href="#contact">Contactați</NavItem>
      </div>
    </div>
  );
}

function MobileMenu(NavMenu, mobileMenu, windowWidth, handleMenuClick) {
  return (
    <div className="flex justify-between items-center w-full h-fit">
      {!mobileMenu ? (
        <div className="flex justify-between items-center w-full h-fit">
          <div className="flex justify-center items-center">
            <a href="#home">
              <Image
                src={"/logo-no-background.png"}
                width={windowWidth > 1250 ? 125 : 100}
                height={windowWidth > 1250 ? 125 : 100}
                alt={"Avocateca Logo"}
                className="object-contain w-auto h-auto"
                priority
              />
            </a>
          </div>
          <MdMenu
            className="cursor-pointer text-primary-color hover:scale-110 transition-all duration-100"
            onClick={handleMenuClick}
          />
        </div>
      ) : (
        <NavMenu />
      )}
    </div>
  );
}

export { DesktopMenu, MobileMenu };
