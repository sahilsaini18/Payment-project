import React from 'react'

export default function Front() {
  return (
    <div>
       {/* first Creating Payment Modes */}
       <nav class="navbar navbar-light bg-dark">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1" style={{color:"white"}}>Payment Modes</span>
  </div>
</nav>
  <div>
   {/* Invoice Details  */}
   <p>Invoice no:</p>
   <input type= "text" placeholder="Enter Invoice Number"/>
   

   </div>

 <br>
 </br>
 
   <div>
        <h4>Payment Options</h4>
        <p>Select Payment Options</p>
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Select Payment Option
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Cheque</a></li>
    <li><a class="dropdown-item" href="#">UPI</a></li>
    <li><a class="dropdown-item" href="#">NEFT/RTGS</a></li>
  </ul>
</div>

   </div>
 
   {/* Payment Options */}
    
   <div>
      {/* Cheque No. */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <label style={{ marginRight: '10px' }}>Cheque No.:</label>
        <input type="text" placeholder="Enter Cheque No." />
        <label style={{ marginRight: '10px' }}>Cheque date:</label>
        <input type="text" placeholder="Enter Cheque Date" />
        <label style={{marginRight: '10px'}}>Expiry date</label>
        <input type='text' placeholder = "Enter expiry Date"/>
      </div>
    </div>

    <div style={{display: 'flex', alignItems:'center'}}>
        <label style={{marginRight:'10px'}}>Bank Name</label>
        <input type ="text" placeholder='Enter Bank Name'/>
        <label style={{marginRight:'10px'}}>Description</label>
        <input type="text" placeholder='Enter Description'/>
        <label style={{marginRight:'10px'}}>Document</label>
        <button btn btn-primary>Upload</button>
    </div>
    

 
 
 
 
   {/* Document Upload */}
   <div>
 
   </div>
  {/* Save (Submit form) */}
  <div>
 
  </div>
    </div>
  )
}






