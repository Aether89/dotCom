<template>
  <v-layout class="rounded rounded-md">

    <v-navigation-drawer color="navColour" permanent width="72"></v-navigation-drawer>

    <v-app-bar class="px-4" color="headerColour" flat>
      <strong>{{ $t("global.sitetitle") }}</strong>
    </v-app-bar>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <default-view />
    </v-main>

  </v-layout>
  <default-footer />
</template>

<script lang="ts" setup>
import DefaultView from './View.vue'
import DefaultFooter from './Footer.vue'

</script>
