<template>
    <div>
        <div class="boxfu">
            <div class="box" v-for="(v,i) in bookson" :key="i">
                <img :src="v.image">
                <span>{{v.subtitle}}</span>
                <xingxing></xingxing>
            </div>    
        </div>
        
    </div>
</template>
<script>
import xingxing from './xingxing'
export default {
   components:{
       xingxing
   }, 
   
    props:{
        bookson:{
            type:Array,
            required:true
        }
    }
}
</script>
<style scoped>
.boxfu{
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    width: 100%;
    margin-top: .1rem;
}
    .box{
        width: 1rem;
        height: 1.7rem;
        margin-right: .1rem;
        flex-shrink: 0;
    }
    .box img{
        width: 1rem;
        height: 1.2rem;
    }
    .box span{
        font-size: .14rem;
        text-align: center;
        display: block;
        height: .25rem;
        line-height: .25rem;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        
    }
</style>