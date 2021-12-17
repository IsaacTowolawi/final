import { Link } from "react-router-dom";
import "./menubar.css";
import JoshuaLogo from "../../assets/img/joshuat logo.png";

export default function Menubar() {
  return (
    <div className="menubar">
      <div className="menuLeft">
        <i className="menbaricons fab fa-facebook-square"></i>
        <i className="menbaricons fab fa-pinterest-square"></i>
        <i className="menbaricons fab fa-artstation"></i>
        <i className="menbaricons fab fa-twitter-square"></i>
        <i className="menbaricons fab fa-instagram"></i>
      </div>
      <nav>
        <div className="menuCenter">
          <li className="navbar-items">
            <img className="JoshuaT" src={JoshuaLogo} alt="" to="/Home" />
          </li>
          <ul className="navbar-list">
            <li className="navbar-items">
              <Link className="link" to="">
                HOME
              </Link>
            </li>
            <li className="navbar-items">
              <Link className="link" to="/about">
                ABOUT ME
              </Link>
            </li>
            <li className="navbar-items">
              <Link className="link" to="/portfolio">
                GALLERY
              </Link>
            </li>
            <li className="navbar-items">
              <Link className="link" to="/contact">
                CONTACT
              </Link>
            </li>
            <li className="navbar-items">
              <Link className="link" to="/products">
                SHOP
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* <div className="menuRight">
        {user ? (
          <img
            className="menuImg"
            src="https://3aws3g15i5812mz28r3dqig1-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/Gon-Aura-Transform.png"
            alt=""
          />
        ) : (
          <ul className="navbar-list">
            <li className="navbar-items">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="navbar-items">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="menuSearch fas fa-search"></i>
      </div> */}
    </div>
  );
}
