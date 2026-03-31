import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';
import { motion } from 'framer-motion';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await login({ username, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Invalid username or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 italic">Cloudfare <span className="text-blue-600 not-italic">Admin</span></h2>
          <p className="text-gray-500 mt-2">Sign in to manage the platform</p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="Enter username"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="Enter password"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 transform active:scale-95 disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
