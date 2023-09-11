import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [membershipDropdown, setMembershipDropdown] = useState(false);
  const [newsDropdown, setNewsDropdown] = useState(false);
  const navigate = useNavigate();

  const showMenu = () => {
    setMenu(!menu);
  };

  const clearDropdowns = () => {
    setAboutDropdown(false);
    setMembershipDropdown(false);
    setNewsDropdown(false);
  };

  //stop body scroll when mobile menu is open
  menu
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <header className="flex justify-between bg-blue-500 w-full items-start md:px-8 lg:px-16 py-6 md:py-6 fixed top-0 w-full text-white z-10 px-8 md:px-20">
      <Link
        to="/"
        className="cursor-pointer text-2xl md:text-sm lg:text-2xl font-title"
        onClick={clearDropdowns}
      >
        Aka Okodu
      </Link>
      <div className="md:hidden">
        {menu ? (
          <IoClose size="36" onClick={showMenu} />
        ) : (
          <HiMenu size="36" onClick={showMenu} />
        )}
      </div>
      <nav
        className={`md:flex-row bg-blue-500 w-full md:w-auto px-8 md:px-0 h-screen md:h-auto flex flex-col gap-4 md:gap-2 lg:gap-6 align-center absolute top-16 left-0 md:static transition-all duration-1000 ease-in ${
          menu ? "top-12" : "top-[-990px]"
        }`}
      >
        <NavLink
          to="/"
          className="font-title outline-none gap-2 text-lg md:text-sm lg:text-lg"
          onClick={() => {
            clearDropdowns();
            setMenu();
          }}
        >
          Home
        </NavLink>
        <div className="dropdown flex flex-col">
          <button
            type="button"
            className="font-title outline-none flex justify-between items-center gap-2 text-lg md:text-sm lg:text-lg"
            onClick={() => {
              clearDropdowns();
              setAboutDropdown(!aboutDropdown);
              navigate("/about");
              setMenu();
            }}
          >
            About Us
            {aboutDropdown ? <BsChevronUp /> : <BsChevronDown />}
          </button>
          {aboutDropdown && (
            <ul
              className={`dropdown-content relative md:absolute md:top-16 text-sm transition-all duration-500 ease-in bg-blue-500 p-2`}
            >
              <li className="mb-2 mt-4 md:mt-1" onClick={setMenu}>
                <NavLink to="/about#umoji-brief" className="font-main">
                  A brief on Umoji
                </NavLink>
              </li>
              <li className="mb-2 mt-4 md:mt-1" onClick={setMenu}>
                <NavLink to="/about#aka-okodu" className="font-main ">
                  Aka Okodu
                </NavLink>
              </li>
              <li className="mb-2 mt-4 md:mt-1" onClick={setMenu}>
                <NavLink to="/about#values" className="font-main">
                  Values & Philosophy
                </NavLink>
              </li>
            </ul>
          )}
        </div>
        <div className="dropdown flex flex-col">
          <button
            type="button"
            className="font-title outline-none flex justify-between items-center gap-2 text-lg md:text-sm lg:text-lg"
            onClick={() => {
              clearDropdowns();
              setMembershipDropdown(!membershipDropdown);
              navigate("/membership");
              setMenu();
            }}
          >
            Membership
            {membershipDropdown ? <BsChevronUp /> : <BsChevronDown />}
          </button>
          {membershipDropdown && (
            <ul className="dropdown-content relative md:absolute md:top-16 text-sm bg-blue-500 p-2">
              <li className="mb-2 mt-4 md:mt-1" onClick={setMenu}>
                <NavLink to="/membership#board" className="font-main ">
                  Board of Trustees
                </NavLink>
              </li>
              <li className="mb-2 mt-4 md:mt-1" onClick={setMenu}>
                <NavLink to="/membership#committee" className="font-main ">
                  Executive Committee
                </NavLink>
              </li>
              <li className="mb-2 mt-4 md:mt-1" onClick={setMenu}>
                <NavLink to="/membership#distinguished" className="font-main ">
                  Distinguished Members
                </NavLink>
              </li>
            </ul>
          )}
        </div>
        <NavLink
          to="/constitution"
          className="font-title outline-none gap-2 text-lg md:text-sm lg:text-lg"
          onClick={() => {
            clearDropdowns();
            setMenu();
          }}
        >
          The Constitution
        </NavLink>
        <div className="dropdown flex flex-col ">
          <button
            type="button"
            className="font-title outline-none flex justify-between items-center gap-2 text-lg md:text-sm lg:text-lg"
            onClick={() => {
              clearDropdowns();
              setNewsDropdown(!newsDropdown);
              navigate("/news");
              setMenu();
            }}
          >
            News & Events
            {newsDropdown ? <BsChevronUp /> : <BsChevronDown />}
          </button>
          {newsDropdown && (
            <ul className="dropdown-content relative md:absolute md:top-16 text-sm bg-blue-500 p-2">
              <li className="mb-2 mt-4 md:mt-1" onClick={setMenu}>
                <NavLink to="/news#projects" className="font-main ">
                  Projects
                </NavLink>
              </li>
              <li className="mb-2 mt-4 md:mt-1" onClick={setMenu}>
                <Link to="/news#gallery" className="font-main ">
                  Gallery
                </Link>
              </li>
            </ul>
          )}
        </div>
        <NavLink
          to="/enquiry"
          className="font-title outline-none gap-2 text-lg md:text-sm lg:text-lg"
          onClick={() => {
            clearDropdowns();
            setMenu();
          }}
        >
          Enquiries
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
