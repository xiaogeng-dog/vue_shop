<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据统计</el-breadcrumb-item>
      <el-breadcrumb-item>数据报表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card> <div id="main" style="width: 750px;height:400px;"></div></el-card>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  mounted() {
    this.initEchart()
  },
  data() {
    return {
      //需要合并的数据
      option: {
        title: {
          text: '用户来源'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#E9EEF3'
            }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            boundaryGap: false
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ]
      }
    }
  },
  methods: {
    async initEchart() {
      const { data: res } = await this.$http.get('reports/type/1')
      if (res.meta.status !== 200) {
        return this.$message.error('获取折线图数据失败！')
      }
      console.log(res.data)
      let myChart = this.$echarts.init(document.getElementById('main'))
      const result = _.merge(res.data, this.option)
      myChart.setOption(result)
    }
  }
}
</script>

<style lang="less" scoped></style>
