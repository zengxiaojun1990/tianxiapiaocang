import React , {Component} from 'react'
import './index.scss'
import {NavBar,Icon} from 'antd-mobile'
class Cheader extends Component{
    render(){
        return (
            <div className="header Cinema ">
                    <NavBar
                        mode="dark"
                       
                        rightContent={[
                            <span>上海市</span>
                                    ]}
                    >影院</NavBar>
                    <div className="serch">
                        <input type="text" placeholder="请输入名称或地址" />
                        <button>搜索</button>
                     </div>   
            </div>
        )
    }
}
export default Cheader