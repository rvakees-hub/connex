import React, {Component} from 'react'
import Layout from '../core/Layout'
import {isAuthenticated} from '../auth'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Adminboard = () => {

    const {user: {_id, name, email, role}} = isAuthenticated();
    return (
        <div > 
      
            <div className="p-3 mb-2 bg-secondary text-warning col-10" style={{marginLeft: "100px", marginTop: "30px"}}  >
            <i class='fas fa-motorcycle' style={{fontSize:"25px",color:"black"}}></i> Deliverer Details
              <Link to="/admin/dashboard/user"><button style={{marginLeft: "800px"}} className="btn btn-danger btn-rounded">Userdetails</button></Link> 
            </div>
            
             <div >     
                </div>
                <div className="col-10 " 
                  style={{marginLeft: "100px",marginTop: "50px"}}
                
                >
                        <Productdetails/>      
                </div>
                
                </div>
        

    );
};

class Productdetails extends Component {
    constructor() {

        super() 
        this.state = {
            data:[]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/form').then(res => {
            this.setState({
                data:res.data
            })
        })
    }

    deleteproduct=(e) => {
        axios.delete('http://localhost:8000/form/' + e.target.id).then(res => {
            if(res.data.success === false) {
                alert(res.data.message)
            }
            else{
                window.location.reload()
            }
        })
    }

    render() {
        return(
            <div className="card mb-5">
                <h3 className="card-header text-danger far fa-save" style={{fontFamily:'Patua One'}}><i class='	far fa-folder-open'></i> Parcel Details</h3>
               <table className="table table-dark table-striped">
                    <thead>
                    <tr>
                        <th className="text-warning">Name</th>
                        <th className="text-warning">Phonenumber</th>
                        <th className="text-warning">Pickup Address</th>
                        <th className="text-warning">Delivery Address</th>
                        <th className="text-warning">Weight</th>
                        



                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map(e => 
                            <tr>
                                <td> {e.name} </td>
                                <td> {e.phonenumber} </td>
                                <td> {e.pickupaddress} </td>
                                <td> {e.deliveryaddress} </td>
                                <td> {e.weight} </td> 
                                
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
    
}





export default Adminboard;