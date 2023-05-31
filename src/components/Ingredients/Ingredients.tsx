import React from 'react';
import IngredientItem from "./IngredientItem";
import {Ingredient} from "../../types";
import {IStateIngredients} from "../../App";

interface IProps{
    ingredientsList:Ingredient[];
    ingredients:IStateIngredients[];
    deleteIngredient:(index:number)=>void;
    addIngredient:(index:number)=>void;
}
const Ingredients:React.FC<IProps> =
    ({
         ingredientsList,
         ingredients,
         deleteIngredient,
         addIngredient}) => {
    return (
        <div>
            {ingredientsList.map((ingredientItem,index)=>
                <IngredientItem
                    name={ingredientItem.name}
                    image={ingredientItem.image}
                    key={index}
                    count={ingredients[index].count}
                    deleteIngredient = {()=>{deleteIngredient(index)}}
                    addIngredient ={()=> {addIngredient(index)}}
                />
            )}
        </div>
    );
};

export default Ingredients;