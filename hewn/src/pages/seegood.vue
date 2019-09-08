<template>
    <div>
        <div  class="fu">
            <div v-for="(v,i) in obj" :key=i class="zi">
                <a :href="v.href" :style="{color:v.color}" v-if="!v.line">{{v.title}}</a>
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
            url:"/see",
            method:"get"
        }).then((ok)=>{
            console.log(ok.data)
            this.obj=ok.data
        })
    },
}
</script>
<style scoped>
.fu{
    /* display: flex; */
   /* width: 100%; */
   overflow: auto;
   white-space: nowrap;
   
}
/* .fu>div:{
    width: 100%;
    height:0.01rem;
    margin:0;
    padding:0;
    border:0;
   
} */
.zi{
    display: inline-block;
    padding: .1rem;
    border: 1px solid #FFAC2D;
    font-size: .15rem;
    margin: .03rem;
}
.zi:empty{
    display:block;
    width: 100%;
    height:0.01rem;
    margin:0;
    padding:0;
    border:0;
}

/* a{
    white-space: nowrap;
    /* display: inline-block;
    padding: .1rem;
    border: 1px solid #FFAC2D;
    font-size: .15rem;
     margin: .03rem; */
/* } */ 

</style>