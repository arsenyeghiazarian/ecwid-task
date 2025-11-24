<script lang="ts" setup>
  import { onMounted } from 'vue';

  import ProductCard from '@/components/ProductCard.vue';
  import ProductCardSkeleton from '@/components/ProductCardSkeleton.vue';
  import { useCategory } from '@/composables/useCategory.ts';

  const { fetchData, isLoading, category, products } = useCategory();

  onMounted(fetchData);
</script>

<template>
  <v-container max-width="1120">
    <template v-if="isLoading">
      <v-skeleton-loader type="heading" class="my-5"></v-skeleton-loader>
      <v-row justify="center">
        <v-col v-for="n in 6" :key="n" cols="12" sm="6" md="4">
          <product-card-skeleton />
        </v-col>
      </v-row>
    </template>

    <template v-else-if="category && products">
      <h1 class="font-weight-medium my-5">{{ category!.name }}</h1>

      <div v-if="products.length === 0" class="text-center my-16">
        <p class="text-h3">No products found in this category.</p>
      </div>

      <v-row v-else justify="center">
        <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4">
          <product-card :product="product" />
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>
