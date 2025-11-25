<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { useI18n } from 'vue-i18n';
  import DOMPurify from 'dompurify';
  import BuyBtn from '@/components/BuyBtn.vue';
  import type { IProduct } from '@/interfaces/product';
  import { useCartStore } from '@/store/cart';

  interface Props {
    product: IProduct;
    hasDeleteBtn?: boolean;
  }

  const { product, hasDeleteBtn = false } = defineProps<Props>();
  const { t } = useI18n();

  const { removeFromCart } = useCartStore();
  const router = useRouter();
  const showDialog = ref<boolean>(false);

  const plainDescription = computed(() => {
    if (!product.description) return '';
    const stripped = DOMPurify.sanitize(product.description);
    return stripped.length > 250 ? stripped.substring(0, 250) + '...' : stripped;
  });

  const handleItemRemove = () => {
    removeFromCart(product.id);
    showDialog.value = false;
  };
</script>
<template>
  <v-card hover class="mb-3" @click="router.push(`/product/${product.id}`)">
    <v-row no-gutters>
      <v-col cols="12" sm="4" md="3">
        <v-img :src="product.imageUrl" :alt="product.name" height="200" cover></v-img>
      </v-col>
      <v-col cols="12" sm="8" md="9" class="d-flex flex-column">
        <v-card-title class="text-h6">
          <div class="d-flex align-center justify-space-between">
            <span class="text-h6">{{ product.name }}</span>
            <v-btn
              v-if="hasDeleteBtn"
              density="compact"
              variant="text"
              size="small"
              icon="mdi-delete"
              @click.stop="showDialog = true"
            ></v-btn>
          </div>
        </v-card-title>
        <v-card-text class="flex-grow-1">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p v-if="plainDescription" class="text-body-2" v-html="plainDescription"></p>
        </v-card-text>
        <v-card-actions class="justify-space-between align-center px-4">
          <p class="font-weight-medium text-h6 mb-0">
            {{ product.defaultDisplayedPriceFormatted }}
          </p>
          <div class="d-flex align-center">
            <buy-btn :item="product"></buy-btn>
          </div>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
  <v-dialog v-model="showDialog" max-width="500" persistent>
    <v-card>
      <v-card-text class="mt-7">{{ t('cart.deleteConfirm') }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          :text="t('common.yes')"
          variant="flat"
          color="green"
          @click="handleItemRemove"
        ></v-btn>
        <v-btn
          color="red"
          variant="flat"
          :text="t('common.no')"
          @click="showDialog = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
