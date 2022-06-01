import React, { useState } from 'react';
import NoCatsSelected from '../../components/noCatsSelected/NoCatsSelected';

import './favoriteCats.css'
const FavoriteCats = () => {


    const arr = Object.keys(localStorage)

    const [cats, setCats] = useState(arr.map(id => localStorage.getItem(id)))
    
    const removeCat = (index) => {

       const catKey = arr.filter((_,i) => i === index).toString()
       localStorage.removeItem(catKey)
       setCats(cats.filter((_,i) => i !== index))

       
    }
    const catsRender = cats.map((cat,i) => 
    <div className='img__wrap'>
         <button className='favoriteCats__btn' onClick={() => removeCat(i)}>Удалить</button>
         <img key={cat} className='favoriteCats__img' src={cat} alt="" />
    </div>)

    return (
        <div className='favoriteCats'>
            <div className="container">
              <div className="favorite__inner">
                {catsRender.length > 0 ? catsRender : <NoCatsSelected/>}
              </div>
            
            </div>
        </div>
    );
};

export default FavoriteCats;