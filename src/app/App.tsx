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
			<div className="columns">
				<MainText />
			</div>
			<div className="columns">
				<TrialButton />
				<SignupForm />
			</div>
		</div>
	);
}

export default App;
