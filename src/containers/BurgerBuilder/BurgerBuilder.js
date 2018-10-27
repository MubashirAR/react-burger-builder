import React, {Component} from 'react'
import {Auxiliary} from '../../HOC/Auxiliary';
import Burger from '../../components/Burger/Burger'
class BurgerBuilder extends Component {
    render() {
        return (
            <Auxiliary>
                <Burger/>
            </Auxiliary>
        )
    }
}

export default BurgerBuilder;