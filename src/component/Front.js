import React, { useEffect, useState } from "react";
import "../App.css";


export default function Front() {
    const [selectOption, setselectOption]=useState('Select Payment Option')
    useEffect(()=>{

    },[])
   
  return (
<>

<div >
      {/* first Creating Payment Modes */}
      <nav class="navbar">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1" style={{ color: "black" }}>
           <h4>Payment Modes</h4> 
          </span>
        </div>
      </nav>
      <div>
        {/* Invoice Details  */}
        <div className="container">
          <div className="row">
            <div className="col-md-3">
                <label> Invoice Number</label>
               

            </div>
            <div className="col-md-3">
                <label>Invoice Date</label>
            </div>
            <div className="col-md-3">
                <label>Invoice Amount</label>
            </div>
            <div className="col-md-3">
            <label>  PO No.</label>
              
            </div>
          </div>
        </div>
       
      </div>

      <br></br>

      <div className="container-fluid">
        <h4>Payment Options</h4>
        <div className="row">
        <div className="col-md-3">
        <div class="dropdown" >
            <div className="row">
                <div className="col-md-3">
                <button      
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >
            {selectOption}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li  onClick={()=>{
            setselectOption('Cheque')
        }}>
              <a class="dropdown-item" href="#">
                Cheque
              </a>
            </li>
            <li onClick={()=>{
                  setselectOption('UPI')
            }}>
              <a class="dropdown-item" href="#">
                UPI
              </a>
            </li>
            <li onClick={()=>{
                  setselectOption('NEFT/RTGS')
            }}>
              <a class="dropdown-item" href="#">
                NEFT/RTGS
              </a>
            </li>
          </ul>
        </div>
                </div>
            </div>
          
        </div>
        </div>
        <div className="row">

        </div>
        <div className="row">
            <div className="col-md-3">
                <h5>Cheque No.</h5>
                <input type="text" maxLength="6"/>
            </div>
            <div className="col-md-3">
                <h5>Cheque Date</h5>
                <input type="date"/>
            </div>
            <div className="col-md-3">
                <h5>Expiry Date</h5>
                <input type="date"/>

            </div>
        </div>

        <div className="row">
            <div className="col-md-3">
                <h5>Bank Name</h5>
                <input type="text" />
            </div>
            <div className="col-md-3">
                <h5>Description</h5>
                <input type="text"/>
            </div>
            <div className="col-md-3">
                <h6>Document</h6>
                <div className="row">
                    <div className="col-md-3">
                        <button btn btn-primary>Upload</button>
                    </div>
                </div>
            </div>
        </div>

       
        
      </div>

     </div>
              </>
  );
}
