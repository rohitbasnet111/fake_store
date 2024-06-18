<template>
  <div>
    <section>
      <v-contianer>
        <h1 class="py-5">Add product</h1>

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field label="Enter Title" v-model="productData.title"></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field label="Enter Price" v-model="productData.price"></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field label="Enter desciption" v-model="productData.desciption"></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field label="Enter image" v-model="productData.image"></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field label="Enter category" v-model="productData.category"></v-text-field>
          </v-col>
        </v-row>
        <v-btn @click="productStore.postProduct(productData)" color="rgb(248,86,6)">Add Product</v-btn>
      </v-contianer>
    </section>
  </div>
</template>

<script setup>
const productData = ref({
  title: null,
  price: null,
  description: null,
  image: null,
  category: null,
});


</script>

<style  scoped>
</style>