import "./Theme/App.scss";
import PostJobContainer from "./User/Containers/PostJob/PostJobContainer";
import NavigationBarContainer from "./General/Containers/NavigationBar/NavigationBarContainer";

function App() {
	return (
		<div className="App">
			<NavigationBarContainer></NavigationBarContainer>
			<PostJobContainer></PostJobContainer>
		</div>
	);
}

export default App;
