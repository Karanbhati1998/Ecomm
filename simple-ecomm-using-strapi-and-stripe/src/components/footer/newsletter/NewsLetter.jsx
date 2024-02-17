import './style.scss'
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

function NewsLetter() {
  return (
    <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="small-text">
                News Letter
            </span>
            <span className="big-text">
                Sign Up For Latest Update And Offer
            </span>
            <div className="form">
                <input type="text" placeholder='Email Address' />
                <button>Subscribe</button>
            </div>
            <div className="text">
                will bw used According to our Privacy poilicy
            </div>
            <div className="social-icons">
                <div className="icon">
                   <FaFacebookF/> 
                </div>
                <div className="icon">
                   <FaTwitter/> 
                </div>
                <div className="icon">
                   <FaInstagram/> 
                </div>
                <div className="icon">
                   <FaLinkedinIn/> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter