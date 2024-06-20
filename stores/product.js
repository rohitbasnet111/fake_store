import { defineStore } from "pinia";
import { axiosAPi } from "~/config/axios";

export const useProductStore = defineStore('product',{
    state: () => ({
        products:[],
        allProducts:[],
        product:null
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

    async fetchSingleProducts(id) {
        try{
            let response = await axiosAPi.get(`products/${id}`);

        this.product = response.data;

        }catch (e){
            console.warn(e)
        }
    },

    async updateproduct(id, data){
        try{
            let response = await axiosAPi.put(`/products/${id}`, data);
            if (response.status == 200) {
                alert("Product Updated");
                window.location.reload();
            }else{
                alert("Somehting went wrong!");

            }

        } catch(e){
            console.warn(e);
        }
    },

    async deleteProduct(id){
        try{
            let response = await axiosAPi.delete(`products/${id}`);
            if (response.status == 200){
                alert("Product deleted!");
                window.location.reload();
            }
            else {
                alert("Something went wrong!");
            }
        }
            catch(e){
                console.warn(e);
                alert("Something went wrong!");
            }
        
    }
    }


});