import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../../api/users.js';
import './Register.css';

function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); // Default to false
  const [membership, setMembership] = useState('free'); // Default to 'free'
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      // Yeni kullanıcı bilgileri
      const newUser = {
        firstName,
        lastName,
        username,
        email,
        password,
        isAdmin: isAdmin.toString(), // Convert isAdmin to string
        membership,
      };

      // API isteği gönderme
      const response = await users.post('/users', newUser);
      console.log('Yeni kullanıcı başarıyla kaydedildi:', response.data);

      navigate('/signin');
    } catch (error) {
      console.error('Kayıt sırasında bir hata oluştu:', error);
    }
  };

  return (
    <div className="register-container">
      <h2>Kayıt Ol</h2>
      <form onSubmit={handleRegister} className="register-form">
        <div className="register-form-left">
          <label>
            İsim:
            <input
              type="text"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Soyisim:
            <input
              type="text"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Kullanıcı Adı:
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
          <label>
            E-posta:
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Şifre:
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Admin mi?
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={e => setIsAdmin(e.target.checked)}
              required
            />
          </label>
          <br />
          <label>
            Üyelik Türü:
            <select
              value={membership}
              onChange={e => setMembership(e.target.value)}
              required
            >
              <option value="free">Ücretsiz</option>
              <option value="premium">Premium</option>
            </select>
          </label>
          <br />
          <button type="submit" className="register-btn">
            Kayıt Ol
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
