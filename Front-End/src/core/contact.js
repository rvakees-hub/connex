import React, {Component} from "react";

class Contact extends Component {

    render(){
        return(
            <div>
    <div className="mycon">
    <div className="context">Connex Contact Details</div>
        <img src="https://www.star2star.com/sites/default/files/headers/call-centers-header.jpg"   className="car">
        </img>
    </div>

                <div className="container myhomecontainer">
   <div className="row">
   <div className="col-lg-4">
        <div className="card p-4 cardcon ">
        <i className="fas fa-search-location text-center homeicon"></i>
        <h4 className="text-center homeicontext">Location</h4>
        <p className="text-center" style={{fontWeight:"600", color:'black'}}>Mulliyawalai,Mullaitivu</p>
        </div>
     </div>
     

     <div className="col-lg-4">
        <div className="card p-4 cardcon">
        <i class="fas fa-headphones text-center homeicon"></i>
        <h4 className="text-center homeicontext">Phone No</h4>
        <p className="text-center" style={{fontWeight:"600", color:'black'}}>+94770118418</p>
        </div>
     </div>

     <div className="col-lg-4">
        <div className="card p-4 cardcon">
        <i class="fas fa-envelope text-center homeicon"></i>
        <h4 className="text-center homeicontext">Email</h4>
        <p className="text-center" style={{fontWeight:"600", color:'black'}}>rvakees23@gmail.com</p>
        </div>
     </div>

    

     
   </div>
</div>

            </div>
        )
    }
}

export default Contact