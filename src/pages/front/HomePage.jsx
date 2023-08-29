import { Link } from 'react-router-dom';
import './user.css'
import { TOKEN } from '../../const';
import { ROLE, USER_FIRSTNAME, USER_LASTNAME } from '../../utils';
import { Fragment } from 'react';
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';



const HomePage = () => {
  const isAuthorizedUser = localStorage.getItem(TOKEN) && ROLE !== "user";

  return (
    <div className="All-showcase">
      <div className="container">
        <div className="modal-center">
          <div className="txtla">
            {isAuthorizedUser ? (
              <div style={{ color: "white", textAlign: "right" }}>
                <h2 style={{ fontSize: "27px" }}>
                  {USER_FIRSTNAME + " "} {USER_LASTNAME}
                </h2>
                <br />
                <h3 style={{color: "rgb(180, 174, 174)"}}>I'm From Uzbekistan</h3>
                <h3 style={{color: "rgb(180, 174, 174)", paddingTop: "8px"}}>I'm Frontend Developer</h3>
                <br />
                <div className="home_icon_flex">
                  <div className="icon_border">
                    <InstagramOutlined />
                  </div>
                  <div className="icon_border">
                    <FacebookOutlined />
                  </div>
                  <div className="icon_border">
                    <TwitterOutlined />
                  </div>
                  <div className="icon_border">
                    <LinkedinOutlined />
                  </div>
                </div>
              </div>
            ) : (
              <Fragment>
                <h1>
                  <span>Portfolio.Uz</span> ga Xush kelibsiz
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quasi, quidem.
                </p>
              </Fragment>
            )}
            {isAuthorizedUser ? (
              ""
            ) : (
              <div className="buttonlar">
                <Link to="login" className="a">
                  Log in
                </Link>
                <Link to="register" className="a">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage