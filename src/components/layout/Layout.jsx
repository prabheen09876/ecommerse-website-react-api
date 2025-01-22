import { Outlet, Link } from 'react-router';
import './Layout.css';

const Layout = () => {
  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[100%] max-w-[1200px] navbar bg-[#10375C]/50 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 z-50">
        <div className="navbar-container px-6 py-4">
          {/* Logo Section */}
          <div className="logo">
            <h2 className="text-white/90">FakeStore</h2>
          </div>

          {/* Navbar Links */}
          <div className="nav-links">
            <ul className="flex gap-8">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="text-white/80 hover:text-white transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/about us" className="text-white/80 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Search Bar and Icons */}
          <div className="nav-icons flex items-center gap-6">
            {/* Search Bar */}
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search products..."
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              {/* <FaSearch size={20} className="search-icon" /> */}
            </div>

            {/* Login and Signup Buttons */}
            <div className="auth-buttons flex gap-4">
              <button className="login-btn px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/90 transition-colors">Login</button>
              <button className="signup-btn px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white font-medium transition-colors">Sign Up</button>
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
