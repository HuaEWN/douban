<template>
    <div>
        <div class="top">
             <a href="#" @click="fun()">取消</a>
            <h1> 登录豆瓣</h1>
        </div>

        
        <div class="tab">
            <div class="youxaing">
                <input type="text" id="email" placeholder="邮箱" v-model="tex">
            </div>
             <div class="mui-input-row chepwd">
            
                <input type="password" class="mui-input-password  chemima" placeholder="密码" v-model="pwd">
            </div>
            <div class="bt">
                <input type="button" value="登录" @click="func()">
            </div>
        </div>
        <a href="#" class="others">使用其他方式登录&找回密码</a>
        <div class="bot">
            <a href="#" class="aleft">注册豆瓣账号</a>
            <a href="#">下载豆瓣App</a>
            <p>{{texts}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tex:"",
            pwd:"",
            texts:""
        }
    },
    methods:{
        func(){
            var param=new URLSearchParams();
            param.append("tex",this.tex);
            param.append("pwd",this.pwd);
            this.axios({
                url:"http://localhost:3000/login",
                method:"post",
                data:param
            }).then((ok)=>{
                alert(ok.data.mes);
                if(ok.data.linkid==2){
                     this.texts="登录成功";
                     var i=4;
                    setInterval(()=>{
                        i--;
                        if(i==0){
                            window.location.href="http://localhost:8080/#/index"
                            // this.$router.push("/denglu");
                        }
                        // $("div").html("<p>注册成功"+i+"秒后自动跳转</p>");
                        this.texts="登录成功"+i+"秒后自动跳转";
                    },1000)
                 }
            },(err)=>{
                alert(err.data.mes);
            })
        },
        fun(){
            // 回退上一个页面
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
    .top{
        display: flex;
        height: .54rem;
        border-bottom: 1px solid #eee;
    }
    .top h1{
        font-size: .16rem;
        line-height: .54rem;
        
        display: inline-block;
        flex: 3;
    }
    .top a{
        font-size: .14rem;
        font-weight: 400;
        line-height: .54rem;
        display: inline-block;
        flex: 2;
        color: #42bd56;
        text-decoration: none;
    }
    .tab{
        font-size: 0;
        width: 100%;
        padding: .37rem .2rem .25rem .2rem;
    }
    
    .youxaing input{
        width: 100%;
        margin-top: .02rem;
        height: .4rem;
        border: 1px solid #ccc;
        border-radius: .04rem;
        text-indent: .02rem;
        outline: none;
    }
    .passw input{
        width: 100%;
        margin-top: .02rem;
        height: .5rem;
        border: 1px solid #ccc;
        border-radius: .04rem;
        text-indent: .1rem;
        outline: none;
    }
    .bt input{
        width: 100%;
        margin-top: .1rem;
        height: .5rem;
        border: none;
        background-color: #17aa52;
        font-size: .16rem;
        color: #fff;
        outline: none;
    }
    .others{
        font-size: .14rem;
        color: #aaa;
        display: block;
        width: 100%;
        text-align: center;
        text-decoration: none;
        margin-bottom: .5rem;
    }
    .bot{
        font-size: 0;
    }
    .bot a{
        display: inline-block;
        font-size: .14rem;
        color: #17aa52;
        text-decoration: none;
        
    }
    .bot .aleft{
        margin-left: .9rem;
        margin-right: .3rem;
    }
    .chemima{
        height: .4rem;
    }
    .mui-input-row .mui-input-password .mui-icon-eye{
        top: .17rem;
    }
    .bot p{
        font-size: .16rem;
        text-align: center;
        color: #17aa52;
        margin-top: .3rem;
    }
</style>