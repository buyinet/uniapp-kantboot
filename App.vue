<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')

			// 模拟异步请求，获取语言包
			uni.setStorageSync('languageCode', 'zh-CN');
			
			// 模拟语言包数据
			uni.setStorageSync("i18n:appText", {
				"appName": "KantBoot",
				"login": "登录",
				"tabbar":{
					"index":"首页"
				}
			});

			setTimeout(() => {
				// 获取语言包
				let languageCode = uni.getStorageSync('languageCode');
				uni.setStorageSync("i18n:appText", {
					"appName": "KantBoot",
					"login": "Login",
					"tabbar":{
						"index":"Index"
					}
				});				
				
				let appText = uni.getStorageSync('i18n:appText');
				// 设置语言包
				this.$kt.i18n.setAppText(appText);
				
				// 设置语言包
				uni.$emit('languageChange', {
					languageCode
				});


			}, 3000);

			

		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
