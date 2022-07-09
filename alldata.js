const AllData = () => {
  const ctx = React.useContext(UserContext);
  console.log(JSON.stringify(ctx.users));

  //array of data objects
  const userData = ctx.users;


  return (
    <Card
    bgcolor="light"
    txtcolor="black"
    header="AllData" 
    body={(
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.balance}</td>
            </tr>
          ))} 
        </tbody>
      </table>
    )}
    />
  );  
}
