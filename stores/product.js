import { defineStore } from "pinia";
import { axiosAPi } from "~/config/axios";

export const useProductStore = defineStore('product',{
    state: () => ({
        products:[],
        allProducts:[]
    }),
    actions: {
        async fetchProducts(){
            let response = await axiosAPi.get("products?limit=4");

            this.products = response.data;
        },


        async fetchALLProducts() {
            try{
                let response = await axiosAPi.get("products");

            this.allProducts = response.data;

            }catch (e){
                console.warn(e)
            }
        },
        async postProduct(productData) {
            try{
                let response = await axiosAPi.post("products", productData);

            if (response.status == 200){
                alert("Product Added Successfully!");
                console.warn(response.data);
                navigateTo('/products');

            }
            else{
                alert("Somehting went wrong!");
            }

            }catch (e){
                console.warn(e)
            }
    },
    }


});