<script lang="ts" setup>
  import { useCartStore } from '@/store/cart';

  const cart = useCartStore();
</script>

<template>
  <v-btn icon flat variant="icon" class="position-relative" to="/cart">
    <v-badge :content="cart.totalItems" size="small" location="top right">
      <v-icon icon="mdi-cart-outline"></v-icon>
    </v-badge>
  </v-btn>
</template>
