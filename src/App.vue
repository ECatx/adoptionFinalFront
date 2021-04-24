<template>
  <NavBar/>
  <router-view />
</template>

<script setup>
  import{authentication} from './functions/useFirebase'
  const {isAuthenticated} = authentication()
</script>
