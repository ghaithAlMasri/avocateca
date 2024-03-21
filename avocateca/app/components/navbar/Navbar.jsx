"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdClose, MdMenu } from "react-icons/md";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const windowWidth= useWindowSize()

  const handleMenuClick = () => {
    setMobileMenu(!mobileMenu);
  };

  const menuVariants = {
    opened: {
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    },
    closed: {
      y: "-100%",
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  };

  const NavItem = ({ href, children }) => (
    <li onClick={handleMenuClick} className="hover:text-hover-color ease-in-out duration-300 hover:scale-90">
      <a href={href}>{children}</a>
    </li>
  );

  const NavMenu = () => (
    <motion.div
      className="flex justify-between items-start w-full"
      initial="closed"
      animate={mobileMenu ? "opened" : "closed"}
      variants={menuVariants}
    >
      <div className="flex justify-start items-start flex-col gap-2">
        <div onClick={handleMenuClick}>
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
        <ul>
          <NavItem href="#home">Acasă</NavItem>
          <NavItem href="#services">Servicii</NavItem>
          <NavItem href="#about">Despre noi</NavItem>
          <NavItem href="#contact">Contactați</NavItem>
        </ul>
      </div>
      <MdClose
        className="cursor-pointer text-primary-color hover:scale-110 transition-all duration-100"
        onClick={handleMenuClick}
      />
    </motion.div>
  );

  return (
    <div className={`bg-light-background-color ${windowWidth > 720 ? 'px-20' : 'px-10'} py-3 text-second-text-color shadow-xl fixed w-full h-fit z-10 mb-10`}
    >
      <div className="flex justify-between items-center w-full h-fit">
        {windowWidth > 720 ? (
          <DesktopMenu />
        ) : (
          <MobileMenu />
        )}
      </div>
    </div>
  );

  function DesktopMenu() {
    return (
      <div className="flex justify-between items-center w-full h-fit">
        <div className="flex justify-center items-center">
          <a href="#home">
            <Image
              src={"/logo-no-background.png"}
              width={windowWidth >= 2200 ? 300 : windowWidth > 1250 ? 125 : 100}
              height={windowWidth >= 2200 ? 300 : windowWidth > 1250 ? 125 : 100}
              alt={"Avocateca Logo"}
              className="object-contain"
              priority
            />
          </a>
        </div>
        <div className="flex justify-center items-center gap-10 list-none text-sm lg:text-sm xl:text-md 2xl:text-lg 3xl:text-[30px]">
          <NavItem href="#home">Acasă</NavItem>
          <NavItem href="#services">Servicii</NavItem>
          <NavItem href="#about">Despre noi</NavItem>
          <NavItem href="#contact">Contactați</NavItem>
        </div>
      </div>
    );
  }

  function MobileMenu() {
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
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState(undefined);
  
    useEffect(() => {
      function handleResize() {
        setWindowSize(window.innerWidth);
      }
      
      window.addEventListener("resize", handleResize);

      handleResize();
      
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }
}

export default Navbar;
