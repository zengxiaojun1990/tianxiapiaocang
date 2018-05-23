import React , {Component} from 'react'
import './index.scss'
class TemHeader extends Component{
    render(){
        return (
            <div className="TemHeader">
            <div className="Theader">
                党校  
            </div>
            <img src='http://m.txpc.cn/res/images/index.jpg' alt=""/>
           <ul>  
               <li>
                   活动介绍
               </li>
               <li>
                   参展电影
               </li>
               <li>
                   服务指南
               </li>
               <li>
                   学院注册
               </li>
           </ul>  
        
        </div>
        )
    }
}
export default TemHeader