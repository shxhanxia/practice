<template>
	<div class="wrapper">
		<p>微信接口调用</p>
	</div>
</template>
<script type="text/javascript">
	import wx from 'weixin-js-sdk'
	export default {
		data() {
			return {

			}
		},
		created() {
			wx.ready(function(){
				wx.getLocation({
				    type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
					    success: function (res) {
				    	console.log(res);
				        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
				        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
				        var speed = res.speed; // 速度，以米/每秒计
				        var accuracy = res.accuracy; // 位置精度
				        wx.openLocation({
						    latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
						    longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
						    name: '韩侠测试名', // 位置名
						    address: '韩侠测试说明', // 地址详情说明
						    scale: 16, // 地图缩放级别,整形值,范围从1~28。默认为最大
						    infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转

						});
			    	}

				});
			});
			wx.error(function(res){
				console.log(res)
			});
		},
	}
</script>
<style scoped>
	
</style>