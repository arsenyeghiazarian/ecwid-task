<script setup lang="ts">
  import CartIcon from '@/components/CartIcon.vue';
</script>

<template>
  <v-app-bar :elevation="4" height="50">
    <v-container fluid>
      <div class="d-flex align-center">
        <v-btn to="/" size="small">Home</v-btn>
        <v-spacer></v-spacer>
        <cart-icon></cart-icon>
      </div>
    </v-container>
  </v-app-bar>
</template>

