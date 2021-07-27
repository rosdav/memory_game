import React from 'react';

import classes from './CardItem.module.css';


const CardItem = (props) => {
    //const  [isFlipped, setIsFlipped] = useState(false);



    return (
        <div className={classes.scene} onClick={props.flipCardHandler}>


            <div className={`${classes.card} ${props.isFlipped && classes.['is_flipped']}`}>
                <div id={props.id} className={`${classes.['card__face']} ${classes.['card__face__front']}`}>
                <img id={props.id} className={classes.img} src={`../img/${props.cardbkg}.png`} alt="?" />
                </div>
                <div id={props.id} className={`${classes.['card__face']} ${classes.['card__face__back']}`}>
                    <img id={props.id} className={classes.img} src={`../img/${props.label}.png`} alt={props.label} />
                </div>
            </div>
        </div>);
};


export default CardItem;