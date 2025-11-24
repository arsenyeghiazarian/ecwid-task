<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import AppHeader from '@/components/AppHeader.vue';
  import AppFooter from '@/components/AppFooter.vue';
  import GlobalError from '@/components/GlobalError.vue';
</script>
<template>
  <v-app>
    <app-header />
    <v-main>
      <router-view></router-view>
    </v-main>
    <app-footer />

    <global-error />
  </v-app>
</template>
