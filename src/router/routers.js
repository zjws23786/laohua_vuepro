import Main from '../views/Main.vue'

/**
 * meta 可以自定义路由相关参数
 * 怎么在路由中访问自定义配置的meta参数？
 * 例如：const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      children: [
        {
          path: 'bar',
          component: Bar,
          // a meta field
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
})
 *首先我们称呼routers配置中的每个路由对象为 路由记录，路由记录是可以相互嵌套的。
 *根据上的路由配置，/foo/bar这个URL将会匹配父路由记录以及子路由记录。
 * 一个路由匹配到的所有路由记录会暴露为 $router对象（还有在导航守卫中的路由对象 router.beforeEach()）的$route.matched数组。
 * 因此我们需要遍历 $route.matched 来检查路由记录中的meta字段
 router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
 *
 */


/**
 *  hideInBread: (false) 设为true后则不会渲染在面包屑
 *  userLogin: (false) 设为true后则检测是否登入
 *  hideInMenu: (false) 设为true后左侧菜单不会显示
 *  Badge: (false) 设为true后则显示右上角标
 *  iconUrl: '' icon路径
 *
 * */
export default [
  {
    path:"/login",
    name:"login",
    meta:{
      title:"奖赏洗衣管理系统-登录",
      hideInMenu: true,
      hideInBread: true,
      userLogin: true
    },
    component:()=> import("../views/login/login.vue")
  },
  {
    path: '/',
    component: Main
  },
  {
    path:"/index",
    name:"index",
    meta:{
      title:"首页",
      key:"1",
      hideInBread:true,
      iconUrl:"http://api.chebaotec.com/app/app/common/20190313/66e3c3a1f7a59d3f38567e61c4fbfd80.png"
    },
    component:Main
  }
]
