function Portal() {
  return (
    <div>
      <div className="sidenav">
        <img
          src="/logo2.png"
          alt="Application Logo"
          width="100"
          height="100"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "20px",
          }}
        />
        <a href="#about">Voice your concerns</a>
        <a href="#services">Chat with us</a>
        <a href="#clients">Know your rights</a>
      </div>

      <h2 className="main">Welcome! What would you like to do today?</h2>
    </div>
  );
}
export default Portal;
