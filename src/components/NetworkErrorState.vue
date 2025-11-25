<script lang="ts" setup>
  defineProps<{ message: string; retryLabel: string }>();

  const emit = defineEmits<{ (e: 'retry'): void }>();
</script>

<template>
  <div class="text-center my-12">
    <v-alert type="error" variant="tonal" class="mx-auto mb-4" max-width="520">
      {{ message }}
    </v-alert>
    <v-btn color="primary" prepend-icon="mdi-refresh" @click="emit('retry')">
      {{ retryLabel }}
    </v-btn>
  </div>
</template>
