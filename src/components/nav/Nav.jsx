import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
    return ( <aside className="main-menu">
        <Link to="/" className="main-menu__logo">Logo</Link>
        <nav className="main-menu__main-nav nav">
            <ul className="main-nav__ul">
                <li className="main-nav__list"><Link className="main-nav__item" to="/">Dashboard</Link></li>
                <li className="main-nav__list"><Link className="main-nav__item" to="/product">Product</Link></li>
                <li className="main-nav__list"><Link className="main-nav__item" to="/customers">Customers</Link></li>
                <li className="main-nav__list"><Link className="main-nav__item" to="/income">Income</Link></li>
                <li className="main-nav__list"><Link className="main-nav__item" to="/promote">Promote</Link></li>
                <li className="main-nav__list"><Link className="main-nav__item" to="/help">Help</Link></li>
            </ul>
            <div>
                <div>Foto</div>
                <div>
                    <h5>Evano</h5>
                    <p>Project Manager</p>
                </div>
            </div>
        </nav>
    </aside> );
}
 
export default Nav;