import React, {useState} from 'react';
import Ingredients from "./components/Ingredients/Ingredients";
import Burger from "./components/Burger/Burger";
import {Ingredient} from "./types";
import './App.css';

export interface IStateIngredients{
    name:string;
    count:number;
}

function App() {
    const [ingredients, setIngredients] = useState<IStateIngredients[]>([
        {name: 'Meat', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Salad', count: 0},
        {name: 'Bacon', count: 0},
    ]);

    const ingredientsList:Ingredient[]= [
        {name: 'Meat', price: 80, image: 'https://crm-media-bucket.s3.amazonaws.com/media/2022-10-31/5b6a94cc-dee5-4165-b39d-c57b3047afb01667208332587.png'},
        {name: 'Cheese', price: 50, image: 'https://crm-media-bucket.s3.amazonaws.com/media/2022-10-31/c24ac2fb-de6c-493b-9483-b8ee1aedabfb1667208333820.png'},
        {name: 'Salad', price: 10, image: 'https://crm-media-bucket.s3.amazonaws.com/media/2022-10-31/eacd261f-01ce-47eb-a2ba-4f99a728086b1667208333650.png'},
        {name: 'Bacon', price: 60, image: 'https://crm-media-bucket.s3.amazonaws.com/media/2022-10-31/6b626fcf-c0eb-48d7-960d-d3a1d0b771431667208334353.png'},
    ];

    const addIngredient = (index:number)=>{
        const ingredientsCopy = [...ingredients];
        const ingredientsElement = {...ingredientsCopy[index]};
        ingredientsElement.count+= 1;
        ingredientsCopy[index] = ingredientsElement;

        setIngredients(ingredientsCopy);
    };

    const deleteIngredient = (index:number)=>{
        const ingredientsCopy = [...ingredients];
        const ingredientsElement = {...ingredientsCopy[index]};
        ingredientsElement.count = 0 ;
        ingredientsCopy[index] = ingredientsElement;

        setIngredients(ingredientsCopy);
    };

    return (
        <div className="App">
            <Ingredients
                ingredientsList={ingredientsList}
                ingredients={ingredients}
                deleteIngredient={deleteIngredient}
                addIngredient={addIngredient}/>
            <Burger ingredients={ingredients}></Burger>
        </div>
    );
}

export default App;

