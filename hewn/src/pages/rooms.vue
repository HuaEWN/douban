<template>
    <div>
        <div v-for="(v,i) in room" :key="i">
            <div class="top">
                <div class="tp">
                    <img :src="v.images.small">
                    <span class="asd">{{v.title}}</span>
                </div>
                <span>{{v.group_member}}人</span>
            </div>
            <div class="bot">
                <span>{{v.group_topic.time}}</span><span>{{v.group_topic.title}}</span>
            </div>
        </div>
       
    </div>
</template>
<script>
export default {
    props:{
        room:{
            type:Array,
            required:true
        }
    }
}
</script>
<style scoped>
    .top{
        display: flex;
        justify-content: space-between;
        width: 85%;
        margin: .15rem auto 0;
    }
    .tp img{
        width: .5rem;
        height: .5rem;
    }
    .top span{
        height: .6rem;
        line-height: .6rem;
        font-size: .14rem;
        color: #ccc;
    }
    .top .asd{
        display: inline-block;
        width: 1.8rem;
        color: black;
        vertical-align: bottom;
        font-size: .16rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .bot{
        width: 85%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0 auto;
        font-size: .13rem;
        color: #ccc;
        padding: .1rem 0;
        border-bottom: 1px solid #ccc;
    }
</style>