<template>
    <div>
        <h1>欢迎加入豆瓣</h1>

        <div class="mui-input-row chepwd">
        
            <input type="text" class="mui-input-clear" placeholder="邮箱" v-model="tex">
        </div>
        <div class="mui-input-row chepwd">
            
            <input type="password" class="mui-input-password" placeholder="密码" v-model="pwd">
        </div>
        <div class="mui-input-row chepwd">
        
            <input type="text" class="mui-input-clear" placeholder="用户名" v-model="uname">
        </div>
        
        <div class="chepwd">
            <input type="button" class="bbb" value="立即注册" @click="fun()">
        </div>
        <span>点击[注册]代表你已阅读并同意用户使用协议</span>

        <a href="#">下载豆瓣App</a>
        <p>{{texts}}</p>
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            tex:"",
            pwd:"",
            uname:"",
            texts:""
        }
    },
    methods:{
        fun(){
            this.axios({
                url:"http://localhost:3000/zhuce",
                type:"get",
                params:{
                    tex:this.tex,
                    pwd:this.pwd,
                    uname:this.uname
                }
            }).then((ok)=>{
                alert(ok.data.mes);
                 if(ok.data.linkid==1){
                     this.texts="注册成功";
                     var i=4;
                    setInterval(()=>{
                        i--;
                        if(i==0){
                            window.location.href="http://localhost:8080/#/denglu"
                            // this.$router.push("/denglu");
                        }
                        // $("div").html("<p>注册成功"+i+"秒后自动跳转</p>");
                        this.texts="注册成功"+i+"秒后自动跳转";
                    },1000)
                 }
            },(err)=>{
                alert(ok.data.mes);
            })
        }
    }
}
</script>
<style scoped>
    
    h1{
        font-size: .4rem;
        text-align: center;
        margin-top: .4rem;
        margin-bottom: .6rem;
        color: #42bd56;
        font-weight: 500;
    }
    .chepwd{
        width: 90%;
        margin: 0 auto;
        margin-bottom: .01rem;
    }
    .chepwd .bbb{
        width: 100%;
        height: .4rem;
        margin-top: .1rem;
        margin-bottom: .2rem;
        border: none;
        background-color: #17aa52;
        color: #fff;
    }
    span{
        font-size: .14rem;
        color: #aaa;
        font-weight: 400;
        display: block;
        text-align: center;
        margin-bottom: .4rem;
    }
    a{
        font-size: .16rem;
        display: block;
        text-align: center;
        color: #17aa52;
    }
    p{
        font-size: .16rem;
        text-align: center;
        color: #17aa52;
        margin-top: .3rem;
    }
</style>