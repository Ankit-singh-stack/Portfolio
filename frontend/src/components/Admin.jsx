import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Admin = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [token, setToken] = useState(localStorage.getItem('portfolio-admin-token') || '');
  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/admin/login`, loginData);
      localStorage.setItem('portfolio-admin-token', response.data.token);
      setToken(response.data.token);
      toast.success('Logged in successfully');
    } catch (error) {
      toast.error('Invalid login credentials');
    }
  };

  const loadMessages = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/admin/messages`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessages(response.data);
    } catch (error) {
      toast.error('Unable to load messages. Make sure you are logged in.');
    }
  };

  return (
    <section className="min-h-screen bg-slate-950 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[32px] border border-slate-700/80 bg-slate-950/95 p-10 shadow-xl shadow-slate-950/40">
        <h2 className="text-3xl font-semibold text-white">Admin Dashboard</h2>
        <p className="mt-3 text-slate-400">Login to review contact messages and manage portfolio content via backend APIs.</p>
        {!token ? (
          <form onSubmit={handleLogin} className="mt-10 space-y-4">
            <input
              name="email"
              type="email"
              placeholder="Admin Email"
              value={loginData.email}
              onChange={handleChange}
              className="w-full rounded-3xl border border-slate-700/80 bg-slate-900/80 px-5 py-4 text-slate-100 outline-none"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
              className="w-full rounded-3xl border border-slate-700/80 bg-slate-900/80 px-5 py-4 text-slate-100 outline-none"
            />
            <button className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
              Sign In
            </button>
          </form>
        ) : (
          <div className="mt-10 space-y-4">
            <button
              onClick={loadMessages}
              className="rounded-full bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
            >
              Load Contact Messages
            </button>
            <div className="space-y-4 pt-4">
              {messages.length === 0 ? (
                <p className="text-slate-400">No messages loaded yet. Click the button above.</p>
              ) : (
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message._id} className="rounded-3xl border border-slate-700/80 bg-slate-900/80 p-6">
                      <div className="flex items-center justify-between gap-3 text-slate-200">
                        <h3 className="font-semibold">{message.name}</h3>
                        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-sky-300">{new Date(message.createdAt).toLocaleDateString()}</span>
                      </div>
                      <p className="mt-2 text-slate-300">Subject: {message.subject}</p>
                      <p className="mt-3 text-slate-400">{message.message}</p>
                      <p className="mt-4 text-slate-500">Email: {message.email}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Admin;
