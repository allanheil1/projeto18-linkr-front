import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import * as S from './style';

export default function SignUpPage(){

    const api = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL // or process.env.BASE_URL if not using CRA
    });

    const navigate = useNavigate()
	  const [isLoading, setIsLoading] = useState(false);
    const [signUpData, setSignUpData] = useState({
        email: '',
        password: '',
        username: '',
        pictureUrl: ''
    });

    function SignUpRequest(e){
      if(signUpData.email === '' || 
        signUpData.password === '' ||
        signUpData.username === '' ||
        signUpData.pictureUrl === ''
      ){
        e.preventDefault();
        alert("Please, fill in all sign-up information");
      }else{
        e.preventDefault();
        setIsLoading(true);
        const promise = api.post('/sign-up' , signUpData);
        promise.then(() => {
            setIsLoading(false);
            navigate('/');
        });
          promise.catch((err) => {
            setIsLoading(false);
            if(err.response.status === 409){
              alert('This email has already been taken')
            }
            const errorMsg = err.response.statusText;
            alert(`Erro: ${errorMsg}`);
        })
      }
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
          onChange={OnChange}
          disabled={isLoading}
        />
        <input 
          type='password' placeholder='password'
          value={signUpData.password} name='password'
          onChange={OnChange}
          disabled={isLoading}
        />
        <input 
          type='text' placeholder='username'
          value={signUpData.username} name='username'
          onChange={OnChange}
          disabled={isLoading}
        />
        <input 
          type='text' placeholder='picture url'
          value={signUpData.pictureUrl} name='pictureUrl'
          onChange={OnChange}
          disabled={isLoading}
        />
        <button type='submit' disabled={isLoading}>
              Sign Up
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