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
                        <i className="fa fa-file" aria-hidden="true"></i>
                        <span>我的订单</span>
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </li>
                        <li>
                        <i className="fa fa-file" aria-hidden="true"></i>
                        <span>我的优惠券</span>
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </li>
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
export default Mine