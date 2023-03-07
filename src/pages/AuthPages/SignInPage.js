import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export default function SignInPage(){

    const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [signInData, setSignInData] = useState({
		email: '',
		password: '',
	});

    function SignInRequest(e) {
		e.preventDefault();
		setIsLoading(true);
		const promise = axios.post(process.env.REACT_APP_SIGNIN_URL, signInData);
		promise.then((res) => {
			setIsLoading(false);

			navigate("/timeline");
		});
		promise.catch((err) => {
			setIsLoading(false);
			const errorMsg = err.response.statusText;
			alert(`Erro: ${errorMsg}`);
		});
	}

    function OnChange(e) {
		setSignInData({ ...signInData, [e.target.name]: e.target.value });
	}

    return(
        <>SignInPage</>
    );
}