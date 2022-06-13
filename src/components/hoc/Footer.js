import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="site-footer">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<form action="tets.html" className="subscribe-form">
								<input type="text" placeholder="Enter your email to subscribe..." />
								<input type="submit" value="Subscribe" />
							</form>
						</div>
						<div className="col-md-4">
							<div className="social-links text-right">
								<a href="tets.html"><i className="fa fa-facebook"></i></a>
								<a href="tets.html"><i className="fa fa-twitter"></i></a>
								<a href="tets.html"><i className="fa fa-google-plus"></i></a>
								<a href="tets.html"><i className="fa fa-pinterest"></i></a>
							</div>
                            <p className="colophon">Copyright 2022 Subhajit Group of Companies. <br />All rights reserved</p>
						</div>
					</div>
					
				</div>
			</footer> 
    </>
  )
}

export default Footer