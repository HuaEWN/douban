<template>
    <div>
        <div class="header">
            <router-link to="/index">豆瓣</router-link>
            <div class="headerson">
                <router-link to="/dianying">电影</router-link>
                <router-link to="/tushu">图书</router-link>
                <router-link to="/guangbo">广播</router-link>
                <router-link to="/xiaozu">小组</router-link>
                <router-link to="/sousuo" class="mui-icon mui-icon-search"></router-link>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    
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
   
</style>