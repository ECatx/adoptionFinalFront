<template>
    <div class="fixed top-0 left-0 right-0 bg-custom-purple text-clouds py-4 shadow-xl">
        <div class="container mx-auto flex justify-between items-center">
            <div class="brand flex space-x-3 text-2xl "> 
                <button>
                    <router-link to="/">Cat's With Hats </router-link>
                </button>
            </div>
            <div class="space-x-2 flex">
                <button>
                    <router-link to="/Adoptions">Adoptions</router-link>
                </button>
                <button>
                    <router-link to="/Contact">Contact Us</router-link>
                </button>
                <button v-if="!isAuthenticated" class="bg-purple-900 text-white py-2 px-2 rounded-full shadow-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-purple-400">
                    <router-link to="Login">Login</router-link>
                </button>
                <div v-else>
                    <button class="bg-lightBlue-900 text-white py-2 px-2 rounded-full shadow-lg hover:bg-lightBlue-600 focus:outline-none focus:ring-2 focus:ring-yellow-300">
                        <router-link to="CatData">Add a Cat</router-link>
                    </button>
                    <button class="bg-lightBlue-900 text-white py-2 px-2 rounded-full shadow-lg hover:bg-lightBlue-600 focus:outline-none focus:ring-2 focus:ring-yellow-300">
                        <router-link to="Messages">Messages</router-link>
                    </button>
                    <button @click="logout" class="bg-rose-800 text-white py-2 px-2 rounded-full shadow-lg hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-400">Logout</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {useRouter} from 'vue-router'
    import {authentication} from '../functions/useFirebase'
    const {isAuthenticated, user, googlePopup, signOut} = authentication() 
    const router = useRouter()
    const logout = async () => {
        await signOut()
        router.push('/')
    }
    </script>