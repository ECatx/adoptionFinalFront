<template>
    <section class="container flex justify-center mt-20">
        <div class="bg-pink-800 mx-auto items-center text-white">
            <div class="mt-5 mb-5 flex flex-col">
                <h1 class="text-white text-3xl">Add a new cat for adoption</h1>
            </div>
            <div class="object-fill flex mx-auto items-center"> 
                <img :src="cats.url" class="w-72 h-72 object-scale-down flex place-items-center object-center">
           </div>
           <button  class="bg-blue-200 rounded shadow-lg flex mx-auto items-center" @click="getCat">Get new Cat</button>
            <div class="mt-5 mb-5 flex flex-col">
                <label>Cats Name</label>
                <input v-model="catsName" id="catsName" lablel="text" class="text-black" placeholder="Cats Name">
            </div>
            <div class="mt-5 mb-5 flex flex-col">
                <label>Cats Age</label>
                <select v-model="catsAge" class="text-black pt-1 pb-1">
                    <option value="3 months">3 months</option>
                    <option value="4 months">4 months</option>
                    <option value="5 months">5 months</option>
                    <option value="6 months">6 months</option>
                    <option value="7 months">7 months</option>
                    <option value="8 months">8 months</option>
                    <option value="9 months">9 months</option>
                    <option value="10 months">10 months</option>
                    <option value="9 months">11 months</option>
                    <option value="1 year">1 year</option>
                    <option value="2 years">2 years</option>
                    <option value="3 years">3 years</option>
                    <option value="4 years">4 years</option>
                    <option value="5 years">5 years</option>
                    <option value="6 years">6 years</option>
                    <option value="7 years">7 years</option>
                    <option value="8 years">8 years</option>
                    <option value="9 years">9 years</option>
                    <option value="10 years">10 years</option>
                    <option value="11 years">11 years</option>
                    <option value="12 years">12 years</option>
                    <option value="13 years">13 years</option>
                    <option value="14 years">14 years</option>
                    <option value="15 years">15 years</option>
                    <option value="16 years">16 years</option>


                </select>
            </div>
            <div class="mt-5 mb-5 flex flex-col">
                <label>Is cat kid friendly</label>
                <select v-model="catKsids" class="text-black pt-1 pb-1">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div class="mt-5 mb-5 items-end">
                <button class="flex-auto bg-red-800" type="submit" @click="send">Submit</button>
            </div>
        </div>
</section>
</template>

<script setup>
data: {

}

import {onMounted, ref} from 'vue'
import { database } from '~/functions/useFirebase'
const { sendCats } = database()
import {axios} from 'axios'
import {getCat,cats,catImage} from '~/functions/getCats'

const catsUrl = ref(null)
const catsName = ref(null)
const catsAge = ref(null)
const catKsids = ref(null)

const send = () => {
    if(catsName.value?.length > 0) {
    sendCats(catsName.value, catsAge.value,catKsids.value,catImage.value)
    console.log(cats.url)
    catsName.value = null
    catsAge.value = null
    catKsids.value = null
    catsUrl.value = null
    }
  }

  onMounted(() => {
    getCat()
    catsUrl.value = catImage.value
  })
</script>
