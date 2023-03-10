import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { UserContext } from "../../contexts/UserContext";
import * as S from './style';

export default function SignInPage(){

	const api = axios.create({
		baseURL: process.env.REACT_APP_BASE_URL // or process.env.BASE_URL if not using CRA
	  });

    const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [signInData, setSignInData] = useState({
		email: '',
		password: '',
	});

	// useEffect(() => {
	// 	if(localStorage.getItem('token')){
	// 		navigate("/timeline");
	// 	};
	// }, []);

    function SignInRequest(e) {
		if(signInData.email === '' || 
		   signInData.password === ''
		){
			e.preventDefault();
			alert("Please, fill in all sign-in information");
		}else{
			e.preventDefault();
			setIsLoading(true);
			const promise = api.post('/', signInData);
			promise.then((res) => {
				setIsLoading(false);
				localStorage.setItem('token', res.data.token);
				localStorage.setItem('photo', res.data.photo);
				navigate("/timeline");
			});
			promise.catch((err) => {
				setIsLoading(false);
				if(err.response.status === 401){
					alert(`Email and/or password are/is incorrect. Error: ${err.response.status}: UNAUTHORIZED`)
				}else{
					const errorMsg = err.response.statusText;
					alert(`Erro: ${errorMsg}`);
				}
			});
		}
	}

    function OnChange(e) {
		setSignInData({ ...signInData, [e.target.name]: e.target.value });
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

		<S.Form onSubmit={SignInRequest}>
		  <input
			data-test="email"
			type='email' placeholder='email'
			value={signInData.email} name='email'
			onChange={OnChange} 
			disabled={isLoading}
		  />
		  <input
			data-test="password"
			type='password' placeholder='password'
			value={signInData.password} name='password'
			onChange={OnChange} 
			disabled={isLoading}
		  />
		  <button data-test="login-btn" type='submit' disabled={isLoading}>
				Log In
		  </button>

		  <Link data-test="sign-up-link" to={isLoading ? '' : '/sign-up'}>
			<S.Message>
				First time? Create an account!
			</S.Message>
		  </Link>
		</S.Form>

	  </S.AuthenticationPageStyle>
	  );
}