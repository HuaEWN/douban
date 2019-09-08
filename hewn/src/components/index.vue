<template>
    <div style="font-size:0">
        <tops></tops>

        <div class="sik">
            <router-link to="/dianying">影院热映</router-link>
            <router-link to="/tushu">欧美新碟榜</router-link>
            <router-link to="/zhuce">注册账号</router-link>
            <router-link to="/denglu">登录豆瓣</router-link>
        </div>

        <img src="../../static/run.gif" v-if="obj.length<=0" class="runing">
         <div class="books" v-for="(v,i) in obj" :key=i v-else> 
            <div class="bookleft">
                <h4>{{v.title}}</h4>
                <span>{{v.content}}</span>
                <em>{{v.category_name}}</em>
            </div>
            <div class="bookright">
                <img :src="v.image"/>
                <span v-if="v.subcategory_name">本活动来自:{{v.subcategory_name}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import tops from './tops'
export default {
    created(){
        setTimeout(()=>{
            this.axios({
            url:"/che",
            method:"get"
        }).then((data)=>{
            console.log(data);
            this.obj=data.data
        })
        },2000)
        
        
    },
    data(){
        return{
            obj:[]
        }
    },
    components:{
        tops
    }
}
</script>
<style scoped>
    .header{
        height: .48rem;
        display: flex;
        justify-content: space-around;
        border-bottom: .01rem solid #f3f3f3;
    }
    .header>a{
        font-size: .2rem;
        font-weight: 900;
        line-height: .48rem;
        color: #42bd56;

    }
    .headerson{
        display: flex;
        justify-content: space-between;
    }
    .headerson a{
        font-size: .16rem;
        margin-right: .1rem;
        line-height: .48rem;
    }
    .sik{
        
        margin: .15rem .2rem;
       
        
    }
    .sik a{
        width: 1.55rem;
        display: inline-block;
        text-align: center;
        margin-right: .05rem;
        margin-left: .05rem;
        margin-top: .1rem;
        height: .5rem;
        line-height: .5rem;
        color: #494949;
        background-color: #f6f6f6;
        font-size: .13rem;
    }
    .books{
        display: flex;
        justify-content: space-around;
        padding-top: .2rem;
        padding-bottom: .1rem;
        border-bottom: .01rem solid #f3f3f3;
    }
    .books .bookleft{
        width: 55%;
        display: flex;
        flex-direction: column;
    }
    .books .bookleft h4{
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: .16rem;
        color: #494949;
    }
    .books .bookleft span{
        width: 100%;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: .12rem;
        color: #aaa;
        margin-top: .1rem;
    }
    .books .bookleft em{
        font-size: .12rem;
        color: #aaa;
        margin-top: .2rem;
    }


    .books .bookright{
        width: 30%;
        display: flex;
        flex-direction: column;
    }
    .books .bookright img{
        height: .9rem;
        width: .9rem;
    }
    .books .bookright span{
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: .12rem;
        color: #aaa;
        margin-top: .1rem;
    }
    .runing{
        display: block;
        margin: 0 auto;
    }
</style>