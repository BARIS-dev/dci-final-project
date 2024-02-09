function LoginVEmail() {
  return (
    <div className="signin-content">
      <form>
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
      </form>
      <br />
      <p>OR</p>
      <br />
      <hr />
      <br />
    </div>
  );
}

export default LoginVEmail;
