import React, { Component } from 'react';

import {Route,Switch} from 'react-router-dom'
import Home from './components/pages/Home'
import Cinema from './components/pages/Cinema'
import Party from './components/pages/Party'
import Mine from './components/pages/Mine'
import AppFooter from './components/commons/AppFooter'
import {Redirect} from 'react-router-dom'
class App extends Component {
  renderRoutes(){
    let {routes} =this.props
    return routes.map(item=>{
              return (<Route
                 exact={item.isExact} 
                 path={item.path} 
                 key={item.id} 
                 component={item.component}/>)
            })
  }
  render() {
    return (
      <div className="App">
         <Switch>
           {this.renderRoutes()}
           <Redirect from ="**" to={{pathname : '/home'}}/>
        </Switch>
        <AppFooter/>
      </div>
    );
  }
}
App.defaultProps={
  routes:[
    {id:1,path:'/home',component:Home},
    {id:2,path:'/cinema', component:Cinema},
    {id:3,path:'/party', component:Party},
    {id:4,path:'/mine', component:Mine}
  ]
}
export default App;
