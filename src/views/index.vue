<template>
  <div class="index-wrap">
    <myHeader />
    <div class="body">
      <div class="left-wrap">
        <div class="block">
          <div class="title">标题一</div>
          
        </div>
        <div class="block">
          <div class="title">标题一</div>
        </div>
        <div class="block">
          <div class="title">标题一</div>
        </div>
      </div>
    </div>
    <!-- <testEcharts /> -->
    <!-- <button @click="next">下一页</button> -->
  </div>
</template>

<script>
import { getArticles } from "@/api/articles";
import testEcharts from "@/components/testEcharts";
import myHeader from "@/components/header";
export default {
  data() {
    let that = this;
    return {
      show: true,
    };
  },
  components: {
    testEcharts,
    myHeader,
  },
  created() {
    this.getArticlesList();
  },
  methods: {
    getArticlesList() {
      getArticles().then((res) => {
        // 使用，返回数据
        let data = res.data.data.articles;
        this.articles = data;
      });
    },
    next() {
      this.$router.push({
        path: "/about",
      });
    },
  },
  watch: {
    obj: {
      handler: function (val, oldVal) {
        console.log(val, oldVal);
      },
      deep: true,
    },
  },
};
</script>

<style  lang="scss" scoped>
.index-wrap {
  height: 100vh;
}
</style>