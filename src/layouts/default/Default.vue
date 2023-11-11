<template>
  <v-layout :class="layoutClass">

    <v-app-bar color="headerColour" flat>
      <v-app-bar-nav-icon v-if="smAndDown" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div v-else class="px-4"></div>
      <strong>{{ $t("global.sitetitle") }}</strong>
      <v-spacer />
      <language-switcher class="mr-2" :mobile="smAndDown"></language-switcher>
      <theme-switcher class="mr-2"></theme-switcher>
    </v-app-bar>

    <v-navigation-drawer v-if="smAndDown" v-model="drawer" permanent location="top" color="navColour" :width="300">
      <default-drawer :mobile="true"></default-drawer>
    </v-navigation-drawer>

    <v-navigation-drawer v-else v-model="drawer" expand-on-hover rail permanent @click="rail = false" color="navColour" :width="300">
      <default-drawer :mobile="false"></default-drawer>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center bg-canvasColour" style="min-height: 300px;">
      <default-view></default-view>
    </v-main>

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
      drawer: true,
      rail: true,
    }
  },
  methods: {
    langSwitch() {
      const locale = this.$vuetify.locale.current
      locale === 'en' ? this.$vuetify.locale.current = 'fr' : this.$vuetify.locale.current = 'en'
      document.title = this.$t('global.sitetitle');
    }
  },
  computed: {
    smAndDown() {
      return this.$vuetify.display.smAndDown ? true : false;
    },
    language() {
      return this.smAndDown ? this.$t('global.language.shortname') : this.$t('global.language.fullname')
    },
    layoutClass() {
      const size = this.smAndDown ? 2 : 6;
      return 'rounded rounded-md elevation-10 mx-' + size + ' mt-' + size;
    },
  },
  watch: {
    smAndDown() {
      this.drawer  = !this.smAndDown ? true : false;
    },
  },
  mounted() {
    //
  },
}
</script>
