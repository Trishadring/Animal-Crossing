
import './App.css';
import { Route, Link, Switch} from "react-router-dom";
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

  setHemisphereSouth() {
    this.setState({ hemisphere : 's'});
  };

  setHemisphereNorth() {
  this.setState({ hemisphere : 'n'});
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.hemisphere !== this.state.hemisphere) {
      console.log('hemisphere state has changed.');
    }
  }
    
    render() {
      const today = new Date();
      const currentHour = `h_${today.getHours()}`;
      const currentHemisphere = `${this.state.hemisphere}_${today.getMonth()}`;

      let filterFish = FishData.fishList.filter(function (i) {
        return i[currentHemisphere] === true &&
        i[currentHour] === true;
      });
      let filterBugs = BugData.bugList.filter(function (i) {
        return i[currentHemisphere] === true &&
        i[currentHour] === true;
      });
      return (
        <div className="my_container">  
          <div className="top">
            <h1>Animal Crossing New Horizon </h1>
            <nav>
              <Link className="btn btn-outline-primary" to="/">Bug List</Link>
              &nbsp;
              <Link className="btn btn-outline-primary" to="/FishList">Fish List</Link>
              <button type="button" onClick={this.setHemisphereNorth} className="btn btn-outline-secondary">North Hemisphere</button>
              &nbsp;
              <button type="button" onClick={this.setHemisphereSouth} className="btn btn-outline-secondary">South Hemisphere</button>
							
            </nav>
						<Switch>
            <Route exact path="/"  render={() => <Bugs bugs={filterBugs} />}/>
            <Route  path="/FishList" render={() => <Fish fish={filterFish} />}/>  
						</Switch>    
          </div>    
        </div>
      )
    }
}

export default App;
