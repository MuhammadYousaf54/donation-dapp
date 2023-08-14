import abi from  "./contract/Donation.json";
import { ethers } from 'ethers';
import {useState,useEffect} from 'react';
import './App.css';
import Buy from "./component/Buy";
import Memos from "./component/Memos";

import donations from"./donationDapp (2).png"
function App() {

const [state,setState] = useState({
  provider:null,
  signer:null,
  contract:null
});
const [account,setAccount] =useState("none"); 
useEffect(()=>{
 
  const connectWallet =async()=>{
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const contractABI= abi.abi;
    try{
      const {ethereum} = window;
      if(ethereum){
       const account = await ethereum.request({method:"eth_requestAccounts"});

       window.ethereum.on("chainChange Account",()=>{
        window.location.reload();
       })

       window.ethereum.on("Account changed",()=>{
        window.location.reload();
       })

    
     
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress,contractABI,signer);
      setAccount(account);
      setState({provider,signer,contract}); }else{
        alert("Please install MetaMask");
      }
     }catch(error){
      console.log(error)
    }
  };
  connectWallet();
},[]);
//console.log(state);

return (
  <div style={{ backgroundColor: "#EFEFEF", height: "100%" }}>
    <img src={donations} className="img-fluid" alt=".." width="100%" height="50%" display = "block"/>
    <p>Connected Account -{account}</p>
    <p
      class="text-muted lead "
      style={{ marginTop: "10px", marginLeft: "5px" }}
    >

    </p>
    <div className="container">
      <Buy state={state} />
      <Memos state={state} />
    </div>
  </div>
);
}

export default App;


//Address of contract: 0xa0a7f785979e6D45C2277f150c833aC3B6dA4E3e