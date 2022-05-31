import React from 'react';
import Content from '../../components/content/Content';
import './favoriteCats.css'
const FavoriteCats = () => {
    return (
        <div className='favoriteCats'>
            <div className="container">
            <div className="favorite__inner">
                {<Content/>}
                {<Content/>}
                {<Content/>}
                {<Content/>}
                {<Content/>} {<Content/>} {<Content/>} {<Content/>} {<Content/>}
            </div>
            </div>
        </div>
    );
};

export default FavoriteCats;