import React, { Fragment, useState, useEffect } from 'react';

import NavBar from './container/NavBar';
import Gameboard from './container/GameBoard';


const App = () => {

  const MapMenuToColor = {
    BCKGND_0: 'blue',
    BCKGND_1: 'green',
    BCKGND_2: 'red',
    BCKGND_3: 'yellow',
    BCKGND_4: 'purple',
  }

  const MapMenuToGrid = {
    GRID_0: 'col_4',
    GRID_1: 'col_5',
    GRID_2: 'col_6',
    GRID_3: 'col_7'
  }


  const [MnuVisiblility, SetMnuVisiblity] = useState({
    'GRID': false,
    'CARD': false,
    'BCKGND': false
  });

  const [cardBoard, SetCardBoard] = useState();
  const [gridSize, SetGridSize] = useState(MapMenuToGrid['GRID_0'])
  const [BoardBackGround, SetBoardBackGround] = useState(MapMenuToColor['BCKGND_0']);
  const [CardBackGround, SetCardBackGround] = useState('CARD_1');

  useEffect(
    () => {SetCardBoard(initializeGame());}
    ,[]
  );

  const MnuNewGameHandler = () => {
    SetCardBoard(initializeGame(gridSize.substr(4)));    
  }

  const MnuVisibilityHandler = (event) => {
    console.log('MnuVisibilityHandler');
    console.log(event);
    let newMnuVal = {};
    for (const key in MnuVisiblility) {
      if (key === event.target.id.substring(4)) {
        newMnuVal[key] = !MnuVisiblility[key];
      } else {
        newMnuVal[key] = false;
      }
      SetMnuVisiblity(newMnuVal);
    }
  }

  const initializeGame = (cols = 4) => {
    //numcards= cols * 4 / 2 --> cols * 2

    console.log('initializeGame');
    let availableCards = ['BEAR','BEAVER','BULL','BUTTERFLY','CAT','CHAMELEON','COW','DEER','DOG','DOLPHIN','DUCK','EAGLE','FISH','FROG',
                  'GOOSE','IGUANA','KOALA','LIZARD','PENGUIN','PIG','SQUIRREL','WHALE'];
    let newgameCards=[];
    let i = 0;
    let j = 0;
    
    for ( i=0; i < cols * 2; i++){
      j = Math.floor(Math.random() * (availableCards.length - 1));
        
      newgameCards.push(availableCards[j]);
      newgameCards.push(availableCards[j]);
      availableCards.splice(j,1);
    }
    
    for ( i=0; i < newgameCards.length; i++){
      j = Math.floor(Math.random() * (newgameCards.length - 1));
      let temp = newgameCards[i];
      newgameCards[i] = newgameCards[j];
      newgameCards[j] = temp;
    }    

    return newgameCards;
  } 

  const subMnuClickHandler = (event) => {
    if (event.target.id.includes('GRID')){
      const newcards = initializeGame( 4 + parseInt(event.target.id.substring(5)));
      SetCardBoard(newcards);
      SetGridSize(MapMenuToGrid[event.target.id]);
    } else if (event.target.id.includes('CARD')){
      SetCardBackGround(event.target.id);
    } else if (event.target.id.includes('BCKGND')){
      SetBoardBackGround(MapMenuToColor[event.target.id])
    }
    ResetMnuVisibility();
  }

  const ResetMnuVisibility = () => {
    SetMnuVisiblity({
      'GRID': false,
      'CARD': false,
      'BCKGND': false
    });
  }

  return (
    <Fragment>
      <NavBar MnuNewGameHandler={MnuNewGameHandler} MnuVisiblility={MnuVisiblility} MnuVisibilityHandler={MnuVisibilityHandler} subMnuClickHandler={subMnuClickHandler}/>
      {cardBoard && <Gameboard card_bck={CardBackGround} board_bkgnd={BoardBackGround} cardBoard={cardBoard} gridSize={gridSize}/>}
    </Fragment>
  );
}

export default App;
