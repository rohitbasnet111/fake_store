<template>
  <div>
    <v-contianer>
      <h1 class="py-5">Add product</h1>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            label="Enter Title"
            v-model="productData.title"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            label="Enter Price"
            v-model="productData.price"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            label="Enter desciption"
            v-model="productData.description"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            label="Enter image"
            v-model="productData.image"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            label="Enter category"
            v-model="productData.category"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn
        @click="productStore.updateProduct(productStore.product.id, productData)"
        color="rgb(248,86,6)"
        >Update Product</v-btn
      >
    </v-contianer>
  </div>
</template>

<script setup>
import {useProductStore} from "~/stores/product";

const r = useRoute();
const productStore = useProductStore();
await productStore.fetchSingleProducts(r.params.id);

const productData = ref({
  title: productStore.product.title,
  price: productStore.product.price,
  description: productStore.product.description,
  image: productStore.product.image,
  category: productStore.product.category,
});
</script>

<style  scoped>
</style>