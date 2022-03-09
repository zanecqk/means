<template>
  <div>
    <h1>vuex学习</h1>
    <p>{{ this.$store.state.city }}</p>
    <p>{{ this.$store.state.count }}</p>
    <h1>{{ count }}</h1>
    <p>{{ this.$store.getters.getcount }}</p>
    <h1>{{ getcount }}</h1>
    <button @click="fn1">+</button>
  </div>
</template>

<script>
// 配置API
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  props: [],
  components: {},
  data() {
    return {};
  },

  methods: {
    fn1() {
      //   vue规定不能直接改变全局数据
      //   this.$store.state.count++
      // 同步改变数据
      // this.$store.commit('add',1)
      // 异步改变数据
      // this.$store.dispatch('actionadd',22)

      // 配置API改变数据  同步版本
      //   this.add(1);
      // 配置API改变数据  异步版本
      this.actionadd(33);
    },

    ...mapMutations(["add"]),
    ...mapActions(["actionadd"]),
  },

  computed: {
    ...mapState(["count"]),
    ...mapGetters(["getcount"]),
  },

  watch: {},

  filters: {},

  beforeCreate() {},

  created() {},

  beforeMount() {},

  mounted() {},

  beforeUpdate() {},

  updated() {},

  beforeDestroy() {},

  destroyed() {},
};
</script>


<style  lang='scss' scoped>
</style>