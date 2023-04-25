//SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract RegisterContract {

    // A contract to register a smart meter and assign it to a ethereum account
    
    
    //******************************** Local variables to the contract*****************************************
    
    
    address public owner;

    
    mapping (address=>register)registered;


    constructor() {
        owner=msg.sender;
    }
    
    modifier onlyOwner() {
    require(msg.sender == owner);
    _;
    }

    
    struct register{
    // variable to hold the wallet ID
    address walletID;
    // variable to hold the electricity smart meter ID
    string elecMeterID;
    // variable to hold the gas meterID
    string gasMeterID;
    // variable to hold the substation ID
    uint DNO;
    // variable to hold selling price
    uint producePrice;
    // varibale to hold buying price
    uint consumePrice;
    // boolean can bid
    }    
    //******************************** Consructor for the contract*********************************************
    
    // Constructor to register smart meter to ethereum account

    function reg(address walletID,string memory elecMeterID, string memory gasMeterID, uint DNO, uint producePrice,uint consumePrice) public onlyOwner{
        registered[walletID]=register(walletID,elecMeterID,gasMeterID,DNO,producePrice,consumePrice);
    }
    
    function getRegisterDetails(address walletID) public view returns (address,string memory, string memory, uint,uint,uint){
        return (registered[walletID].walletID,registered[walletID].elecMeterID,registered[walletID].gasMeterID,registered[walletID].DNO,registered[walletID].producePrice,registered[walletID].consumePrice);
    }
    
    //*************************Modifier function that checks the valdity of a user*****************************


    // modifier that checks if the message sender is the owner of the contract
}