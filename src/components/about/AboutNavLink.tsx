import * as React from 'react'
import { NavLink, Link } from 'react-router-dom'

type AboutNavLinkType= {
    setShowContent: React.Dispatch<React.SetStateAction<boolean>>
    showContent: boolean
}
export const AboutNavLink:React.FC<AboutNavLinkType> = (props: AboutNavLinkType) =>{

    return(<React.Fragment> 
            
            {/* <Link to={'/profile/about-works-and-education'} > Общие свединия </Link> */}

            {/* <div onClick={ () => props.setShowContent( !props.showContent ) }> Работа и образование </div> */}

        </React.Fragment>
    )
}