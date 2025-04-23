import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email || !password) {
      setError("Email and password are required.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-100">
      {/* Background animation image (put the file in public folder) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.pinimg.com/originals/c9/dc/aa/c9dcaaa0674f609e63c7556d736a2aa8.gif" // ⚠️ Place your GIF in `public/gita-animation.gif`
          alt="Gita Background"
          className="w-full h-full object-cover opacity-30 animate-pulse"
        />
      </div>

      {/* Login Form */}
      <form className="relative z-10 bg-white p-8 rounded-lg shadow-md w-80" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-2 text-center">Login</h2>
        <p className="text-sm italic text-center text-yellow-700 mb-4">
          “You have the right to work, but never to the fruit of work.” – Bhagavad Gita
        </p>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-2">
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="text-right mb-4">
          <Link to="/forgot-password" className="text-blue-500 text-sm hover:underline">
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
