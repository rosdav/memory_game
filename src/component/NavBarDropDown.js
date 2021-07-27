import React from 'react';

import DropDownItem from './DropDownItem';

import classes from './NavBarDropDown.module.css';

const NavBarDropDown = (props) => {
    
    return (
    <div className={classes.dropdown}>
        <button className={classes.dropbtn} id={`btn_${props.id}`} onClick={props.mnuOnClick}> {props.label} </button>
        <div className={`${classes.['dropdown-content']} ${props.isVisible && classes.show}`} id={props.id}>
            {props.itemlist.map((itm,indx) => { 
                
                return (                     
                    <DropDownItem key={`${props.id}_${indx}`} id={`${props.id}_${indx}`} label={props.label} indx={indx} text={itm.text}
                    onDropDownItemClick={itm.onclickhdl} 
                    />)
                })
            }
        </div>
    </div>        

    );
};

export default NavBarDropDown;

//<a key={`${props.label}_${indx}`} id={`mnu_${props.label}_${indx}`} onClick={event => {console.log(event)}}> {itm.text} </a>