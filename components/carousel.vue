<template>
    <div>
  <v-carousel
    height="400"
    show-arrows="hover"
    cycle
    hide-delimiter-background
  >
  <v-carousel-item
    src="https://hips.hearstapps.com/hmg-prod/images/hoka-zinal-13085-1643565794.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://assets.teenvogue.com/photos/5b7d8f9f86f90e79ebbde88d/master/pass/0fa25b2456624bfa381a43d7541d10a6.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://therumblingbelly.wordpress.com/wp-content/uploads/2016/03/shorts.jpg"
    cover
  ></v-carousel-item>
   
  </v-carousel>


    </div>
</template>
<script>
  export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>

<script setup>


</script>

<style lang="scss" scoped>

</style>