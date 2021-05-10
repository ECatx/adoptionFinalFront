<template >
    <div data-theme="dark" class="container flex flex-col max-w-md p-6 mx-auto rounded-md sm:p-10 bg-base-100 text-primary-content mt-48 bg-blueGray-700 text-white">
        <div  class="mb-8 text-center">
            <h1 class="my-3 text-4xl font-bold">Sign in</h1>
            <p class="text-sm  text-base-content">Sign in to access your account</p>
        </div>
        <form @submit.prevent action="" class="space-y-12 ng-untouched ng-pristine ng-valid">
            <div class="space-y-4">
                <div>
                    <label for="email" class="block mb-2 text-sm">Email address</label>
                    <input type="email" name="email" id="email" placeholder="enter email address" class="w-full px-3 py-2 border rounded-md border-coolGray-700 bg-neutral-focus  text-coolGray-900" v-model="email">
                </div>
                <div>
                    <p class="capitalize text-md text-left text-red-500">{{errorEmail}}</p>
                </div>
                <div>
                    <div class="flex justify-between mb-2">
                        <label for="password" class="text-sm">Password</label>
                    </div>
                    <input type="password" name="password" id="password" placeholder="*****" class="w-full px-3 py-2 border rounded-md  border-coolGray-700  bg-neutral-focus text-coolGray-900" v-model="password">
                </div>
                <div>
                    <p class="capitalize text-md text-left text-red-500">{{errorPassword}}</p>
                </div>
            </div>
            <div class="space-y-2">
                <div>
                    <button type="button" @click="login" class="w-full px-8 py-3 rounded-md bg-custom-purple text-primary-content hover:bg-primary">Sign in</button>
                </div>
                <div>
                    <p class="capitalize text-md text-left text-red-500">{{msg}}</p>
                </div>
            </div>
        </form>
    </div>
    <div class="flex flex-col justify-center items-center space-y-4 mb-12">
        <fxemoji:cat class="w-48 h-48 mt-12 animate-bounce"/>
    </div>
    </template>
    
    <script setup>
    import {ref} from 'vue'
    import {useRouter} from 'vue-router'
import { msg } from '~/functions/userError'
    import {authentication} from '../functions/useFirebase'
    import { useField, useValidateField, validate } from 'vee-validate'
import * as yup from 'yup'
    const router = useRouter()
    const {isAuthenticated, user, googlePopup, signIn} = authentication() 
    msg.value = ''
    const login = async () => {
       try {
           if(emailMeta.valid && passwordMeta.valid){
             await signIn(email.value,password.value)
             router.push('/')
           }

       } catch (error) {
           msg.value = 'Authentication Error'
           console.log(error)
       } 

    }
    const {value: email,errorMessage: errorEmail,meta: emailMeta} = useField('email', yup.string().required().email())
    const {value: password,errorMessage: errorPassword,meta: passwordMeta} = useField('password', yup.string().required().min(6))    
    </script>