<template>
  <v-layout class="rounded rounded-md mx-6 mt-6">

    <v-app-bar class="px-4" color="headerColour" flat>
      <strong>{{ $t("global.sitetitle") }}</strong>
      <v-spacer />
      <v-btn @click="langSwitch" prepend-icon="mdi-translate">
        {{ $t("global.language") }}
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" expand-on-hover rail permanent @click="rail = false" color="navColour" :width="300">
      <default-drawer />
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center bg-canvasColour" style="min-height: 300px;">
      <default-view />
    </v-main>

  </v-layout>
  <default-footer />
</template>

<script lang="ts" setup>
import DefaultView from './View.vue'
import DefaultFooter from './Footer.vue'
import DefaultDrawer from './Drawer.vue'

</script>

<script lang="ts">
export default {
  data() {
    return {
      drawer: true,
      rail: true,
    }
  },
  methods: {
    langSwitch() {
      const locale = this.$vuetify.locale.current

      locale === 'en' ? this.$vuetify.locale.current = 'fr' : this.$vuetify.locale.current = 'en'
    }
  },
  mounted() {
    console.log(this.$vuetify.locale.current)
    console.log(this.$vuetify.theme.themes)
  },
}
</script>
