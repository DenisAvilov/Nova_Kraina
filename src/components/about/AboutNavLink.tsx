import * as React from 'react'
import { NavLink } from 'react-router-dom'

type AboutNavLinkType= {}
export const AboutNavLink:React.FC<AboutNavLinkType> = (props: AboutNavLinkType) =>{
    return(<React.Fragment>
            <div><NavLink to={'/about'} >Общие свединия  </NavLink> </div>
            <div> <NavLink to={'about_works_and_education'} > Работа и образование</NavLink> </div>    
        </React.Fragment>
    )
}