import "./Header.css";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import UserDrop from "../UserDrop/UserDrop";
import { useState } from "react";

const Header = () => {
  const [userDrop, setUserDrop] = useState(false);

  return (
    <header className="headerContainer">
      <section className="headerWrapper">
        <h3 className="log">Bokku Mart</h3>

        <section className="navWrapper">
          <nav className="navBar">
            <ul className="navLinks">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Services</li>
            </ul>

            <div className="cartContainer">
              <FaShoppingCart className="cartIcon" />
              <div className="cartCounter">0</div>
            </div>
          </nav>

          <div className="userContainer">
            <FaUser className="userIcon" onMouseEnter={() => setUserDrop(true)}/>
            {
                userDrop?
              <div className="UserDropContainer" onMouseLeave={()=> setUserDrop(false)}>
                <UserDrop />
              </div>:null
            }
          </div>
        </section>
      </section>
    </header>
  );
};

export default Header;
