import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import myImage from './images/banner.png';
import picOne from './images/1.png';
import picTwo from './images/2.png';
import picThree from './images/3.png';
import picFour from './images/6.jpg';
import picFive from './images/5.jpg';
import picSix from './images/4.jpg';
import picSeven from './images/7.jpg';
import picEight from './images/8.jpg';
import picNine from './images/9.jpg';
import picTen from './images/10.jpg';

import picEleven from './images/11.jpg';
import picTweleve from './images/12.png';
import picThirteen from './images/13.jpg';

import cart from './images/cart.png';

import apple from './images/apple.png';
import google from './images/google.png';

import facebook from './images/facebook.png';
import youtube from './images/youtube.png';
import twitter from './images/twitter.png';
import inT from './images/in.png';

import './App.css';

class App extends Component{
  render(){
    return (
      <div>
        {/* ------------------- start first  top-navbar ------------------- */}
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>                        
              </button>
              <a className="navbar-brand" href="#">SUPPLYAR</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li className="active"><a href="#">General Catalog</a></li>
                <li ><a href="#">Find A Branch</a></li>
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">Services<span className="caret" style={{color: 'red',marginLeft: '5px'}}></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Page 1</a></li>
                    <li><a href="#">Page 2</a></li>
                    <li><a href="#">Page 3</a></li>
                    <li><a href="#">Page 4</a></li>
                    <li><a href="#">Page 5</a></li>
                    <li><a href="#">Page 6</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">Solutions <span className="caret" style={{color: 'red',marginLeft: '5px'}}></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Page 1</a></li>
                    <li><a href="#">Page 2</a></li>
                    <li><a href="#">Page 3</a></li>
                    <li><a href="#">Page 4</a></li>
                    <li><a href="#">Page 5</a></li>
                    <li><a href="#">Page 6</a></li>
                    <li><a href="#">Page 7</a></li>
                    <li><a href="#">Page 8</a></li>
                    <li><a href="#">Page 9</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">Worldwide <span className="caret" style={{color: 'red',marginLeft: '5px'}}></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Page 1</a></li>
                    <li><a href="#">Page 2</a></li>
                    <li><a href="#">Page 3</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* ------------------- end first  top-navbar ------------------- */}

        {/* ------------------- start second navbar ------------------- */}
        <div className="navbarSec" style={{marginTop: "50px"}}>

          {/* start all-Products dropdown */}
          <div className="dropdownSec">
            <button className="dropbtn">All Products 
              <i className="fa fa-caret-down" style={{color: 'red',marginLeft: '5px'}}></i>
            </button>
            <div className="dropdown-content">
              <div className="header">
                <h2>All Categories</h2>
                <hr className="line" />
              </div>
              <div className="row-for-all-products">
                <div className="column-for-all-products">
                  <div className="rightBar">
                    <a href="#">Product 1</a>
                    <a href="#">Product 2</a>
                    <a href="#">Product 3</a>
                    <a href="#">Product 4</a>
                    <a href="#">Product 5</a>
                    <a href="#">Product 6</a>
                    <a href="#">Product 7</a>
                    <a href="#">Product 8</a>
                    <a href="#">Product 9</a>
                  </div>
                </div>
                <div className="column-for-all-products">
                  <div className="rightBar">
                    <a href="#">Product 1</a>
                    <a href="#">Product 2</a>
                    <a href="#">Product 3</a>
                    <a href="#">Product 4</a>
                    <a href="#">Product 5</a>
                    <a href="#">Product 6</a>
                    <a href="#">Product 7</a>
                    <a href="#">Product 8</a>
                    <a href="#">Product 9</a>
                  </div>
                </div>
                <div className="column-for-all-products">
                    <a href="#">Product 1</a>
                    <a href="#">Product 2</a>
                    <a href="#">Product 3</a>
                    <a href="#">Product 4</a>
                    <a href="#">Product 5</a>
                    <a href="#">Product 6</a>
                    <a href="#">Product 7</a>
                    <a href="#">Product 8</a>
                    <a href="#">Product 9</a>
                </div>
              </div>
            </div>
          </div> 
          {/* end all-Products dropdown */}

          {/* start search */}
          <form className="navbar-form navbar-left" role="search">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Enter keyword, item, model or replacement part number" />
              <button type="submit" className="btn btn-default" >Search</button>
            </div>
          </form>
          {/* end search */}

          {/* start bulk-order */}
          <div className="dropdownSecbulk">
            <button className="dropbtn">Bulk Order
              <i className="fa fa-caret-down" style={{color: 'red',marginLeft: '5px'}}></i>
            </button>
            <div className="dropdown-content">
              <div className="header">
                <h2>Line By Line</h2>
              </div>
              <div className="row">
                <div className="col-xs-10 col-xs-offset-1" style={{border: '1px thin red !important'}}>
                  <div className="col-xs-8 center" style={{border: '1px thin grey !important'}}>
                      <p>Item #</p>
                      <input type="text" />
                  </div>
                  <div className="col-xs-4 center" style={{border: '1px thin grey !important'}}>
                      <p>Qty</p>
                      <input type="text" />
                  </div>
                </div>
              </div>
              
              <div className="row" style={{marginTop: '5px'}}>
                <div className="col-xs-10 col-xs-offset-1">
                  <div className="col-xs-8 center">
                      <input type="text" />
                  </div>
                  <div className="col-xs-4 center">
                      <input type="text" />
                  </div>
                </div>
              </div>
              
              <div className="row" style={{marginTop: '5px'}}>
                <div className="col-xs-10 col-xs-offset-1">
                  <div className="col-xs-8 center">
                      <input type="text" />
                  </div>
                  <div className="col-xs-4 center">
                      <input type="text" />
                  </div>
                </div>
              </div>
              
              <div className="row" style={{marginTop: '5px'}}>
                <div className="col-xs-10 col-xs-offset-1">
                  <div className="col-xs-8 center">
                      <input type="text" />
                  </div>
                  <div className="col-xs-4 center">
                      <input type="text" />
                  </div>
                </div>
              </div>

              <center className="bulk-nav-btn">
                <button className="bulk-btn">Add To Cart</button>
              </center>
              {/* <hr className="line" /> */}
              
              <div className="bulkpage-url">
                <a href="#" >Show more entry fields for copy & paste</a>
              </div>
              
            </div>
          </div> 
          {/* end bulk-order */}
          

          <div className="cart">
            <a href="#" >
              <img src={cart} className="" style={{height: '25px', width: '25px', borderRadius: '20px', border: '1px white'}} />
            </a>
          </div>
          {/* end cart */}

        </div>
        {/* ------------------- end second navbar ------------------- */}
        

        {/* ------------------- start mid-container ------------------- */}
        <div className="mid-container">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="row" style={{margin: '0px',padding: '0px',marginTop: '10px'}}>

                    {/* start login */}
                    <div className="col-md-3" style={{margin: '0px',padding: '0px'}}>
                     
                      <div className="row siz">
                        <div className="col-xs-12 siz">
                          <div className="login-section">
                            <div className="login-section-inner">
                              <h2 className="login-title">Sign In</h2>
                              <form>
                                <input type="text" placeholder="User Id" name="id" required />
                                <input type="password" placeholder="Password" name="password" required />
                                <ul className="inlineList">
                                  <li><a href="#"><span>Forgot User Id?</span></a>&nbsp;&nbsp;</li>
                                  <li><a href="#"><span>Forgot Password?</span></a></li>
                                </ul>
                                <button type="submit" className="btn btn-primary" >Login</button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row siz top">
                        <div className="col-xs-12 siz" >
                          <div className="know-how">
                              <img src={picThirteen} className="img-responsive" />
                              <h3>An online resource of industry news you can use.</h3>
                              <div className="know-go">
                                <a href="#" className="btn know-how-mine" >View Articles</a>
                              </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    {/* end login */}

                    {/* start mid div */}
                    <div className="col-md-9" style={{margin: '0px',padding: '0px'}}>
                      {/* start banner */}
                      <div className="row" style={{margin: '0px',padding: '0px', border: '1px solid #E6E6E6'}}>
                        <div className="banner-inner">
                          <a href="#" >
                            <img src={myImage} className="banner-pic" />
                          </a>
                        </div>
                      </div>
                      {/* end banner */}

                      {/* start industry-add */}
                      <div className="row" style={{margin: '0px',padding: '0px',marginTop: '20px'}}>
                        <div className="col-xs-12 sizing">
                          <div className="col-xs-4 same">
                            <img src={picOne} />
                            <p>Our team of 1900+ experienced and professional customer service reps are ready to help you.</p>
                          </div>
                          <div className="col-xs-4 same">
                            <img src={picTwo} />
                            <p>Our team of 1900+ experienced and professional customer service reps are ready to help you.</p>
                          </div>
                          <div className="col-xs-4 same">
                            <img src={picThree} />
                            <p>Our team of 1900+ experienced and professional customer service reps are ready to help you.</p>
                          </div>
                        </div>
                      </div>
                      {/* end industry-add */}

                      {/* start special promos one */}
                      <div className="row" style={{margin: '0px',padding: '0px',marginTop: '50px'}}>
                        <div className="col-xs-12 special">
                          <p className="text">Features on Shomoy Technologies Ltd.</p>
                          <div className="col-xs-4 siz">
                            <img src={picFour} className="img-responsive" />
                          </div>
                          <div className="col-xs-4 siz">
                            <img src={picFive} className="img-responsive" />
                          </div>
                          <div className="col-xs-4 siz">
                            <img src={picSix} className="img-responsive" />
                          </div>
                        </div>
                      </div>
                      {/* end special promos one */}

                      {/* start special promos second */}
                      <div className="row" style={{margin: '0px',padding: '0px',marginTop: '20px'}}>
                        <div className="col-xs-12 promos-sec">
                          <div className="col-xs-4 siz">
                            <p className="promos-sec-text">New Products</p>
                            <img src={picSeven} className="promos-sec-img" />
                            <h5 className="promos-sec-para">The latest innovations that help keep your business running smoothly.</h5>
                            <a href="#" className="feature">Shop New Products</a>
                          </div>
                          <div className="col-xs-4 siz">
                            <p className="promos-sec-text">Hot Buys</p>
                            <img src={picEight} className="promos-sec-img" />
                            <h5 className="promos-sec-para">Budget-saving deals on top products you use every day.</h5>
                            <a href="#" className="feature">Shop Hot Buys</a>
                          </div>
                          <div className="col-xs-4 siz">
                            <p className="promos-sec-text">Clearance Items</p>
                            <img src={picNine} className="promos-sec-img" />
                            <h5 className="promos-sec-para">Hurry and save big on high-quality, limited-quantity items.</h5>
                            <a href="#" className="feature">Shop Clearance</a>
                          </div>
                          <span className="promos-sec-line"></span>
                        </div>
                      </div>
                      {/* end special promos second */}

                      {/* start special promos third */}
                      <div className="row" style={{margin: '0px',padding: '0px',marginTop: '20px'}}>
                        <div className="col-xs-12 promos-third">
                          <p className="promos-third-text">Online resources to help you create a safe, sustainable and compliant workplace.</p>
                          {/* <a href="#" className="collections">View All Collections</a> */}
                          <div className="col-xs-4 siz">
                            <p className="promos-third-text">Safety</p>
                            <img src={picTen} className="promos-third-img" />
                            <h5 className="promos-third-para">All the products and resources that help you keep your facility safe and in compliance.</h5>
                            <a href="#" className="feature">Shop Safety</a>
                          </div>
                          <div className="col-xs-4 siz">
                            <p className="promos-third-text">Green</p>
                            <img src={picEleven} className="promos-third-img" />
                            <h5 className="promos-third-para">Environmentally preferable products and resources for a more sustainable workplace.</h5>
                            <a href="#" className="feature">Shop Green</a>
                          </div>
                          <div className="col-xs-4 siz">
                            <p className="promos-third-text">Emergency Preparedness</p>
                            <img src={picTweleve} className="promos-third-img" />
                            <h5 className="promos-third-para">Help in planning and preparing for, responding to and recovering from disruptions to your business.</h5>
                            <a href="#" className="feature">Shop Emergency Preparedness</a>
                          </div>
                        </div>
                      </div>
                      {/* end special promos third */}


                      {/* start company-descritption */}
                      <div className="row" style={{margin: '0px',padding: '0px',marginTop: '35px'}}>
                        <div className="col-xs-12 special">
                          <p className="company-descritption">
                            Grainger is America's trusted source for industrial supplies and safety products. 
                            For over 90 years, Grainger has built a tradition of serving businesses, big and small, 
                            with effortless ways to get the products and services they need. We do this by providing 
                            a huge selection of over 1.5 million products from thousands of trusted suppliers. 
                            Our world–class supply chain means you get same–day shipping on 98% of in–stock items 
                            within the continental U.S. when your order is received by 5 p.m. local time at the 
                            shipping facility (which may be in a different time zone from you). And when you need 
                            something the same day, you can stop by one of our 250 branches nationwide. Grainger 
                            backs it all up with 24/7 customer service and free technical support from industry experts. 
                            If digital is your thing, Grainger.com® offers powerful online tools and a mobile app that makes 
                            ordering (and controlling what you order) fast, easy and ready to go whenever and wherever you are. 
                            For all the things you do to get the job done, Grainger's got your back.
                          </p>
                        </div>
                      </div>
                      {/* end company-descritption */}
                      
                    </div>
                    {/* end mid div */}
                    
                  </div>
                </div>
              </div>
            </div>   
        </div>
        {/* ------------------- end  mid-container ------------------- */}

        {/* ------------------- start top-footer ------------------- */}
        <div className="top-footer">
            <div className="container">
              <div className="row" style={{margin: '20px 0px'}}>
                  <table className="col-xs-12 center">
                    <thead>
                      <tr>
                        <th><p className="link-title">Company Information</p></th>
                        <th><p className="link-title">Customer Support</p></th>
                        <th><p className="link-title">Order Support</p></th>
                        <th><p className="link-title">Online Resources</p></th>
                        <th><p className="link-title">Services</p></th>
                      </tr>
                    </thead>
                    <tbody>
                      
                      <tr>
                        <td className="data-table">
                          <ul className="first-column">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Accessibility Statement</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Corporate Social Responsibility</a></li>
                            <li><a href="#">Inclusion & Diversity</a></li>
                            <li><a href="#">Investor Relations</a></li>
                            <li><a href="#">Press Room</a></li>
                            <li><a href="#">Supplier Overview</a></li>
                            <li><a href="#">Technical Education</a></li>
                          </ul>
                        </td>

                        <td>
                          <ul className="first-column">
                            <li><a href="#">Catalog Request</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Feedback</a></li>
                            <li><a href="#">Find A Branch</a></li>
                            <li><a href="#">Credit Reference</a></li>
                          </ul>
                        </td>
                        
                        <td>
                          <ul className="first-column">
                            <li><a href="#">Orders</a></li>
                            <li><a href="#">Pick-Up</a></li>
                            <li><a href="#">Auto-Reorder</a></li>
                            <li><a href="#">Special Orders</a></li>
                            <li><a href="#">Extended Protection Plan</a></li>
                            <li><a href="#">Invoices Your Way</a></li>
                            <li><a href="#">Electronic Packing Slips</a></li>
                            <li><a href="#">Returns & Cancellations</a></li>
                            <li><a href="#">Guarantee And Warranty</a></li>
                          </ul>
                        </td>

                        <td>
                          <ul className="first-column">
                            <li><a href="#">Catalog</a></li>
                            <li><a href="#">Clearance Center</a></li>
                            <li><a href="#">Grainger Choice</a></li>
                            <li><a href="#">Hot Buys</a></li>
                            <li><a href="#">KnowHowSM</a></li>
                            <li><a href="#">Rebates</a></li>
                            <li><a href="#">Replacement Parts</a></li>
                            <li><a href="#">SupplyLink®</a></li>
                            <li><a href="#">Today's Features</a></li>
                            <li><a href="#">Webinars</a></li>
                          </ul>
                        </td>

                        <td>
                          <ul className="first-column">
                            <li><a href="#">Environmental, Health And Safety Services</a></li>
                            <li><a href="#">Energy Services</a></li>
                            <li><a href="#">Lighting Solutions</a></li>
                            <li><a href="#">Grainger Midstream Utility Rebate Incentive</a></li>
                            <li><a href="#">Emergency Preparedness Services</a></li>
                            <li><a href="#">Grainger KeepStock Inventory Management</a></li>
                            <li><a href="#">Grainger Consulting Services</a></li>
                          </ul>
                        </td>

                      </tr>
                    </tbody>
                   </table>

              </div>{/* end row */}
              
              {/* <span className="line"></span> */}

              {/* start row */}
              <div className="row siz">
                <div className="col-xs-12 siz para-sec">
                  <div className="col-xs-4 siz side">
                    <a href="#" className="moblie-app-title">Check it out! We're Mobile!</a>
                    <p><b>Anytime. Anywhere.</b> <br/> Grainger Helps You Get It Done. </p>

                    <ul className="touch-app">
                      <li>
                        <a href="#" target="_blank">
                          <img src={apple} className="img-responsive" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <img src={google}  className="img-responsive" style={{marginLeft: '10px'}} />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-4 siz side">
                    <p><b>Connect with us</b></p>
                    <ul className="contact-social">
                      <li>
                        <a href="#" target="_blank">
                          <img src={facebook}  className="img-responsive" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <img src={twitter}  className="img-responsive" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <img src={inT}  className="img-responsive" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <img src={youtube}  className="img-responsive" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-4 siz">
                    <p><b>Questions? Call Us</b></p>
                    <p><b>SHOMOY</b> (+880 1687 059753 )</p>
                  </div>
                </div>
              </div>
              {/* end row */}
            </div>   
        </div>
        {/* ------------------- end  top-footer ------------------- */}


        {/* ------------------- start  footer ------------------- */}
        <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-xs-10 col-xs-offset-1 center">
                  <ul className="list-all">  
                    <li><a href="#">Terms of Access </a></li>
                    <li><span className="bar">|</span></li>
                    <li><a href="#">Terms of Sale </a></li>
                    <li><span className="bar">|</span></li>
                    <li><a href="#">New Privacy </a></li>
                    <li><span className="bar">|</span></li>
                    <li><a href="#">Policy Sitemap </a></li>
                    <li><span className="bar">|</span></li>
                    <li><a href="#">Fraud Alert </a></li>
                    <li><span className="bar">|</span></li>
                    <li><a href="#">Accessibility Statement</a></li>
                  </ul>
                  <p className="para">&copy;&nbsp;2019, W.W.W shomoy.online, All Rights Reserved.</p>
                </div>
              </div>
            </div>   
        </div>
        {/* ------------------- end  footer ------------------- */}

      </div>
    );
  }
}

export default App;
