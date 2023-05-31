import React from 'react';
import {IStateIngredients} from "../../App";

interface IProps{
    ingredientsItem:IStateIngredients;
}

const BurgerItem:React.FC<IProps> = ({ingredientsItem}) => {
    return (
        <div className={ingredientsItem.name}></div>
    );
};

export default BurgerItem;