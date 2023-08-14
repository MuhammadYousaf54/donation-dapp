const hre = require("hardhat");



async function main() {

    const Donation = await hre.ethers.getContractFactory('Donation');
   const donation = await Donation.deploy();


  await donation.deployed();
  console.log("Address of contract:",donation.address);}
  
   

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  