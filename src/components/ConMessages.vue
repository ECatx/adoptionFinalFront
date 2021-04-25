<template>
    <div class="mt-20">
        <Message v-for="(n,index) in messages" :key="index" :message="n" />
    </div>
</template>

<script setup>
    import {database} from '../functions/useFirebase'
    const {messages} = database()
</script>
