import React from 'react';
import loader from '../../assets/loading.gif'
import './loading.css'
const Loading = () => {
    return (
        <img src={loader} alt='loading'/>
    );
};

export default Loading;