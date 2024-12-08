import {NavLink, useLocation} from "react-router-dom"
const Header = () => {  
    const {pathname} = useLocation();
    console.log(pathname);
    return (
        <header className="header">
            <div className="container">
                {/* <ul className="header__list">
                    <li className="header__list-item">
                        <Link className={`header__link ${pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
                    </li>
                    <li className="header__list-item">
                        <Link className={`header__link ${pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                    </li>
                    <li className="header__list-item">
                        <Link className={`header__link ${pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
                    </li>
                </ul> */}
                <ul className="header__list">
                    <li className="header__list-item">
                        <NavLink className="header__link" to="/">Home</NavLink>
                    </li>
                    <li className="header__list-item">
                        <NavLink className="header__link" to="/about">About</NavLink>
                    </li>
                    <li className="header__list-item">
                        <NavLink className="header__link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="header__list-item">
                        <NavLink className="header__link" to="/login">Login</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;