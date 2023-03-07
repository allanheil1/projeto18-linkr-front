import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import * as S from './style';

export default function SignUpPage(){

    const navigate = useNavigate()
	  const [isLoading, setIsLoading] = useState(false);
    const [signUpData, setSignUpData] = useState({
        email: '',
        username: '',
        password: '',
        photoURL: ''
    });

    function SignUpRequest(e){
        e.preventDefault();
        setIsLoading(true);
        console.log(signUpData);
        // const promise = axios.post(process.env.REACT_APP_SIGNUP_URL , signUpData);
        // promise.then(() => {
        //   setIsLoading(false);
        //   navigate('/');
        // });
        // promise.catch((err) => {
        //   setIsLoading(false);
        //   const errorMsg = err.response.statusText;
        //   alert(`Erro: ${errorMsg}`);
        // })
    }

    function OnChange(e) {
		  setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
	  }

    return(
      <S.AuthenticationPageStyle>

      <S.Title>
        <h1>
          linkr
        </h1>
        <h2>
          save, share and discover the best links on the web
        </h2>
      </S.Title>

      <S.Form onSubmit={SignUpRequest}>
        <input 
          type='email' placeholder='email'
          value={signUpData.email} name='email'
          onChange={OnChange} required
          disabled={isLoading}
        />
        <input 
          type='password' placeholder='password'
          value={signUpData.password} name='password'
          onChange={OnChange} required
          disabled={isLoading}
        />
        <input 
          type='text' placeholder='username'
          value={signUpData.username} name='username'
          onChange={OnChange} required
          disabled={isLoading}
        />
        <input 
          type='text' placeholder='picture url'
          value={signUpData.photoURL} name='photoURL'
          onChange={OnChange} required
          disabled={isLoading}
        />
        <button type='submit' disabled={isLoading}>
              Sign-Up
        </button>

        <Link to={isLoading ? '' : '/'}>
          <S.Message>
            Switch back to log in
          </S.Message>
        </Link>
      </S.Form>

    </S.AuthenticationPageStyle>
    );
}