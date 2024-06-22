import "./Header.css"

const Header = () => {
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
          <h2>logo</h2>

          </article>
          
        </section>
      </section>
    </header>
  );
};

export default Header;
