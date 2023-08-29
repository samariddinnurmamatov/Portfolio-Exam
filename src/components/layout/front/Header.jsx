import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom"
import { TOKEN, USER } from "../../../const";
import { ROLE } from "../../../utils";
import toggle from "../../../assets/navbar/hamburger.png";
import './header.css'


const Header = () => {
  const navigate = useNavigate();
  const isAuthorizedUser = localStorage.getItem(TOKEN) && ROLE !== "user";

  const toggleSidebar = () => {
    const MiniSidebar = document.querySelector(".mini_sidebar");
    if (MiniSidebar) {
      MiniSidebar.classList.toggle("active");
    }
  };

  const log_out = () => {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(USER);
    navigate("login");
  };

  return (
    <div className="header_flex">
      <div className="nav_flex container">
        <Link to="/" className="nav_link">
          Portfolio
        </Link>
        <div
          className="hd"
          style={{ display: "flex", gap: "25px", alignItems: "center" }}
        >
          {isAuthorizedUser ? (
            <Fragment>
              <Link to="skils" className="nav_link">
                SkillsP
              </Link>
              <Link to="resume" className="nav_link">
                ResumeP
              </Link>
              <Link to="portfolio" className="nav_link">
                PortfoliosP
              </Link>
              <Link to="testmonial" className="nav_link">
                TestmonialP
              </Link>
              <Link to="contact" className="nav_link">
                ContactP
              </Link>
            </Fragment>
          ) : (
            ""
          )}
          {isAuthorizedUser ? (
            <Link
              style={{ border: "1px solid gray", padding: "5px 5px" }}
              to="login"
              className="nav_link"
              onClick={log_out}
            >
              Logout
            </Link>
          ) : (
            <Fragment>
              <Link to="login" className="nav_link">
                Login
              </Link>
              <Link to="register" className="nav_link">
                Register
              </Link>
            </Fragment>
          )}
        </div>
        <div className="mini_sidebar">
          {isAuthorizedUser ? (
            <Fragment>
              <Link to="skils" className="nav_link">
                SkillsP
              </Link>
              <Link to="resume" className="nav_link">
                ResumeP
              </Link>
              <Link to="portfolio" className="nav_link">
                PortfoliosP
              </Link>
              <Link to="testmonial" className="nav_link">
                TestmonialP
              </Link>
              <Link to="contact" className="nav_link">
                ContactP
              </Link>
            </Fragment>
          ) : (
            ""
          )}
          {isAuthorizedUser ? (
            <Link
              style={{ border: "1px solid gray", padding: "5px 5px" }}
              to="login"
              className="nav_link"
              onClick={log_out}
            >
              Logout
            </Link>
          ) : (
            <Fragment>
              <Link to="login" className="nav_link">
                Login
              </Link>
              <Link to="register" className="nav_link">
                Register
              </Link>
            </Fragment>
          )}
        </div>
        <div className="toggle" onClick={toggleSidebar}>
          <img style={{ width: "30px" }} src={toggle} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header