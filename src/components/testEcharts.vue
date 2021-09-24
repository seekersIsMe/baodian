<template>
<div class="chart-wrap">
    <div id="myChart">
    </div>
</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      xData: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
      yData: [5, 20, 36, 10, 10, 20]
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
      let that = this
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
      
        setInterval(() =>{
          this.reset()
            myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: that.xData
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: that.yData
            }]
        });
        }, 1000)
    },
    reset() {
      this.xData.shift()
      this.xData.push('短袖' + (Math.random() * 10 | 0))
      this.yData.shift()
      this.yData.push(Math.random() * 50 | 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-wrap{
  padding: 50px;
  perspective:1500;
  -webkit-perspective:1500; 
}
#myChart{
  width: 400px;
  height: 300px;
  transform: rotateX(45deg);
  -webkit-transform: rotateX(45deg);
}
</style>