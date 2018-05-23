import React , {Component} from 'react'
import './index.scss'
import {NavLink} from 'react-router-dom'

const NavItem=({item})=>{
    return(
        <NavLink exact to={item.path}>
        <i className={"fa fa-"+item.icon}></i>
        <span>{item.title}</span>    
     </NavLink>  
    )
}
class Footer extends Component{
    render(){
        let {navs}=this.props
        return (
            <div className="app-footer">
                 {
                    navs.map(item=>{
                        return <NavItem key={item.id} item={item}/>
                    })
                 }
            </div>
        )
    }
}
Footer.defaultProps={

    navs:[
        {id:1,icon:'film',title:'首页',path:'/'},
        {id:2,icon:'fort-awesome',title:'影院',path:'/cinema'},
        {id:3,icon:'graduation-cap',title:'党校',path:'/party'},
        {id:4,icon:'user-secret',title:'我的',path:'/mine'}
    ]
}
export default Footer