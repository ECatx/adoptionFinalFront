<template>
    <section class="container flex justify-center mt-20">
        <div class="bg-green-800 mx-auto items-center text-white">
            <div class="mt-5 mb-5 flex flex-col">
                <h1 class="text-white text-3xl">Fill out form to be contacted by us</h1>
            </div>
            <div class="mt-5 mb-5 flex flex-col">
                <label>Name</label>
                <input v-model="clientName" id="clientName" lablel="text" class="text-black" placeholder="Your name">
            </div>
            <div class="mt-5 mb-5 flex flex-col">
                <label>Phone</label>
                <input v-model="clientPhone" lablel="test" class="text-black" placeholder="Your phone number">
            </div>
            <div class="mt-5 mb-5 flex flex-col">
                <label>Email</label>
                <input v-model="clientEmail" lablel="test" class="text-black" placeholder="Your email address">
            </div>
            <div class="mt-5 mb-5 flex flex-col">
                <label>Cat</label>
                <input v-model="clientCat" lablel="test" class="text-black" placeholder="Cats name">
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
const { sendMessage } = database()
const clientName = ref(null)
const clientPhone = ref(null)
const clientEmail = ref(null)
const clientCat = ref(null)

const send = () => {
    if(clientName.value?.length > 0) {
    sendMessage(clientName.value, clientPhone.value,clientEmail.value,clientCat.value)
    clientName.value = null
    clientPhone.value = null
    clientEmail.value = null
    clientCat.value = null
    }
  }
</script>
