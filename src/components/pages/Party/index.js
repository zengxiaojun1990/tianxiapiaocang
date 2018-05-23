import React , {Component} from 'react'
import './index.scss'
import TemHeader from './header'
import TemContent from './content'
class Party extends Component{
    render(){
        return (
            <div className="Party pages ">
                    <TemHeader/>
                    <TemContent/>
            </div>
        )
    }
}
export default Party