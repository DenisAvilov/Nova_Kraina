import React from 'react';
import d from './WhatNews.module.css';

const WhatNews =(props) =>{
    return(
            <div className={d.whatNews} >
                <h2>Что нового?</h2>
                <textarea>Ваша история</textarea>       
            </div>
           
    );
};

export default WhatNews;