import { ethers } from 'ethers';
import {useState,useEffect} from 'react';

function app(){

    const [state,setState] =  useState({
        provider:null,
        signer: null,
        contract:null
    });
    const[account,setAccount] = useState("none");

    useEffect(()=>{
        const connectWallet= async()=>{

            const contractAddress = "";
            const contractABI=abi.abi;
            try{
                const {ethereum} = window;
                if(ethereum){
                   const account = await ethereum.request({method:"req_ethAmount"});
                   window.ethereum.on("chain changeAccount",()=>{
                    window.location.reload();
                   });
                   window.ethereum.on("account changed",()=>{
                    window.location.reload();
                   });

                   const provider = await ethers.providers.Web3Provider(ethereum);
                   const signer = provider.getSigner();
                   const contract = new ethers.Contract(contractABI,contractAddress,signer);
                   setAccount(account);
                   setState(provider,signer,contract);

                }else{
                    alert("please install metamask");

                }
            }catch(error){
                console.log(error);
            };
        };connectWallet()    },[])}
        export default app;

 



