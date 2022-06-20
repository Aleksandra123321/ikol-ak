<template>
  <button
    class="base-button"
    :class="classObject"
    :disabled="disabled"
    data-base-button
    @click="buttonClicked"
  >
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: 'BaseButton'
}
</script>

<script lang="ts" setup>
import { computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  filled: {
    type: Boolean,
    default: false
  },
  height: {
    type: String,
    default: ''
  },
  outlined: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: String,
    default: '4'
  },
  width: {
    type: String,
    default: ''
  }
});

const emit = defineEmits<{
  (e: 'click'): void;
}>();

function buttonClicked() {
  emit('click');
}

const classObject = computed(() => {
  const tmp: Record<string, boolean> = {};
  if (props.filled) {
    tmp['base-button--filled'] = true;
  }
  if (props.outlined) {
    tmp['base-button--outlined'] = true;
  }
  return tmp;
});
</script>
