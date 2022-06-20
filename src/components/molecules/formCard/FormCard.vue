<template>
  <BaseCard
    title="Wprowadź współrzędne dwóch punktów geograficznych"
    class="formCard"
  >
    <div class="formCard__box">
      <BaseInput
        class="formCard__input"
        label="Szerokość georaficzna pierwszego punktu"
        name="lat1"
        placeholder="67.1234"
        v-model:value.number="params.lat1"
        :error="errorInput.lat1"
        @blur="checkValidation(params.lat1, 'lat1')"
        @update:value="checkValidation(params.lat1, 'lat1')"
      />

      <BaseInput
        class="formCard__input"
        label="Długość georaficzna pierwszego punktu"
        name="long1"
        placeholder="123.9872"
        v-model:value.number="params.long1"
        :error="errorInput.long1"
        @blur="checkValidation(params.long1, 'long1')"
        @update:value="checkValidation(params.long1, 'long1')"
      />
    </div>

    <div class="formCard__box">
      <BaseInput
        class="formCard__input"
        label="Szerokość georaficzna drugiego punktu"
        name="lat2"
        placeholder="23.1523"
        v-model:value.number="params.lat2"
        :error="errorInput.lat2"
        @blur="checkValidation(params.lat2, 'lat2')"
        @update:value="checkValidation(params.lat2, 'lat2')"
      />

      <BaseInput
        class="formCard__input"
        label="Długość georaficzna drugiego punktu"
        name="long2"
        placeholder="109.1532"
        v-model:value.number="params.long2"
        :error="errorInput.long2"
        @blur="checkValidation(params.long2, 'long2')"
        @update:value="checkValidation(params.long2, 'long2')"
      />
    </div>

    <LoadingButton
      class="formCard__button"
      :is-loading="loading"
      :outlined="true"
      @click="buttonClicked"
    >
      Oblicz odległość
    </LoadingButton>
  </BaseCard>
</template>

<script lang="ts">
export default {
  name: 'FormCard'
}
</script>


<script lang="ts" setup>
import LoadingButton from '@/components/atoms/loadingButton/LoadingButton.vue';
import BaseInput from '@/components/atoms/baseInput/BaseInput.vue';
import BaseCard from '@/components/atoms/baseCard/BaseCard.vue';
import { nextTick, reactive } from 'vue';
import { useStore } from '@/store/store';
import useAPI from '@/composables/useAPI';
import useValidation from '@/composables/useValidation';
import { ParamNameType } from '@/types/types';

const { results, loading, error, createRequest } = useAPI();
const { checkForm, checkValidation, errorInput, isError } = useValidation();
const store = useStore();

const params = reactive<Record<ParamNameType, string>>({
  lat1: '',
  long1: '',
  lat2: '',
  long2: ''
});

const buttonClicked = async () => {
  store.error = '';
  store.results = {}

  checkForm(params);
  if (isError.value) {
    return;
  }
  await createRequest('http://localhost:5000/distance', 'POST', params);
  store.results = results.value.data;
  store.error = error.value;

  nextTick(() => {
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
  });
};
</script>
