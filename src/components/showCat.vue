<template>
    <div class=" bg-warmGray-700 shadow-lg text-white">
        <div class="">
            <img :src='message.catsUrl' class="w-96 h-96 object-scale-down ">
        </div>
        <div class="">
            Cats Name: {{message.catsName}}
        </div>
        <div class="">
            Cats Age: {{message.catsAge}}
        </div>
        <div class="">
            Kid Friendly: {{message.catsKids}}
        </div>
        <div v-if="isAuthenticated" class="flex justify-end">
            <button @click="deleteCat(message.id)" class="text-red-700 text-2xl hover:text-red-400"><mdi:delete/></button>
        </div>
    </div>
</template>

<script setup>
    import {defineProps, computed,ref} from 'vue'
    import {onMounted} from 'vue'
    import { useToggle } from '@vueuse/core'
    import {isAuthenticated,database} from '~/functions/useFirebase'
    const { deleteCat } = database()
 

    const props = defineProps({
        message: {
            typeof: Object,
            default: () => ({
                catsName: '',
                catsAge: '',
                catsKids: '',
                catsUrl: '',
                id: '',
            })
        }
    })
</script>