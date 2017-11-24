// FUNCTIONAL COMPONENT, just a function
// STATELESS
// JUST FOR VISUALIZATION

// VS CLASS-BASED COMPONENTS

import React from 'react';
import { Button, FormControl, FormGroup, InputGroup, Glyphicon, Addon, Col, Row, Image } from 'react-bootstrap';

class Game extends React.Component {
    propagateToParent(e) {
        e.preventDefault();
        this.props.setParentState();
    }

    render() {
        return (
            <div>
                {this.props.gameName}
                <i className="material-icons" onClick={this.propagateToParent.bind(this)}>star</i>
            </div>
        )
    }
}

export default Game;