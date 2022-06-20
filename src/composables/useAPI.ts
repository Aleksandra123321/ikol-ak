import { ref } from "vue";
import axios from 'axios';

export default function useAPI() { 
  const results = ref({data: {}});
  const loading = ref(false);
  const error = ref('');

  const createRequest = async (url: string, method: string, params: Record<string, string>) => { 
    loading.value = true;
    error.value = '';
    results.value = {data: {}} ;

    try {
      const options = {
        method: method,
        url: url,
        params: { ...params },
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:5000',
          'Access-Control-Allow-Credentials': 'true'
        }
      };
    
      results.value = await  axios.request(options)
    } catch {
      error.value = 'Upss... Coś poszło nie tak, błąd serwera.'
    } finally {
      loading.value = false;
    }
  };
  return { results, loading, error, createRequest };
}