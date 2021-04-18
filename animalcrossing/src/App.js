
import './App.css';
import { Route, Link, useContext} from "react-router-dom";
import {Component} from 'react';
import BugData from "./data/bugData";
import FishData from "./data/fishData";
import Bugs from "./components/bugs";
import Fish from './components/fish';



class App extends Component {


	initialState = () => ({
    hemisphere: 'n',

  });

	state = this.initialState();

	switchHemisphere = () => {
    this.setState(prevState => ({
			hemisphere: prevState.hemisphere === 'n' ? 's' : 'n'
		}));
  };

	


render() {
	const today = new Date();
	let currentHour = today.getHours();
	const currentMonth = today.getMonth();
	const currentHemisphere = `${this.state.hemisphere}_${currentMonth}`;
	const Hour = `h_${currentHour}`;
	let filter = FishData.fishList.filter(function (i) {
		return i[currentHemisphere] === true;
	});
	let filterTime = filter.filter(function (i) {
		return i[Hour] === true;
	});
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
					<Route  path="/FishList" render={() => <Fish fish={filterTime} />}/>	
					<Route  path="/BothList" render={() => {
					<>
					<h1>Fish</h1>
					<Fish fish={filterTime} />
					<h1>Bugs</h1>
					{/* <Bugs bugs={BugData.bugList} /> */}
					</>
				}
					}/>				
				</div>		
			</div>
		)
	}
}

export default App;
