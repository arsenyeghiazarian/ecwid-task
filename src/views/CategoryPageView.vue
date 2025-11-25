<script lang="ts" setup>
  import { onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { usePageTitle } from '@/composables/usePageTitle.ts';

  import ProductCard from '@/components/ProductCard.vue';
  import ProductCardSkeleton from '@/components/ProductCardSkeleton.vue';
  import NetworkErrorState from '@/components/NetworkErrorState.vue';
  import { useCategory } from '@/composables/useCategory.ts';

  const { t } = useI18n();
  usePageTitle();
  const { fetchData, isLoading, category, products, hasNetworkError } = useCategory();

  onMounted(fetchData);
</script>

<template>
  <div>
    <network-error-state
      v-if="hasNetworkError"
      :message="t('common.networkIssue')"
      :retry-label="t('common.retry')"
      @retry="fetchData"
    />
    <v-container v-else max-width="1120">
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
          <p class="text-h3">{{ t('category.noProducts') }}</p>
        </div>

        <v-row v-else justify="center">
          <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4">
            <product-card :product="product" />
          </v-col>
        </v-row>
      </template>
    </v-container>
  </div>
</template>
