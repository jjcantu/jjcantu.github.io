/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../styles";

function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            // eslint-disable-next-line no-undef
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Jose &nbsp;
            <span className="sm:block hidden">Cantu</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white transition-colors duration-500 cursor-pointer font-medium`}
              onClick={() => setActive(link.title)}
            >
              {link.isExternal ? <a href={link.to} target="_blank" rel="noreferrer">{link.title}</a> 
              : <a href={`#${link.id}`}>{link.title}</a> }
              
            </li>
            ))}
        </ul>
      </div>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px]
          object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
