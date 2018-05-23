import React , {Component} from 'react'
import './index.scss'

const ListItem=({item})=>{
    return(
        <div className='introduce'>
        <img src={item.imgSrc} alt=""/>
        <ul>
            <li>
                {item.name}
            </li>
            <li>
                ▷影片介绍
            </li>
        </ul>
        </div>
    )
}
class TemContent extends Component{
    render(){
        let {list}=this.props
        return (
            <div className="TemContent">
               <div className='tv-title'>
               <i className="fa fa-television"></i>
               <span>喜迎党的十九大献礼影片展映</span>
                </div>
                <div className='detail'>
                    {
                        list.map(item=>{
                            return <ListItem key={item.id} item={item}/>
                        })
                    }
                </div>
                <img src="http://m.txpc.cn/res/images/u70.png" alt=""/>        
            </div>
        )
    }
}
TemContent.defaultProps={
    list:[
        {
            id:1,
            imgSrc:'http://web-txpc.oss-cn-shanghai.aliyuncs.com/movie/20180514142141_619.png',
            name:'策反',
        },
        {
            id:2,
            imgSrc:'http://web-txpc.oss-cn-shanghai.aliyuncs.com/movie/20180509093952_648.jpg',
            name:'看不懂',
        },
        {
            id:3,
            imgSrc:'http://web-txpc.oss-cn-shanghai.aliyuncs.com/movie/20180502100704_423.png',
            name:'我们的青春去',
        },
        {
            id:4,
            imgSrc:'http://web-txpc.oss-cn-shanghai.aliyuncs.com/movie/20180425140641_631.png',
            name:'香港大营救',
        },
        {
            id:5,
            imgSrc:'http://web-txpc.oss-cn-shanghai.aliyuncs.com/movie/20180119120908_124.jpg',
            name:'红海行动',
        },
        {
            id:6,
            imgSrc:'http://web-txpc.oss-cn-shanghai.aliyuncs.com/movie/20170929092637_851.jpg',
            name:'时间去哪里',
        },
        {
            id:7,
            imgSrc:'http://web-txpc.oss-cn-shanghai.aliyuncs.com/movie/20171011151442_849.jpg',
            name:'邹碧华',
        },
        {
            id:8,
            imgSrc:'http://web-txpc.oss-cn-shanghai.aliyuncs.com/movie/20170929092256_142.jpg',
            name:'十八洞',
        },
        {
            id:9,
            imgSrc:'http://web-txpc.oss-cn-shanghai.aliyuncs.com/movie/20170915141229_849.jpg',
            name:'空天列',
        },
        {
            id:10,
            imgSrc:'http://web-txpc.oss-cn-shanghai.aliyuncs.com/movie/20170721193107_699.png',
            name:'战狼2',
        },

    ]
}
export default TemContent