<script setup lang="ts">
import { useRouter } from 'vue-router';
import HomePage from '@/pages/HomePage/HomePage.vue';
import { computed } from 'vue';
import HeaderItem from '@/components/Header/HeaderItem.vue';

const router = useRouter();
const templates = [HomePage];

const currentTemplate = computed(() => {
    let current: any[] = [];

    templates.forEach((template) => {
        const { layout } = router.currentRoute.value.meta;

        if (template.__name === `${layout}`) {
            console.log('123');
            current = template;
        }
    });

    return current;
});
</script>

<template>
    <div class="wrapper">
        <header-item />
        <component :is="currentTemplate" />
    </div>
</template>

<style scoped></style>
