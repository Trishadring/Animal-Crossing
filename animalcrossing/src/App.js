
import './App.css';
import { Route, Link, useContext} from "react-router-dom";
import {Component} from 'react';
import BugData from "./data/bugData";
import FishData from "./data/fishData";
import Bugs from "./components/bugs";
import Fish from './components/fish';



class App extends Component {

	constructor(props) {
		super(props);
		this.setHemisphereSouth = this.setHemisphereSouth.bind(this);
		this.setHemisphereNorth= this.setHemisphereNorth.bind(this);
	}


	initialState = () => ({
    hemisphere: 's',
		type:'fish',
  });

	state = this.initialState();

	// switchtype = () => {
  //   this.setState(prevState => ({
	// 		type: prevState.hemisphere === 'fish' ? 'bug' : 'fish'
	// 	}));
  // };

	setHemisphereSouth() {
    this.setState({ hemisphere : 's'}, () => 
    console.log(this.state.hemisphere));
		this.forceUpdate();
 };

 setHemisphereNorth() {
	this.setState({ hemisphere : 'n'}, () => 
	console.log(this.state.hemisphere));
	this.forceUpdate();
};

	// switchHemisphere = () => {
  //   this.setState(prevState => ({
	// 		hemisphere: prevState.hemisphere === 's' ? 's' : 'n'
	// 	}));
  // };

	componentDidUpdate(prevProps, prevState) {
		if (prevState.hemisphere !== this.state.hemisphere) {
			console.log('hemisphere state has changed.')
		}
	}
	


render() {
	const fish = FishData.fishList;
	const bug = BugData.bugList;
	const today = new Date();
	let currentHour = today.getHours();
	const currentMonth = today.getMonth();
	const currentHemisphere = `${this.state.hemisphere}_${currentMonth}`;
	console.log(currentHemisphere);
	const Hour = `h_${currentHour}`;
	let filter = fish.filter(function (i) {
		return i[currentHemisphere] === true &&
		i[Hour] === true;
		// && hour
	});

console.log(filter);
		return (
			<div className="my_container">	
				<div className="top">
					<h1>Animal Crossing New Horizon </h1>
					<nav>
						<Link className="btn btn-outline-primary" to="/BugList">Bug List</Link>
						&nbsp;
						<Link className="btn btn-outline-primary" to="/FishList">Fish List</Link>
						<button type="button" onClick={this.setHemisphereNorth} className="btn btn-outline-secondary">North Hemisphere</button>
						&nbsp;
						<button type="button" onClick={this.setHemisphereSouth} className="btn btn-outline-secondary">South Hemisphere</button>
					</nav>
					<Route  path="/BugList" render={() => <Bugs bugs={bug} />}/>
					<Route  path="/FishList" render={() => <Fish fish={filter} />}/>			
				</div>		
			</div>
		)
	}
}

export default App;
