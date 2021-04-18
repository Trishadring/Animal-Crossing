
import './App.css';
import { Route, Link, useContext} from "react-router-dom";
import BugData from "./data/bugData";
import FishData from "./data/fishData";
import Bugs from "./components/bugs";
import Fish from './components/fish';


const App = () =>{

	//const fish = FishData.fishList;
	let today = new Date();
	let currentHour = today.getHours();
	let currentMonth = today.getMonth();
	const fishMonthNorth = `n_${currentMonth}`;
	const fishMonthSouth = `s_${currentMonth}`;
	var Hour = `h_${currentHour}`;
	let filterFish = FishData.fishList.filter(function (i) {
		return i[fishMonthNorth] == true;
	});

console.log(filterFish);

  return (
    <div className="my_container">	
			<div className="top">
				<h1>Animal Crossing New Horizon </h1>
				<nav>
					<Link className="btn btn-outline-primary" to="/BugList">Bug List</Link>
					&nbsp;
					<Link className="btn btn-outline-primary" to="/FishList">Fish List</Link>
					&nbsp;
					<Link className="btn btn-outline-primary" to="/BothList">Bugs and Fish</Link>
				</nav>
				<Route  path="/BugList" render={() => <Bugs bugs={BugData.bugList} />}/>
				<Route  path="/FishList" render={() => <Fish fish={filterFish} />}/>	
				<Route  path="/BothList" render={() => {
				<>
				<h1>Fish</h1>
				<Fish fish={filterFish} />
				<h1>Bugs</h1>
				{/* <Bugs bugs={BugData.bugList} /> */}
				</>
			}
				}/>				
			</div>		
		</div>
  );
}

export default App;
