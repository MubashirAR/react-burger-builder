import React, {Component} from 'react'
import {Auxiliary} from '../../HOC/Auxiliary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    meat: 1.5,
    cheese: 1,
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false
    }
    updatePurchaseState(ingredients) {
        const sum = 
            Object.keys(ingredients)
            .map(igKey => ingredients[igKey])
            .reduce((sum,el) => sum + el,0);
            this.setState({purchaseable: sum>0})
    }
    addIngredientHandler = type => {
        const ingredients = {...this.state.ingredients};
        if(!type || ingredients[type]===undefined) return
        ingredients[type]++;
        this.setState({
            ingredients: ingredients, 
            totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type]});
        this.updatePurchaseState(ingredients);
    }
    removeIngredientHandler = type => {
        const ingredients = {...this.state.ingredients};
        if(!type || !ingredients[type]) return
        ingredients[type]--;
        this.setState({
            ingredients: ingredients,
            totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type]});
        this.updatePurchaseState(ingredients);
    }
    render() {
        const disableInfo = {...this.state.ingredients}
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }
        console.log(disableInfo);
        
        return (
            <Auxiliary>
                <Burger ingredients= {this.state.ingredients}/>
                <BuildControls addIngredient={this.addIngredientHandler} 
                removeIngredient= {this.removeIngredientHandler}
                disableInfo= {disableInfo}
                totalPrice={this.state.totalPrice}
                purchaseable={this.state.purchaseable}/>
            </Auxiliary>
        )
    }
}

export default BurgerBuilder;