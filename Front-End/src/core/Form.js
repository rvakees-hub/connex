import React, {Component} from "react";
import Layout from "./Layout";
import axios from "axios";
import {Link} from 'react-router-dom'

class Form extends Component {

    constructor() {
        super()

        this.state = {
            name: "",
            phonenumber: "",
            pickupaddress: "",
            deliveryaddress: "",
            weight: "",

            message: ""

        }

    }

    name = (e) => {
        this.setState({
            name : e.target.value
        })
    }
    phonenumber = (e) => {
        this.setState({
            phonenumber : e.target.value
        })
    }
    pickupaddress = (e) => {
        this.setState({
            pickupaddress : e.target.value
        })
    }
    deliveryaddress = (e) => {
        this.setState({
            deliveryaddress : e.target.value
        })
    }
    weight = (e) => {
        this.setState({
            weight : e.target.value
        })
    }

    sentform=(e) => {
        e.preventDefault()
        const details = {
                name: this.state.name,
                phonenumber: this.state.phonenumber ,
                pickupaddress: this.state.pickupaddress,
                deliveryaddress:this.state.deliveryaddress ,
                weight: this.state.weight
        }
        axios.post("http://localhost:8000/form", details).then(res => {
            if (res) {
                this.setState({
                    message: "We Will Get In Touch With You"
                })
            }

             else{
                this.setState({
                    message: "Post Failure...."
                })
             }
        })
    }

    redirect = () => {
        window.location.assign('/')
    }

    render(){
        return(
            

     <div>
         
     <div className="container">
         <div className="img">
             <img src="/img/undraw_delivery_address_03n0.svg"></img>
         </div>
         <div className="signup-form">	
 <form  onSubmit={this.sentform} >
     <img src="/img/undraw_profile_pic_ic5t.svg" className="avatar"></img>
     
     <div className="form-group">
         <div className="input-group">
             <span className="input-group-addon"><i className="fa fa-user"></i></span>
             <input type="text" class="form-control"  placeholder="Username"
                 value={this.state.name} 
                 onChange={this.name}
             />
         </div>
     </div>
     <div className="form-group">
         <div class="input-group">
             <span className="input-group-addon"><i class="fa fa-paper-plane"></i></span>
             <input type="number" class="form-control"  placeholder="Phonenumber"
                value={this.state.phonenumber}
                 onChange={this.phonenumber}
             />
         </div>
     </div>
     <div class="form-group">
         <div class="input-group">
             <span class="input-group-addon"><i class="fas fa-home" style={{ fontSize: "20px", marginTop: "10px"}}></i></span>
             <input type="text" class="form-control"  placeholder="Pickup Address"
                value={this.state.pickupaddress}
                onChange={this.pickupaddress}
             />
         </div>
     </div>
     <div class="form-group">
         <div class="input-group">
             <span class="input-group-addon"><i class="fas fa-route" style={{ fontSize: "20px", marginTop: "10px"}}></i></span>
             <input type="text" class="form-control"  placeholder="Delivery Address" 
                 value={this.state.deliveryaddress}
                 onChange={this.deliveryaddress}
             />
         </div>
     </div>
     <div class="form-group">
         <div class="input-group">
             <span class="input-group-addon"><i class="fa fa-lock"></i></span>
             <input type="text" class="form-control"  placeholder="Weight"
                value={this.state.weight}
                onChange={this.weight}
             />
         </div>
     </div>
         
     <div class="form-group">
         <button type="submit" class="btn btn-primary btn-block btn-lg text-dark" data-toggle="modal" data-target="#centralModalSm">
  sent
</button>
     </div>

   



<div class="modal fade" id="centralModalSm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">

 
  <div class="modal-dialog modal-sm" role="document">


    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title w-100" id="myModalLabel">Thank You...</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        {this.state.message}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary btn-sm" onClick={this.redirect} data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>




 </form>
</div>
         </div>
     </div>
                
            //  <form onSubmit={this.sentform} className="container"> 
            //     <div className="form-group">
            //         <label className="text-muted">Name</label>
            //             <input  type="text" className="form-control" 
            //                  value={this.state.name} 
            //                 onChange={this.name}
            //              />
            //         </div>

            //         <div className="form-group">
            //             <label className="text-muted">Phonenumber</label>
            //             <input type="text" className="form-control" 
            //                 value={this.state.phonenumber}
            //                 onChange={this.phonenumber}

            //             />
            //         </div>

            //         <div className="form-group">
            //             <label className="text-muted">Pickup Address</label>
            //             <input  type="text" className="form-control" 
            //                 value={this.state.pickupaddress}
            //                 onChange={this.pickupaddress}

            //             />
            //         </div>

            //         <div className="form-group">
            //             <label className="text-muted">Delivery Address</label>
            //             <input  type="text" className="form-control" 
            //                 value={this.state.deliveryaddress}
            //                 onChange={this.deliveryaddress}

            //             />
            //         </div>

            //         <div className="form-group">
            //             <label className="text-muted"> Product Weight</label>
            //             <input  type="text" className="form-control" 
            //                 value={this.state.weight}
            //                 onChange={this.weight}

            //             />
            //         </div>
            //         <button  className="btn btn-primary">
            //             Submit
            //         </button>
            //     </form>
          
        )
    }
}
















// const Form = () => {



// const userDetails = () => (
//     <form>
//     <div className="form-group">
//         <label className="text-muted">Name</label>
//         <input  type="text" className="form-control"
           
//         />
//     </div>

//     <div className="form-group">
//         <label className="text-muted">Phonenumber</label>
//         <input type="email" className="form-control"  />
//     </div>

//     <div className="form-group">
//         <label className="text-muted">Pickup Address</label>
//         <input  type="text" className="form-control"  />
//     </div>

//     <div className="form-group">
//         <label className="text-muted">Delivery Address</label>
//         <input  type="text" className="form-control"  />
//     </div>

//     <div className="form-group">
//         <label className="text-muted"> Product Weight</label>
//         <input  type="text" className="form-control"  />
//     </div>
//     <button  className="btn btn-primary">
//         Submit
//     </button>
// </form>
// )




//     return(
//     <Layout 
//         title="Form ConnEx" 
//         description=" ConnEx"
//         className="container col-md-8 offset-md-2"

//         >
//             {userDetails()}
//     </Layout>
//     )

// }
export default Form;