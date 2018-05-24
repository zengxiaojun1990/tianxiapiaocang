import React , {Component} from 'react'
import './index.scss'
import ListView from '../../../commons/ListView'
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
   constructor(props){
        super(props)
        this.state={
            goods:[],
            loading:false,
            hasMore:true,

        }
        this.page=1;
        this.num=7;
        this.total=22
        this.onReachEnd=this.onReachEnd.bind(this)
   }
   componentWillUnmount(){
       this.mounted=false
   }
   getGoods(){
       this.mounted=true
       let {page,num}=this
       if((page-1)*num < this.total){
           this.setState({loading:true})
           setTimeout( ()=>{
            let goods=this.state.goods.concat(this.props.list.slice(num*(page-1),num*(page)))
            this.page++;
            this.setState({goods:goods});
            this.setState({loading:false});
           },1000)
       }else{
           this.setState({hasMore:false})
       }
   }
   onReachEnd(){
       this.getGoods();
   }
   componentWillMount(){
       this.getGoods()
   }
    render(){
        let {goods,hasMore,loading}=this.state;
        return (
            <ListView 
            contentClassName={'Cinemap Cinema '}
            row={DelItem}
            dataList={goods}
            hasMore={hasMore}
            onReachEnd ={this.onReachEnd}
            loading = {loading}
            >
        </ListView>
            // <div className="Cinemap Cinema ">
            //     {
            //         list.map(item=>{
            //             return <DelItem key={item.id} item={item}/>
            //         })
            //     }
            // </div>
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
        {
            id:12,
            title:'SFC上影影城',
            site:'徐家汇衡山路838号（天平路口）',
            price:'40元起'

        },
        {
            id:13,
            title:'SFC上影影城',
            site:'徐家汇衡山路838号（天平路口）',
            price:'32元起'

        },
        {
            id:14,
            title:'SFC上影影城',
            site:'徐家汇衡山路838号（天平路口）',
            price:'43元起'

        },
        {
            id:15,
            title:'SFC上影影城',
            site:'徐家汇衡山路838号（天平路口）',
            price:'43元起'

        },
        {
            id:16,
            title:'SFC上影影城',
            site:'徐家汇衡山路838号（天平路口）',
            price:'22元起'

        },
        {
            id:17,
            title:'SFC上影影城',
            site:'徐家汇衡山路838号（天平路口）',
            price:'44元起'

        },
        {
            id:18,
            title:'SFC上影影城',
            site:'徐家汇衡山路838号（天平路口）',
            price:'45元起'

        },
        {
            id:19,
            title:'SFC上影影城',
            site:'徐家汇衡山路838号（天平路口）',
            price:'45元起'

        },
        {
            id:20,
            title:'SFC上影影城',
            site:'徐家汇衡山路838号（天平路口）',
            price:'30元起'

        },
        {
            id:21,
            title:'SFC上影影城',
            site:'徐家汇衡山路838号（天平路口）',
            price:'30元起'

        },
        {
            id:22,
            title:'SFC上影影城',
            site:'徐家汇衡山路838号（天平路口）',
            price:'42元起'

        }

    ]
}
export default Cinemap