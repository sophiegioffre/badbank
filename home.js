const Home = () => {
  return (
    <Card
      bgcolor="light"
      txtcolor="black" 
      header="Welcome to BadBank"  
      text="For all your BadBanking needs!"  
      body={(<img src="bank.png" className="img-fluid" alt="responsive image"/>)}
    />
  );  
}
