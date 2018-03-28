// 设置cookie
export function setCookie(name, value) {
  var exp = new Date();
  exp.setTime(exp.getTime() + 3 * 24 * 60 * 60 * 1000); //3天过期
  document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + exp.toGMTString() + ";path=/";
  return true;
};
//读取cookie
export function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return '';
};
export function ksort(arr) {
  var i, order = [], new_arr = {};
  for (i in arr) {
    order.push(i);
  }
  order.sort(/*function(a,b){
return a < b ? -1 : 1;
}*/);
  for (i = 0; i < order.length; i++) {
    new_arr[order[i]] = arr[order[i]];
  }
  return new_arr;
};
