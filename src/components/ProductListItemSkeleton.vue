<template>
  <v-card class="mb-3">
    <v-row no-gutters>
      <v-col cols="12" sm="4" md="3">
        <v-skeleton-loader type="image" height="200"></v-skeleton-loader>
      </v-col>
      <v-col cols="12" sm="8" md="9" class="pa-4 d-flex flex-column">
        <v-skeleton-loader type="heading"></v-skeleton-loader>
        <v-skeleton-loader type="text"></v-skeleton-loader>
        <div class="d-flex justify-space-between align-center">
          <v-skeleton-loader type="text" width="100" class="ma"></v-skeleton-loader>
          <v-skeleton-loader type="button" width="100" class="ma"></v-skeleton-loader>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

