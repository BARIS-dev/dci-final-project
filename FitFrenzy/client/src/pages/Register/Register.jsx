import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [membership, setMembership] = useState('free');

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post(
        'http://localhost:8000/user/signup',
        {
          firstName,
          lastName,
          userName,
          email,
          password,
          isAdmin,
          membership,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Register</h2>
      <form action="POST" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={e => setUserName(e.target.value)}
          required
        />
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
        <label>
          <input
            type="checkbox"
            checked={isAdmin}
            onChange={e => setIsAdmin(e.target.checked)}
          />
          isAdmin
        </label>
        <input
          type="text"
          placeholder="Membership"
          value={membership}
          onChange={e => setMembership(e.target.value)}
          required
        />
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default Register;
