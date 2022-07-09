const Withdraw = () => {
  const ctx = React.useContext(UserContext);
  //user context balance
  const userBalance = ctx.users[0]['balance'];

  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [balance, setBalance] = React.useState(userBalance);
  const [withdrawAmount, setWithdrawAmount] = React.useState('');



  //validate checks that the withdraw amount is above zero and below the balance
  const validate = (field) => {
    //check for empty input field
    if (!field) {
      setStatus(`Error: Please enter an amount.`);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    //check for below zero
    if (field <= 0) {
      setStatus(`Error: Please enter positive numbers only.`);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    //check for greater than balance
    if (field > balance) {
      setStatus(`Transaction Failed! You can not withdraw more than your balance.`);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    //check for NaN
    if (isNaN(field)) {
      setStatus(`Error: Please enter numerical values only.`);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  //handleWithdraw updates the state of balance to the balance minus the withdraw amount
  const handleWithdraw = () => {
    //check for validation
    if(!validate(withdrawAmount)) return;

    //subtract withdraw amount from balance
    console.log(`withdrawing: $ ${withdrawAmount}`);
    setBalance(balance - withdrawAmount);

    //update AllData
    ctx.users[0]['balance'] = (balance - withdrawAmount);
    
    //show success message
    setShow(false);
  }

  const clearForm = () => {
    setWithdrawAmount('');
    setShow(true);
  }


  return (
    <Card
      bgcolor="light"
      txtcolor="black" 
      header="Withdraw" 
      status={status}
      body={show ? (
          <>
          Balance $ {userBalance}<br/>
          Withdraw Amount<br/>

          <input type="input" className="form-control" id="withdraw"  placholder="Enter Withdraw Amount" onChange={(e) => setWithdrawAmount(e.currentTarget.value)} />
          
          <br/>
          
          <button type="submit" className="btn btn-dark" disabled={withdrawAmount.length > 0 ? false : true} onClick={handleWithdraw}>Withdraw</button>
          </>
        ):(
          <>
          <h5>Success!</h5>
          <h6>
            You have withdrawn ${withdrawAmount}.
            <br/>
            Your account balance is ${balance}.
          </h6>
          <button type="submit" className="btn btn-dark" onClick={clearForm}>Make Another Withdraw</button>
          </>
        )}
    />
  );  
};
