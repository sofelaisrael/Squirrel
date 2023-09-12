import React from 'react'
import logo from '../assets/squirel.png'
function Footer() {
  return (
    <div className='footer'>
        <div className="footcont">
        <div className="footimg">
        <img src={logo} alt="" />
      </div>
      <div className="footgrid">
        <div className="fg1">
            <div className="fgb fgo">Product</div>
            <div className="fgo"><a href="#">Features</a></div>
            <div className="fgo"><a href="#">Pricing</a></div>
            <div className="fgo"><a href="#">Entreprise</a></div>
        </div>
        <div className="fg1">
            <div className="fgb fgo">Resources</div>
            <div className="fgo"><a href="#">Help Center</a></div>
            <div className="fgo"><a href="#">Blogs</a></div>
            <div className="fgo"><a href="#">Webinars</a></div>
        </div>
        <div className="fg1">
            <div className="fgb fgo">Company</div>
            <div className="fgo"><a href="#">About Us</a></div>
            <div className="fgo"><a href="#">Career</a></div>
            <div className="fgo"><a href="#">Press</a></div>
        </div>
        <div className="fg1">
            <div className="fgb fgo">Our Blog</div>
            <div className="fgo"><a href="#">Community</a></div>
            <div className="fgo"><a href="#">Integrations</a></div>
            <div className="fgo"><a href="#">Entreprise</a></div>
        </div>
      </div>
        </div>
        <div className="footend">
            All Rights Reserved 2023
        </div>
    </div>
  )
}

export default Footer
