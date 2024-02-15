import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/user.context.jsx';
import users from '../../api/users.js';

function LoginVEmail() {
  const [userList, setUserList] = useState([]);
  // const [curruser, setCurruser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');
  const { updateUser } = UserAuth();

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
      // setIsLoggedIn(true);
      // setCurruser(userFromJSON);
      setEmail('');
      setPassword('');
      setLoginMessage('Erfolgreicher Login!');

      setTimeout(() => {
        setLoginMessage('');
        navigate('/account');
      }, 2000);

      updateUser(userFromJSON);
    } else {
      setLoginMessage('Ungültige E-Mail oder Passwort');
    }
  };

  // useEffect(() => {
  //   if (curruser !== null) {
  //     console.log('Logged in', curruser);
  //   }
  // }, [curruser]);

  // useEffect(() => {
  //   if (user !== null) {
  //     console.log('Logged in', user);
  //   }
  // }, [user]);

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

      <Link className="register-link" to={'/register'}>
        Kein Account? Keine Sorge, registrieren Sie sich kostenlos.
      </Link>

      <p
        className="login-message"
        style={{ color: loginMessage.includes('oder') ? 'red' : 'green' }}
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
