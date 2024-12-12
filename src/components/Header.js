import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { BsHandbag } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { GiTireIronCross } from "react-icons/gi";

import "./Header.css";

const HeaderComponent = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  const navigationClass = isNavbarActive
    ? "navigation-list-active"
    : "navigation-list-hidden";

  return (
    <>
      <div className="header-wrapper">
        <div className="small-screen-header">
          <div className="logo-section">
            {isNavbarActive ? (
              <GiTireIronCross
                className="close-icon"
                size={25}
                onClick={toggleNavbar}
              />
            ) : (
              <HiMiniBars3
                className="menu-icon"
                size={25}
                onClick={toggleNavbar}
              />
            )}
            <Link to="/" className="nav-link">
              <img
                src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1713597113/Logo_vfw1bu.png"
                alt="Logo"
                className="logo-img"
              />
            </Link>
          </div>
          <div className="brand-name-section">
            <Link to="/" className="nav-link">
              <h1 className="brand-name">LOGO</h1>
            </Link>
          </div>
          <ul className="nav-icons">
            <li className="nav-icon-item">
              <FiSearch size={24} />
            </li>
            <li className="nav-icon-item">
              <IoHeartOutline size={24} />
            </li>
            <li className="nav-icon-item">
              <Link to="/cart" className="nav-link">
                <BsHandbag size={21} />
              </Link>
            </li>
          </ul>
        </div>

        <div className="large-screen-header">
          <div className="logo-section">
            <Link to="/" className="nav-link">
              <img
                src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1713597113/Logo_vfw1bu.png"
                alt="Logo"
                className="logo-img"
              />
            </Link>
          </div>
          <div className="brand-name-section">
            <Link to="/" className="nav-link">
              <h1 className="brand-name">LOGO</h1>
            </Link>
          </div>
          <ul className="nav-icons">
            <li className="nav-icon-item">
              <FiSearch size={24} />
            </li>
            <li className="nav-icon-item">
              <IoHeartOutline size={24} />
            </li>
            <li className="nav-icon-item">
              <Link to="/cart" className="nav-link">
                <BsHandbag size={21} />
              </Link>
            </li>
            <li className="nav-icon-item">
              <CiUser size={24} />
            </li>
            <li className="nav-icon-item">
              <select className="language-dropdown">
                <option id="English">ENG</option>
                <option id="HINDI">HIN</option>
                <option id="TELUGU">TEL</option>
              </select>
            </li>
          </ul>
        </div>

        <div className="small-screen-navigation">
          <ul className={navigationClass}>
            <li className="navigation-link">SHOP</li>
            <li className="navigation-link">SKILLS</li>
            <li className="navigation-link">STORIES</li>
            <li className="navigation-link">ABOUT</li>
            <li className="navigation-link">CONTACT US</li>
          </ul>
        </div>

        <div className="large-screen-navigation">
          <ul className="navigation-icons">
            <li className="navigation-link">SHOP</li>
            <li className="navigation-link">SKILLS</li>
            <li className="navigation-link">STORIES</li>
            <li className="navigation-link">ABOUT</li>
            <li className="navigation-link">CONTACT US</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
