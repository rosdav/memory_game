//import React, { useState } from 'react';

import NavBarDropDown from '../component/NavBarDropDown';

import classes from './NavBar.module.css';

const NavBar = (props) => {
    // const [MnuVisiblility, SetMnuVisiblity] = useState({
    //     'GRID': false,
    //     'CARD': false,
    //     'BCKGND': false
    // });

    // const MnuVisibilityHandler = (event) => {
    //     let newMnuVal = {};
    //     for (const key in MnuVisiblility)
    //     {
    //         if (key === event.target.id.substring(4)) {
    //             newMnuVal[key]=!MnuVisiblility[key];
    //         } else {
    //             newMnuVal[key]=false;
    //         }
    //         SetMnuVisiblity(newMnuVal);
    //     }
    // }

    // const subMnuClickHandler = (event) => {
    //     console.log('subMnuClickHandler');
    //     console.log(event);
    //     ResetMnuVisibility();        
    // } 

    // const ResetMnuVisibility = () => {
    //     SetMnuVisiblity({
    //         'GRID': false,
    //         'CARD': false,
    //         'BCKGND': false
    //     });   
    // }

return (
        <div className={classes.navbar}>
            <a onClick={props.MnuNewGameHandler} >Nuovo</a>

            <NavBarDropDown label="Griglia" id="GRID" isVisible={props.MnuVisiblility['GRID']} mnuOnClick={props.MnuVisibilityHandler} itemlist=
            {
                
                    [{onclickhdl: props.subMnuClickHandler, text: '4 X 4' },
                    {onclickhdl: props.subMnuClickHandler, text: '5 X 4' }, 
                    {onclickhdl: props.subMnuClickHandler, text: '6 X 4' },
                    {onclickhdl: props.subMnuClickHandler, text: '7 X 4' }]
                
            } 
            />

            <NavBarDropDown label="Sfondo" id="BCKGND" isVisible={props.MnuVisiblility['BCKGND']} mnuOnClick={props.MnuVisibilityHandler} itemlist=
            {
                
                    [ {onclickhdl: props.subMnuClickHandler, text: 'Blu' },
                    { onclickhdl: props.subMnuClickHandler, text: 'Verde' }, 
                    { onclickhdl: props.subMnuClickHandler, text: 'Rosso' },
                    { onclickhdl: props.subMnuClickHandler, text: 'Giallo' },
                    { onclickhdl: props.subMnuClickHandler, text: 'Viola' },
                ]
                
            } 
            />

            <NavBarDropDown label="Carta" id="CARD" isVisible={props.MnuVisiblility['CARD']} mnuOnClick={props.MnuVisibilityHandler} itemlist=
            {
                
                    [{ onclickhdl: props.subMnuClickHandler, text: '01' },
                    { onclickhdl: props.subMnuClickHandler, text: '02' }, 
                    { onclickhdl: props.subMnuClickHandler, text: '03' },
                    { onclickhdl: props.subMnuClickHandler, text: '04' }]
                
            } 
            />

        </div>
    );
};

export default NavBar;