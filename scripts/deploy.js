// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function getBalances(address){
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInt);
}
async function consoleBalances(addresses){
  let counter = "0"
  for(const address of addresses){
    console.log("Address ${counter} balance:",await getBalances(address))
  }
}
async function consoleMemos(memos){
  for(const memo of memos){
    const timestamp = memo.timestamp;
    const name = memo.name;
    const from = memo.from;
    const message = memo.message;
    console.log("at" ,{timestamp }, "name",{name},"from",{from},"message",{message} );
  }
}


async function main() {

  const [owner,from1,from2,from3]= await hre.ethers.getSigners();
  const Donation = await hre.ethers.getContractFactory('Donation');
 const donation = await Donation.deploy();
await donation.deployed();
console.log("Address of contract:",donation.address);

 const addresses = [owner.address,from1.address,from2.address,from3.address];

console.log("Before giving Donation");
await consoleBalances(addresses);



//we are passing name and message and calling Donor function and connect it from different addressese 

const amount = {value: hre.ethers.utils.parseEther('1')}
await donation.connect(from1).Donor('from1','donation done',amount);
await donation.connect(from3).Donor('from2','donation done',amount);
await donation.connect(from2).Donor('from3','donation done',amount);

console.log("After giving Donation");
await consoleBalances(addresses);

const memos = await donation.getMemos();
consoleMemos(memos);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
