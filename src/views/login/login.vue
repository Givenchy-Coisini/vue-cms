<template>
  <div class="login">
    <video
      poster="../../assets/images/login/video-cover.jpeg"
      loop
      autoplay
      muted
    >
      <source src="../../assets/images/login/night.mp4" />
    </video>
    <login-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import loginPanel from './components/login-panel.vue'
export default defineComponent({
  components: {
    loginPanel
  },
  setup() {
    return {}
  }
})
</script>
<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  video {
    position: absolute;
    /* Vertical and Horizontal center*/
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
}
</style>
