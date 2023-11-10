<template>
    <v-footer class="bg-footerColour d-flex flex-column w-100" fixed style="max-height: 5vh;">
    <div class="text-center">
      {{ new Date().getFullYear() }} — <strong>{{ $t("global.owner") }}</strong>
    </div>
    </v-footer>
</template>