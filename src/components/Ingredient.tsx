import React from 'react';
import './Ingredients.css'
import ingredient from "./Ingredient";

const Ingredient = () => {
    return (
        <div className='ingredients-inner'>
            <div className='ingredient-row'>
                <img src="https://crm-media-bucket.s3.amazonaws.com/media/2022-10-31/5b6a94cc-dee5-4165-b39d-c57b3047afb01667208332587.png" alt="meat"/>
                <span>Meat </span>
                <span>x1</span>
                <span> </span>
            </div>
            <div className='ingredient-row'>
                <img src="https://crm-media-bucket.s3.amazonaws.com/media/2022-10-31/c24ac2fb-de6c-493b-9483-b8ee1aedabfb1667208333820.png" alt="cheese"/>
                <span>Cheese </span>
                <span>x1</span>
                <span> </span>
            </div>
            <div className='ingredient-row'>
                <img src="https://crm-media-bucket.s3.amazonaws.com/media/2022-10-31/eacd261f-01ce-47eb-a2ba-4f99a728086b1667208333650.png" alt="salad"/>
                <span>Salad </span>
                <span>x1</span>
                <span> </span>
            </div>
            <div className='ingredient-row'>
                <img src="https://crm-media-bucket.s3.amazonaws.com/media/2022-10-31/6b626fcf-c0eb-48d7-960d-d3a1d0b771431667208334353.png" alt="bacon"/>
                <span>Bacon </span>
                <span>x1</span>
                <span> </span>
            </div>
        </div>
    );
};

export default Ingredient;