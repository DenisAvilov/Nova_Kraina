import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, withRouter, BrowserRouter, Switch, Redirect } from "react-router-dom"
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faUsers, faUserFriends, faDiagnoses, faFileVideo, faMusic, faCamera, faGraduationCap, faHome, faMapMarker, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import AsideRight from './components/asideRight/AsideRight'
import Main from './components/main/Main'
import HeaderContainer from './components/header/HeaderContainer'
import AsideLeftContainer from './components/asideLeft/AsideLeftContainer'
import store, { RootReducerType } from './redux/store-redux'
import LoginContainer from './components/login/LoginContainer'
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import { is_initialization } from './redux/initialization-reduce'

import app from './App.module.scss'
const ProfileConteiner = React.lazy(() => import('./components/profile/ProfileContainer'));
const FriendsContainer = React.lazy(() => import('./components/friends/FriendsContainer'));
library.add(fab, faCheckSquare, faCoffee, faUsers, faUserFriends, faDiagnoses,
    faFileVideo, faMusic, faCamera, faGraduationCap, faHome, faMapMarker, faThumbsUp)

class App extends React.Component<MyProps & MyDistpachToProps, MyState>{

    componentDidMount() { this.props.is_initialization() }

    render() {

        let { initializationSeccess } = this.props

        if (!initializationSeccess) return <>Завантаження...</>
        return (<div className={app.grid} >
            
                    <div className={app.grid_header}>  <HeaderContainer /></div>
                    <div className={app.grid_left}> 
                        <Switch>
                           <Suspense fallback={<div>Завантаження...</div>}> 
                                <Route exact={true}    path={[ "/", "/profile/:userId?"  ]}  component={AsideLeftContainer}/>  
                                <Route   exact={true}  path={["/friends"]} component={FriendsContainer}/>                
                            </Suspense>
                        </Switch>
                     </div>

                       <div className={app.grid_right}> 
                       <Switch>
                           <Suspense fallback={<div>Завантаження...</div>}>                    
                                <Route path="/">  <AsideRight /> </Route>                                                             
                            </Suspense>
                        </Switch>
                         
                        </div>

                    <div className={app.grid_main}> 
                        <Switch>
                            <Suspense fallback={<div>Завантаження...</div>}>
                                <Route exact={true}  path="/" render={() => <Main />} /> 
                                <Route    path="/profile/:userId?" render={() => <ProfileConteiner />} />
                                <Route    path="/login" render={() => < LoginContainer />} />
                                {/* <Route path="/friends" render={() => < FriendsContainer />} /> */}
                            </Suspense>
                        </Switch>
                    </div>
                   
                   
        </div>
        );
    }
}

const mapStateToProps = (store: RootReducerType) => {
    return {
        initializationSeccess: store.initialization.success,

    }
}

//error JSX element type 'ContainerApp' does not have any construct or call signatures; тоесть компонент 'ContainerApp' не является компонентам. 
// указываем в 'compose' что возвращай компонты с типом по умолчанию 'React.ComponentType'
const ContainerApp = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, { is_initialization })
)(App);

export const NovaKraina:React.FC = () => {
    return <BrowserRouter> <Provider store={store}> <ContainerApp /> </Provider>  </BrowserRouter>
}


type MyProps = ReturnType<typeof mapStateToProps>
type MyState = {}
type MyDistpachToProps = {
    is_initialization: () => void
}
