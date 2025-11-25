import { handleError, isNetworkError } from '@/utils/errorHandler';
import ProductsService from '@/services/products.service';
import { computed, ref } from 'vue';
import type { IProduct } from '@/interfaces/product';
import { useRoute } from 'vue-router';

export function useProductDetails() {
  const route = useRoute();

  const isLoading = ref(true);
  const product = ref<IProduct | null>(null);
  const productId = computed(() => +route.params.id);
  const hasNetworkError = ref(false);

  const fetchDetails = async () => {
    if (isNaN(productId.value)) {
      isLoading.value = false;
      hasNetworkError.value = false;
      handleError(new Error('Invalid category ID'));
      return;
    }

    try {
      isLoading.value = true;
      hasNetworkError.value = false;
      const productsResponse = await ProductsService.getProductDetails(productId.value);
      product.value = productsResponse.data;
    } catch (err) {
      handleError(err);
      hasNetworkError.value = isNetworkError(err);
    } finally {
      isLoading.value = false;
    }
  };

  return { isLoading, product, fetchDetails, hasNetworkError };
}
