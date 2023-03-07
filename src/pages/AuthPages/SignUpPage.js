import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export default function SignUpPage(){

    const navigate = useNavigate()
	  const [isLoading, setIsLoading] = useState(false);
    const [signUpData, setSignUpData] = useState({
        email: '',
        name: '',
        password: '',
        photoURL: ''
    });

    function SignUpRequest(e){
        e.preventDefault();
        setIsLoading(true);
        console.log(signUpData);
        const promise = axios.post(process.env.REACT_APP_SIGNUP_URL , signUpData);
        promise.then(() => {
          setIsLoading(false);
          navigate('/');
        });
        promise.catch((err) => {
          setIsLoading(false);
          const errorMsg = err.response.statusText;
          alert(`Erro: ${errorMsg}`);
        })
    }

    function OnChange(e) {
		  setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
	  }

    return(
        <>SignUpPage</>
    );
}