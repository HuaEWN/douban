<template>
    <div>
        <tops></tops>
        <div class="diank">
            <div class="mores">
                <span>免费在线观影</span>
                <a href="#">更多</a>
            </div>
             <div class="fuqin">
                <tvbfu :sfuprops="arra"></tvbfu>
            </div>
        </div>

         <div class="diank">
            <div class="mores">
                <span>影院热映</span>
                <a href="#">更多</a>
            </div>
             <div class="fuqin">
                <tvbfu :sfuprops="arrb"></tvbfu>
            </div>
        </div>
        
        <div class="diank">
            <div class="mores">
                <span>新片速递</span>
                <a href="#">更多</a>
            </div>
             <div class="fuqin">
                <tvbfu :sfuprops="arrc"></tvbfu>
            </div>
        </div>

        <div class="diank">
            <div class="mores">
                <span>新片速递</span>
                <a href="#">更多</a>
            </div>
             <seegood></seegood>
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
import tvbfu from './tvbfu'
import seegood from './seegood'
import fenlei from './fenlei'
import bots from './bots'

export default {
    components:{
        tops,
        tvbfu,
        seegood,
        fenlei,
        bots
    },
    computed:{
        arra(){
            var demoa=this.arr.filter((v,i)=>{
                if(i<12&&i>2){
                    return this.arr[i]
                }
            });
            return demoa
        },
        arrb(){
            var demoa=this.arr.filter((v,i)=>{
                if(i>16&&i<26){
                    return this.arr[i]
                }
            });
            return demoa
        },
        arrc(){
            var demoa=this.arr.filter((v,i)=>{
                if(i>20&&i<30){
                    return this.arr[i]
                }
            });
            return demoa
        }
    },
     data(){
        return{
            arr:[]
        }
    },
    created(){
        this.axios({
            url:"/cp",
            method:"get"
        }).then((ok)=>{
            // console.log(ok);
            this.arr=ok.data
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