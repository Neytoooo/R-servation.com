import React, { useState } from 'react';
import './Login.css'

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour la soumission du formulaire
    console.log('Formulaire soumis avec :', formData);
  };

  return (
    <div>
      
      <div class="form-container">
        <p class="title">Login</p>
        <form class="form" onSubmit={handleSubmit}>
          <div class="input-group">
            <label for="username">Username</label>
            <input type="text" name="username" id="username" placeholder="" onChange={handleChange} />
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" placeholder="" onChange={handleChange} />
            <div class="forgot">
              <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
            </div>
          </div>
          <button class="sign" type="submit">Sign in</button>
        </form>
        <p class="signup">Don't have an account?
          <a rel="noopener noreferrer" href="#" class="">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
