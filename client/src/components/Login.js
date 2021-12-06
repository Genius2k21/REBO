import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Signup from './Signup';


const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);
console.log(error);
  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

const isLoggedIn = Auth.loggedIn()

  return (
    
    <main className="flex-row justify-center mb-4">
      <div className="container">
        <div className="row text-center alignText">
        <img className="calculator" src="/pencil-ruler-solidtestwide.png" alt="REBO Logo"></img>
        </div>
        </div>
      <div className="row">
        <div className="container todobox col-lg-5">
          <h4 className="card-header bg-dark text-light p-2">Login</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <div>
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-control"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-control"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-primary buttonColors"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
                {/* <Link className="nav-link" to="/Signup" exact>
                            Sign up here!
                        </Link> */}
              </div>
              
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
        <Signup/></div>
        <div className="row text-center alignText">
        {isLoggedIn&&<button className="btn btn-primary buttonColors" onClick={Auth.logout}>Logout</button>}
        </div>
      
    </main>
  );
};

export default Login;
