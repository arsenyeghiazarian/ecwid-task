<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import BuyBtn from '@/components/BuyBtn.vue';
  import type { IProduct } from '@/interfaces/product';

  const { product } = defineProps<{ product: IProduct }>();

  const router = useRouter();
</script>
<template>
  <v-card hover @click="router.push(`/product/${product.id}`)">
    <v-img :src="product.imageUrl">
      <v-card-title class="text-black">{{ product.name }}</v-card-title>
    </v-img>
    <v-card-actions>
      <p class="font-weight-medium">{{ product.defaultDisplayedPriceFormatted }}</p>
      <v-spacer></v-spacer>
      <buy-btn :item="product"></buy-btn>
    </v-card-actions>
  </v-card>
</template>
