<template>
  <BaseCard
    title="Wynik obliczeń"
    class="resultCard"
    :isError="!!store.error"
  >
    <p v-if="store.error" class="resultCard__text resultCard__text--error">
      {{store.error}}

    </p>
    <div v-else>
      <div class="resultCard__box">
        <p class="resultCard__text">Odległość wyrażona w kilometrach </p>

        <p class="resultCard__text resultCard__text--bold">{{distanceKm}} </p>
      </div>

      <div class="resultCard__box">
        <p class="resultCard__text">Odległość wyrażona w metrach </p>

        <p class="resultCard__text resultCard__text--bold">{{distanceM}} </p>
      </div>
    </div>
  </BaseCard>
</template>

<script lang="ts">
export default {
  name: 'ResultCard'
}
</script>

<script lang="ts" setup>
import BaseCard from '@/components/atoms/baseCard/BaseCard.vue';
import { useStore } from '@/store/store';
import { computed } from 'vue';

const store = useStore();

const distanceKm = computed(() => {
  return store.results?.distanceKm?.toFixed(0);
});

const distanceM = computed(() => {
  return store.results?.distanceM?.toFixed(0);
});
</script>
