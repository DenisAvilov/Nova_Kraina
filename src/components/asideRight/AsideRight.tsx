import * as React from 'react';
import d from './AsideRight.module.css';

type AsideRightType = {

}

const AsideRight: React.FC<AsideRightType> = (props: AsideRightType) =>{
    return (
        <div className={d.wrap}>AsideRight</div>
    )
}

export default AsideRight;