import React from 'react';
import ReactDOM from 'react-dom';

// Components
import GameList from './gamesList';

//First component!
const App = function(){
  return (<div>

    <GameList />
    
    </div>)
}

//Element to use as the root of our project
//Grab an element to use as the root of our project
ReactDOM.render(<App/>, document.querySelector('.container'));