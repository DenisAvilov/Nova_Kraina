import * as React from 'react'

type StatusPropsType = {
    status:  string 
   
    statusСhangedSuccess: (status: string) => void 
}


type  StatusType  =  StatusPropsType 




export const Status: React.FC<StatusType> = (props: StatusType) => {
 let {status, statusСhangedSuccess} = props
 
    let [ModeState, UseState] =   React.useState(status)
    let [ModeIsOwth, UseIsOwth] =   React.useState(true)
    
     const onStatusDoubleClick = () => {
        UseIsOwth(  ModeIsOwth = !ModeIsOwth)
     }    
     const onStatusBlur = () => {
        UseIsOwth(  ModeIsOwth = !ModeIsOwth)
        
        statusСhangedSuccess(ModeState)
     }

     let changeValue = (e : React.ChangeEvent<HTMLInputElement>)=>{        
        UseState(ModeState = e.target.value)    
    }
    
    React.useEffect( () => {  
        if( ModeState != status )      
       UseState(status)
    }, [status]  )


    return(
        <>
        {ModeIsOwth && <p onDoubleClick={onStatusDoubleClick}> {ModeState} </p>}
        {!ModeIsOwth && <input onBlur={onStatusBlur} value={ModeState} onChange={changeValue}/>}
        </>
    )
}