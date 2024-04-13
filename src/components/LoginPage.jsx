import React, { useState, useEffect } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);

  const validateEmail = (str) => {
    const condition = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setValidEmail(condition.test(str));
  };

  useEffect(() => {
    validateConfirmPassword(confirmPassword);
  }, [password, confirmPassword]);

  const validatePassword = (str) => {
    setValidPassword(str.length >= 8);
  };

  const validateConfirmPassword = (str) => {
    setValidConfirmPassword(str === password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validEmail && validPassword && validConfirmPassword) {
      alert("Form submitted successfully");
    } else {
      alert("Can't submit the form");
    }
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <form className="w-full max-w-md">
          <label className="text-lg" htmlFor="email">
            Email:
          </label>
          <br />
          <input
            className={`mb-3 mt-1 w-full rounded-2xl border-2 px-4 py-2 focus:outline-none ${email ? (!validEmail ? "border-red-500" : "border-green-500") : "border-blue-500"}`}
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
          />
          <br />
          {email && !validEmail && (
            <p className="-mt-2 mb-2 text-sm text-red-600">
              Invalid email format
            </p>
          )}

          <label className="text-lg" htmlFor="password">
            Password:
          </label>
          <br />
          <input
            className={`mb-3 mt-1 w-full rounded-2xl border-2 px-4 py-2 focus:outline-none ${password ? (!validPassword ? "border-red-500" : "border-green-500") : "border-blue-500"}`}
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            autoComplete="true"
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
          />
          <br />
          {password && !validPassword && (
            <p className="-mt-2 mb-2 text-sm text-red-600">
              Password must be at least 8 characters
            </p>
          )}

          <label className="text-lg" htmlFor="confirmPassword">
            Confirm Password:
          </label>
          <br />
          <input
            className={`mb-3 mt-1 w-full rounded-2xl border-2 px-4 py-2 focus:outline-none ${confirmPassword ? (!validConfirmPassword ? "border-red-500" : "border-green-500") : "border-blue-500"}`}
            type="password"
            id="confirmPassword"
            placeholder="Enter your password again"
            value={confirmPassword}
            autoComplete="true"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              validateConfirmPassword(e.target.value);
            }}
          />
          <br />
          {confirmPassword && !validConfirmPassword && (
            <p className="-mt-2 mb-2 text-sm text-red-600">
              Passwords do not match
            </p>
          )}

          <div className="mt-4 flex justify-center">
            <button
              className="rounded-2xl bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              type="button"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
