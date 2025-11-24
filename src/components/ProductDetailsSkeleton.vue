<template>
  <v-container max-width="1120">
    <v-row>
      <v-col cols="12" sm="6">
        <v-skeleton-loader type="image" height="500"></v-skeleton-loader>
      </v-col>
      <v-col cols="12" sm="6">
        <v-skeleton-loader type="heading" class="mb-4"></v-skeleton-loader>
        <v-skeleton-loader type="paragraph" class="mb-2"></v-skeleton-loader>
        <v-skeleton-loader type="paragraph" class="mb-4"></v-skeleton-loader>
        <v-skeleton-loader type="text" width="150" class="mb-4"></v-skeleton-loader>
        <v-skeleton-loader type="button" width="120"></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>
