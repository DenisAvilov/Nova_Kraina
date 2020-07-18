import * as React from 'react'
import { reduxForm,  InjectedFormProps } from 'redux-form'
import d from './../../../profile/userState/UserState.module.css'
import about from './../../About.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SubmitOverviewType, SubmitOverviewKeys, SubmitLocalStorageKeys } from './AboutOverview'
import { createrField, Input, Textarea  } from '../../../common/formsControls/controlFormOverview/controlFormOverview'
import { minLength2, required, maxLength15, maxLength150 } from '../../../common/formsControls/ValidationFormOverview'


type AboutOverviewTypeProps = {   
    stateButtom: () => void 
    initialValues: any
}


const AboutOverview: React.FC<InjectedFormProps <SubmitOverviewType, AboutOverviewTypeProps> & AboutOverviewTypeProps> = ( 
    {handleSubmit , stateButtom }) => {    

    return <form onSubmit={ handleSubmit}> <h2 className={about.h2}>Редакторование </h2>
            <ul>
                <li className={d.state_item}>
                    <div> <FontAwesomeIcon icon='graduation-cap' /> </div>
                    <div className={d.state_inform}><span>Место обучения </span>                    
                    {createrField<SubmitOverviewKeys>(Input,  "placeStudy",[required, maxLength15, minLength2], undefined,{} ,'')}     
                    </div>
                </li>
                <li className={d.state_item}>
                    <div> <FontAwesomeIcon icon='home' /> </div>
                    <div className={d.state_inform}><span>Место жительства </span>                    
                     {createrField<SubmitOverviewKeys>(Input,  "misto",[required, maxLength15, minLength2], undefined,{} ,'')}   
                    </div> 

                </li>
                <li className={d.state_item}>
                    <div className={d.map}> <FontAwesomeIcon icon='map-marker' /> </div>
                    <div className={d.state_inform}><span>Страна проживания </span>
                    {createrField<SubmitOverviewKeys>(Input,  "krayina",[required, maxLength15, minLength2], undefined,{} ,'')}                
                      </div> 
                </li>
                  <li className={d.state_item}>
                    <div> <FontAwesomeIcon icon='home' /> </div>
                    <div className={d.state_inform}><span>Любимая история из жизни </span>                     
                     {createrField<SubmitLocalStorageKeys>(Textarea,  "storyForMyLife",[maxLength15, minLength2, maxLength150], undefined, {}, '' )}
                    </div> 
                </li>  
               
            </ul> 
            <button>Сохранить</button> <span onClick={stateButtom}>Отменить</span>
        </form> 
}   

export const AboutOverviewForm = reduxForm<SubmitOverviewType, AboutOverviewTypeProps>({   
    form: 'overviewFormProile'
  })(AboutOverview)