import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import TodoList from '../views/TodoList.vue'
import IssueList from '../views/IssueList.vue'
import Todosissues from '../views/TodosIssues.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // '/todos'パス追加
  {
    path: '/todo-list',
    name: 'TodoList',
    component: TodoList
  },
  // Aboutに関する定義削除
  {
    path: '/issue-list',
    name: 'IssueList', // ページの名前を指定（オプション）
    component: IssueList,
  },
  {
    path: '/todos-issues',
    name: 'TodosIssues',
    component: Todosissues
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
