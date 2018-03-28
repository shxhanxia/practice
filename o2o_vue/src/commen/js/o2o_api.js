import axios from 'axios'
import qs from 'qs'
import md5 from 'js-md5'
import {Base64} from 'js-base64'
import { setCookie, getCookie, ksort } from "./base-method"

// 根据域名判断请求的接口
if (window.location.host == "wap.copdao.com") {
  var url = 'http://o2o.copdao.com/home/api/entrance';
} else if (window.location.host == "prewap.copdao.com") {
  var url = 'http://o2o-dev.copdao.com/home/api/entrance';
} else {
  var url = 'http://o2o-test.copdao.com/home/api/entrance';
}
var instance = axios.create({
  timeout: 1000,
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
});
let DOMAIN_LOGIN = url + 'oauth/weixin?jump_url=' + escape(location.href);
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做处理
  let data = JSON.parse(Base64.decode(response.data))
  return data
  if (data.status === 1) {
    return data.data;
  } else if (data.status === 2) {
    if (getCookie("sid") >= 0) {
      setCookie("sUrl", location.href)
    }
    // tips('登录状态超时，即将自动重新登录');
    setTimeout(function () {
      if (location.href.split('#')[0] != 'http://localhost:8097/') {
        location.href = DOMAIN_LOGIN
      }
    }, 3000)
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

//data 的数据格式: data = {method: '', params: {}}
export function o2o_http(data={}) {
  let sign = '', params_str_split = '', params_arr = [], request = '', finalParams = {}
  if (!data.params)data.params = {}
  // 基础参数
  const commonParams = {
    from: 'wap',
    ticket: getCookie('ticket'),
    system: '1.0',
    app_v: '1.0'
  }
  // 时间戳
  let _t = Date.parse(new Date()) / 1000
  //最终的数据
  data = Object.assign({}, commonParams, data)
  data.params = ksort(data.params)
  //获取签名
  if (JSON.stringify(data.params) != '{}'){
    for (let key in data.params){
      params_str_split = key + '=' + data.params[key]
      params_arr.push(params_str_split)
    }
    sign = params_arr.join('&')
  }
  sign += '&copdao=' + _t
  sign = md5(sign).toUpperCase()
  request = Base64.encode(JSON.stringify(data))
  finalParams.request = request
  finalParams._v = '1.0'
  finalParams._t = _t
  finalParams.sign = sign
  //判断请求方法
  switch (data.method.split('.')[2]){
    case 'get':
      return axios.get(url, {params: finalParams})
          break
    case 'post':
      return axios.post(url, qs.stringify(finalParams))
          break
  }
}
