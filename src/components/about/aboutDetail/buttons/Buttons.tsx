import React from "react"
import d from './Buttons.module.css'

type ButtonsType = {
  props: string
}

 export const Buttons:React.FC<ButtonsType> = (props: ButtonsType) => {
 return (          
          <div className={d.button_link}>          
             {props.props}            
          </div>
        )}