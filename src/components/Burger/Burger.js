import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = props => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            console.log('Array Element',props.ingredients[igKey]);
            return [...Array(props.ingredients[igKey])].map((_,i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}/>
            })
        })
        .reduce((arr,el) => arr.concat(el),[]);
        
        if(transformedIngredients.length===0) transformedIngredients = "Please start adding ingredients" 
        
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}
export default burger