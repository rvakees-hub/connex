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
    <div>
        <ul className="nav nav-tabs  navbar-dark bg-dark  " style={{ minHeight:"70px"}}>
            <li className="nav-item" style={{ marginTop: "15px"}}>
                <Link className="nav-link" style={isActive(history, '/')} to="/" > Home </Link>
            </li>

            <li className="nav-item" style={{ marginTop: "15px"}}>
                <Link className="nav-link" style={isActive(history, '/form')} to="/form" > Parcel Details </Link>
            </li>

            {/* <li className="nav-item" style={{ marginTop: "15px"}}>
                <Link className="nav-link" style={isActive(history, '/join')} to="/join" > JoinNow </Link>
            </li> */}

       
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
