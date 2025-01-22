import { Outlet, Link } from 'react-router';
import './Layout.css';

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo Section */}
          <div className="logo">
            <h2>FakeStore</h2>
          </div>

          {/* Navbar Links */}
          <div className="nav-links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about us">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Search Bar and Icons */}
          <div className="nav-icons">
            {/* Search Bar */}
            <div className="search-bar">
              <input type="text" placeholder="Search products..." />
              {/* <FaSearch size={20} className="search-icon" /> */}
            </div>

            {/* Login and Signup Buttons */}
            <div className="auth-buttons">
              <button className="login-btn">Login</button>
              <button className="signup-btn">Sign Up</button>
            </div>

            {/* Cart Icon */}
            {/* <div className="cart-icon">
            <FaShoppingCart size={20} />
          </div> */}

            {/* User Profile Icon */}
            {/* <div className="user-icon">
            <FaUserCircle size={20} />
          </div> */}
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
