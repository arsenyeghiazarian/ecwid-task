<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';
  import { globalError, isGlobalErrorVisible, clearError } from '@/utils/errorHandler';

  const { t } = useI18n();
</script>

<template>
  <v-snackbar
    v-model="isGlobalErrorVisible"
    color="error"
    timeout="5000"
    location="top right"
    position="fixed"
    @update:model-value="clearError"
  >
    <div class="d-flex align-center">
      <v-icon start icon="mdi-alert-circle" class="me-2"></v-icon>
      <span>{{ globalError }}</span>
    </div>

    <template #actions>
      <v-btn variant="text" color="white" @click="clearError">{{ t('common.close') }}</v-btn>
    </template>
  </v-snackbar>
</template>
