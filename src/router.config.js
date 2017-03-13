import Container from './components/Container.vue'
import Column from './components/Column.vue'
import Follow from './components/Follow.vue'
import UserInfo from './components/UserInfo.vue'
import Article from './components/Article.vue'


export default [
  {
    path:'/container',
    component:Container
  },
  {
    path:'/column',
    component:Column
  },
  {
    path:'/follow',
    component:Follow
  },
  {
    path:'/article/:id',
    component:Article
  },
  {
    path:'/user-info',
    component:UserInfo
  },
  {
    path:'/ ',
    redirect:'/container'
  },
  {
    path:'*',
    redirect:'/container'
  }
]
