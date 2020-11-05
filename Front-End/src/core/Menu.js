import React, {Fragment} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#f3c204" };
    } else {
        return { color: "#ffffff" };
    }
};

const Menu = ({ history }) => (
    <div className="container text-center">
        <ul className="nav nav-tabs  mynav  " style={{ minHeight:"70px"}}>
            <li className="nav-item mr-auto" style={{ marginTop: "15px"}}>
                <Link className="nav-link mr-auto" style={isActive(history, '/')} to="/" > <img src="https://gist.githubusercontent.com/prashankhan/fa4eb64aff3c79b53e2ccf988a4f4253/raw/8460e227250ff55304e1e15b11dc82ca85f50514/vakeesanlogo.svg" style={{width: "190px"}}></img> </Link>
            </li>

            <li className="nav-item" style={{ marginTop: "15px"}}>
                <Link className="nav-link " style={isActive(history, '/about')} to="/about" > About </Link>
            </li>

            <li className="nav-item" style={{ marginTop: "15px"}}>
                <Link className="nav-link " style={isActive(history, '/contact')} to="/contact" > Contact  </Link>
            </li>

       
            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <div>
                    <li className="nav-item " style={{ marginTop: "15px"}}>
                <Link

                    className="nav-link"
                    style={isActive(history, '/user/dashboard')} 
                    to="/user/dashboard" > 
                
                 Dashboard
                  </Link>
            </li>
                </div>
            )}

           {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item " style={{ marginTop: "15px"}}>
                <Link

                    className="nav-link"
                    style={isActive(history, '/admin/dashboard')} 
                    to="/admin/dashboard" > 
                
                 Dashboard
                  </Link>
            </li>
            )}

            {!isAuthenticated() && (
                <Fragment>
                    <li className="nav-item " style={{ marginTop: "15px"}}>
            <Link className="nav-link" style={isActive(history, '/signin')} to="/signin" > signin </Link>
            </li>

            <li className="nav-item " style={{ marginTop: "15px"}}>
            <Link className="nav-link" style={isActive(history, '/signup')} to="/signup" > signup </Link>
            </li>
                </Fragment>
            )}

          {isAuthenticated() && (
                <li className="nav-item" style={{ marginTop: "15px"}}>
                <span 
                    className="nav-link"
                    style={{ cursor: "pointer", color: "#ffffff" }}
                    onClick={() => 
                        signout(() => {
                            history.push("/");
                        })
                    }
                >
                    Signout
                </span>
            </li>
          )}

        </ul>
    </div>
);

export default withRouter(Menu);
