<template>
    <div>
      <el-col :span="12" :key="todo">
        <el-card class="box-card" shadow="hover" style="margin: 5px 0;">
          <el-row :gutter="12">
            <el-col :span="21">{{ todo }}</el-col>
            <el-col :span="3">
              <el-button @click="removeTodo" type="success" icon="el-icon-check" circle></el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TodoItem',
    props: ['todo', 'index'], // index を props として受け取る
    methods: {
      removeTodo() {
        // removeTodo メソッドに index を渡してイベントを発火
        this.$emit('remove-todo', this.index);
      },
    },
  }
  </script>