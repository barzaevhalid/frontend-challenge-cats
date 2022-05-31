import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Content from '../../components/content/Content';
import Loading from '../../components/loading/Loading';
import './main.css'

import { getCats } from '../../redux/asyncActions/actions';
const Main = () => {
    const {cats, loading} = useSelector(state => state)
    console.log(cats);
    const dispatch = useDispatch()
    const content = loading ? <Loading/> : cats.map(item => {
        return(
            <Content item={item}/>
        )
    })
    useEffect(() => {
        dispatch(getCats()) 
    },[])
    return (
        <div className='main'>
            <div className="container">
                <div className="main__inner">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Main;