import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import GlobalStyle from "./globalStyle/globalStyle";
import SignInPage from "./pages/AuthPages/SignInPage";
import SignUpPage from "./pages/AuthPages/SignUpPage";

export default function App() {

	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<SignInPage />} />
				<Route path="/sign-up" element={<SignUpPage />} />
			</Routes>
		</>
	);
}
