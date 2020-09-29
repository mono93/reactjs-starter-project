import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', types: 'salad' },
    { label: 'Bacon', types: 'bacon' },
    { label: 'Cheese', types: 'cheese' },
    { label: 'Meat', types: 'meat' }
];

const buildControls = (props) => (
    < div className={classes.BuildControls} >
        <p> Current Price: <strong>{props.price.toFixed(2)}</strong> </p>
        {
            controls.map(ctrl => {
                return <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.types)}
                    removed={() => props.ingredientRemoved(ctrl.types)}
                    disabled={props.disabled[ctrl.types]} />

            })
        }
        <button className={classes.OrderButton} 
        disabled={!props.purchaseable}
        onClick={props.ordered}> ORDER NOW </button>
    </div >
);

export default buildControls;