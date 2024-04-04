import './App.css';
import React,{useState} from 'react';

function App() {

  const [amount, setamount] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
      alert("please enter amount");
    }else {
      var options = {
        key: "rzp_test_boXpT1w7FW6xiq",
        key_secret: "NgAgqg8Jtn64Lgm5jhDwyL4p",
        amount: amount *100,
        currency:"INR",
        name:"Payment Gateway",
        description:"for testing",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"Synergy Universal",
          email:"gadilakarthikreddy2@gmail.com",
          contact: "",

        },
        notes:{
          address:"Madhapur"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  
  return (
    <div className="App">
     <h2>Check out</h2>
     <br/>

     <input type='text' placeholder='Item Name'></input>
     <br/><br/>
     <input type='text' placeholder='Enter Amount' value={amount} onChange={(e)=>setamount(e.target.value)}></input>
     <br/><br/>
     <button onClick={handleSubmit}>Pay</button>
    </div>
    


  );
}

export default App;
