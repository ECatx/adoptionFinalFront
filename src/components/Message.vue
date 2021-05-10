<template>
    <div class="container mx-auto flex flex-col my-4 bg-warmGray-700 shadow-lg text-white">
        <div class="">
            Client Name: {{message.clientName}}
        </div>
        <div class="">
            Phone Number: {{message.clientPhone}}
        </div>
        <div class="">
            Email: {{message.clientEmail}}
        </div>
        <div class="">
            Cat Name: {{message.clientCat}}
        </div>
        <div class="">
            Requested at {{message.createdAt}}
        </div>
        <div v-if="isAuthenticated" class="flex justify-end">
            <button @click="deleteMessage(message.id)" class="text-red-700 text-2xl hover:text-red-400"><mdi:delete class="text-3xl"/></button>
        </div>
    </div>

</template>

<script setup>
    import {isAuthenticated,database} from '~/functions/useFirebase'
    import {defineProps, computed,ref} from 'vue'
    const { deleteMessage } = database()
    const props = defineProps({
        message: {
            typeof: Object,
            default: () => ({
                clientName: '',
                clientPhone: '',
                clientEmail: '',
                clientCat: '',
                createdAt: '',   
            })
            
        }
        
    })
</script>