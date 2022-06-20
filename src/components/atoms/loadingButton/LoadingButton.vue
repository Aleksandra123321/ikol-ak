<template>
  <BaseButton
    v-bind="props"
    class="loading-button"
    :class="{'loading-button--isLoading' : isLoading}"
    data-loading-button
    @click="buttonClicked"
  >
    <slot />

    <div class="loading-button__loader"></div>
  </BaseButton>
</template>

<script lang="ts">
export default {
  name: 'LoadingButton'
}
</script>

<script lang="ts" setup>
import BaseButton from '@/components/atoms/baseButton/BaseButton.vue'
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  height: {
    type: String,
    default: '34'
  },
  outlined: {
    type: Boolean,
    default: false
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: String,
    default: '4'
  },
  filled: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: '60'
  }
});

const emit = defineEmits<{
  (e: 'click'): void;
}>();

function buttonClicked() {
  emit('click');
}
</script>
