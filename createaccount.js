const CreateAccount = () => {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);

  const validate = (field, label) => {
    if (!field) {
      setStatus(`Error: ${label}`);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    if (field === password && field.length < 8) {
      setStatus(`Error: Password must be at least 8 characters.`);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  const handleCreate = () => {
    console.log(name, email, password);
    if (!validate(name, 'Please enter name')) return;
    if (!validate(email, 'Please enter email')) return;
    if (!validate(password, 'Please enter password')) return;
    ctx.users.push({name, email, password, balance:100});
    setShow(false);
  }

  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }



  return (
    <Card
      bgcolor="light"
      txtcolor="black" 
      header="Create Account" 
      status={status} 
      body={show ? (
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
              Password<br/>
              <input type="input" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-dark" id="submit-btn" disabled={(name.length > 0 || email.length > 0 || password.length > 0)  ? false : true} onClick={handleCreate}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success!</h5>
              <button type="submit" className="btn btn-dark" onClick={clearForm}>Add Another Account</button>
              </>
            )}
    />
  );  
}