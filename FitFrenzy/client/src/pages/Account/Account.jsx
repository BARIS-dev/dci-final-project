import './Account.css';
import { UserAuth } from '../../context/user.context';
import { Link } from 'react-router-dom';

const Account = () => {
  const { logOut, user, updateUser, isLoggedIn } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
      updateUser({});
      logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="account-container">
      <br />
      <h1 className="account-title">Account</h1>
      <br />
      <div>
        <p>Welcome, {user?.displayName || user?.firstName || 'Guest'}</p>
      </div>
      <br />
      <br />

      {isLoggedIn && (
        <div className="user-info">
          <Link to={'/my-orders'} className="my-orders-link">
            My Orders
          </Link>

          <label>
            First Name:
            <input type="text" value={user?.firstName} disabled />
          </label>
          <label>
            Last Name:
            <input type="text" value={user?.lastName} disabled />
          </label>
          <label>
            Username:
            <input type="text" value={user?.username} disabled />
          </label>
          <label>
            Email:
            <input type="email" value={user?.email} disabled />
          </label>
          <label>
            Password:
            <input type="password" value={user?.password} disabled />
          </label>
          <button onClick={handleSignOut} className="logout-button-account">
            Logout
          </button>
        </div>
      )}

      {!isLoggedIn && (
        <Link to={'/signin'} className="login-register-btn">
          Login or Register
        </Link>
      )}
      <br />
      <br />
    </div>
  );
};

export default Account;
