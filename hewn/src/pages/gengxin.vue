<template>
    <div>
        <div class="gx">
            <div class="dou">
                <img src="../../static/db.png">
            </div>
            <div class="texts">
                <div class="rj">
                    <span>豆瓣写了日记</span>
                    <span>2017-03-01 19:30:41</span>
                </div>
                <div class="kuang">
                    <div>豆瓣App 4.12.0 主要更新</div>
                    <span>你厌恶他喝酒爱钱，又意外让你这么喜欢，在他的身上，你信过一辈子的谎言</span>
                </div>
                <div class="ico">
                    <div class="dianzan">
                        <span class="mui-icon mui-icon-paperplane"><i>4</i></span>
                        <span class="mui-icon mui-icon-chatbubble"><i>0</i></span>
                        <span class="mui-icon mui-icon-loop"><i>1</i></span>
                    </div>
                    <div class="dian">
                        <span class="mui-icon mui-icon-more"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .gx{
        width: 85%;
        margin: 0 auto;
        border-bottom: .01rem solid #ccc;
        display: flex;
        padding: .2rem 0;
    }
    .dou{
        width: 15%;
    }
    .dou img{
        width: .5rem;
        height: .5rem;
        border-radius: 50%;
    }
    .texts{
        width: 85%;
        padding: 0 .1rem;
    }
    .rj{
        display: flex;
        flex-direction: column;
    }
    .rj span{
        font-size: 14px;    
        color: #8f8f94;
    }
    .kuang{
        width: 100%;
        border: 1px solid #ccc;
        padding: .1rem;
        margin-top: .1rem;
        margin-bottom: .2rem;
    }
    .kuang>div{
        font-size: .17rem;
        color: #333;
    }
    .kuang>span{
        font-size: .1rem;
        color: #ccc;
    }
    .ico{
        display: flex;
        justify-content: space-between;
    }
    .ico .dianzan{
        width: 60%;
        display: flex;
        justify-content: space-around;
    }
    .dianzan span{
        font-size: .23rem;
        color: #8f8f94;
    }
    .dianzan span i{
        color: #8f8f94;
        font-size: .13rem;
    }
</style>