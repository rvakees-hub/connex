import React from "react";
import { Link } from "react-router-dom";
import './home.css'


const Home = () => (

<div>
        {/* <div class="row custom-section d-flex align-items-center">
            <div class="col-12 col-lg-4">
                <h1>Courier ConnEx</h1>
                <h3>Process</h3>
                
                
            </div>
            <div class="col-12 col-lg-8">
                <img src="/img/undraw_by_my_car_ttge.svg" className="pic" alt="Team process banner"/>
            </div>
        </div> */}

  <div className="container my-home-container"> 
  <div className="row">
      

        <div className="col-lg-6">
                <img src="https://i.pinimg.com/originals/e5/07/d7/e507d704d4b6fdcb17116762fcd99acd.gif" className="my-home-img" alt="Team process banner"/>
            
        </div>
        <div className="col-lg-6">
        <p className="hometext">SEND YOUR PARCELS WITH SAFE</p>
        <h2 className="homehead">Courier Delivery Service, <br/>Faster & Safest Delivery Service From Your Doorstep.</h2>
        <Link className="btn btn-warning btn-rounded" to={"/form"}><i className="fas fa-paper-plane" style={{fontWeight:'600'}}></i>  Send Your Parcel</Link>
        </div>

  </div>

  </div>
<div className="container myhomecontainer">
   <div className="row">
   <div className="col-lg-3">
        <div className="card p-3 myhomecard ">
        <i className="fas fa-shield-alt text-center homeicon"></i>
        <h4 className="text-center homeicontext">Safest Delivery</h4>
        </div>
     </div>

     <div className="col-lg-3">
        <div className="card p-3 myhomecard">
        <i class="fas fa-shipping-fast text-center homeicon"></i>
        <h4 className="text-center homeicontext">Faster Delivery</h4>
        </div>
     </div>

     <div className="col-lg-3">
        <div className="card p-3 myhomecard">
        <i class="fas fa-money-bill-wave-alt text-center homeicon"></i>
        <h4 className="text-center homeicontext">Low Prices</h4>
        </div>
     </div>

     <div className="col-lg-3">
        <div className="card p-3 myhomecard">
        <i class="fas fa-hand-holding-usd text-center homeicon"></i>
        <h4 className="text-center homeicontext">Make Money</h4>
        </div>
     </div>

     
   </div>
</div>

<div>
    <h1 className="textarea">Connex Delivery Districts</h1>
</div>

<div className="container myhometext">
   <div className="row">
   <div className="col-lg-2">
        <div className="card p-2 myhomecardssss">
        <i className="fas fa-map-marker-alt text-center homeiconn"></i>
        <h4 className="text-center homeicontextt">Mullaitivu</h4>
        </div>
     </div>

     <div className="col-lg-2">
        <div className="card p-2 myhomecardssss">
        <i class="fas fa-map-marker-alt text-center homeiconn"></i>
        <h4 className="text-center homeicontextt">Kilinochchi</h4>
        </div>
     </div>

     <div className="col-lg-2">
        <div className="card p-2 myhomecardssss">
        <i class="fas fa-map-marker-alt text-center homeiconn"></i>
        <h4 className="text-center homeicontextt">Jaffna</h4>
        </div>
     </div>

     <div className="col-lg-2">
        <div className="card p-2 myhomecardssss">
        <i class="fas fa-map-marker-alt text-center homeiconn"></i>
        <h4 className="text-center homeicontextt">Vavuniya</h4>
        </div>
     </div>

     <div className="col-lg-2">
        <div className="card p-2 myhomecardssss">
        <i class="fas fa-map-marker-alt text-center homeiconn"></i>
        <h4 className="text-center homeicontextt">Mannar</h4>
        </div>
     </div>
   </div>
</div>

<div className="mycon">
    <img src="https://www.saferoad.com/globalassets/saferoad-group/slider/slider_saferoad5.png?h=485&mode=stretch" className="car">
    </img>
    <div className="left"> <i class="fas fa-shipping-fast"></i> Faster than you think</div>
</div>


<footer class="bg-light text-center text-lg-left">
  
  <div class="container p-4">
   
    <div class="row">
      
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        
        <img src="https://gist.githubusercontent.com/prashankhan/fa4eb64aff3c79b53e2ccf988a4f4253/raw/8460e227250ff55304e1e15b11dc82ca85f50514/vakeesanlogo.svg" style={{width: "190px", marginTop:'50px'}}></img>
        
      </div>
      

    
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <a href="#!" class="text-dark">Link 1</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Link 2</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Link 3</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Link 4</a>
          </li>
        </ul>
      </div>
      

      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase mb-0">Links</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!" class="text-dark">Link 1</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Link 2</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Link 3</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Link 4</a>
          </li>
        </ul>
      </div>
      
    </div>
    
  </div>
  

  
  <div class="text-center p-3" style={{backgroundColor: "rgb(19, 18, 18)"}}>
    © 2020 Copyright:
    <a class="text-dark" >Connex</a>
  </div>
  
</footer>

    </div>


)
export default Home;