<script setup lang="ts">
</script>

<template>
  <v-btn v-bind="{ ...$attrs}">
    <template v-for="slotName in Object.keys($slots)" :slot="slotName">
      <slot :name="slotName" :slot="slotName"></slot>
    </template>
  </v-btn>
</template>
