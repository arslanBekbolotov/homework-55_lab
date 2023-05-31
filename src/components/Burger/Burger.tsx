import React from 'react';
import './Burger.css';
import {IStateIngredients} from "../../App";


interface IProps{
    ingredients:IStateIngredients[];
}

const Burger:React.FC<IProps> = ({ingredients}) => {
    const getTotalSum = (ingredients:IStateIngredients[])=>{
        const total = ingredients.reduce((acc,value)=> {
            if(value.count > 0){
                if(value.name === 'Meat'){
                    acc += 80 * value.count;
                }else if(value.name === 'Cheese'){
                    acc += 50 * value.count;
                }else if(value.name === 'Salad'){
                    acc += 10 * value.count;
                }else if(value.name === 'Bacon'){
                    acc += 60 * value.count;
                }
            }
            return acc;
        }, 0)
        return total;
    };

    return (
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>

                <div className="BreadBottom"></div>
                <div>Price:{getTotalSum(ingredients)}</div>
            </div>
    );
};


export default Burger;