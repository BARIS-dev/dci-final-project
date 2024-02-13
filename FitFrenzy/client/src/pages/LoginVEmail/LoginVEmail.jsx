import { useEffect, useState } from 'react';
import users from '../../api/users.js';

function LoginVEmail() {
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await fetch('/data/users.json');
  //       const userData = await response.json();
  //       setUserList(userData);
  //       console.log(userData);
  //     } catch (error) {
  //       console.error('Kullanıcı verileri alınamadı:', error);
  //     }
  //   };
  //   fetchUserData();
  // }, []);

  useEffect(() => {
    // get data from data folder
    const fetchData = async () => {
      try {
        const response = await users.get('/users');
        console.log(response.data);
        setUserList(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, []);

  const [userList, setUserList] = useState([]);
  const [curruser, setCurruser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // get data from mongoDB
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:8000/user/getAllUsers')
  //     .then(response => {
  //       setUserList(response.data);
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data', error);
  //     });
  // }, []);

  const handleSubmit = e => {
    e.preventDefault();
    // login from json file
    const user = userList.find(user => user.email === email);

    if (user && user.password === password) {
      setCurruser(user);

      setEmail('');
      setPassword('');
    } else {
      console.log('Invalid email or password');
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

      <br />
      <p>OR</p>
      <br />
      <hr />
      <br />
    </div>
  );
}

export default LoginVEmail;
