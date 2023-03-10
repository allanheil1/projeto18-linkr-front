import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
	const [userPhoto, setUserPhoto] = useState("");
	function checkLogin(){
		if(!localStorage.getItem('token')){
			alert("You need to be logged in to access this page");
			window.location.href = "/"
		}
	}

	return (
		<UserContext.Provider
			value={{
				userPhoto,
				setUserPhoto,
				checkLogin
			}}
		>
			{children}
		</UserContext.Provider>
	);
}

export default UserProvider;
