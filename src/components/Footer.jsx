import "./footer.css";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  function gototop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  let showYear = () => {
    let year = new Date();
    let yy = year.getFullYear();
    return yy;
  };
  return (
    <footer>
      <div className="goto_top">
        <button onClick={gototop}>Go To Top</button>
      </div>
      <div className="container flex_box justify_evenly footer_container">
        <div className="footer_left_section flex_box justify_between">
          <div className="about">
            <h1>NovaAsset</h1>
            <p>
              NovaAsset is your ultimate destination for high-quality game
              development resources. From 3D models to sound effects, we help
              developers create immersive worlds and bring ideas to life faster.
              Level up your game with our premium assets.
            </p>
          </div>
          <div className="help">
            <h4 className="m-12">HELP</h4>
            <ul>
              <li><Link>Payment</Link></li>
              <li><Link>FAQ</Link></li>
              <li><Link>Cancellation</Link></li>
            </ul>
          </div>
          <div className="policy">
            <h4 className="m-12">CONSUMER POLICY</h4>
            <ul>
              <li><Link>Terms and conditions</Link></li>
              <li><Link>Privacy Policy</Link></li>
              <li><Link>Copyrights</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer_right_section">
          <div className="footer_contact flex_box justify_between">

            <div className="office">
              <h4 className="m-12">OFFICE ADDRESS</h4>
              <p>S-100 Param Puri Uttam Nagar, New Delhi, India</p>
              <div className="social">
              <h4 className="m-12">SOCIAL LINKS</h4>
              <ul className="flex_box">
                <li><Link><IoMail/></Link></li>
                <li><Link><IoLogoFacebook/></Link></li>
                <li><Link><IoLogoInstagram/></Link></li>
                <li><Link><IoLogoLinkedin/></Link></li>
                <li><Link><FaXTwitter/></Link></li>
              </ul>
              </div>
            </div>
            <div className="mail">
              <h4 className="m-12">MAP</h4>
              <div className="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.840165402267!2d77.03647148715818!3d28.615971199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05ec704d1f4b%3A0xb53b105548966ab1!2sS-106%20Param%20Puri!5e0!3m2!1sen!2sin!4v1754839655946!5m2!1sen!2sin"  ></iframe>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="copy_right w-100">
        <p>All Right reserved by &copy; NovaAsset {showYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
