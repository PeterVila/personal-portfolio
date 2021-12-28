import './Navbar.scss'

const Navbar = () => {
  return (
    <nav>
      <h2 className="navbar-title">Peter Vila</h2>
      <ul className="navbar-list">
        <li className="navbar-list__item">
          <a href="/">About Me</a>
        </li>
        <li className="navbar-list__item">
          <a href="/">Skills</a>
        </li>
        <li className="navbar-list__item">
          <a href="/">Tools</a>
        </li>
        <li className="navbar-list__item">
          <a href="/">Applications</a>
        </li>
        <li className="navbar-list__item">
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
