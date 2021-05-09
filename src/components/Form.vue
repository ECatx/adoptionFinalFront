<template>
    <section class="container flex justify-center mt-20">
        <div class="bg-warmGray-700 mx-auto items-center text-white">
            <div class="mt-5 mb-5 flex flex-col">
                <h1 class="text-white text-3xl">Fill out form to be contacted by us</h1>
            </div>
            <div class="mt-5 mb-5 flex flex-col">
                <label>Name</label>
                <input v-model="name" id="clientName" lablel="text" class="text-black pt-1 pb-1" placeholder="Your name">
            </div>
            <div>
                <p class="capitalize text-sm text-left text-red-500">{{errorName}}</p>
            </div>
            <div class="mt-5 mb-5 flex flex-col">
                <label>Phone</label>
                <input v-model="phone" lablel="test" class="text-black pt-1 pb-1" placeholder="Your phone number">
            </div>
            <div>
                <p class="capitalize text-sm text-left text-red-500">{{errorPhone}}</p>
            </div>
            <div class="mt-5 mb-5 flex flex-col">
                <label>Email</label>
                <input v-model="email" type="email" name="email" id="email" class="text-black pt-1 pb-1" placeholder="Your email address">
            </div>
            <div>
                <p class="capitalize text-sm text-left text-red-500">{{errorEmail}}</p>
            </div>
            <div class="mt-5 mb-5 flex flex-col">
                <label>Cat</label>
                <input v-model="catname" lablel="test" class="text-black pt-1 pb-1" placeholder="Cats name">
            </div>
            <div>
                <p class="capitalize text-sm text-left text-red-500">{{errorCat}}</p>
            </div>
            <div class="mt-5 mb-5 items-end">
                <button class=" bg-red-800 py-2 px-2 shadow-lg flex mx-auto place-items-end rounded-full hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-pink-400" type="submit" @click="send">Submit</button>
            </div>
        </div>
</section>
</template>

<script setup>
import { ref} from 'vue'
import {useRouter} from 'vue-router'
import { database } from '~/functions/useFirebase'
import { useField, useValidateField, validate } from 'vee-validate'
import {isError,msg} from '~/functions/userError'
import * as yup from 'yup'
import { router } from '~/router'
const { sendMessage } = database()
const clientName = ref(null)
const clientPhone = ref(null)
const clientEmail = ref(null)
const clientCat = ref(null)
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const send = async () => {
    try{
        if(emailMeta.valid && phoneMeta.valid && nameMeta.valid && catMeta.valid ) {
        sendMessage(name.value, phone.value,email.value,catname.value)
        clientName.value = null
        clientPhone.value = null
        clientEmail.value = null
        clientCat.value = null
        isError.value = false
        router.push('/Adoptions')
        }else{
            isError.value = true
			msg.value = 'Invalid values enetered'
        }
    } catch (error) {
        isError.value = true
		msg.value = 'Authentication error'
		console.log(error)
    }

  }

  const {value: email,errorMessage: errorEmail,meta: emailMeta} = useField('email', yup.string().required().email())
  const {value: name,errorMessage: errorName,meta: nameMeta} = useField('name', yup.string().required())
  const {value: catname,errorMessage: errorCat,meta: catMeta} = useField('catname', yup.string().required())
  const {value: phone,errorMessage: errorPhone,meta: phoneMeta} = useField('phone', yup.string().required().matches(phoneRegExp, 'Numbers only, 7-10 characters').min(7).max(10))

</script>
