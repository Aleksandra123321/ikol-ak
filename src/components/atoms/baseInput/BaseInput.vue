<template>
  <div class="base-input">
    <label v-if="label" :for="name" class="base-input__label">
      {{ label }}
    </label>

    <div class="base-input__wrapper">
      <div
        class="base-input__container"
      >
        <input
          :id="name"
          :value="value"
          :name="name"
          :placeholder="placeholder"
          :class="{
            'base-input__input--invalid': isInvalid,
          }"
          :style="{ height: height + 'px' }"
          class="base-input__input"
          @blur="handleBlurEvent"
          @input="handleInputEvent($event)"
          @focus="isFocused = true"
          @keydown="handleKeyDownEvent"
          ref="inputRef"
        />
      </div>

      <small v-if="isInvalid" class="base-input__error" v-html="error"></small>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BaseInput'
}
</script>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from "vue";

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: null,
  },
  height: {
    type: String,
    default: "34",
  },
  label: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: null,
  },
  value: {
    type: [Number, String],
    default: null,
  }
});


const isInvalid = computed(() => {
  return !!props.error;
});

const emit = defineEmits<{
  (e: "update:value", text: string): void;
  (e: "blur"): void;
}>();

function handleInputEvent(event: {target: { value: ''}}) {
  emit("update:value", event.target.value);
}
function handleBlurEvent() {
  emit("blur");
}
</script>
