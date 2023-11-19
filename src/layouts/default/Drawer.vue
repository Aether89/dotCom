<template>
  <v-list nav>

    <div v-if="!mobile">
      <router-link class="noLink" to="/">
        <v-list-item prepend-avatar="@/assets/pogka-Aether89.webp" title="Aether89" />
      </router-link>
      <v-divider />
    </div>

    <v-list-item v-for="item in drawerItems" :key="item.value" :prepend-icon="item.icon" :title="$t(item.title)"
      :value="item.title" @click="$emit('closeDrawer')" :to="$t(item.to)"/>
  </v-list>
</template>

<script lang="ts">
export default {
  emits: ['closeDrawer'],
  props: {
    mobile: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      drawerItems: [
        { icon: 'mdi-human-greeting', title: 'global.pages.aboutme.name', value: 'aboutme', to: 'global.pages.aboutme.url' },
        { icon: 'mdi-cog-outline', title: 'global.pages.skills.name', value: 'skills', to: 'global.pages.skills.url' },
        { icon: 'mdi-application-braces-outline', title: 'global.pages.programs-n-applications.name', value: 'programs', to: 'global.pages.programs-n-applications.url' },
        { icon: 'mdi-puzzle-outline', title: 'global.pages.mods-n-tools.name', value: 'mods', to: 'global.pages.mods-n-tools.url' },
        { icon: 'mdi-web', title: 'global.pages.websites.name', value: 'websites', to: 'global.pages.websites.url' },
        { icon: 'mdi-license', title: 'global.pages.credits.name', value: 'credits', to: 'global.pages.credits.url' },
      ],
    };
  },
};
</script>
