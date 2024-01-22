
import "./Account.css";

const Account = () => {
return (
    <div className="account-container">
        <h1 className="account-title">Account</h1>
        <div>
            <p>Welcome, User Name</p>
        </div>
        <button className="logout-button">Logout</button>
    </div>
);
};

export default Account;