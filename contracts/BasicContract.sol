pragma solidity =0.7.3;
contract BasicContract {

    uint256 number;

    constructor(uint256 _init){
      number = _init;
    }


    function setNumber(uint256 _num) public {
        number = _num;
    }


    function getNumber() public view returns (uint256){
        return number;
    }
}
