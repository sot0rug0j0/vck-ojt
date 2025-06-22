import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <header className='Header1'>
        <div className='college-name'><a href="/" data-discover="true">Vivekanand College</a></div>

        {/* Desktop Nav */}
        <nav className="navbar desktop-nav">
          <Link to="/home" className='nav-item'>Home</Link>
          <Link to="/about" className='nav-item'>About</Link>
          <Link to="/courses" className='nav-item'>Courses</Link>
          <Link to="/contact" className='nav-item'>Contact</Link>
          {/* <Link to="/admission" className='nav-item'>Admission</Link> */}
          <Link to="/admission" className='nav-item btn1'>Apply Now!</Link>
        </nav>

        {/* Hamburger Menu Button */}
        <button
          className='Hidebtn-menu'
          onClick={toggleDrawer}
          aria-label={drawerOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={drawerOpen}
          aria-controls="drawer-nav"
        >
          <span className="Hidebtn-icon"></span>
          <span className="Hidebtn-icon"></span>
          <span className="Hidebtn-icon"></span>
        </button>

        {/* Drawer Navigation */}
        <nav
          id="drawer-nav"
          className={`drawer-nav ${drawerOpen ? 'drawer-nav-open' : ''}`}
          aria-hidden={!drawerOpen}
        >
          <button
            className="close-drawer-btn"
            onClick={closeDrawer}
            aria-label="Close navigation menu"
          >
            &times;
          </button>

          <Link to="/home" className='nav-item' onClick={closeDrawer}>Home</Link>
          <Link to="/about" className='nav-item' onClick={closeDrawer}>About</Link>
          <Link to="/courses" className='nav-item' onClick={closeDrawer}>Courses</Link>
          <Link to="/contact" className='nav-item' onClick={closeDrawer}>Contact</Link>
          <Link to="/admission" className='nav-item' onClick={closeDrawer}>Admission</Link>
          <Link to="/admission" className='nav-item btn1' onClick={closeDrawer}>Apply Now!</Link>
        </nav>

        {/* Overlay */}
        {drawerOpen && <div className="drawer-overlay" onClick={closeDrawer} aria-hidden="true"></div>}
      </header>
    </>
  );
}

export default Header;
