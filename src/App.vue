<template>
  <v-app>
      <router-view/>
  </v-app>
</template>

<script lang="ts">
  export default {
  name: 'MyComponent',
  mounted() {
    document.title = this.$t('sitetitle');
  }
}
</script>
