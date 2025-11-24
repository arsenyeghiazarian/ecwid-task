<script setup lang="ts">
  import { ref } from 'vue';

  import ProductListItem from '@/components/ProductListItem.vue';
  import { useCartStore } from '@/store/cart';
  import { storeToRefs } from 'pinia';

  const cartStore = useCartStore();
  const { clearCart } = cartStore;
  const { items, totalPrice } = storeToRefs(cartStore);
  const isSubmitted = ref<boolean>(false);

  function handleSubmit() {
    clearCart();
    isSubmitted.value = true;
  }
</script>
<template>
  <v-container v-if="!isSubmitted" fluid>
    <h1 class="font-weight-medium mb-5">Your Shopping Cart</h1>
    <template v-if="items.length">
      <v-row>
        <v-col cols="12" sm="9">
          <v-row dense>
            <v-col v-for="product in items" :key="product.id" cols="12">
              <product-list-item :product="product" :has-delete-btn="true" />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="3" class="position-relative">
          <v-card title="Summary" class="position-sticky" style="top: 70px">
            <v-card-text class="d-flex justify-space-between">
              <p class="font-weight-medium">Total:</p>
              <p>€{{ totalPrice }}</p>
            </v-card-text>
            <v-card-text>
              <v-btn color="green" class="w-100" @click="handleSubmit"> Checkout </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>
    <h1 v-else class="font-weight-bold text-center mt-16">Cart is empty</h1>
  </v-container>
  <template v-else>
    <div class="d-flex justify-center align-center flex-column">
      <h1 class="my-16">Congratulations on your purchase!</h1>
      <v-btn to="/">Go to Shopping</v-btn>
    </div>
  </template>
</template>
