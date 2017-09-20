<!-- 访问历史
 Created by douxc on 2017/9/20.
-->
<template>
  <div class="douxc-history-container">
    <el-table maxHeight="741" border :data="histories">
      <el-table-column label="标题" width="240px" prop="title">
        <template scope="scope">
          <p class="douxc-history-title">{{scope.row.title}}</p>
        </template>
      </el-table-column>
      <el-table-column label="地址">
        <template scope="scope"><a :title="scope.row.title" :href="scope.row.url">{{scope.row.url}}</a></template>
      </el-table-column>
      <el-table-column label="操作" align="center" headerAlign="center" width="78px">
        <template scope="scope">
          <el-icon name="delete" @click.native="deleteUrlHandler(scope.row)"></el-icon>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    name: 'History',
    data() {
      return {
        histories: []
      };
    },
    methods: {
      getHistory() {
        const _this = this;
        chrome.history.search({text: '', maxResults: 30}, function (results) {
          _this.histories = results;
        });
      },
      deleteUrlHandler(history) {
        const _this = this, {$message} = this;
        chrome.history.deleteUrl({url: history.url});
        $message({type: 'success', message: '删除成功'});
        _this.getHistory();
      }
    },
    created() {
      this.getHistory();
    }
  };
</script>
<style>
  .douxc-history-container {
    max-width: 1200px;
    margin: 20px auto 0 auto;
  }

  .douxc-history-container .el-icon-delete {
    cursor: pointer;
  }

  /*标题*/
  .douxc-history-title {
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: normal;
    white-space: nowrap;
  }
</style>
