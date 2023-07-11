import React from "react";

//Styles
import "./App.css";

//Components
import MainText from "../components/MainText/MainText";
import TrialButton from "../components/TrialButton/TrialButton";
import SignupForm from "../components/SignupForm/SignupForm";

function App() {
	return (
		<div className="App">
			<MainText />
			<TrialButton />
			<SignupForm />
		</div>
	);
}

export default App;
