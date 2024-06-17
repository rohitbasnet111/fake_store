<template>
    <div>
        <section>
            <carousel/>
        </section>

        <!-- Products -->
        <section class="py-7">
            <v-container>
                
                

                
                <h1 class="text-center text-h4 pb-5">Products</h1>
                <div class="viewall">
                <nuxt-link  to="/products">view all<v-icon>mdi-arrow-right</v-icon></nuxt-link>
                </div>

                <v-row>
                    <v-col cols="12" md="3" lg="3" v-for="product in productStore.products" :key="product">                                                                                                                                                                                                  
                        <card  :product="product" />
                    </v-col>
                </v-row>

            </v-container>
        </section>
        <!-- Products end -->
        

        

    </div>
</template>

<script setup>
import { useProductStore } from "~/stores/product";
const productStore = useProductStore();

await productStore.fetchProducts();

</script>

<style  scoped>
.viewall{
   text-align: right;
   padding: 5px 0;
}
.viewall a{
    color:orangered;
    text-decoration:none;
}

</style>