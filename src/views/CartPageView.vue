<script setup lang="ts">
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { usePageTitle } from '@/composables/usePageTitle.ts';

  import ProductListItem from '@/components/ProductListItem.vue';
  import { useCartStore } from '@/store/cart';
  import { storeToRefs } from 'pinia';

  const { t } = useI18n();
  usePageTitle();
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
    <h1 class="font-weight-medium mb-5">{{ t('cart.title') }}</h1>
    <template v-if="items.length">
      <v-row>
        <v-col cols="12" sm="9">
          <div>
            <transition-group name="slide" tag="div">
              <div v-for="product in items" :key="product.id" cols="12">
                <product-list-item :product="product" :has-delete-btn="true" />
              </div>
            </transition-group>
          </div>
        </v-col>
        <v-col cols="12" sm="3" class="position-relative">
          <v-card :title="t('cart.summary')" class="position-sticky" style="top: 70px">
            <v-card-text class="d-flex justify-space-between">
              <p class="font-weight-medium">{{ t('common.total') }}:</p>
              <p>€{{ totalPrice }}</p>
            </v-card-text>
            <v-card-text>
              <v-btn color="green" class="w-100" @click="handleSubmit">
                {{ t('cart.checkout') }}
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>
    <h1 v-else class="font-weight-bold text-center mt-16">{{ t('cart.empty') }}</h1>
  </v-container>
  <template v-else>
    <div class="d-flex justify-center align-center flex-column">
      <h1 class="my-16">{{ t('cart.congratulations') }}</h1>
      <v-btn to="/">{{ t('cart.goShopping') }}</v-btn>
    </div>
  </template>
</template>

<style scoped>
  .slide-leave-active {
    transition: all 0.3s ease;
  }

  .slide-leave-to {
    opacity: 0;
    transform: translateX(-150px);
  }
</style>
