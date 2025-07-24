import { NavLink, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useRef, useState } from "react";
import style from "../assets/styles/Navbar.module.scss";

gsap.registerPlugin(DrawSVGPlugin);

const Navbar = () => {
  const pathRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setmenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleMouseEnter = () => {
    setHovered(true);
    gsap.set(pathRef.current, { drawSVG: "0%" });
    gsap.to(pathRef.current, {
      drawSVG: "100%",
      duration: 2,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setHovered(false);
    }, 2000);
    gsap.set(pathRef.current, { drawSVG: "0%" });
    gsap.from(pathRef.current, {
      drawSVG: "100%",
      duration: 2,
      ease: "power1.inOut",
    });
  };

  //menu drop-down

  const navWrapperRef = useRef(null);
  const menuHover = () => {
    gsap.to(navWrapperRef.current, {
      height: "45vh",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const menuHoverLeave = () => {
    gsap.to(navWrapperRef.current, {
      height: "0vh",
      duration: 0.4,
      ease: "power2.in",
    });
  };

  return (
    <>
      <div
        className={style.nav_wrapper}
        ref={navWrapperRef}
        onMouseEnter={menuHover}
        onMouseLeave={menuHoverLeave}
      ></div>
      <nav className={style.nav}>
        <div
          className={style.nav_overlay}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={style.nav_left}>
            <svg
              width="126"
              height="23"
              viewBox="0 0 126 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => navigate("/")}
            >
              <path
                ref={pathRef}
                d="M17.976 0.599998C23.064 0.599998 26.552 3.832 26.552 8.824C26.552 13.816 23.064 17.016 17.976 17.016H6.136V23H0.376V0.599998H17.976ZM16.376 12.184C18.104 12.184 20.792 12.184 20.792 8.824C20.792 5.432 18.104 5.432 16.376 5.432H6.136V12.184H16.376ZM54.802 8.824C54.802 12.472 52.946 15.16 49.938 16.344L54.066 23H47.282L43.666 17.016H34.386V23H28.626V0.599998H46.226C51.314 0.599998 54.802 3.832 54.802 8.824ZM34.386 5.432V12.184H44.626C46.354 12.184 49.042 12.184 49.042 8.824C49.042 5.432 46.354 5.432 44.626 5.432H34.386ZM62.4485 0.599998V23H56.6885V0.599998H62.4485ZM99.305 0.599998V23H93.545V7.64L84.233 23H80.073L70.761 7.64V23H65.001V0.599998H72.777L82.153 16.408L91.529 0.599998H99.305ZM125.556 5.176H107.636V9.72H125.556V13.88H107.636V18.424H125.556V23H101.876V0.599998H125.556V5.176Z"
                fill={hovered ? "none" : "black"}
                stroke="black"
              />
            </svg>
          </div>
        </div>
        <div className={style.nav_center}>
          <NavLink
            to="/shop"
            className={style.nav_link}
            onMouseEnter={menuHover}
            onMouseLeave={menuHoverLeave}
          >
            SHOP
          </NavLink>
          <NavLink
            to="/about"
            className={style.nav_link}
            onMouseEnter={menuHover}
            onMouseLeave={menuHoverLeave}
          >
            ABOUT PRIME
          </NavLink>
          <NavLink
            to="/buy"
            className={style.nav_link}
            onMouseEnter={menuHover}
            onMouseLeave={menuHoverLeave}
          >
            WHERE TO BUY
          </NavLink>
          {/* <NavLink
            to="/verify"
            className={style.nav_link}
            onMouseEnter={menuHover}
            onMouseLeave={menuHoverLeave}
          >
            VERIFY YOUR PRIME
          </NavLink> */}
        </div>
        <div className={style.nav_right}>
          <NavLink to="/login" className={style.nav_link}>
            LOGIN
          </NavLink>
          <NavLink to="/signup" className={style.nav_link}>
            SIGN UP
          </NavLink>
        </div>
        {menuOpen && (
          <div className={style.nav_mobile}>
            <div className={style.navlink_mobile}>
              <i
                onClick={() => setmenuOpen(!menuOpen)}
                className="ri-close-line"
              ></i>
              <NavLink to="/shop" className={style.nav_link}>
                SHOP
              </NavLink>
              <NavLink to="/about" className={style.nav_link}>
                ABOUT PRIME
              </NavLink>
              <NavLink to="/buy" className={style.nav_link}>
                WHERE TO BUY
              </NavLink>
              {/* <NavLink to="/verify" className={style.nav_link}>
                VERIFY YOUR PRIME
              </NavLink> */}
              <NavLink to="/login" className={style.nav_link}>
                LOGIN
              </NavLink>
              <NavLink to="/signup" className={style.nav_link}>
                SIGN UP
              </NavLink>
            </div>
          </div>
        )}
        <div className={style.nav_menu_icon}>
          <i
            onClick={() => setmenuOpen(!menuOpen)}
            className="ri-menu-3-line"
          ></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
