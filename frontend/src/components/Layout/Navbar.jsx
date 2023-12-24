import React from "react";

// third party
import { Link } from "react-router-dom";

// internal imports
import styles from "../../styles/styles";
import { navItems } from "../../static/data";

const Navbar = ({ active }) => {
  return (
    <div className={`block 800px:${styles.noramlFlex}`}>
      {navItems &&
        navItems.map((item, index) => (
          <div className="flex" key={index}>
            <Link
              to={item.url}
              className={`${
                active === index + 1
                  ? "text-[#e12626]"
                  : "text-black 800px:text-black text-base"
              } text-base pb-[30px] 800px:pb-1 font-medium px-6 py-1 cursor-pointer transition-colors  ease-in-out hover:rounded-md  hover:bg-[#e12626] hover:text-white`}
            >
              {item.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
