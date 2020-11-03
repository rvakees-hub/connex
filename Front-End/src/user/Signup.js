import React, {useState} from "react"
import {Link} from 'react-router-dom'
import './signup.css'
import { API } from '../config'


const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const {name, email, password, success, error } = values;

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value });
    };

    const signup = (user) => {
        // console.log(name, email, password);
        return fetch(`${API}/signup`, {
            method: "POST",
            headers: {
              Accept: 'application/json',
              "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
          })
          .then(response => {
            return response.json();
          })
          .catch(err => {
            console.log(err);
          })
        
    };

    const clickSubmit = event => {
        event.preventDefault()
        setValues({...values, error:false })
        signup({ name,  email, password })
        .then(data => {
            if(data.error) {
                setValues({...values, error: data.error, success: false})
            }
            else{
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    success: true
                })
            }
        })
    }

    const signUpForm = () => (

     <div>
         
        <div className="ccc">
            <div className="img">
                <img src="/img/undraw_hey_email_liaa.svg"></img>
            </div>
            <div className="signup-form">	
    <form  method="post">
        <img src="/img/undraw_profile_pic_ic5t.svg" className="avatar"></img>
		<h2 className='ti'>Create Account</h2>
        <div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-user"></i></span>
				<input type="text" class="form-control" name="username" placeholder="Username" onChange={handleChange('name')} value={name}/>
			</div>
        </div>
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
            <button type="submit" onClick={clickSubmit} class="btn btn-primary btn-block btn-lg text-dark">Sign Up</button>
        </div>
		
    
	<div class="text-center">Already have an account? <a href="#">Login here</a>.</div>
    </form>
</div>
            </div>
        </div>

        // <div>    
        // <form>
        //     <div>
        //         <label className="form-group">Name</label>
        //         <input onChange={handleChange('name')} type="text" className="form-control" value={name} />
        //     </div>
        //     <div>
        //         <label className="form-group">Email</label>
        //         <input onChange={handleChange('email')} type="email" className="form-control"  value={email}/>
        //     </div>

        //     <div>
        //         <label className="form-group">Password</label>
        //         <input onChange={handleChange('password')} type="password" className="form-control" value={password} />
        //     </div>
        //     <button onClick={clickSubmit} className="btn btn-primary">
        //         Submit
        //     </button>
        // </form>
        // </div>
    );

        const showError = () => (
            <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>
                {error}
            </div>
        );

        const showSuccess = () => (
            <div className="alert alert-danger" style={{display: success ? '' : 'none'}}>
            New accound created.  Pleace <Link to="/signin">Signin</Link>
        </div>
        );

        

    return (
       
      <div>
          
        {/* <div className="jumbotron bxs mt-5 container mt-5 col-sm-6 col-md-6 col-lg-4" style={{marginRight: "25px"}} > */}
        {showError()}
        {showSuccess()}
        {signUpForm()}
        {/* </div> */}
        </div>
       

    );
}

export default Signup;