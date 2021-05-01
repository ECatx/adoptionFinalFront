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
                    <div class="flex justify-between mb-2">
                        <label for="password" class="text-sm">Password</label>
                    </div>
                    <input type="password" name="password" id="password" placeholder="*****" class="w-full px-3 py-2 border rounded-md  border-coolGray-700  bg-neutral-focus text-coolGray-900" v-model="password">
                </div>
            </div>
            <div class="space-y-2">
                <div>
                    <button type="button" @click="login" class="w-full px-8 py-3 rounded-md bg-custom-purple text-primary-content hover:bg-primary">Sign in</button>
                </div>
    
            </div>
        </form>
    </div>
    </template>
    
    <script setup>
    import {ref} from 'vue'
    import {useRouter} from 'vue-router'
    import {authentication} from '../functions/useFirebase'
    const router = useRouter()
    const {isAuthenticated, user, googlePopup, signIn} = authentication() 

    const login = async () => {
       try {
           await signIn(email.value,password.value)
           router.push('/')
       } catch (error) {
           console.log(error)
       } 

    }
    const email = ref('')
    const password = ref('')
    </script>