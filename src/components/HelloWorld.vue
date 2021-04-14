<template>
  <full-page ref="fullpage" class="a" :options="options">
    <div class="slide">
      <button @click="$refs.fullpage.api.moveSlideLeft()">button here</button>
      <h3>Some Text</h3>
    </div>
    <div class="slide">
      <h3>A moree Text</h3>
    </div>
    <div class="slide">
      <h3>I dont know</h3>
    </div>
  </full-page>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function(){
    return {
      options: {
        afterLoad: this.afterLoad,
        navigation: true,
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
      },
    }
  },
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.slide {
  width: 100vw;
  height: 100vh;
}
h3{

  font-size: 5em;
  text-align: center;
  color: black;
  font-weight: bold;
}
</style>
