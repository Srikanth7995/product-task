import React, { useState } from "react";
import { LuArrowBigDownDash, LuArrowBigUpDash } from "react-icons/lu";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductImage from "../components/ProductImage";
import arrowleft from "../assets/arrow-left.png";

import "./Home.css";

const Home = () => {
  const [isFilterActive, setIsFilterActive] = useState(false);

  const handleFilterToggle = () => {
    setIsFilterActive((prevState) => !prevState);
  };

  const arrowIcon = isFilterActive ? (
    <LuArrowBigUpDash className="icon-arrow" size={20} />
  ) : (
    <LuArrowBigDownDash className="icon-arrow" size={20} />
  );

  const filterClass = isFilterActive
    ? "filter-items-visible"
    : "filter-items-hidden";

  const filterButtonLabel = isFilterActive ? "HIDE FILTER" : "SHOW FILTER";

  return (
    <div className="home-wrapper">
      <Header />
      <div className="content-wrapper">
        <div className="breadcrumb">
          <p className="home-link">HOME</p>
          <p className="shop-link">SHOP</p>
        </div>
        <div className="heading-description">
          <h1 className="main-heading">DISCOVER OUR PRODUCTS</h1>
          <p className="product-description">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementun
            dolor.
          </p>
        </div>

        <div className="mobile-filters">
          <div className="filter-header" onClick={handleFilterToggle}>
            <h1 className="filter-button">FILTER</h1>
            {arrowIcon}
          </div>
          <div className="filter-select-wrapper">
            <select className="filter-dropdown">
              <option id="Recommended" className="filter-option">
                RECOMMENDED
              </option>
              <option id="NewestFirst" className="filter-option">
                NEWEST FIRST
              </option>
              <option id="Popular" className="filter-option">
                POPULAR
              </option>
              <option id="HighToLow" className="filter-option">
                PRICE: HIGH TO LOW
              </option>
              <option id="LowToHigh" className="filter-option">
                PRICE: LOW TO HIGH
              </option>
            </select>
          </div>
        </div>

        <div className="desktop-filters">
          <div className="filter-container">
            <h1 className="item-count">3425 ITEMS</h1>
            <div className="toggle-filter">
              {isFilterActive ? (
                <MdChevronLeft className="icon-arrow" size={23} />
              ) : (
                <MdChevronRight className="icon-arrow" size={23} />
              )}
              <h1 className="toggle-filter-text" onClick={handleFilterToggle}>
                {filterButtonLabel}
              </h1>
            </div>
          </div>
          <div className="filter-select-wrapper">
            <select className="filter-dropdown">
              <option id="Recommended" className="filter-option">
                RECOMMENDED
              </option>
              <option id="NewestFirst" className="filter-option">
                NEWEST FIRST
              </option>
              <option id="Popular" className="filter-option">
                POPULAR
              </option>
              <option id="HighToLow" className="filter-option">
                HIGH TO LOW
              </option>
              <option id="LowToHigh" className="filter-option">
                LOW TO HIGH
              </option>
            </select>
          </div>
        </div>
        <div className="filter-product-section">
          <div className={filterClass}>
            <ul className="filter-list">
              <li className="filter-checkbox">
                <input type="checkbox" id="CheckBox" />
                <label className="filter-label" htmlFor="CheckBox">
                  CUSTOMIZABLE
                </label>
              </li>
              <li className="filter-item">
                <div className="arrow-left">
                  <p>IDEAL FOR </p> <img src={arrowleft} alt="arrow" />
                </div>{" "}
                <p>All</p>
              </li>
              <li className="filter-item">
                <div className="arrow-left">
                  <p>OCCASION </p> <img src={arrowleft} alt="arrow" />
                </div>{" "}
                <p>All</p>
              </li>
              <li className="filter-item">
                <div className="arrow-left">
                  <p>WORK </p> <img src={arrowleft} alt="arrow" />
                </div>{" "}
                <p>All</p>
              </li>
              <li className="filter-item">
                <div className="arrow-left">
                  <p>FABRIC </p> <img src={arrowleft} alt="arrow" />
                </div>{" "}
                <p>All</p>
              </li>
              <li className="filter-item">
                <div className="arrow-left">
                  <p>SEGMENT </p> <img src={arrowleft} alt="arrow" />
                </div>{" "}
                <p>All</p>
              </li>
              <li className="filter-item">
                <div className="arrow-left">
                  <p>SUITABLE FOR </p> <img src={arrowleft} alt="arrow" />
                </div>{" "}
                <p>All</p>
              </li>
              <li className="filter-item">
                <div className="arrow-left">
                  <p>RAW MATERIALS </p> <img src={arrowleft} alt="arrow" />
                </div>{" "}
                <p>All</p>
              </li>
              <li className="filter-item">
                <div className="arrow-left">
                  <p>PATTERN </p> <img src={arrowleft} alt="arrow" />
                </div>{" "}
                <p>All</p>
              </li>
            </ul>
          </div>
          <ProductImage isFilterActive={isFilterActive} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
