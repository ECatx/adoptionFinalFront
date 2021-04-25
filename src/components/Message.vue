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
            CatName: {{message.clientCat}}
        </div>
        <div class="">
            Requested at {{message.createdAt}}
        </div>
    </div>
</template>

<script setup>
    import {defineProps, computed,ref} from 'vue'

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