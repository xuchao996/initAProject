<template>
  <div>
    {{msg}}
    <router-link to="/foo">To Foo</router-link>
    <router-link to="/bar">To Bar</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
	msg: "hello wp!"
      }
    }
  }
</script>

<style>
</style>

