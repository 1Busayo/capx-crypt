

contract CapxToken {
// Name
 string public name = 'Capx Token';
//Symbol
string public symbol = 'CAPX';
string public standard = 'Capx Token v1.0';
  




event Approval(
   indexed _owner,
 indexed _spender,
        _value
);

mapping(address => uint256) public balanceOf;
mapping(address => mapping(address => uint256)) public allowance;



  constructor  (uint256 _initialSupply) public {
  	balanceOf[msg.sender] = _initialSupply;
    totalSupply = _initialSupply;
   name;
   symbol;
   standard;
    // allocate the initial supply
  }

// Transfer


function transxfer(address _to, uint256 _value)  public   returns (bool success){


//Exception if account doesn't have enough
require(balanceOf[msg.sender] >= _value, 'Sender as insufficent funds');
//Transfer the balance
balanceOf[msg.sender] -= _value;
balanceOf[_to] += _value;
//Return a  boolean
//Transfer event
emit Transfer(msg.sender, _to, _value);

        return true;


}


//transfer from
function transferFrom(address _from, address _to, uint256 _value) public   returns (bool success) {


  require(_value <= balanceOf[_from],'_from has enough tokens');
  require(_value <= allowance[_from][msg.sender],'require allownce is big enough');
  //Require allowance
  //Change the balanceOf
  balanceOf[_from] -= _value;
  balanceOf[_to] += _value;
  //Update the allowance
allxowance[_from][msg.sender] -= _value;




}

