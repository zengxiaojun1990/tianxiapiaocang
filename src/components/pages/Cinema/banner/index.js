import React , {Component} from 'react'
import './index.scss'
const DelItem=({item})=>{
    return(
        <div className='CimDetail'>
        <p>{item.title}</p>
        <span>{item.site}</span>
        <i>{item.price}</i>
    </div> 
    )
}

class Cinemap extends Component{
   
    render(){
        let {list}=this.props
        return (
            <div className="Cinemap Cinema ">
                {
                    list.map(item=>{
                        return <DelItem key={item.id} item={item}/>
                    })
                }
            </div>
        )
    }
}
Cinemap.defaultProps={
    list:[
        {
            id:1,
            title:'SFC上影影城',
            site:'徐家汇衡山路838号（天平路口）',
            price:'40元起'

        },
        {
            id:2,
            title:'SFC上影影城',
            site:'徐家汇衡山路838号（天平路口）',
            price:'32元起'

        },
        {
            id:3,
            title:'SFC上影影城',
            site:'徐家汇衡山路838号（天平路口）',
            price:'43元起'

        },
        {
            id:4,
            title:'SFC上影影城',
            site:'徐家汇衡山路838号（天平路口）',
            price:'43元起'

        },
        {
            id:5,
            title:'SFC上影影城',
            site:'徐家汇衡山路838号（天平路口）',
            price:'22元起'

        },
        {
            id:6,
            title:'SFC上影影城',
            site:'徐家汇衡山路838号（天平路口）',
            price:'44元起'

        },
        {
            id:7,
            title:'SFC上影影城',
            site:'徐家汇衡山路838号（天平路口）',
            price:'45元起'

        },
        {
            id:8,
            title:'SFC上影影城',
            site:'徐家汇衡山路838号（天平路口）',
            price:'45元起'

        },
        {
            id:9,
            title:'SFC上影影城',
            site:'徐家汇衡山路838号（天平路口）',
            price:'30元起'

        },
        {
            id:10,
            title:'SFC上影影城',
            site:'徐家汇衡山路838号（天平路口）',
            price:'30元起'

        },
        {
            id:11,
            title:'SFC上影影城',
            site:'徐家汇衡山路838号（天平路口）',
            price:'42元起'

        },

    ]
}
export default Cinemap