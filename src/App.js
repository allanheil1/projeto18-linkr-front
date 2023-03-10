import { Routes, Route } from "react-router-dom";

import GlobalStyle from "./globalStyle/globalStyle";
import SignInPage from "./pages/AuthPages/SignInPage";
import SignUpPage from "./pages/AuthPages/SignUpPage";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage/UserPage";
import TrendingPage from "./pages/TrendingPage/TrendingPage";

export default function App() {

	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<SignInPage />} />
				<Route path="/sign-up" element={<SignUpPage />} />
				<Route path="/timeline" element={<Home />} />
				<Route path="/hashtag/:hashtag" element={<TrendingPage/>} />
				<Route path="/user/:id" element={<UserPage />} />
			</Routes>
		</>
	);
}