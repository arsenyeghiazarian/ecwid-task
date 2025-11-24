<script lang="ts" setup>
  import { useCartStore } from '@/store/cart';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const cart = useCartStore();

  const navigateToCart = () => {
    router.push('/cart');
  };
</script>

<template>
  <v-btn icon @click="navigateToCart()">
    <v-badge :content="cart.totalItems" size="small" location="top right">
      <v-icon icon="mdi-cart-outline"></v-icon>
    </v-badge>
  </v-btn>
</template>
