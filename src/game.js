// FUNCTIONAL COMPONENT, just a function
// STATELESS
// JUST FOR VISUALIZATION

// VS CLASS-BASED COMPONENTS

import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

class Game extends React.Component {
    propagateToParent(e) {
        e.preventDefault();
        this.props.setParentState();
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col Col xs={2} xsOffset={4}>{this.props.gameName}</Col>
                    
                    <Col Col xs={2}><i className="material-icons star-icon" onClick={this.propagateToParent.bind(this)}>star</i></Col>
                </Row>
            </Grid>
        )
    }
}

export default Game;