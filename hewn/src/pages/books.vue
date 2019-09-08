<template>
    <div>
        <div class="fu">
            <div class="left">
                <img :src="obj.image">
            </div>
            <div class="right">
                <div class="top">
                    <span>{{obj.subtitle}}</span>
                    <i>{{obj.price}}</i>
                </div>
                <div class="bots">{{obj.summary}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            obj:[]
        }
    },
    created() {
        this.axios({
            url:"/books",
            method:"get"
        }).then((ok)=>{
            console.log(ok.data[31])
            this.obj=ok.data[31]
        })
    },
}
</script>
<style scoped>
    .fu{
        display: flex;
        justify-content: space-between; 
    }
    .left img{
        width: 1rem;
        height: 1.2rem;
    }
    .right{
        display: flex;
        flex-direction: column;
        flex: 1;
    padding: 0 .2rem;
    }
    .right .top{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .top span{
        font-size: .16rem;
    }
    .top i{
        font-size: .14rem;
        color: red;
    }
    .right .bots{
        font-size: .12rem;
        margin-top: .2rem;
        height: .6rem;
        overflow: hidden;
    }
</style>