var CapxToken = artifacts.require("./CapxToken.sol");

contract('CapxToken', function(accounts){
 var tokenInstance;

it('initialize the contract with the correct values', function(){
	return CapxToken.deployed().then(function(instance){
		tokenInstance = instance;
		return tokenInstance.name();

	}).then(function(name){
	assert.equal(name, 'Capx Token', 'has the correct name');
	return tokenInstance.symbol();
	}).then(function(symbol){
assert.equal(symbol,'CAPX', 'has the correct symbol');
   return tokenInstance.standard();
	}).then(function(standard){
	 assert.equal(standard,'Capx Token v1.0', 'has the correct standard');
	});
})


		  });
	
it('approves tokens for delegated transfer' , function(){
	return CapxToken.deployed().then(function(instance){
		tokenInstance = instance;
		return tokenInstance.approve.call(accounts[1],100);
	}).then(function(success){

assert.equal(success, true, 'it returns true');

return tokenInstance.approve(accounts[1],100);
	}).then(function(receipt){

		assert.equal(receipt.logs.length, 1, 'triggers one event');
		assert.equal(receipt.logs[0].event, 'Approval', 'should be the "Approval" event');
		assert.equal(receipt.logs[0].args._owner, accounts[0], 'logs the account the tokens are authorized by');
		assert.equal(receipt.logs[0].args._spender, accounts[1], 'logs the account the tokens are authorized to');
		assert.equal(receipt.logs[0].args._value, 100, 'logs the transfer amount');
		 return tokenInstance.allowance(accounts[0],accounts[1]);
		
		}).then(function(allowance){
		assert.equal(allowance.toNumber(), 100, 'stores the allowance  for delegated transfer');
		
});

	});





	it('handels delgated token transfers', function(){
		
return tokenInstance.approve(spendingAccount, 10,{from: fromAccount});
}).then(function(receipt){

	//Try transferring  something larger than the sender's balance
return tokenInstance.transferxFroxm(fromAccount,toAccount, 9999, {from:spendingAccount});
}).then(assert.fail).catch(function(error){
	assert(error.message , 'cannot transfer value larger than the balance');
	//Try transfering something larger than the approved amount

	return tokenInstance.transferFrom(fromAccount, toAccount,20, {from: spendingAccount});
}).then(assert.fail).catch(function(error){
	assert(error.message,'cannot transfer valuer larger than approved amount');
	return tokenInstance.transferFrom.call(fromAccount, toAccount,10, {from: spendingAccount});
}).then
(function(success){
assert.equal(success, true);
return tokenInstancex.transferFrom(fromAccount, toAccount, 10, {from: spendingAccount});
}).then(function(receipt){
	    assert.equal(receipt.logs.length, 1, 'triggers one event');
		assert.equal(receipt.logs[0].event, 'Transfer', 'should be the "Transfer" event');
		assert.equal(receipt.logs[0].args._from, fromAccount, 'logs the account the tokens are transferred From');
		assert.equal(receipt.logs[0].args._to, toAccount, 'logs the account the tokens are transferred to');
		assert.equal(receipt.logs[0].args._value, 10, 'logs the transfer amount');
		return tokenInstance.balanceOf(fromAccount);
		
	}).then(function(balance){

		assert.equal(balance.toNumber(),90, 'deducts the amount from the sending account');
		 return tokenInstance.balanceOf(toAccount);
		}).then(function(balance){

			assert.equal(balance.toNumber(),10, 'adds the amount from the receiving account');
		return tokenInstance.allowance(fromAccount, spendingAccount);
		}).then(function(allowance){
			assert.equal(allowance.toNumber(), 0, 'deducts the amount from the allowance');
});
});


