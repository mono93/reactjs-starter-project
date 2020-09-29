import React from 'react';
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'

const toolbar = (props) => (
    <haders className={classes.Toolbar}>
        <div> MENU </div>
        <Logo />
        <nav>
            ...
        </nav>
    </haders>
);

export default toolbar
