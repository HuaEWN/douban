<template>
    <div>
        <tops></tops>
        
        <div class="diank">
            <div class="mores">
                <span>最受关注图书|虚构类</span>
                <a href="#">更多</a>
            </div>
             <div class="fuqin">
                <tushuson :bookson="arra"></tushuson>
            </div>
        </div>

        <div class="diank">
            <div class="mores">
                <span>最受关注图书|非虚构类</span>
                <a href="#">更多</a>
            </div>
             <div class="fuqin">
                <tushuson :bookson="arrb"></tushuson>
            </div>
        </div>

        <div class="diank">
            <div class="mores">
                <span>豆瓣纸书</span>
                <a href="#">更多</a>
            </div>
             <div class="fuqin">
                <books></books>
            </div>
        </div>

        <div class="diank">
           
             <div class="fuqin">
                <tushuson :bookson="arrc"></tushuson>
            </div>
        </div>

        <div class="diank">
            <div class="mores">
                <span>发现好书</span>
                <a href="#">更多</a>
            </div>
             <seebook></seebook>
        </div>

        <div class="diank">
            <div class="mores">
                <span>分类浏览</span>
                
            </div>
             <fenlei></fenlei>
        </div>
        
        <bots></bots>


    </div>
</template>
<script>
import tops from '../components/tops'
import tushuson from './tushuson'
import books from './books'
import seebook from './seebook'
import fenlei from './fenlei'
import bots from './bots'

export default {
    data(){
        return{
            obj:[]
        }
    },
    components:{
        tops,
        tushuson,
        books,
        seebook,
        fenlei,
        bots
    },
    computed:{
        arra(){
            var demoa=this.obj.filter((v,i)=>{
                if(i<10){
                    return this.obj[i]
                }
            });
            return demoa
        },
        arrb(){
            var demoa=this.obj.filter((v,i)=>{
                if(i>10&&i<20){
                    return this.obj[i]
                }
            });
            return demoa
        },
        arrc(){
            var demoa=this.obj.filter((v,i)=>{
                if(i>20&&i<30){
                    return this.obj[i]
                }
            });
            return demoa
        }
    },
    
    created(){
        this.axios({
            url:"/books",
            method:"get"
        }).then((ok)=>{
            console.log(ok.data);
            this.obj=ok.data
        })
    }
}
</script>
<style scoped>
    div{
        font-size: .16rem;
    }
    .diank{
        width: 85%;
        margin: .2rem auto 0;
    }
    .diank .mores{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .diank .fuqin{
        width: 100%;
    }
    .mores span{
        font-size: .14rem;
    }
    .mores a{
        font-size: .14rem;
        color: #42bd56;
    }
</style>