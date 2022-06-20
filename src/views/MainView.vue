<template>
  <div class="container">
    <FormCard />
    
    <ResultCard v-if="store.results.distanceKm || store.error" />
  </div>
</template>

<script lang="ts" setup>
import FormCard from '@/components/molecules/formCard/FormCard.vue'
import ResultCard from '@/components/molecules/resultCard/ResultCard.vue'
import { useStore } from '@/store/store';

const store = useStore();

</script>
