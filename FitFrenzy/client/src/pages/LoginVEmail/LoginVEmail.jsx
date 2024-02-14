import { useEffect, useState } from 'react';
import users from '../../api/users.js';

function LoginVEmail() {
  const [userList, setUserList] = useState([]);
  const [curruser, setCurruser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');

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
      setCurruser(userFromJSON);
      // setIsLoggedIn(true);
      setEmail('');
      setPassword('');
      setLoginMessage('Erfolgreicher Login!'); // Başarılı giriş durumu
    } else {
      setLoginMessage('Ungültige E-Mail oder Passwort'); // Başarısız giriş durumu
    }
  };

  useEffect(() => {
    if (curruser !== null) {
      console.log('Logged in', curruser);
    }
  }, [curruser]);

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
