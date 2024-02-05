import "./Account.css";
import { UserAuth } from "../../context/user.context";

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="account-container">
      <h1 className="account-title">Account</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
      </div>
      <button onClick={handleSignOut} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Account;
