
import './App.css';
import { Route, Link} from "react-router-dom";
import BugData from "./data/bugData";
import FishData from "./data/fishData";
import Bugs from "./components/bugs";
import Fish from './components/fish';

const App = () =>{
  return (
    <div className="my_container">	
			<div className="top">
				<h1>Animal Crossing New Horizon </h1>
				<nav>
					<Link className="btn btn-outline-primary" to="/BugList">Bug List</Link>
					&nbsp;
					<Link className="btn btn-outline-primary" to="/FishList">Fish List</Link>
				</nav>
				<Route  path="/BugList" render={() => <Bugs bugs={BugData.bugList} />}/>
				<Route  path="/FishList" render={() => <Fish bugs={FishData.fishList} />}/>				
			</div>		
		</div>
  );
}

export default App;
