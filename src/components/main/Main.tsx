import * as React from 'react';
import d from './Main.module.css';

type MainType = {

}

const Main: React.FC<MainType> = (props : MainType) =>{
    return (
        <div className={d.wrap}>
            Стартовая страница
            </div>
    )
}

export default Main; 