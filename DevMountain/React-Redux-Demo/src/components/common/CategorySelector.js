/**
 * Created by cjpowers on 6/28/16.
 */
import React from 'react';
import {Link} from 'react-router';

class CategorySelector extends React.Component{
  render() {
    return (
      <div className="category-holder">
        <Link to="shop">
          <div className="category-box">
            <img className="category-icon" src="https://www.etsy.com/assets/dist/images/homepage/vesta/mobile_categories_home-living.20160609191624.png" alt=""/>
            <p className="category-text">HOME & LIVING</p>
            <div className="category-arrow"><span className="glyphicon glyphicon-chevron-right"></span></div>
          </div>
        </Link>
        <Link to="shop">
          <div className="category-box">
            <img className="category-icon" src="https://www.etsy.com/assets/dist/images/homepage/vesta/mobile_categories_jewelry.20160609191624.png" alt=""/>
            <p className="category-text">JEWELRY</p>
            <div className="category-arrow"><span className="glyphicon glyphicon-chevron-right"></span></div>
          </div>
        </Link>
        <Link to="shop">
          <div className="category-box">
            <img className="category-icon" src="https://www.etsy.com/assets/dist/images/homepage/vesta/mobile_categories_clothing.20160609191624.png" alt=""/>
            <p className="category-text">CLOTHING</p>
            <div className="category-arrow"><span className="glyphicon glyphicon-chevron-right"></span></div>
          </div>
        </Link>
        <Link to="shop">
          <div className="category-box">
            <img className="category-icon" src="https://www.etsy.com/assets/dist/images/homepage/vesta/mobile_categories_crafts.20160609191624.png" alt=""/>
            <p className="category-text">CRAFT SUPPLIES & TOOLS</p>
            <div className="category-arrow"><span className="glyphicon glyphicon-chevron-right"></span></div>
          </div>
        </Link>
        <Link to="shop">
          <div className="category-box">
            <img className="category-icon" src="https://www.etsy.com/assets/dist/images/homepage/vesta/mobile_categories_weddings.20160609191624.png" alt=""/>
            <p className="category-text">WEDDINGS</p>
            <div className="category-arrow"><span className="glyphicon glyphicon-chevron-right"></span></div>
          </div>
        </Link>
        <Link to="shop">
          <div className="category-box">
            <img className="category-icon" src="https://www.etsy.com/assets/dist/images/homepage/vesta/mobile_categories_toys-games.20160609191624.png" alt=""/>
            <p className="category-text">TOYS & GAMES</p>
            <div className="category-arrow"><span className="glyphicon glyphicon-chevron-right"></span></div>
          </div>
        </Link>
      </div>
    )
  }
}

export default CategorySelector;

