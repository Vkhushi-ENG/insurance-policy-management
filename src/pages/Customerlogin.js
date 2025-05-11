import React, { useState } from 'react';

function CustomerLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Customer Login:", { email, password });
    // Later: call API and redirect to customer dashboard
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Customer Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br /><br />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default CustomerLogin;
