import React, {Component} from "react";
import Layout from "./Layout";
import axios from "axios";

class Join extends Component {

    constructor() {
        super()

        this.state = {
            name: "",
            phonenumber: "",
            address: "",
            nic: "",
            license: "",
            vehicle: "Bike"
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
    address = (e) => {
        this.setState({
            address : e.target.value
        })
    }
    nic = (e) => {
        this.setState({
            nic : e.target.value
        })
    }
    license = (e) => {
        this.setState({
            license : e.target.value
        })
    }
    vehicle = (e) => {
        this.setState({
            vehicle : e.target.value
        })
    }

    sentform=(e) => {
        e.preventDefault()
        const details = {
                name: this.state.name,
                phonenumber: this.state.phonenumber ,
                address:this.state.address,
                nic: this.state.nic,
                license: this.state.license,
                vehicle: this.state.vehicle
        }
        axios.post("http://localhost:8000/join", details).then(res => {
            if (res) {
                alert("Rigister Succesefully...")
                window.location.assign("")
            }

             else{
                 alert("Please Try again later")
             }
        })
    }

    render(){
        return(



     <div>
         
     <div className="container">
         <div className="img">
             <img src="/img/undraw_On_the_way_re_swjt.svg"></img>
         </div>
         <div className="signup-form">	
 <form onSubmit={this.sentform}>
     <img src="/img/undraw_profile_pic_ic5t.svg" className="avatar"></img>
     <h2 className='ti'>Create Account</h2>
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
             <input type="number" class="form-control"  placeholder="Phone number"
                value={this.state.phonenumber}
                onChange={this.phonenumber}
             />
         </div>
     </div>
     <div class="form-group">
         <div class="input-group">
             <span class="input-group-addon"><i class="fa fa-lock"></i></span>
             <input type="text" class="form-control"  placeholder="Address" 
                value={this.state.address}
                onChange={this.address}
             />
         </div>
     </div>
     <div className="form-group">
         <div class="input-group">
             <span className="input-group-addon"><i class="fa fa-paper-plane"></i></span>
             <input type="number" class="form-control"  placeholder="NIC Number"
                value={this.state.nic}
                onChange={this.nic}
             />
         </div>
     </div>
     <div className="form-group">
         <div class="input-group">
             <span className="input-group-addon"><i class="fa fa-paper-plane"></i></span>
             <input type="number" class="form-control"  placeholder="License"
                value={this.state.license}
                onChange={this.license}
             />
         </div>
     </div>
     <div class="form-group">
         <div class="input-group">
             <span class="input-group-addon"><i class="fa fa-lock"></i></span>
             {/* <input type="text" class="form-control" placeholder="Vehcle Categori"
                value={this.state.vehicle}
                onChange={this.vehicle}
             /> */}
             <select className="form-control"
                value={this.state.vehicle}
                onChange={this.vehicle}
             >
                <option value="Bike" selected>Bike</option>
                <option value="Car">Car</option>
                <option value="Van">Van</option>
             </select>
         </div>
     </div>
         
     <div class="form-group">
         <button type="submit" class="btn btn-primary btn-block btn-lg text-dark">Submit</button>
     </div>
 </form>
</div>
         </div>
     </div>


            // <div className="jumbotron bxs mt-5 container mt-5 col-sm-12 col-md-12 col-lg-4">
                
            //  <form onSubmit={this.sentform} className="container "> 
            //     <div className="form-group ">
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
            //             <label className="text-muted">Address</label>
            //             <input  type="text" className="form-control" 
            //                 value={this.state.address}
            //                 onChange={this.address}

            //             />
            //         </div>

            //         <div className="form-group">
            //             <label className="text-muted">Nic No</label>
            //             <input  type="text" className="form-control" 
            //                 value={this.state.nic}
            //                 onChange={this.nic}

            //             />
            //         </div>

            //         <div className="form-group">
            //             <label className="text-muted">License No</label>
            //             <input  type="text" className="form-control" 
            //                 value={this.state.license}
            //                 onChange={this.license}

            //             />
            //         </div>
            //         <div className="form-group">
            //             <label className="text-muted">Vehcle Categori</label>
            //             <input  type="text" className="form-control" 
            //                 value={this.state.vehicle}
            //                 onChange={this.vehicle}

            //             />
            //         </div>
            //         <button  className="btn btn-primary">
            //             Submit
            //         </button>
            //     </form>
            // </div>
        )
    }
}
export default Join;