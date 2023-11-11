<template>
    <div v-if="myThemesLength > 2">

        <v-menu v-model="menu" :close-on-content-click="false" location="left">
            <template v-slot:activator="{ props }">
                <v-btn icon="mdi-palette-swatch-variant" aria-label="Theme Switcher"  v-bind="props"></v-btn>
            </template>

            <v-list class="pl-2 pr-6 pt-4 bg-menuColour">
                <v-radio-group>
                    <div v-for="(theme, themeName) in myThemes.themes" :key="themeName" >
                        <v-radio :label="`${theme.icon} ${themeName}`" :value="themeName" @click="switchTheme(themeName)"></v-radio>
                    </div>
                </v-radio-group>
            </v-list>
        </v-menu>

    </div>
    <div v-else-if="myThemesLength == 2">
        <v-btn icon="mdi-palette-swatch-variant" @click="toggleTheme"></v-btn>
    </div>
    <div v-else>
    </div>
</template>

<script lang="ts">
import myThemes from '@/themes/myThemes'
import { useTheme } from 'vuetify'

export default {
    setup() {
        const theme = useTheme();
        return { theme, myThemes }
    },
    data() {
    return {
      menu: false,
    }
  },
    computed: {
        myThemesLength() {
            return Object.keys(myThemes.themes).length;
        }
    },
    methods: {
        toggleTheme() {
            const newTheme: string = this.theme.global.name.value == Object.keys(myThemes.themes)[0] ? Object.keys(myThemes.themes)[1] : Object.keys(myThemes.themes)[0];
            this.theme.global.name.value = newTheme;
        },
        switchTheme(newTheme: string) {
            this.theme.global.name.value = newTheme;
        }
    },
}
</script>