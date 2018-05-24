import React , {Component} from 'react'
import './index.scss'

class ListView extends Component{
    constructor (props){
        super(props)
        this.distanceEnd = 50;
        this.listenScroll=this.listenScroll.bind(this);
        this.hasMore = true;
    }
    renderRow(){
        let {dataList,row:Row} = this.props
        if(!dataList.length) return '';
        console.log(dataList);
        return dataList.map(item=>{
            return <Row item={item} key ={item.id}/>
        })
    }
    render(){
        let {contentClassName = 'content' }=this.props
        return (
            <div className={contentClassName}>
                    {this.renderRow()}
                    {  
                        this.hasMore ? (
                        <div className="message">
                            <i className="fa fa-spinner fa-pulse"></i>
                        </div>) : (<div className="message">
                        <span>没有更多</span>
                        </div>) 
                    }
            </div>
        )
    }
    listenScroll(e){
        let alreadyScroll=document.documentElement.scrollTop
        if(!this.hasMore) return false
        let distance = this.htmlHeight - alreadyScroll-this.clientHeight
        if(distance < 50){
            if(!this.loading){
                this.onReachEnd()
            }
        }
    }
    componentWillReceiveProps(props){
        if(props.loading !==this.props.loading){
            this.loading=props.loading
        }
        this.hasMore = props.hasMore
    }
    componentDidMount(){
        this.hasMore=this.props.hasMore
        console.log(this.hasMore )
        this.loading=this.props.loading
        this.onReachEnd=this.props.onReachEnd
        this.distanceEnd=this.props.distanceEnd
        this.clientHeight=document.documentElement.clientHeight
        this.htmlHeight=document.documentElement.offsetHeight
        window.addEventListener("scroll",this.listenScroll)
    }
    componentDidUpdate(){
        this.htmlHeight=document.documentElement.offsetHeight
    }
}
export default ListView