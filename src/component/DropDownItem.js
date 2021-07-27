import React from 'react';
//import classes from './DropDownItem.module.css';

const DropDownItem = (props) =>

{

    return (<a key={`a_${props.label}_${props.indx}`} id={props.id} onClick={props.onDropDownItemClick}> {props.text} </a>);
}

export default DropDownItem;