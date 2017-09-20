<template>
  <div class="hello">
    <el-menu mode="horizontal">
      <el-menu-item  index="0">sss</el-menu-item>
    </el-menu>
    <History></History>
  </div>
</template>

<script>
  import History from './History.vue';
  export default {
    name: 'Home',
    components:{
      History
    }
  }
</script>
