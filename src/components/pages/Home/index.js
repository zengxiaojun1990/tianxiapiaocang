import React , {Component} from 'react'
import './index.scss'
import Banner from './banner'
import Header from './header'
import Content from './content'
import Content_oray from './content-onready'
import {Switch,Route} from 'react-router-dom'
class Home extends Component{
    render(){
        return (
            <div className="home page">
                <Header/>
                <Banner/>
                <Switch>
                <Route path='/home' exact component={Content}/>
                <Route path='/home/cor' exact component={Content_oray}/>
                </Switch>
            </div>
        )
    }
}
export default Home