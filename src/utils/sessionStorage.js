var storage = {
  //设置对象
  set(key,value){
    //value值转化成String格式，然后在进行存储
    localStorage.setItem(key,JSON.stringify(value));
  },
  //返回对象
  get(key){
    //转化成对应的json格式，然后再进行返回
    return JSON.parse(localStorage.getItem(key));
  },

  //设置字符串
  setStr(key,value){
    localStorage.setItem(key,value);
  },
  //直接返回字符串
  getStr(key){
    return localStorage.getItem(key);
  },

  remove(key){
    localStorage.removeItem(key);
  }
}

//对外暴露模块
export default storage;
