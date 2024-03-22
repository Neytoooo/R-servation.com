  import React, { useState } from 'react';
  import axios from 'axios';

  import './Register.css'

  function Register() {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Remplacez 'http://localhost:3001/register' par votre point de terminaison API
        const response = await axios.post('http://localhost:3001/register', formData);
        console.log('Réponse du serveur :', response.data);
        // Gérez la navigation après l'enregistrement, par exemple avec react-router-dom
      } catch (error) {
        console.error('Erreur lors de l’enregistrement :', error.response);
        // Gérez les erreurs, comme afficher un message à l'utilisateur.
      }
    };
    
    return (
      <div>
      
        <div class="form-container">
          <p class="title">Register</p>
          <form class="form" onSubmit={handleSubmit}>
            <div class="input-group">
              <label for="username">Username</label>
              <input type="text" name="username" id="username" placeholder="" onChange={handleChange} />
            </div>
            <div class="input-group">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" placeholder="" onChange={handleChange} />
            </div>
            <div class="input-group">
              <label for="password">Password</label>
              <input type="password" name="password" id="password" placeholder="" onChange={handleChange} />
              <div class="forgot">
                <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
              </div>
            </div>
            <button class="sign" type="submit">Sign up</button>
          </form>
          <p class="signup">Already have an account?
            <a rel="noopener noreferrer" href="#" class="">Sign in</a>
          </p>
        </div>
      </div>
    );
  }

  export default Register;
