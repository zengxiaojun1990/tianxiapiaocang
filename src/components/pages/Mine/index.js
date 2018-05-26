import React, { Component } from 'react'
import './index.scss'
import Login from './Login'
import User from './User'
import { Switch, Route,Link} from 'react-router-dom'
import { connect } from 'react-redux'


class Smin extends Component{
    render(){
        return (
            <div className="Mine page">
                <div className='header'>
                    个人中心
                </div>
                <div>
                    <ul>
                        <Link to="/mine/login">
                            <li>
                            <i className="fa fa-file" aria-hidden="true"></i>
                            <span>我的订单</span>
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            </li>
                            <li>
                            <i className="fa fa-file" aria-hidden="true"></i>
                            <span>我的优惠券</span>
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="conect">
                    <p><i className="fa fa-phone" aria-hidden="true"></i>  客服电话：400-607-5588</p>
                    <p>客服工作时间：9:00-18:00</p>
                </div>
            </div>
        )
    }
}



class Mine extends Component{

    componentWillReceiveProps ( props ){
        if( props.location.pathname !== this.props.location.pathname || props.username !== this.props.username ){
            console.log( props.location.pathname)
            if( props.location.pathname !== '/mine/login' ){
                this.checkLogin(props)
            }
        }
    }
    componentWillMount () {
        this.checkLogin()
    }
    checkLogin ( props ){

        let _props  = props || this.props
        console.log(_props.userInfo )
        if ( !_props.userInfo ) {
            //没有登陆，跳转到login
            _props.history.replace('/mine')
        } else {
            //跳转user
            _props.history.replace('/mine/user')
        }
    }
    render(){
        return (
            <div className="kine page">
         <Switch>
        <Route path="/mine" exact component={Smin} />     
        <Route path="/mine/login" exact component={Login} />
        <Route path="/mine/user" exact component={User} />
        </Switch>
            </div>
        )
    }
}
export default connect ( state => state.commons)(Mine)