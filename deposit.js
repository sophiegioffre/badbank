const Deposit = () => {
  const ctx = React.useContext(UserContext);
  //user context balance
  const userBalance = ctx.users[0]['balance'];

  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [balance, setBalance] = React.useState(userBalance);
  const [depositAmount, setDepositAmount] = React.useState('');


  const validate = (field) => {
    //check for empty field
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
    //check for NaN
    if (isNaN(field)) {
      setStatus(`Error: Please enter numerical values only.`);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  const handleDeposit = (e) => {
    //check for validation
    if(!validate(depositAmount)) return;

    console.log(`depositing: $ ${depositAmount}`);
    //balance + depositAmount concatenates because they are read as strings, so we have to do +balance + +depositAmount
    setBalance(+balance  + +depositAmount);

    //update AllData
    ctx.users[0]['balance'] = (+balance + +depositAmount);

    //show success message
    setShow(false);
    
  }

  const clearForm = () => {
    setDepositAmount('');
    setShow(true);
  }
  
  return (
    <Card
      bgcolor="light"
      txtcolor="black" 
      header="Deposit" 
      status={status}
      body={show ? (
          <>
          Balance $ {userBalance}<br/>
          Deposit Amount<br/>
          <input type="input" className="form-control" id="deposit" placholder="Enter Deposit Amount" onChange={(e) => setDepositAmount(e.currentTarget.value)} /><br/>
          <button type="submit" className="btn btn-dark" disabled={depositAmount.length > 0 ? false : true} onClick={handleDeposit}>Deposit</button>
          </>
        ):(
          <>
          <h5>Success!</h5>
          <br/>
          <h6>
            You have deposited ${depositAmount}.
            <br/>
            Your account balance is ${balance}.
          </h6>
          <button type="submit" className="btn btn-dark" onClick={clearForm}>Make Another Deposit</button>
          </>
      )}
    />
  );  
}
