import React, {useState} from 'react';
import './App.css';
import IngredientItem from "./components/Ingredients/IngredientItem";
import {Ingredient} from "./types";

interface IStateIngredients{
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
        console.log(ingredients[index]);
        const ingredientsCopy = [...ingredients];
        const ingredientsElement = {...ingredientsCopy[index]};
        ingredientsElement.count+= 1;
        ingredientsCopy[index] = ingredientsElement;

        setIngredients(ingredientsCopy);
    }

  return (
    <div className="App">
        {ingredientsList.map((ingredientItem,index)=>
            <IngredientItem
                name={ingredientItem.name}
                image={ingredientItem.image}
                key={index}
                count={ingredients[index].count}
                addIngredient ={()=> {addIngredient(index)}}
            />
        )}
    </div>
  );
}

export default App;
