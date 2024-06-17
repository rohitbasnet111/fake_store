<template>
  <div>
    <h1>Products</h1>

    <section>
      <v-container>
        <div class="text-right py-5">
          <v-btn to="/products/store" color="rgb(248,86,6)" >Add <v-icon>mdi-plus</v-icon></v-btn>
        </div>
        <v-table density="compact">
          <thead>
            <tr>
              <th class="text-left">ID</th>
              <th class="text-left">image</th>
              <th class="text-left">Title</th>
              <th class="text-left">Price</th>
              <th class="text-left">Category</th>
              <th class="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in productStore.allProducts" :key="product">
              <td>{{ product.id }}</td>
              <td>
                <v-img :src="product.image" :lazy-src="product.image"></v-img>
              </td>
              <td>{{ product.title }}</td>
              <td>{{ product.price }}</td>
              <td>{{ product.category }}</td>
              <td>
                <nuxt-link class="px-2">
                  <v-icon>mdi-pencil</v-icon>
                </nuxt-link>

                <nuxt-link>
                  <v-icon>mdi-delete</v-icon>
                </nuxt-link>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { useProductStore } from "~/stores/product";
const productStore = useProductStore();

await productStore.fetchALLProducts();
</script>

<style  scoped>
h1 {
  color: orangered;
  text-align: center;
  padding: 10px;
}
</style>