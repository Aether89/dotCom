<template>
  <v-list nav>

    <div v-if="!mobile">
      <router-link class="noLink" to="/">
        <v-list-item prepend-avatar="@/assets/pogka-Aether89.webp" title="Aether89" />
      </router-link>
      <v-divider />
    </div>

    <v-list-item v-for="(item, key) in drawerItems" :key="key" :prepend-icon="item.icon" :title="item.name"
  :value="key" @click="$emit('closeDrawer')" :to="item.url"></v-list-item>
</v-list>


</template>


<script lang="ts" >
import languages from "@/i18n/languages";
const lang = languages;
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
    };
  },
  computed: {
  drawerItems() {
    let currentLocale = this.$vuetify.locale.current; // Get the current locale
    let pagesKeys = lang[currentLocale].pages; // Get the keys under 'pages'
    return pagesKeys;
  }
}

};
</script>
