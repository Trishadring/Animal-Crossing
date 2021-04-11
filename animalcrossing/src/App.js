
import './App.css';
import BugData from "./data/bugData";
import Bugs from "./components/bugs";

function App() {
	console.log(BugData.bugList);
  return (
    
		
		<div className="top">
			<h1>Animal Crossing </h1>

		  <Bugs bugs={BugData.bugList}/>
		</div>
		
  );
}

export default App;
