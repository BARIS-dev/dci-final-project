function Register() {
  return (
    <div className="signin-container">
      <h1 className="signin-title">Register via email</h1>
      <div className="signin-content">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="User Name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
