import React , {Component} from 'react'
import './index.scss'
import Cheader from './header'
import Cinemap from './banner'
class Cinema extends Component{
    render(){
        return (
            <div className="Cinema page">
                <Cheader/>
                <Cinemap/>
            </div>
        )
    }
}
export default Cinema