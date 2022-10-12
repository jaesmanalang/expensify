import { useState, useEffect } from 'react';
import axios from './axios';

const App = () => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async user => {
    try {
      setLoading(true);
      const { data } = await axios.post('/users/login', user);
      console.log(data);
      window.localStorage.setItem('token', data.token);
      setToken(data.token);
      setLoading(false);
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data.error);
      setLoading(false);
    }
  };

  const logout = () => {
    setLoading(true);
    localStorage.removeItem('token');
    setToken(null);
    setLoading(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    login({ email, password });
  };

  if (loading) return <div>loading...</div>;

  return (
    <div>
      {error && (
        <div style={{ color: 'red', marginBottom: '20px' }}>{error}</div>
      )}
      <h1>App</h1>
      <hr />
      {token ? (
        <>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="email"
                name="email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                name="password"
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </>
      )}
    </div>
  );
};

export default App;
