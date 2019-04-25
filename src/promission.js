import router from './router'
import axios from 'axios'
//获取组件方法
// const _import = require('./router/_import_'+process.env.NODE_ENV)

//用来获取后台 拿到的路由
var getRouter

//在钩子函数跳转之前调用
router.beforeEach((to,from,next)=>{
  //如果存在数据
  if (!getRouter){
    //如果路由数据为空
    if (!getObjArr('router')){
      axios.get('https://www.easy-mock.com/mock/5a5da330d9b48c260cb42ca8/example/antrouter')
        .then(res => {
        getRouter = res.data.data.router//后台拿到路由
        console.log(getRouter)
        saveObjArr('router', getRouter) //存储路由到localStorage
        //
        // routerGo(to, next)//执行路由跳转方法
      })
    }else{  //否则从localStorage拿到了路由
      getRouter = getObjArr('router');
      console.log(getRouter)
    }
  }else{
    next();
  }

})

function saveObjArr(name, data) { //localStorage 存储数组对象的方法
  localStorage.setItem(name, JSON.stringify(data))
}

//从localStorage 中获取数据
function getObjArr(name) {
  return JSON.parse(window.localStorage.getItem(name));
}
