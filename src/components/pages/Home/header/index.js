import React , {Component} from 'react'
import './index.scss'
import {NavLink} from 'react-router-dom'
const NavItem=({item})=>{
    return(  
        <li >
            <NavLink  exact to={item.path}>
            {item.title}             
            </NavLink> 
         </li> 
    )
}
class Header extends Component{
    render(){
        let {navs}=this.props
        return (
            <div className="Header page">
                <ul>
                {
                    navs.map(item=>{
                        return <NavItem key={item.id} item={item}/>
                    })
                }
                </ul>
            </div>
        )
    }
}
Header.defaultProps={
    navs:[
        {id:1,title:'热映',path:'/home'},
        {id:2,title:'将映',path:'/home/cor'}
    ]
}
export default Header