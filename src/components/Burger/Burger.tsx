import React from 'react';
import {IStateIngredients} from "../../App";
import BurgerItem from "./BurgerItem";
import './Burger.css';

interface IProps {
    ingredients:IStateIngredients[];
}

const Burger:React.FC<IProps> = ({ingredients}) => {
    const getTotalSum = (ingredients:IStateIngredients[])=>{
        return ingredients.reduce((acc, value) => {
            if (value.count > 0) {
                if (value.name === 'Meat') {
                    acc += 80 * value.count;
                } else if (value.name === 'Cheese') {
                    acc += 50 * value.count;
                } else if (value.name === 'Salad') {
                    acc += 10 * value.count;
                } else if (value.name === 'Bacon') {
                    acc += 60 * value.count;
                }
            }
            return acc;
        }, 30);
    };

    return (
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                {ingredients.map((ingredient) => {
                    if (ingredient.count > 0) {
                        const burgerItems = [];
                        for(let i = 0; i < ingredient.count;i++){
                            burgerItems.push(
                                <BurgerItem ingredientsItem={ingredient} key={Math.random()+i}/>
                            )
                        }
                        return burgerItems;
                    }
                    return null;
                })}
                <div className="BreadBottom"></div>
                <div>Price:{getTotalSum(ingredients)}</div>
            </div>
    );
};


export default Burger;