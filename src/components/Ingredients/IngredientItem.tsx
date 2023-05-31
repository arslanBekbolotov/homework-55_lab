import React from 'react';
import './Ingredients.css'

interface IProps{
    name:string;
    image:string;
    count:number;
    addIngredient:React.MouseEventHandler<HTMLImageElement>;
}

const IngredientItem:React.FC<IProps> =
    ({name, image,count,addIngredient}) => {
    return (
        <div className='ingredient'>
            <img onClick={addIngredient} className='ingredient-img' src={image} alt={name}/>
            <h2 className='ingredient-title'>{name} </h2>
            <span className='ingredient-count'>x{count}</span>
            <button className="ingredient-btn">
                <img className='ingredient-btn' src="https://cdn4.iconfinder.com/data/icons/essentials-71/24/013_-_Trash-128.png" alt="delete"/>
            </button>
        </div>
    );
};

export default IngredientItem;