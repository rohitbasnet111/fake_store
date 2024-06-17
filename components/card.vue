<template>
  <div>
    <v-card height="350">
      <v-img
        height="250"
        :src="product.image"
      ></v-img>
      <v-card-title>
        {{product.title}}
      </v-card-title>
      <h4 class="px-4 font-weight-light">Price: Rs {{product.price}}/-</h4>
    </v-card>
  </div>
</template>

<script setup>
defineProps(["product"]);
</script>

<style  scoped>
</style>