import {ref} from 'vue'
import axios from 'axios'

export const searchItem = ref('') 
  export const cats = ref([])
  export const cat = ref()

  const api = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/',
    params: {
      api_key: import.meta.env.VITE_APIKEY,
    },
  })
  export const getCats = async () => {
      try {
          const ressource = searchItem.value ? 'images/search' : 'images/search' 
          const response = await api(ressource,{ params: {limit:1, size:"full"} })
          cats.value = response.data
      } catch (error) {
          console.log(error)
      }
  }

  export const cleanCat = () => (cat.value = null)