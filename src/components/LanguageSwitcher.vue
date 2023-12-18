<template>
    <div v-if="languagesLength > 2">

        <v-menu v-model="menu" :close-on-content-click="false" location="bottom">
            <template v-slot:activator="{ props }">
                <v-btn prepend-icon="mdi-translate" aria-label="Language Switcher"  v-bind="props">{{ languageName }}</v-btn>
            </template>

            <v-list class="pl-2 pr-6 pt-4 bg-menuColour">
                <v-radio-group v-model="selectedLanguage">
                    <div v-for="(language, languageAbr) in languages" :key="languageAbr" >
                        <v-radio :label="`${language.fullname} ${language.flag}`" :value="languageAbr"></v-radio>
                    </div>
                </v-radio-group>
            </v-list>
        </v-menu>

    </div>
    <div v-else-if="languagesLength == 2">
        <v-btn prepend-icon="mdi-translate" @click="toggleLanguage">{{ languageName }}</v-btn>
    </div>
    <div v-else>
    </div>
</template>

<script lang="ts">
import languages from '@/i18n/languages'

export default {
    setup() {
        return { languages }
    },
    props: {
        mobile: {
            type: Boolean,
            default: false
        }
    },
    data() {
    return {
      menu: false,
      selectedLanguage: 'fr',
    }
  },
    computed: {
        languagesLength() {
            return Object.keys(languages).length;
        },
        languageName() {
            return this.mobile ? this.$t('shortname') : this.$t('fullname')
        }
    },
    methods: {
        toggleLanguage() {
            const locale = this.$vuetify.locale.current
      locale === 'en' ? this.$vuetify.locale.current = 'fr' : this.$vuetify.locale.current = 'en'
      document.title = this.$t('sitetitle');
        },
        switchLanguage(language: string) {
            this.$vuetify.locale.current = language;
            document.title = this.$t('sitetitle');
        }
    },
    watch: {
        selectedLanguage() {
            this.switchLanguage(this.selectedLanguage);
        }
    },
    mounted() {
        this.selectedLanguage = this.$vuetify.locale.current;
    }
}
</script>