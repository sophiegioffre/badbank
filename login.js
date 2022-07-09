const Login = () => {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});

  const ctx = React.useContext(UserContext);

  const validate = (field, label) => {
    if (!field || !ctx.users.field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  const checkForUser = () => {
    console.log('checking for user...');

    for (let i = 0; i < ctx.users.length; i++) {
      console.log(ctx.users[i]);
      console.log(email);
      console.log(password);
      if (email === ctx.users[i]['email'] && password === ctx.users[i]['password']) {
        console.log('User: ' + ctx.users[i]['name']);
        setCurrentUser(ctx.users[i]);
        console.log(currentUser);
      }else console.log('User does not exist')
    }
  }

  const handleLogin = () => {
    console.log(email, password);
    console.log('User: ' + ctx.users[0]['email']);
    checkForUser();
  }

  return (
    <Card
      bgcolor="light"
      txtcolor="black" 
      header="Login" 
      status={status}
      body={(
        <>
        Email<br/>
        <input type="input" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
        Password<br/>
        <input type="input" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
        <button type="submit" className="btn btn-dark" onClick={handleLogin}>Login</button>
        </>
      )}
    />
  );  
}
