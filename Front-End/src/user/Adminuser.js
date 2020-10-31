import React, {Component} from 'react'
import Layout from '../core/Layout'
import {isAuthenticated} from '../auth'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Adminuser = () => {

    const {user: {_id, name, email, role}} = isAuthenticated();
    return (
      
             <div className="row">
                
                <div className="col-9">
                   
                </div>
                <div className="col-10 text-dark" style={{marginLeft: "100px",marginTop: "50px"}}>
                       
                        <UserDetails/>
                </div>
            </div>
            


       
    );
};



class UserDetails extends Component {
    constructor() {

        super() 
        this.state = {
            data:[]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/join').then(res => {
            this.setState({
                data:res.data
            })
        })
    }

    render() {
        return(
            <div className="card ">
                <h3 className="card-header text-danger" style={{fontFamily:'Patua One'}}> <i class='far fa-address-card'></i> User Details</h3>
               <table className="table table-dark table-striped">
                    <thead>
                    <tr className="text-warning">
                        <th >Name</th>
                        <th>Phonenumber</th>
                        <th>Address</th>
                        <th>NIC No</th>
                        <th>License No</th>
                        <th>Vehcle</th>


                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map(e => 
                            <tr>
                                <td> {e.name} </td>
                                <td> {e.phonenumber} </td>
                                <td> {e.address} </td>
                                <td> {e.nic} </td>
                                <td> {e.license} </td>
                                <td> {e.vehicle} </td>

                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
    
}


export default Adminuser;