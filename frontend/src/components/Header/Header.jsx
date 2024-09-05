import { useState, useEffect, useRef,useContext } from "react";
import logo from "../../assets/images/logo.png";
import UserImg from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi"; // Corrected import statement
import { authContext } from "../../context/authContext";
import HashLoader from "react-spinners/HashLoader";

const navLink = [
  {
    path: '/home',
    display: "Home"
  },
  {
    path: '/doctors',
    display: "Find a Doctor"
  },
  {
    path: '/service',
    display: "Services"
  },
  {
    path: '/contact',
    display: "Contact"
  }
];

function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const {user,role,token}= useContext(authContext)




  const handleStickyHeader = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add('sticky_header');
    } else {
      headerRef.current.classList.remove('sticky_header'); // Corrected class toggle
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleStickyHeader);
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  const toggleMenu = () => {
    menuRef.current.classList.toggle('show_menu');
    overlayRef.current.classList.toggle('show');
  };

  return (
    <header className='header flex items-center' ref={headerRef}>
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/* ============================ logo ===================== */}
          <div>
            <img src={logo} alt="logo" />
          </div>
          {/* ============== menu ========= */}
          <div className="navigation" ref={menuRef}>
            <ul className="menu">
              {
                navLink.map((item, index) => (
                  <li key={index}>
                    <NavLink 
                      to={item.path}
                      className={navClass => 
                        navClass.isActive 
                        ? "text-primaryColor text-[16px] leading-7 font-[500]" 
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
          {/* ==================== nav right ============== */}
          <div className="flex items-center gap-4">
              {token && user ? (
                <div className="flex items-center gap-2"> {/* Adjust this div */}
                  <Link to={`${role === 'doctor' ? '/doctor/profile/me' : '/users/profile/me'}`} className="flex items-center gap-2">
                    <figure className="w-[35px] h-[35px] rounded-full">
                    <img src={UserImg} className="w-full rounded-full cursor-pointer" alt="user image" />
                    </figure>
                    <h2 className="text-sm font-medium">{user.name}</h2> {/* Adjust the text styling if needed */}
                  </Link>
                </div>
              ) : (
                <Link to="/login">
                  <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                      {loading ? <HashLoader size={25} color="#fff"/>:'LogIn'}
                  </button>
                </Link>
              )}
  <span className="md:hidden" onClick={toggleMenu}>
    <BiMenu className="w-6 h-6 cursor-pointer" />
  </span>
</div>

        </div>
      </div>
      <div className="overlay" ref={overlayRef} onClick={toggleMenu}></div>
    </header>
  );
}

export default Header;
