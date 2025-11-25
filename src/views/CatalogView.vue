<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { useCatalogData } from '@/composables/useCatalogData.ts';
  import { usePageTitle } from '@/composables/usePageTitle.ts';

  import ProductCard from '@/components/ProductCard.vue';
  import ProductListItem from '@/components/ProductListItem.vue';
  import ProductCardSkeleton from '@/components/ProductCardSkeleton.vue';
  import ProductListItemSkeleton from '@/components/ProductListItemSkeleton.vue';
  import CategoryCardSkeleton from '@/components/CategoryCardSkeleton.vue';
  import NetworkErrorState from '@/components/NetworkErrorState.vue';

  const { t } = useI18n();
  usePageTitle();
  const { fetchData, isLoading, categories, products, hasNetworkError } = useCatalogData();
  const viewMode = ref<'grid' | 'list'>('grid');

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
      <h2 class="text-center font-weight-medium mb-5">{{ t('catalog.categories') }}</h2>
      <v-row justify="center">
        <template v-if="isLoading">
          <v-col v-for="n in 6" :key="n" cols="12" sm="6" md="4">
            <category-card-skeleton />
          </v-col>
        </template>
        <template v-else>
          <v-col v-for="category in categories" :key="category.id" cols="12" sm="6" md="4">
            <v-card hover :to="`/category/${category.id}`">
              <v-img
                class="align-end"
                gradient="to bottom, rgba(0, 144, 255,.1), rgba(0, 144, 255,.5)"
                height="200px"
                :alt="category.name"
              >
                <v-card-title class="text-white">{{ category.name }}</v-card-title>
              </v-img>
            </v-card>
          </v-col>
        </template>
      </v-row>
      <div class="d-flex justify-space-between align-center my-5">
        <h2 class="font-weight-medium mb-0">{{ t('catalog.products') }}</h2>
        <v-btn-toggle v-model="viewMode" mandatory variant="outlined">
          <v-btn value="grid" icon="mdi-view-grid"></v-btn>
          <v-btn value="list" icon="mdi-view-list"></v-btn>
        </v-btn-toggle>
      </div>
      <!-- Grid View -->
      <v-row v-if="viewMode === 'grid'" justify="center">
        <template v-if="isLoading">
          <v-col v-for="n in 6" :key="n" cols="12" sm="6" md="4">
            <product-card-skeleton />
          </v-col>
        </template>
        <template v-else>
          <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4">
            <product-card :product="product" />
          </v-col>
        </template>
      </v-row>
      <!-- List View -->
      <div v-else>
        <template v-if="isLoading">
          <product-list-item-skeleton v-for="n in 6" :key="n" />
        </template>
        <template v-else>
          <product-list-item v-for="product in products" :key="product.id" :product="product" />
        </template>
      </div>
    </v-container>
  </div>
</template>
