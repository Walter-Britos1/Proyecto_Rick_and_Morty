import { useState } from 'react';
import validation from './validation';
import FondoForm from  '../imagenes/fondo-form.gif'
import '../hojasDeEstilos/Form.css'

export default function Form({ login }) {
  const [userData, setUserData] = useState ({email:'' , password:''});

  const [errors, setErrors] = useState ({});

  const handleChange = (event) => {
    setUserData({...userData, [event.target.name]: event.target.value});
    setErrors(validation({...userData, [event.target.name]: event.target.value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData)
  }

  return (
    <div className='container-form'>
      <form onSubmit={handleSubmit}>
      <img className='img-login' src={FondoForm} alt="" />
        <label htmlFor=''>Email</label>
        <input 
          type='text'
          placeholder='Email...'
          name='email'
          onChange={handleChange}
          value={userData.email}
        />

        {errors.e1 ? (
          <p>{errors.e1}</p>
        ) : errors.e2 ? (
          <p>{errors.e2}</p>
        ) : (
          <p>{errors.e3}</p>
        )}

        <label htmlFor=''>Password</label>
        <input 
          type='password'
          placeholder='Password...'
          name='password'
          onChange={handleChange}
          value={userData.password}
        />
        {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>}
        <button>LOGIN</button>
      </form>
    </div>

  );
};