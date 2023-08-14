// SPDX-License-Identifier: UNLICENSED
pragma solidity^ 0.8.9;
contract Donation{
    struct Memo{
        string name;
        string message;
        uint timestamp;
        address from;
    }
    Memo[] memos; 


address payable owner;
constructor(){
    owner = payable(msg.sender);
}

    // in this function you transfer Eth in owner account 
    function Donor(string memory name , string memory message) public payable {
//require(msg.value>0 ,"please pay rupees minimum one ehter");
   owner.transfer(msg.value);
   memos.push(Memo(name,message,block.timestamp,msg.sender));
    }

    function getMemos() public view returns(Memo[] memory){
        return memos;
    }
}