import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Content from '../../components/content/Content';
import Loading from '../../components/loading/Loading';
import './main.css'

import { getCats, getNewCats } from '../../redux/asyncActions/actions';
const Main = () => {
    const {cats, loading} = useSelector(state => state)

    const dispatch = useDispatch()

    const content = loading ? <Loading/> : cats.map(item => {
        return(
            <Content key={item.id} item={item}/>
        )
    })

    useEffect(() => {
        dispatch(getCats()) 

        document.addEventListener('scroll',scrollHandler)
        return function () {
            document.removeEventListener('scroll',scrollHandler)
        }
    },[])

    const scrollHandler = (e) => {
            if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 50){
                dispatch(getNewCats())
            }
    }
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