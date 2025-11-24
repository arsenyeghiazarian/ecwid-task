<script setup lang="ts">
  import CartIcon from '@/components/CartIcon.vue';
  import { useTheme } from 'vuetify';
  import { computed } from 'vue';

  const theme = useTheme();
  const isDark = computed(() => theme.global.name.value === 'dark');
</script>

<template>
  <v-app-bar :elevation="4" height="50">
    <v-container fluid class="py-0">
      <div class="d-flex align-center">
        <v-btn to="/" size="small">Home</v-btn>
        <v-spacer></v-spacer>
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
