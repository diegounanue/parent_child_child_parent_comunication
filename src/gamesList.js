// FUNCTIONAL COMPONENT, just a function
// STATELESS
// JUST FOR VISUALIZATION

// VS CLASS-BASED COMPONENTS
import React from 'react';
// Components
import Game from './game';

//Data
import * as data from './data';
import { Grid, Col, Row } from 'react-bootstrap';

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

            <Grid>
                <Row className="show-grid page-title">
                    <Col Col xs={8} xsOffset={2}><label>This is child to parent communication</label></Col>
                </Row>
                <Row className="show-grid page-title">
                    <Col Col xs={8} xsOffset={2}><h1>Total votes: {this.state.totalVotes}</h1></Col>
                </Row>
                {data.data.map((item) =>
                    <Game gameName={item.name} setParentState={this.upVote.bind(this)} />
                )}
            </Grid>);
    }



}

export default GamesList;