import React , {Component} from 'react'
import './index.scss'
class Mine extends Component{
    render(){
        return (
            <div className="Mine page">
                <div className='header'>
                    个人中心
                </div>
                <div>
                    <ul>
                        <li>
                        <i class="fa fa-file" aria-hidden="true"></i>
                        <span>我的订单</span>
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </li>
                        <li>
                        <i class="fa fa-file" aria-hidden="true"></i>
                        <span>我的订单</span>
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Mine