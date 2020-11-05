
import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { Link, Redirect } from 'react-router-dom';
// import { read } from '../core/apiCore';
import { read, update, updateUser } from './apiUser';


const Profile = ({match}) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: false,
        success: false
    });
    
    const {token} = isAuthenticated()

    const { name, email, password, error, success} = values


    const init = userId => {
        
        read(userId, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: true });
            } else {
                setValues({ ...values, name: data.name, email: data.email });
            }
        });
    };
    
    useEffect(() => {
        init(match.params.userId)
    }, [])



    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const clickSubmit = e => {
        e.preventDefault();
        update(match.params.userId, token, { name, email, password }).then(data => {
            if (data.error) {
                // console.log(data.error);
                alert(data.error);
            } else {
                updateUser(data, () => {
                    setValues({
                        ...values,
                        name: data.name,
                        email: data.email,
                        success: true
                    });
                });
            }
        });
    };

    const redirectUser = success => {
        if (success) {
            return <Redirect to="/cart" />;
        }
    };


    const profileUpdate = (name, email, password) => (

        <div>
         
        <div className="ccc">
            <div className="img">
                <img src="/img/undraw_destinations_fpv7.svg"></img>
            </div>
            <div className="signup-form">	
    <form  method="post">
        <img src="/img/undraw_profile_pic_ic5t.svg" className="avatar"></img>
		<h2 className='ti'> Update Profile</h2>
        <div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-user"></i></span>
				<input type="text" onChange={handleChange('name')} className="form-control" value={name} placeholder="Change Your Username" />
			</div>
        </div>
        <div className="form-group">
			<div class="input-group">
				<span className="input-group-addon"><i class="fa fa-paper-plane"></i></span>
				<input type="email" onChange={handleChange('email')} className="form-control" value={email} placeholder="Change Your Email"/>
			</div>
        </div>
		<div class="form-group">
			<div class="input-group">
				<span class="input-group-addon"><i class="fa fa-lock"></i></span>
				<input type="password" onChange={handleChange('password')} className="form-control" value={password} placeholder="Change Your Password" />
			</div>
        </div>
	        
		<div class="form-group">
            <button type="submit" onClick={clickSubmit} class="btn btn-primary btn-block btn-lg text-dark">Change</button>
        </div>
    </form>
</div>
            </div>
        </div>

    );

    return (
        
            
                
                   <div>
                   {profileUpdate(name, email, password)}
                   {redirectUser(success)}
                   </div>
            
       
       );
    
};


export default Profile;