const NavBar = () => {
  const navTabs = [
    {id: "#/"}, 
    {id: "#/CreateAccount/"},
    {id: "#/deposit/"}, 
    {id: "#/withdraw/"}, 
    {id: "#/alldata/"}
  ];

  //handleActiveLink is called onClick of a nav-link
  //it loops through navTabs comparing the e.target.hash to each item and setting the target to active
  const handleActiveLink = (e) => {
    console.log(`finding path...`);
    console.log(`hash: ` + e.target.hash);

    for (let i = 0; i < navTabs.length; i++) {
      if (e.target.hash === navTabs[i]['id']) {
        //console.log(`from navTabs: ` + navTabs[i]['id']);
        //console.log(`from target: ` + e.target.hash);
        document.getElementById(navTabs[i]['id']).className = "nav-link active";
        document.getElementById(navTabs[i]['id']).style.backgroundColor = "darkgrey";
        document.getElementById(navTabs[i]['id']).style.color = "white";
        document.getElementById(navTabs[i]['id']).style.borderRadius = "15%"
        
      }else if (e.target.hash !== navTabs[i]['id']) {
        //console.log(`nope ` + navTabs[i]['id']);
        document.getElementById(navTabs[i]['id']).className = "nav-link";
        document.getElementById(navTabs[i]['id']).style.backgroundColor = "";
        document.getElementById(navTabs[i]['id']).style.color = "";
        document.getElementById(navTabs[i]['id']).style.borderRadius = "15%"
      };
    };
  }



  return(
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">BadBank</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item" onClick={handleActiveLink}>
              <a className="nav-link active" id="#/" href="#/" data-toggle="tooltip" data-placement="bottom" title="BadBank Home">Home</a>
            </li>

            <li className="nav-item" onClick={handleActiveLink}>
              <a className="nav-link" id="#/CreateAccount/" href="#/CreateAccount/" data-toggle="tooltip" data-placement="bottom" title="Create a BadBank Account">CreateAccount</a>
            </li>

            <li className="nav-item" onClick={handleActiveLink}>
              <a className="nav-link" id="#/deposit/" href="#/deposit/" data-toggle="tooltip" data-placement="bottom" title="Make a Deposit">Deposit</a>
            </li>

            <li className="nav-item" onClick={handleActiveLink}>
              <a className="nav-link" id="#/withdraw/" href="#/withdraw/" data-toggle="tooltip" data-placement="bottom" title="Make a Withdraw">Withdraw</a>
            </li>

            <li className="nav-item" onClick={handleActiveLink}>
              <a className="nav-link" id="#/alldata/" href="#/alldata/" data-toggle="tooltip" data-placement="bottom" title="Display User Data">All Data</a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}