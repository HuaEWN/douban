<template>
    <div>
        <tops></tops>
        <div class="dl">
            <div class="dlef">
                <span class="mui-icon mui-icon-contact"></span>
                <i>请先登录</i>
            </div>
            <div class="drig">
                <span class="mui-icon mui-icon-compose"></span>
                <span class="mui-icon mui-icon-camera"></span>
            </div>
        </div>

        <img src="../../static/run.gif" v-if="obj.length<=0" class="runing">
        <div v-else>
            <div class="topro">租房找室友</div>
            <rooms :room="arra"></rooms>
            <div class="mores">更多相关小组</div>
            <div class="topro">来聊五块钱</div>
            <rooms :room="arrb"></rooms>
            <div class="mores">来聊五块钱</div>
            <div class="topro">买买买</div>
            <rooms :room="arrc"></rooms>
            <div class="mores">更多相关小组</div>
        </div>
        
        <bots></bots>
    </div>
</template>
<script>
import tops from '../components/tops'
import rooms from './rooms'
import bots from './bots'
export default {
    data(){
        return{
            obj:[]
        }
    },
    computed:{
        arra(){
            return this.obj.xiaozua
        },
        arrb(){
            return this.obj.xiaozub
        },
        arrc(){
            return this.obj.xiaozuc
        }
        
    },
    components:{
        tops,
        rooms,
        bots
    },
    created() {
        setTimeout(()=>{
            this.axios({
            url:"/xiaozu",
            method:"get"
            }).then((ok)=>{
                // console.log(ok.data.xiaozua);
                this.obj=ok.data
            })
        },2000)
        
    },
}
</script>
<style scoped>
    div{
        font-size: .16rem;
    }
    .dl{
        width: 85%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding: 0 .1rem;
        border-bottom: .01rem solid #ccc;
    }
    .dlef span{
        font-size: .45rem;
        color: #ccc;
    }
    .dlef i{
        font-size: .16rem;
        display: inline-block;
        height: .45rem;
        line-height: .45rem;
        vertical-align: bottom;
        font-style: normal;
    }
    .drig span{
        font-size: .3rem;
        color: #ccc;
        height: .45rem;
        line-height: .45rem;
    }
    .runing{
        display: block;
        margin: 0 auto;
    }
    .topro{
        width: 85%;
        margin: 0 auto;
        font-size: .16rem;
        padding: .2rem 0 0;
    }
    .mores{
        width: 85%;
        margin: 0 auto;
        text-align: center;
        font-size: .16rem;
        padding: .2rem 0 0;
        color: #42bd56;
    }
</style>