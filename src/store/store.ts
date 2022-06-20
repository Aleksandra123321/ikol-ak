import { defineStore } from 'pinia'
import { ResultsType } from '@/types/types';

export const useStore = defineStore('main', {
  state: () => {
    return {
      results: {} as ResultsType,
      error: ''
    }
  },
})