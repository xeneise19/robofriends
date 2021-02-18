import React, {Fragment} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';

class App extends React.Component{
    
    constructor () {
        super();
        this.state = {
            robots : robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) =>{
        this.setState({searchfield : event.target.value});
        
    }

    render (){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log(filteredRobots);
        return(
            <Fragment>
                <div className='tc'>
                    <h1>RoboFriend</h1>
                    <SearchBox searchChange = {this.onSearchChange} />
                    <CardList robots={filteredRobots}/>
                </div>
            </Fragment>
        );
    }
    
}

export default App;
