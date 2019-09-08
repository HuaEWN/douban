<template>
    <div>
        <div class="boxfu">
            <div class="box" v-for="(v,i) in sfuprops" :key="i">
                <img :src="v.images.small">
                <span>{{v.title}}</span>
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
        sfuprops:{
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
        height: .2rem;
        line-height: .2rem;
    }
</style>