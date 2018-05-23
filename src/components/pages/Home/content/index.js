import React , {Component} from 'react'
import './index.scss'
const ListItem=({item})=>{
    return(
        <div className='contentBox'>
            <div className='contentImg'>
                <img src={item.imgSrc} alt=''/>
                
            </div>
            <div className='contentDetail'>
                <h3>
                    {item.title}
                </h3>
                <p>导演：{item.director}</p>    
                <p>主演：{item.actor}</p>    
            </div>
            <div className='contentBuy'>
                <a>购票</a>
            </div>
    </div> 
    )
}
class Content extends Component{
    render(){
        let {list}=this.props
        return (
            <div className="Content page">
               {
                    list.map(item=>{
                        return <ListItem key={item.id} item={item}/>
                    })
               }
                </div>   
           
        )
    }
}
Content.defaultProps={
        list:[
            {id:1,
                imgSrc:'http://web-txpc.oss-cn-shanghai.aliyuncs.com/movie/20180514171139_682.jpg?x-oss-process=image/resize,m_fixed,h_270,w_200',
                title:'游侠索罗：星球大战xxx战警',
                director:'郎霍华德',
                actor:'阿尔登.艾伦瑞奇/埃尔法/小李子',
            },
            {id:2,
                imgSrc:'http://web-txpc.oss-cn-shanghai.aliyuncs.com/movie/20180424211122_306.jpg',
                title:'游侠索罗：星球大战xxx战警',
                director:'郎霍华德',
                actor:'阿尔登.艾伦瑞奇/埃尔法/小李子',
            },
            {id:3,
                imgSrc:'http://web-txpc.oss-cn-shanghai.aliyuncs.com/movie/20180413130224_822.jpg',
                title:'游侠索罗：星球大战xxx战警',
                director:'郎霍华德',
                actor:'阿尔登.艾伦瑞奇/埃尔法/小李子',
            },
            {id:4,
                imgSrc:'http://web-txpc.oss-cn-shanghai.aliyuncs.com/movie/20180227131709_596.jpg',
                title:'游侠索罗：星球大战xxx战警',
                director:'郎霍华德',
                actor:'阿尔登.艾伦瑞奇/埃尔法/小李子',
            },
            {id:5,
                imgSrc:'http://web-txpc.oss-cn-shanghai.aliyuncs.com/movie/20180503174410_810.jpg',
                title:'游侠索罗：星球大战xxx战警',
                director:'郎霍华德',
                actor:'阿尔登.艾伦瑞奇/埃尔法/小李子',
            },
            {id:6,
                imgSrc:'http://web-txpc.oss-cn-shanghai.aliyuncs.com/movie/20180417175521_539.png?x-oss-process=image/resize,m_fixed,h_270,w_200',
                title:'游侠索罗：星球大战xxx战警',
                director:'郎霍华德',
                actor:'阿尔登.艾伦瑞奇/埃尔法/小李子',
            },
            {id:7,
                imgSrc:'http://web-txpc.oss-cn-shanghai.aliyuncs.com/movie/20180507114542_713.png?x-oss-process=image/resize,m_fixed,h_270,w_200',
                title:'游侠索罗：星球大战xxx战警',
                director:'郎霍华德',
                actor:'阿尔登.艾伦瑞奇/埃尔法/小李子',
            },
            {id:8,
                imgSrc:'http://web-txpc.oss-cn-shanghai.aliyuncs.com/movie/20180507152520_974.png?x-oss-process=image/resize,m_fixed,h_270,w_200',
                title:'游侠索罗：星球大战xxx战警',
                director:'郎霍华德',
                actor:'阿尔登.艾伦瑞奇/埃尔法/小李子',
            },
            {id:9,
                imgSrc:'http://web-txpc.oss-cn-shanghai.aliyuncs.com/movie/20180321140015_116.jpg?x-oss-process=image/resize,m_fixed,h_270,w_200',
                title:'游侠索罗：星球大战xxx战警',
                director:'郎霍华德',
                actor:'阿尔登.艾伦瑞奇/埃尔法/小李子',
            },


        ]
}
export default Content