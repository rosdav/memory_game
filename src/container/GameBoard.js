import React, { useState, useEffect } from 'react';

import CardItem from '../component/CardItem';
import ScoreCard from '../component/ScoreCard';

import classes from './GameBoard.module.css';

const GameBoard = (props) => {

    const [boardData, setBoardData] = useState(props.cardBoard.map((itm, indx) => { return { id: indx, img: itm, isFlipped: false, isMatched: false } }));

    const [flipped1stCard, setflipped1stCard] = useState();
    const [flipped2ndCard, setflipped2ndCard] = useState();
    const [numOfMatches, setnumOfMatches] = useState(0);
    const [numOfAttempts, setnumOfAttempts] = useState(0);

    const onFlipCard = (event) => {

        let updatedBoardData = [...boardData];
        updatedBoardData[event.target.id].isFlipped = true;

        if (!flipped1stCard) {
            setflipped1stCard(event.target.id);
        } else {
            if (event.target.id !== flipped1stCard) {
                if (!flipped2ndCard) {
                    setflipped2ndCard(event.target.id);
                }
            }
        }
        setBoardData(updatedBoardData);
    };

    useEffect(

        async () => {
            if (flipped1stCard && flipped2ndCard) {
                let updatedBoardData = [...boardData];

                if (boardData[flipped1stCard].img === boardData[flipped2ndCard].img) {
                    updatedBoardData[flipped1stCard].isMatched = true;
                    updatedBoardData[flipped2ndCard].isMatched = true;
                    
                    setnumOfMatches(prevMatchCount => prevMatchCount + 1);

                    //check if game is over

                } else {
                    updatedBoardData[flipped1stCard].isFlipped = false;
                    updatedBoardData[flipped2ndCard].isFlipped = false;
                }

                console.log('USE EFFECT SLEEP');
                await sleep(900);
                setnumOfAttempts(prevAttemptCount => prevAttemptCount + 1);
                setflipped1stCard();
                setflipped2ndCard();
                setBoardData(updatedBoardData);

            }

        }
        , [boardData, flipped1stCard, flipped2ndCard]
    )

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(
        () => { 
            console.log('USE EFFECT cardBoard');
            setBoardData(props.cardBoard.map((itm, indx) => { return { id: indx, img: itm, isFlipped: false, isMatched: false }})); 
            setnumOfMatches(0);
            setnumOfAttempts(0);        
        }
        , [props.cardBoard]
    )

    return (
        <div className={classes.gameboard}>
            <ScoreCard numOfMatches={numOfMatches} numOfAttempts={numOfAttempts} totMatches={boardData.length/2}/>
            <div className={`${classes.container} ${classes.[props.board_bkgnd]} ${classes.[props.gridSize]}`}>
                {boardData.map((itm, indx) => {
                    return (
                        <CardItem key={indx} cardbkg={props.card_bck} id={itm.id} isFlipped={itm.isFlipped} flipCardHandler={onFlipCard} label={itm.img} />
                    )
                })}
            </div>
        </div>
    );
};

export default GameBoard;