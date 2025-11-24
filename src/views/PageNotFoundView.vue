<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import { usePageTitle } from '@/composables/usePageTitle.ts';

  const { t } = useI18n();
  usePageTitle();
</script>

<template>
  <div class="d-flex align-center justify-center flex-column" style="margin-top: 200px">
    <h1 class="text-h2 text-primary text-center mb-8">{{ t('notFound.title') }}</h1>
    <h4 class="text-h4 text-center mb-8">{{ t('notFound.message') }}</h4>
    <v-btn to="/">{{ t('notFound.goToMain') }}</v-btn>
  </div>
</template>
