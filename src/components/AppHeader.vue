<script setup lang="ts">
  import { computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { useTheme } from 'vuetify';
  import CartIcon from '@/components/CartIcon.vue';
  import LanguageSwitch from '@/components/LanguageSwitch.vue';

  const { t } = useI18n();
  const theme = useTheme();
  const isDark = computed(() => theme.global.name.value === 'dark');
</script>

<template>
  <v-app-bar :elevation="4" height="50">
    <v-container fluid class="py-0">
      <div class="d-flex align-center">
        <v-btn to="/" size="small">{{ t('common.home') }}</v-btn>
        <v-spacer></v-spacer>
        <language-switch></language-switch>
        <v-btn
          :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          size="small"
          @click="theme.toggle()"
        ></v-btn>
        <cart-icon></cart-icon>
      </div>
    </v-container>
  </v-app-bar>
</template>
