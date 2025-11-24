<script setup lang="ts">
  import { computed } from 'vue';
  import type { IProduct } from '@/interfaces/product';
  import { useCartStore } from '@/store/cart';

  interface Props {
    item: IProduct;
  }

  const props = defineProps<Props>();

  const cartStore = useCartStore();
  const { addToCart, removeFromCart, updateQuantity } = cartStore;

  const quantity = computed(() => {
    const cartItem = cartStore.getItem(props.item.id);
    return cartItem?.quantity ?? 0;
  });

  function increaseQuantity() {
    if (quantity.value === 0) {
      addToCart(props.item);
    } else {
      updateQuantity(props.item.id, quantity.value + 1);
    }
  }

  function decreaseQuantity() {
    const currentQty = quantity.value;
    if (currentQty > 1) {
      updateQuantity(props.item.id, currentQty - 1);
    } else {
      removeFromCart(props.item.id);
    }
  }
</script>
<template>
  <div @click.stop>
    <!-- Show Buy button if quantity is 0 -->
    <v-btn v-if="quantity === 0" variant="outlined" size="small" @click="increaseQuantity">
      Buy
    </v-btn>
    <!-- Show quantity selector when quantity is 1 or more -->
    <div v-else class="d-flex align-center">
      <v-btn icon="mdi-minus" size="small" density="compact" @click="decreaseQuantity"></v-btn>
      <span class="mx-2">{{ quantity }}</span>
      <v-btn
        icon="mdi-plus"
        size="small"
        density="compact"
        @click="increaseQuantity"
      >
      </v-btn>
    </div>
  </div>
</template>
