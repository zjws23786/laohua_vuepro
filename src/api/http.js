/*
* 在项目中引入Axios网络请求框架
* npm install axios --save
* 由于axios是需要打包到生产环境中，所以需要使用 --save 来进行安装
* 引入axios
* 只需要在对应的vue文件中引入axios即可
* import axios from 'axios'
*
* 参考 https://www.jianshu.com/p/72d911b6d61d
* */
import axios from 'axios'

/**
 *  科普时间
 *  const  var let 区别
 *  const 定义的变量不可以修改，而且必须要初始化
 *  var  定义的变量可以修改，如果不初始化会输出undefined 不会报错
 *  let  是块级 作用域，函数内部使用let定义后，对函数外部无影响【相对java 局部变量】
 */
const TIME_OUT_MS = 60 * 1000 //默认请求超时时间
axios.defaults.baseURL = '/washingmanage';
/**
 *
 * @param response  返回对应数据
 */
function handleResults(response) {
  let remoteResponse = response.data;
  var result = {
    success: false,
    message: '',
    status: [],
    errorCode: '',
    data: {
      total: 0,
      results: []
    }
  };

  if (remoteResponse.rcode == 0){
    result.data.results = remoteResponse.data
    result.data.total = remoteResponse.total
    result.success = true
  }else{
    result.errorCode = remoteResponse.rcode
    result.rinfo = remoteResponse.rinfo
    result.success = false
  }
  return result
}


function handleUrl(url) {
  // url = BASE_URL + url
  // url = "http://api.chebaotec.com/washingmanage" + url
// BASE_URL是接口的ip前缀，比如http:10.100.1.1:8989/
  return url
}

/*
 * @param data 参数列表
 * @return
 */
function handleParams (data) {
  return data
}

export default {
  /**
   *
   * @param url
   * @param data
   * @param response 请求成功时的回调函数
   * @param exception 异常的回调函数
   */
  post (url, data, response, exception) {
    axios({
      method: 'post',
      url: handleUrl(url),
      // url: url,
      data: handleParams(data),
      timeout: TIME_OUT_MS,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }).then(
      (result) => {
        response(handleResults(result))
      }
    ).catch(
      (error) => {
        if (exception) {
          exception(error)
        } else {
          console.log(error)
        }
      }
    )
  },

  /*
    * get 请求
    * @param url
    * @param response 请求成功时的回调函数
    * @param exception 异常的回调函数
    */
  get (url, response, exception) {
    axios({
      method: 'get',
      url: handleUrl(url),
      timeout: TIME_OUT_MS,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }).then(
      (result) => {
        response(handleResults(result))
      }
    ).catch(
      (error) => {
        if (exception) {
          exception(error)
        } else {
          console.log(error)
        }
      }
    )
  },

  /*
     * 导入文件
     * @param url
     * @param data
     * @param response 请求成功时的回调函数
     * @param exception 异常的回调函数
     */
  uploadFile (url, data, response, exception) {
    axios({
      method: 'post',
      url: handleUrl(url),
      data: handleParams(data),
      dataType: 'json',
      processData: false,
      contentType: false
    }).then(
      (result) => {
        response(handleResults(result, data))
      }
    ).catch(
      (error) => {
        if (exception) {
          exception(error)
        } else {
          console.log(error)
        }
      }
    )
  },

  /*
    * 下载文件用，导出 Excel 表格可以用这个方法
    * @param url
    * @param param
    * @param fileName 如果是导出 Excel 表格文件名后缀最好用.xls 而不是.xlsx，否则文件可能会因为格式错误导致无法打开
    * @param exception 异常的回调函数
    */
  downloadFile (url, data, fileName, exception) {
    axios({
      method: 'post',
      url: handleUrl(url),
      data: handleParams(data),
      responseType: 'blob'
    }).then(
      (result) => {
        const excelBlob = result.data
        if ('msSaveOrOpenBlob' in navigator) {
          // Microsoft Edge and Microsoft Internet Explorer 10-11
          window.navigator.msSaveOrOpenBlob(excelBlob, fileName)
        } else {
          const elink = document.createElement('a')
          elink.download = fileName
          elink.style.display = 'none'
          const blob = new Blob([excelBlob])
          elink.href = URL.createObjectURL(blob)
          document.body.appendChild(elink)
          elink.click()
          document.body.removeChild(elink)
        }
      }
    ).catch(
      (error) => {
        if (exception) {
          exception(error)
        } else {
          console.log(error)
        }
      }
    )
  },

  uploadFileFormData (url, data, response, exception) {
    axios({
      method: 'post',
      url: handleUrl(url),
      data: data,
      timeout: TIME_OUT_MS,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(
      (result) => {
        response(handleResults(result))
      }
    ).catch(
      (error) => {
        if (exception) {
          exception(error)
        } else {
          console.log(error)
        }
      }
    )
  },

}
