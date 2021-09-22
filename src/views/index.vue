<template>
  <div class="index-wrap">
    首页
    <button @click="doSome">点击变化</button>
    <button @click="next">下一页</button>
  </div>
</template>

<script>
import { getArticles } from "@/api/articles";
export default {
  data() {
    let that = this;
    return {
      show: true,
    };
  },
  created() {
      this.getArticlesList()
  },
  methods: {
    getArticlesList () {
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
    doSome() {},
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
  background: salmon;
}
</style>