<template>
    <div>
        <div class="header">
            <span class="closes" @click="func()">关闭</span>
            <div class="seafu">
                <div class="mui-input-row mui-search">
                    <input type="search" class="mui-input-clear" placeholder="">
                </div>
            </div>
        </div>
        <div class="fathers">
            <div class="big" v-for="(v,i) in obj" :key=i>
                <a :href="v.hrefs" class="sptop" :style="{color:v.color}">{{v.tops}}</a>
                <span class="spbot">{{v.bots}}</span>
                
            </div>
        </div>

        <div class="bottoms">
            <div>
                <a href="http://localhost:8080/#/zhuce" class="ones">注册账号</a>
            </div>
            
            <div>
                <a href="http://localhost:8080/#/denglu">登录豆瓣</a>
            </div>
            <div>
                <a href="#" class="threes">使用桌面版</a>
            </div>
           <div>
                <a href="#">使用豆瓣App</a>
            </div>
        </div>

    </div>
</template>
<script>

export default {
    methods:{
        func(){
            // 回退上一个页面
            this.$router.go(-1);
        }
    },
    components:{
        
    },
    data(){
        return{
            obj:[
                {tops:"电影",bots:"影院热映",color:"#2384E8",hrefs:"http://localhost:8080/#/dianying"},
                {tops:"电视",bots:"正在热播",color:"#7A6ADB",hrefs:"http://localhost:8080/#/dianying"},
                {tops:"图书",bots:"畅销排行",color:"#9F7860",hrefs:"http://localhost:8080/#/tushu"},
                {tops:"同城",bots:"周末活动",color:"#E6467E",hrefs:"http://localhost:8080/#/guangbo"},
                {tops:"小组",bots:"志趣相投",color:"#2AB8CC",hrefs:"http://localhost:8080/#/xiaozu"},
                {tops:"音乐",bots:"新碟榜",color:"#F48F2E",hrefs:"http://localhost:8080/#/dianying"},
                {tops:"阅读",bots:"电子书",color:"#9F7860",hrefs:"http://localhost:8080/#/tushu"},
                {tops:"游戏",bots:"虚拟世界",color:"#5774C5",hrefs:"http://localhost:8080/#/dianying"},
                {tops:"应用",bots:"玩手机",color:"#596CDD",hrefs:"http://localhost:8080/#/dianying"},
                {tops:"东西",bots:"心爱之物",color:"#E1644D",hrefs:"http://localhost:8080/#/dianying"},
                {tops:"FM",bots:"红心歌单",color:"#40CFA9",hrefs:"http://localhost:8080/#/dianying"},
                {tops:"市集",bots:"购买原创",color:"#42BD56",hrefs:"http://localhost:8080/#/xiaozu"}
            ]
        }
    }
}
</script>
<style scoped>
    .header{
        height: .48rem;
        
        border-bottom: .01rem solid #f3f3f3;
        display: flex;
        justify-content: space-around;
    }
    .header .closes{
        display: inline-block;
        line-height: .48rem;
        height: .48rem;
        font-size: .15rem;    
        color: #42bd56;    
    }
    .seafu{
        margin-top: .08rem;
    }
    .fathers{
        margin-top: .1rem;
        padding-bottom: .3rem;
        border-bottom: .01rem solid #f3f3f3;
    }
    .big{
        display: inline-block;
        width: 33.3333%;
        text-align: center;
        margin-top: .3rem;
    }
    .big .sptop{
        font-size: .2rem;
        display: block;
    }
    .big .spbot{
        font-size: .06rem;
        display: block;
        color: #999;
    }
    .bottoms div{
        display: inline-block;
        width: 50%;
        float: left;
        border-bottom: .01rem solid #f3f3f3;
        margin-top: .1rem;
        padding-bottom: .1rem;
    }
    .bottoms div a{
        display: inline-block;
        width: 100%;
        font-size: .14rem;
        color: #42bd56;
        text-align: center;
        
        
    }
    .bottoms div .ones,.bottoms div .threes{
        border-right: .01rem solid #e5e5e5;
    }
    
</style>