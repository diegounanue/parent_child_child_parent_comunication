// FUNCTIONAL COMPONENT, just a function
// STATELESS
// JUST FOR VISUALIZATION

// VS CLASS-BASED COMPONENTS
import React from 'react';
// Components
import Game from './game';

//Data
import * as data from './data';

class GamesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalVotes: 0
        };
    }

    upVote() {
        console.log(data.data[0]);
        this.setState({ totalVotes: this.state.totalVotes + 1 })
    }

    render() {

        return (

            <div>
                <label>This is child to parent communication</label>
                <h1>Total votes: {this.state.totalVotes}</h1>
                
                {data.data.map((item) =>
                    <Game gameName={item.name} setParentState={this.upVote.bind(this)} />
                )}
            </div>);
    }



}

export default GamesList;