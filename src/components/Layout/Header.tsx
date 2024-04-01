import { Link, useLocation } from "react-router-dom";
import { routes } from "@routes";
import logo from "@assets/images/image 1.png";

function Header() {
  const { pathname } = useLocation();

  const displayLinks = () =>
    routes.map(({ name, path, isVisible }) => {
      const isActivePath = path === pathname;

      if (isVisible) {
        return (
          <div className="navigation__item" key={path}>
            <Link
              className={`link ${isActivePath ? 'link--active' : ''}`}
              to={path}
            >
              {name}
            </Link>
          </div>
        );
      }
      return null;
    });

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" className="h-responsive-image" />
      </div>
      <div className="navigation">{displayLinks()}</div>
    </header>
  );
}

export default Header;