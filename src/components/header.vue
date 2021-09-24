<template>
  <div class="header-wrap">
      <div class="left-wrap">
          <div class="base-info">
              <div class="position">
                  山东
              </div>
              <div class="weather">
                  <img src="" alt="">
                  <span>多云</span>
              </div>
              <div class="temperature">
                  18~25℃
              </div>
          </div>
          <div class="option-wrap">
              <div class="synthesis">
                  综合态势
              </div>
              <div class="monitor">
                  视频监控
              </div>
          </div>
      </div>
      <div class="center-wrap">
          <span class="title">
              鲍店选煤厂智能管控平台
          </span>
      </div>
      <div class="right-wrap">
            <div class="option-wrap">
                <div class="synthesis">
                    设备监控
                </div>
                <div class="monitor">
                    功能预留
                </div>
            </div>
            <div  class="timer-wrap">
                <div class="date">
                    2021.08.16
                </div>
                <div class="week">
                    星期一
                </div>
                <div class="time">
                    16:40:20
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header-wrap{
    display: flex;
    justify-content: space-between;
    .left-wrap{
        display: flex;
        justify-content: space-between;
        flex: 1;
        .base-info{
            display: flex;
            justify-content: space-between;
            flex: 1;
        }
        .option-wrap{
             display: flex;
            justify-content: space-between;
        }
    }
    .center-wrap{
        white-space: nowrap;
        margin: 0 20px;
        flex: 0 0;
    }
    .right-wrap{
        display: flex;
        justify-content: space-between;
        flex: 1;
        .timer-wrap{
            display: flex;
            justify-content: space-between;
            flex: 1;
        }
         .option-wrap{
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>