<template>
<div>
  <el-container>
    <el-aside class="home_aside" width="200px">
      <el-menu router style="min-height: 800px">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-s-platform"></i>类型管理</template>
          <el-menu-item index="/adminaside/admintypemanager" :class="$route.path=='/adminaside/admintypemanager'?'is-active':''">
            <i class="el-icon-folder-add"></i>类型修改
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-s-platform"></i>报表管理</template>
          <el-menu-item index="/adminaside/adminchart" :class="$route.path=='/adminaside/adminchart'?'is-active':''">
            <i class="el-icon-folder-add"></i>商品统计
          </el-menu-item>
          <el-menu-item index="/adminaside/admingoods" :class="$route.path=='/adminaside/admingoods'?'is-active':''">
            <i class="el-icon-folder-add"></i>商品管理
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</div>
</template>

<script>
export default {
  name: "AdminAside"
}
</script>

<style scoped>

</style>