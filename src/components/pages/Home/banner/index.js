import React , {Component} from 'react';
import Swiper from 'swiper';
import axios from 'axios'
import './index.scss'
class Banner extends Component{
     constructor(props){
         super(props)
         this.state={
             banners:[]
         }
     }
     getBanners(){
         axios.get('/mz/v4/api/billboard/home',{
             params:{__t:Date.now()}
         }).then(res=>{
             
             this.setState({banners: res.data.data.billboards})
             setTimeout(()=>{
                 new Swiper(this.el,{
                     pagination:{el:'.swiper-pagination'},
                     loop:true
                 })
             },0)
         })
     }
     componentWillMount(){
         this.getBanners()

     }
     renderSlide () {
        let { banners } = this.state
        if (!banners.length) return (<div className="swiper-wrapper"></div>)

        return (
            <div className="swiper-wrapper">
                {
                    banners.map(item => {
                        return (
                            <div key = {item.id} className="swiper-slide">
                                <div className="img-box img-loading">
                                    <img width="100%" src={item.imageUrl} alt=""/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    render(){
        return (
            <div ref = {el => this.el = el} className="swiper-container ssss">
                {this.renderSlide()}
                <div className="swiper-pagination"></div>
            </div>
        )
    }
    componentDidUpdate(){

    }
}
export default Banner