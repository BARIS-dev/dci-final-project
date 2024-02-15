import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/user.context.jsx';
import users from '../../api/users.js';

function LoginVEmail() {
  const [userList, setUserList] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const { updateUser, updateLoggedIn } = UserAuth();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await users.get('/users');
        setUserList(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const userFromJSON = userList.find(user => user.email === email);

    if (userFromJSON && userFromJSON.password === password) {
      setLoginMessage('Erfolgreicher Login!');
      setEmail('');
      setPassword('');

      setTimeout(() => {
        setLoginMessage('');
        updateLoggedIn();
        updateUser(userFromJSON);
        navigate('/account');
      }, 2500);
    } else {
      setLoginMessage('Ungültige E-Mail oder Passwort');
    }
  };

  return (
    <div className="signin-content">
      <form action="POST" onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>

      <div className="register-div">
        <Link className="register-link" to={'/register'}>
          Kein Account? <br />
          Keine Sorge, register kostenlos!
        </Link>
      </div>

      <p
        className="login-message"
        style={{
          marginTop: 10,
          color: loginMessage.includes('oder') ? 'red' : 'green',
        }}
      >
        {loginMessage}
      </p>

      <br />
      <p>OR</p>
      <br />
      <hr />
      <br />
    </div>
  );
}

export default LoginVEmail;
