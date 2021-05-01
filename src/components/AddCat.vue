<template>
    <section class="container flex justify-center mt-20">
        <div class="bg-pink-800 mx-auto items-center text-white">
            <div class="mt-5 mb-5 flex flex-col">
                <h1 class="text-white text-3xl">Add a new cat for adoption</h1>
            </div>
            <div class="mt-5 mb-5 flex flex-col">
                <label>Cats Name</label>
                <input v-model="catsName" id="catsName" lablel="text" class="text-black" placeholder="Cats Name">
            </div>
            <div class="mt-5 mb-5 flex flex-col">
                <label>Cats Age</label>
                <input v-model="catsAge" lablel="test" class="text-black" placeholder="Cats Age">
            </div>
            <div class="mt-5 mb-5 flex flex-col">
                <label>Is cat kid friendly</label>
                <select v-model="catKsids" class="text-black">
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
import { ref} from 'vue'
import { database } from '~/functions/useFirebase'
const { sendCats } = database()
const catsName = ref(null)
const catsAge = ref(null)
const catKsids = ref(null)

const send = () => {
    if(catsName.value?.length > 0) {
    sendCats(catsName.value, catsAge.value,catKsids.value)
    catsName.value = null
    catsAge.value = null
    catKsids.value = null
    }
  }
</script>
