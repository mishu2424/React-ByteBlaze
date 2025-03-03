import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  /**
   * Steps to add theme on website
   * 1.Import theme controller from daisy UI.
   * 2.Copy Import settings from daisy UI(go to theme section of DaisyUI), paste it in the index.css file under tailwindcss.
   * 3.Use useState to control the theme, use an Event handler and connect it to the theme controller using onChange/onClick.
   * 4.Store the value of useState in localstorage, so even if the page is reloaded, it will remain to the value stored in localstorage.
   * 5.Read the value from the localstorage, and then set it on the html tag of main index.html file using setAttribute and querySelector.
   * 6.When getting reloaded, also check if the value of theme is set true, the input element will be set checked true, if not night theme,
   * it will be set to checked false.
   * */

  let [theme, setTheme] = useState("light");
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
    // console.log(localTheme);
    // theme = localTheme;
    setTheme(localTheme);
    const themeToggle=document.getElementById("theme-toggle")
    if(themeToggle){
      themeToggle.checked = localTheme==='synthwave';
    }
  }, [theme]);
  const handleTheme = (e) => {
    // console.log(e.target.checked)
    if (e.target.checked) {
      setTheme("synthwave");
      localStorage.setItem("theme", "synthwave");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  const links = (
    <>
      <NavLink to='/' className={({isActive})=> isActive && 'text-primary'}>
        Home
      </NavLink>
      <NavLink to='/blogs' className={({isActive})=> isActive && 'text-primary'}>
        Blogs
      </NavLink>
      <NavLink to='/bookmarks' className={({isActive})=> isActive && 'text-primary'}>
        Bookmarks
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm px-10 fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content gap-5 bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-bold"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost gap-0 text-xl font-bold text-secondary normal-case">
          Byte<span className="text-primary">Blaze</span>
        </a>
      </div>
      <div className="navbar-end space-x-3">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 font-bold">{links}</ul>
        </div>
        <label className="toggle text-base-content">
          <input
          id="theme-toggle"
            onClick={handleTheme}
            type="checkbox"
            className="theme-controller"
          />
          <svg
              aria-label="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>
            <svg
              aria-label="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>

          {/* {theme === "light" ? (
            <svg
              aria-label="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>
          ) : (
            <svg
              aria-label="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          )} */}
        </label>
      </div>
    </div>
  );
};

export default NavBar;
