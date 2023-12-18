<template>
  <v-layout :class="layoutClass" style="max-height: 90vh;">

    <v-app-bar color="headerColour" flat>
      <v-app-bar-nav-icon v-if="smAndDown" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div v-else class="px-4"></div>
      <router-link class="noLink" to="/"><strong>{{ $t("sitetitle") }}</strong></router-link>
      <v-spacer />
      <language-switcher class="mr-2" :mobile="smAndDown"></language-switcher>
      <theme-switcher class="mr-2"></theme-switcher>
    </v-app-bar>

    <v-navigation-drawer v-if="smAndDown" v-model="drawer" location="top" color="navColour" style="height:fit-content">
      <default-drawer :mobile="true" @closeDrawer="drawer = !drawer"></default-drawer>
    </v-navigation-drawer>

    <v-navigation-drawer v-else v-model="drawer" expand-on-hover rail permanent floating @click="rail = false"
      color="navColour" :width="300">
      <default-drawer :mobile="false"></default-drawer>
    </v-navigation-drawer>

    <v-main class="align-center justify-center bg-canvasColour scrollable">
      <default-view :style="{ 'max-width': defaultViewWidth + 'vw' }"></default-view>
    </v-main>
    <div class="mb-16"></div>
  </v-layout>

  <default-footer />
</template>

<script lang="ts" setup>
import DefaultView from './View.vue'
import DefaultFooter from './Footer.vue'
import DefaultDrawer from './Drawer.vue'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

</script>

<script lang="ts">
export default {
  data() {
    return {
      drawer: false,
      rail: true,
    }
  },
  methods: {
    langSwitch(): void {
      const locale = this.$vuetify.locale.current
      locale === 'en' ? this.$vuetify.locale.current = 'fr' : this.$vuetify.locale.current = 'en'
      document.title = this.$t('sitetitle');
    },
    drawerToggleMobile(): void {
      this.drawer = !this.smAndDown ? true : false;
    }
  },
  computed: {
    smAndDown(): boolean {
      return this.$vuetify.display.smAndDown ? true : false;
    },
    language(): string {
      return this.smAndDown ? this.$t('language.shortname') : this.$t('global.language.fullname')
    },
    layoutClass(): string {
      const size = this.smAndDown ? 2 : 6;
      return 'rounded rounded-md elevation-10 mx-' + size + ' mt-' + size;
    },
    defaultViewWidth(): number {
      return this.smAndDown ? 100 : 75;
    },
  },
  watch: {
    smAndDown(): void {
      this.drawerToggleMobile();
    },
  },
  mounted() {
    this.drawerToggleMobile();
  },
}
</script>

<style>
@import '@/styles/shared.css';
</style>