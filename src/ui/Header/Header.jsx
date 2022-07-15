import { Link } from "react-router-dom";
import { useBreadCrumbs } from "../../core/breadcrumbs";
import useCart from "../../core/cart/useCart";
import Cart from "../Cart/Cart";
import MobileIcon from "../icons/Mobile.icon";
import "./Header.css";

const Header = () => {
  const breadCrumbs = useBreadCrumbs();
  const { cart } = useCart();

  return (
    <header className="header">
      <div className="header__topbar-container">
        <div className="header__hero-container container">
          <Link to="/" className="header__logo-link">
            <MobileIcon />
            <h1 className="header__title">FrontEnd Test</h1>
          </Link>
          <div className="header__cart-container">
            <Cart count={cart.count} />
          </div>
        </div>
      </div>
      <div className="header__breadcrumbs-container container">
        {breadCrumbs.map(({ label, ...linkProps }, idx) => (
          <Link key={idx} className="header__breadcrumb" {...linkProps}>
            {label}
            {idx !== breadCrumbs.length - 1 && " > "}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
