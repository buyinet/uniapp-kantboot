<template>
	<view>
		
		<kt-status-bar></kt-status-bar>

		<!-- 使用uniapp获取应用的名称 -->
		<kt-i18n-text text-code="appName"></kt-i18n-text>

		<kt-button>
			<!-- 获取tabbar首页的文本名称 -->
			<kt-i18n-text text-code="tabbar.index"></kt-i18n-text>		
		</kt-button>
		

	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
