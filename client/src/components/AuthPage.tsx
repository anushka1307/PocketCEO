import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AuthPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔐 Fake login check (replace later with real auth)
    if (email && password) {
      // Simulate setting "logged in"
      localStorage.setItem("loggedIn", "true");

      // 🧠 Check if persona already selected
      const selectedPersona = localStorage.getItem("selectedPersona");

      if (selectedPersona === "ava") {
        navigate("/ava-dashboard");
      } else if (selectedPersona === "blaze") {
        navigate("/blaze-dashboard");
      } else if (selectedPersona === "otis") {
        navigate("/otis-dashboard");
      } else {
        navigate("/personas"); // First time? Pick a persona!
      }
    } else {
      alert("That password’s weaker than your last pitch deck.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-white px-6">
      <div className="w-full max-w-md bg-white p-10 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">
          Welcome to Pocket CEO 🚀
        </h2>

        {/* Login Form */}
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block mb-2 text-sm font-semibold">Email</label>
            <input
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">Password</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <span className="text-purple-600 font-medium hover:underline cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
