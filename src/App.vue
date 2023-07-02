<script setup lang="ts">
import { RouterView } from 'vue-router';
import HelloWorld from './components/Home.vue';
</script>

<template>
    <header>
        <div class="wrapper">
            <HelloWorld msg="You did it!"/>

            <nav>
                <RouterView></RouterView>
            </nav>
        </div>
    </header>

    <RouterView/>
</template>

<style scoped>

</style>
