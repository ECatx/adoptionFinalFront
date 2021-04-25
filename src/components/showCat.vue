<template>
    <div class=" bg-warmGray-700 shadow-lg text-white">
        <div class="">
            <img src="../assets/cat.png">
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
    </div>
</template>

<script setup>
    import {defineProps, computed,ref} from 'vue'

    const props = defineProps({
        message: {
            typeof: Object,
            default: () => ({
                catsName: '',
                catsAge: '',
                catsKids: '',
            })
        }
    })
</script>