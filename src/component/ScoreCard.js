
import classes from './ScoreCard.module.css';

const ScoreBoard = (props) => {
    return (<div className={classes.scoreboard}>
        <div className={classes.header}>Attempts: </div><div className={classes.content}> {props.numOfAttempts} </div>
        <div className={classes.header}>Matches: </div><div className={classes.content}> {props.numOfMatches} of {props.totMatches} </div>
        <div>Elapsed Time: ### </div>
    </div>);
}
export default ScoreBoard;