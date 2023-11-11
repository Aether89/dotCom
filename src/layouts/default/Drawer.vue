<template>
          <v-list-item
            v-if="!mobile"
            prepend-avatar="@/assets/pogka-Aether89.webp"
            title="Aether89"
           />
  
          <v-divider />
  
          <v-list density="compact" nav>
            <v-list-item nav prepend-icon="mdi-human-greeting" :title="$t('global.aboutme')" value="aboutme" />
            <v-list-item nav prepend-icon="mdi-cog-outline" :title="$t('global.skills')" value="skills" />
            <v-list-item nav prepend-icon="mdi-application-braces-outline" :title="$t('global.programs-n-applications')" value="programs" />
            <v-list-item nav prepend-icon="mdi-puzzle-outline" :title="$t('global.mods-n-tools')" value="mods" />
            
            <v-list-item nav prepend-icon="mdi-web" :title="$t('global.websites')" value="websites" />
            <v-list-item nav prepend-icon="mdi-license" :title="$t('global.credits')" value="credits" />
          </v-list>
  </template>

  <script lang="ts">
  export default {
    props: {
      mobile: {
        type: Boolean,
        default: false,
      },
    },
  }
  </script>