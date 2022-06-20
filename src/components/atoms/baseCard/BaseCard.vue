<template>
  <div
    class="base-card"
    :class="{'base-card--error' : isError}"
  >
    <p
      v-if="title"
      class="base-card__title"
      data-base-card-title
    >
      {{ title }}
    </p>

    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'BaseCard'
}
</script>

<script lang="ts" setup>
import { defineProps } from 'vue';
defineProps({
  title: {
    type: String,
    default: null
  },
  isError: {
    type: Boolean,
    default: false
  }
});
</script>

