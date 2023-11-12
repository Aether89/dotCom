<template>
  <v-footer class="bg-transparent d-flex flex-column w-100" style="max-height: 5vh;">
    <div class="text-center">
      {{ footerYear }} — <strong>{{ $t("global.owner") }}</strong>
    </div>
  </v-footer>
</template>

<script lang="ts">
export default {
  data() {
    return {
      startingYear: 2018,
    }
  },
  computed: {

    footerYear() {
      const year = new Date().getFullYear()
      return year > this.startingYear ? `${this.startingYear} - ${year}` : `${this.startingYear}`;
    }
  },
}
</script>