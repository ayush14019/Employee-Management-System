import React, { useState } from "react";

const Login = ({handleLogin}) => {

  // console.log(handleLogin)


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    
    handleLogin(email,password)

    // console.log("email is ", email);
    // console.log("password is ", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-black to-gray-900 p-4">
      <div className="bg-black border-2 rounded-2xl shadow-2xl border-gray-800 p-8 md:p-12 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-400">Sign in to your account</p>
        </div>

        <form onSubmit={submitHandler} className="flex flex-col space-y-5">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full outline-none bg-gray-800 border-2 border-gray-700 focus:border-emerald-600 text-white font-medium text-lg py-3 px-6 rounded-xl placeholder:text-gray-500 transition-all"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full outline-none bg-gray-800 border-2 border-gray-700 focus:border-emerald-600 text-white font-medium text-lg py-3 px-6 rounded-xl placeholder:text-gray-500 transition-all"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button className="mt-3 text-white border-none outline-none bg-emerald-600 hover:bg-emerald-700 font-semibold text-lg py-3 px-8 w-full rounded-xl transition-all">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
