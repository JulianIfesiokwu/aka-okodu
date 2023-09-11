import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer className="flex flex-col md:flex-row md:justify-between bg-blue-500 w-full p-8 lg:px-16 gap-1 text-white">
      <section className="flex flex-col mb-4">
        <h3 className="text-2xl md:text-sm lg:text-lg font-title mb-2">
          Navigation
        </h3>
        <NavLink to="/" className="font-main text-base md:text-sm lg:text-base">
          Home
        </NavLink>
        <NavLink className="font-main justify-between items-center text-base md:text-sm lg:text-base">
          About Us
        </NavLink>
        <NavLink className="font-main justify-between items-center text-base md:text-sm lg:text-base">
          Membership
        </NavLink>
        <NavLink
          to="/constitution"
          className="font-main text-base md:text-sm lg:text-base"
        >
          The Constitution
        </NavLink>
        <NavLink className="font-main text-base md:text-sm lg:text-base">
          News & Events
        </NavLink>
        <NavLink
          to="/enquiry"
          className="font-main text-base md:text-sm lg:text-base"
        >
          Enquires
        </NavLink>
      </section>
      <section className="mb-4">
        <h3 className="text-2xl md:text-sm lg:text-lg font-title mb-2">
          Email
        </h3>
        <p className="font-main text-base md:text-sm lg:text-base">
          julianbabe@gmail.com
        </p>
      </section>
      <section className="mb-4">
        <h3 className="text-2xl md:text-sm lg:text-lg font-title mb-2">
          Phone
        </h3>
        <p className="font-main text-base md:text-sm lg:text-base">
          0818 345 6789
        </p>
      </section>
      <section className="mb-4">
        <p className="font-main text-base md:text-sm lg:text-base">
          &copy; {year} Aka Okodu
        </p>
      </section>
    </footer>
  );
};

export default Footer;
