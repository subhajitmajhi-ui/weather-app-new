import React from 'react'

const Header = () => {
  return (
    <>
        <div className="site-header">
            <div className="container">
                <a href="index.html" className="branding">
                    <img src="images/logo.png" alt="" className="logo" />
                    <div className="logo-type">
                        <h1 className="site-title">Suva Forecast</h1>
                        <small className="site-description">Unlimited Weather Report</small>
                    </div>
                </a>
                
                <div className="main-navigation">
                    <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
                    <ul className="menu">
                        <li className="menu-item current-menu-item"><a href="index.html">Home</a></li>
                        <li className="menu-item"><a href="news.html">News</a></li>
                        <li className="menu-item"><a href="live-cameras.html">Live cameras</a></li>
                        <li className="menu-item"><a href="photos.html">Photos</a></li>
                        <li className="menu-item"><a href="contact.html">Contact</a></li>
                    </ul> 
                </div> 

                <div className="mobile-navigation"></div>

            </div>
        </div>
    </>
  )
}

export default Header