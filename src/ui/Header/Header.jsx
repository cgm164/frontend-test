import { Link } from 'react-router-dom';
import { useBreadCrumbs } from "../../core/breadcrumbs";
import MobileIcon from "../icons/Mobile.icon";
import "./Header.css";

const Header = (props) => {
  const breadCrumbs = useBreadCrumbs();

  return (
    <header className="header">
      <div className="header__logo-container">
        <div className="header__logo-wrapper container">
          <Link to="/" className="header__logo-link">
            <MobileIcon />
            <h1 className="header__title">FrontEnd Test</h1>
          </Link>
        </div>
      </div>
      <div className="header__breadcrumbs-container container">
        {breadCrumbs.map(({ label, ...linkProps }, idx) => (
          <Link key={idx} className="header__breadcrumb" {...linkProps} >
            {label}{idx !== breadCrumbs.length - 1 && " > "}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
