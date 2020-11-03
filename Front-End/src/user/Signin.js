import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import './signin.css'
import { signin, authenticate, isAuthenticated } from "../auth";

const Signin = () => {
    const [values, setValues] = useState({
        email: "rvakees@gmail.com",
        password: "vvvv88",
        error: "",
        loading: false,
        redirectToReferrer: false
    });

    const { email, password, loading, error, redirectToReferrer } = values;
    const { user } = isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true
                    });
                });
            }
        });
    };

    const signUpForm = () => (


        <div>
         
        <div className="cccc">
            <div className="img">
                <img src="/img/undraw_Delivery_re_f50b.svg"></img>
            </div>
            <div className="signup-form">	
    <form  method="post">
        <img src="/img/undraw_male_avatar_323b.svg" className="avatar"></img>
        <div className="form-group">
			<div class="input-group">
				<span className="input-group-addon"><i class="fa fa-paper-plane"></i></span>
				<input type="email" class="form-control" name="email" placeholder="Email Address"onChange={handleChange('email')} value={email}/>
			</div>
        </div>
		<div class="form-group">
			<div class="input-group">
				<span class="input-group-addon"><i class="fa fa-lock"></i></span>
				<input type="password" class="form-control" name="password" placeholder="Password"onChange={handleChange('password')} value={password} />
			</div>
        </div>
	        
		<div class="form-group">
            <button type="submit" onClick={clickSubmit} class="btn btn-primary btn-block btn-lg text-dark">Sign In</button>
        </div>
		
        <div class="modal-footer">Don't have an account? <a href="#">Create one</a></div>
    </form>
</div>
            </div>
        </div>



        // <form>
        //     <div className="form-group">
        //         <label className="text-muted">Email</label>
        //         <input
        //             onChange={handleChange("email")}
        //             type="email"
        //             className="form-control"
        //             value={email}
        //         />
        //     </div>

        //     <div className="form-group">
        //         <label className="text-muted">Password</label>
        //         <input
        //             onChange={handleChange("password")}
        //             type="password"
        //             className="form-control"
        //             value={password}
        //         />
        //     </div>
        //     <button onClick={clickSubmit} className="btn btn-primary">
        //         Submit
        //     </button>
        // </form>
    );

    const showError = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-info">
                <h2>Loading...</h2>
            </div>
        );

    const redirectUser = () => {
        if (redirectToReferrer) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />;
            } else {
                return <Redirect to="/user/dashboard" />;
            }
        }
        if (isAuthenticated()) {
            return <Redirect to="/" />;
        }
    };

    return (
       <div >
            {showLoading()}
            {showError()}
            {signUpForm()}
            {redirectUser()}
       </div>
    );
};

export default Signin;
