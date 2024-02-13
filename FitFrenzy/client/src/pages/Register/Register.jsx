import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import users from '../../api/users.js';
import './Register.css';

function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [membership, setMembership] = useState('free');
  // const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      // Yeni kullanıcı bilgileri
      const newUser = {
        firstName,
        lastName,
        username,
        email,
        password,
        isAdmin: isAdmin.toString(),
        membership,
      };

      // API isteği gönderme
      const response = await users.post('/users', newUser);
      console.log('Successfully registered', response.data);
      // navigate('/signin');
    } catch (error) {
      console.error('Something went wrong', error);
    }
  };

  return (
    <div className="register-container">
      <h2>Registrieren</h2>
      <form onSubmit={handleRegister} className="register-form">
        <div className="register-form-left">
          <label>
            Vorname:
            <input
              type="text"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Nachname:
            <input
              type="text"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Benutzer Name:
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </label>
          <br />
        </div>
        <div className="register-form-right">
          <label className="label-email">
            E-mail:
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Passwort:
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Ist Admin?
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={e => setIsAdmin(e.target.checked)}
              required
            />
          </label>
          <br />
          <label>
            Mitgliedschaft:
            <select
              value={membership}
              onChange={e => setMembership(e.target.value)}
              required
            >
              <option value="free">Free</option>
              <option value="premium">Premium</option>
            </select>
          </label>
          <br />
          <button type="submit" className="register-btn">
            Registrieren
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
