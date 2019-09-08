<template>
    <div>
        <el-rate
            v-model="value5"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
        </el-rate>
    </div>
</template>
<script>
export default {
     data() {
      return {
        value5: 4.7
      }
    }
}
</script>
<style>
    .el-rate__icon{
        font-size: .14rem !important;
        margin-right: 0 !important;
    }
</style>