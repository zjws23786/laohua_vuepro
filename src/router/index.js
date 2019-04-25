import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from "./routers"
import iView from 'iview';
import storage from '../utils/sessionStorage'
import encryption from '../utils/encryption'
Vue.use(VueRouter)
Vue.use(iView)
const routerConfig = {
  // mode:"history",
  routes:routers
}

const router = new VueRouter(routerConfig)

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  if (!to.meta.userLogin){
    let user = !storage.getStr("USER_DATA") || encryption.j(storage.getStr('USER_DATA'))
    if (typeof user === 'object' && user.userId){
      next();
    } else{
      next({name:"login"})
    }
  } else{
    next();
  }
})

export default router;
