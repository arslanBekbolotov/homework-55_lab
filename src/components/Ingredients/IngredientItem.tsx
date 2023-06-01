import React from 'react';
import './Ingredients.css';

interface IProps{
    name:string;
    image:string;
    count:number;
    addIngredient:React.MouseEventHandler<HTMLImageElement>;
    deleteIngredient:React.MouseEventHandler<HTMLButtonElement>;
}

const IngredientItem:React.FC<IProps> = (props) => {
    return (
        <div className='ingredient'>
            <img onClick={props.addIngredient} className='ingredient-img' src={props.image} alt={props.name}/>
            <h2 className='ingredient-title'>{props.name} </h2>
            <span className='ingredient-count'>x{props.count}</span>
            <button onClick={props.deleteIngredient} className="ingredient-btn">
                <img className='ingredient-btn-img' src="https://cdn4.iconfinder.com/data/icons/essentials-71/24/013_-_Trash-128.png" alt="delete"/>
            </button>
        </div>
    );
};

export default IngredientItem;