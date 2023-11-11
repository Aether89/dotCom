<template>
  <v-container>
    <v-responsive class="align-center text-center">
      <v-img height="300" src="@/assets/pogka-Aether89.webp" />

      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

      <h1 class="text-h2 font-weight-bold">{{ $t("message.hello") }}</h1>

      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">

        <v-col cols="auto">
          <v-btn color="primary" @click="langSwitch" min-width="228" rel="noopener noreferrer" size="x-large"
            target="_blank" variant="flat">
            <v-icon icon="mdi-translate" size="large" start />

            {{ $t("fullname") }}
          </v-btn>
        </v-col>

      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
</script>

<script lang="ts">
export default {
  methods: {
    langSwitch() {
      const locale = this.$vuetify.locale.current

      locale === 'en' ? this.$vuetify.locale.current = 'fr' : this.$vuetify.locale.current = 'en'
    }
  },
}
</script>
