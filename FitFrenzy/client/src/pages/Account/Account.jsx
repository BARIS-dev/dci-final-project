import './Account.css';
import { UserAuth } from '../../context/user.context';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Account = () => {
  const { logOut, user, updateUser, isLoggedIn } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
      toast.success('Logout erfolgreich');
      updateUser({});
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
        <p>Willkommen, {user?.displayName || user?.firstName || 'Guest'}</p>
      </div>
      <br />

      {isLoggedIn && (
        <div className="user-info">
          <Link to={'/my-orders'} className="my-orders-link">
            Meine Bestellungen
          </Link>

          <label>
            Vorname:
            <input type="text" value={user?.firstName} disabled />
          </label>
          <label>
            Nachname:
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
          Login / Register
        </Link>
      )}
      <br />
      <br />

      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Account;
