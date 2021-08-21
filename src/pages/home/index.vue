<template>
  <AtButton>
    23123123
  </AtButton>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue"
import Taro from "@tarojs/taro"
import { AtButton } from 'taro-ui'
// import "taro-ui/dist/style/components/button.scss"
import "./index.scss"

export default defineComponent({
  name: "home",
  components: {
    AtButton
  },
  // setup() {
  //   const state = reactive({
  //     isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
  //     isALIPAY: Taro.getEnv() === Taro.ENV_TYPE.ALIPAY,
  //     isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB,
  //   })
  //   function handleButtonClick() {
  //     const content = [...arguments].find(item => typeof item === 'string')
  //     if (state.isWEAPP) {
  //       Taro.showModal({
  //         content: content || '您点击了按钮！',
  //         showCancel: false
  //       })
  //     }
  //     if (state.isWEB) {
  //       alert(content || '您点击了按钮！')
  //     }
  //   }
  //   function onShareAppMessage() {
  //     return {
  //       title: 'Taro UI',
  //       path: '/pages/index/index',
  //       imageUrl: 'http://storage.360buyimg.com/mtd/home/share1535013100318.jpg'
  //     }
  //   }
  //   function onContact(event) {
  //     Taro.showToast({
  //       title: `呼起客服回调: ${event.detail}`
  //     })
  //   }
  //   function onSubmit(event) {
  //     Taro.showModal({
  //       content: `submit event detail: ${JSON.stringify(event.detail)}`,
  //       showCancel: false
  //     })
  //   }
  //   function onReset(event) {
  //     Taro.showModal({
  //       content: `reset event detail: ${JSON.stringify(
  //         event.detail || '无数据'
  //       )}`,
  //       showCancel: false
  //     })
  //   }
  //   function onGetUserInfo(event) {
  //     Taro.showModal({
  //       content: `getUserInfo event detail: ${JSON.stringify(event.detail)}`
  //     })
  //   }
  //   function onOpenSetting(event) {
  //     Taro.showToast({
  //       title: `onOpenSetting: ${event.detail}`
  //     })
  //   }
  //   return {
  //     ...toRefs(state),
  //     handleButtonClick,
  //     onShareAppMessage,
  //     onContact,
  //     onSubmit,
  //     onReset,
  //     onGetUserInfo,
  //     onOpenSetting
  //   }
  // }


});
</script>

