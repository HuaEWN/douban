<template>
    <div>
        <tops></tops>
        <div class="bj">
            <span>打开App,浏览更多</span>
            <div class="btn">
                <button>急速下载</button>
                <button>打开</button>
            </div>
        </div>
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
        <gengxin></gengxin>
        <gengxin></gengxin>
        <gengxin></gengxin>
        <gengxin></gengxin>
        <gengxin></gengxin>

        <div class="sb">
            <a href="#">显示更多广播</a>
        </div>

        <bots></bots>

    </div>
</template>
<script>
import tops from '../components/tops'
import gengxin from './gengxin'
import bots from './bots'
export default {
    components:{
        tops,
        gengxin,
        bots
    }
}
</script>
<style scoped>
    div{
        font-size: .16rem;
    }
    .bj{
        background: url(../../static/bg.jpg)no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: space-between;
        padding: .15rem 0 .15rem .15rem;
        width: 85%;
        margin: 0 auto;
    }
    .bj span{
        height: .47rem;
        line-height: .47rem;
        font-size: .14rem;
        color: #42bd56;
    }
    .btn button{
        background-color: 0;
        border: .01rem solid #42bd56;
        color: #42bd56;
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
    .sb{
        width: 85%;
        margin: 0 auto;
        padding: .3rem 0;
        
    }
    .sb a{
        color: #42bd56;
        display: block;
        text-align: center;
    }
</style>