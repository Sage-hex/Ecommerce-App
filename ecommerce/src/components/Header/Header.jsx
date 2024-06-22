import "./Header.css"
import { FaUser,FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

const Header = () => {

    // const [register, setRegister] = useState(0)

    // const useEffect () => {
    //     if(register === 0){
    //         document.querySelector(".register").style.display = "none"
    //     }else{
    //         document.querySelector(".register").style.display = "block"
    //     }
    // }
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
          </nav>
          <article className="icon">
            <FaShoppingCart  className="cartIcon"/>
            <p>2</p>
          <FaUser  className="userIcon"/>
          <div className="register">
            <button>sign up</button>
            <button>login</button>
          </div>

          </article>
          
        </section>
      </section>
    </header>
  );
};

export default Header;
