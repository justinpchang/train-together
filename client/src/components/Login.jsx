import React, { useState } from "react";
import {RegisterButton, LoginButton } from './auth';

export const Login = () => {
    const [auth, setAuth] = React.useState('');

    React.useEffect(() => {
        localStorage.setItem('', value);
    }, [value]);

    const onChange = event => setValue(event.target.value);
    
    return (
        <div class='onboarding'>
        <form>
          <h1>Welcome!</h1>
          <p class="login-p">Login to your account</p>
          <p class="login-p">Register an account</p>
        <div class="login-register-input-containers">
          <label value={value} onChange={onChange} class="login-register-labels" htmlFor="email">Email</label>
          <input
            class="login-register-inputs"
            size="lg"
            type="email"
            name="email"
        //   value={this.props.name}
        //   onChange={this.props.handleChange}
        />
        </div>
        <div class="login-register-input-containers">
            <label class="login-register-labels" htmlFor="password">Password</label>
            <input
                class="login-register-inputs"
                size="lg"
                type="password"
                name="password"
            //   value={this.props.name}
            //   onChange={this.props.handleChange}
            />
        </div>
        <br/>
            {/* {this.previousButton}
            {this.nextButton}
            {this.submitButton} */}
            <LoginButton />
            <RegisterButton />
        </form>
      </div>
    )
};

export default Login;
