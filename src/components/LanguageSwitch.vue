<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  const { locale } = useI18n();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  ];

  function changeLanguage(lang: string) {
    locale.value = lang;
    localStorage.setItem('locale', lang);
  }
</script>

<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn v-bind="props" size="small" icon="mdi-translate" variant="text"></v-btn>
    </template>
    <v-list density="compact">
      <v-list-item
        v-for="lang in languages"
        :key="lang.code"
        density="compact"
        :active="locale === lang.code"
        @click="changeLanguage(lang.code)"
      >
        <template #prepend>
          <span class="me-2">{{ lang.flag }}</span>
        </template>
        <v-list-item-title>{{ lang.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
