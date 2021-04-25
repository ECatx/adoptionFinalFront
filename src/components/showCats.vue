<template>
    <div class="mt-20 grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto">
        <ShowCat v-for="(n,index) in catinfo" :key="index" :message="n" />
    </div>
</template>

<script setup>
    import {database} from '../functions/useFirebase'
    const {catinfo} = database()
</script>
