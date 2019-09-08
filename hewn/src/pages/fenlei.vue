<template>
    <div>
        <div class="mui-content" >
            <div class="mui-row" style="background-color:#fff;" v-for="(v,i) in obj" :key="i">
                <div class="mui-col-sm-12 mui-col-xs-6" style="border-top:.01rem solid #ccc;border-right:.01rem solid #ccc;">
                    <li class="mui-table-view-cell" style="list-style:none">
                        <a class="mui-navigate-right" style="font-size:.16rem;color:#42bd56">
                            {{v.title}}   
                        </a>
                    </li>
                </div>
                <div class="mui-col-sm-12 mui-col-xs-6" style="border-top:.01rem solid #ccc;border-right:.01rem solid #ccc;">
                    <li class="mui-table-view-cell" style="list-style:none">
                        <a class="mui-navigate-right" style="font-size:.16rem;color:#42bd56">
                            {{v.titles}}  
                        </a>
                    </li>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            obj:[
                {title:"经典",titles:"冷门佳片"},
                
                {title:"豆瓣高分",titles:"动作"},
             
                {title:"喜剧",titles:"爱情"},
               
                {title:"悬疑",titles:"恐怖"},
               
                {title:"科幻",titles:"治愈"},
                
                {title:"文艺",titles:"成长"},
                
                {title:"动画",titles:"华语"},
                
                {title:"欧美",titles:"韩国"},
                
                {title:"日本",titles:" "}
            ]
        }
    }
}
</script>
<style scoped>
 
</style>