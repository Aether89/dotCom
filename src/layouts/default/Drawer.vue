<template>
      <v-list nav>

         <router-link v-if="!mobile" class="noLink" to="/">
         <v-list-item
            prepend-avatar="@/assets/pogka-Aether89.webp"
            title="Aether89"
           />
          </router-link>
  
          <v-divider />
                <v-list-item v-for="item in drawerItems" :key="item.value" :prepend-icon="item.icon" :title="$t(item.title)" :value="item.value" @click="$emit('closeDrawer')"/>
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
                    { icon: 'mdi-human-greeting', title: 'global.aboutme', value: 'aboutme', to: 'global.url.aboutme'},
                    { icon: 'mdi-cog-outline', title: 'global.skills', value: 'skills', to: 'global.url.skills' },
                    { icon: 'mdi-application-braces-outline', title: 'global.programs-n-applications', value: 'programs', to: 'global.url.programs-n-applications' },
                    { icon: 'mdi-puzzle-outline', title: 'global.mods-n-tools', value: 'mods', to: 'global.url.mods-n-tools' },
                    { icon: 'mdi-web', title: 'global.websites', value: 'websites', to: 'global.url.websites' },
                    { icon: 'mdi-license', title: 'global.credits', value: 'credits', to: 'global.url.credits' },
                  ],
                };
              },
            };
            </script>
