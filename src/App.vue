<script lang="ts" setup>
import { useRouter } from 'vue-router';
import HomePage from '@/pages/HomePage/HomePage.vue';
import HeaderItem from '@/components/Header/HeaderItem.vue';
import { computed } from 'vue';

const router = useRouter();
const templates = [HomePage];

const currentTemplate = computed(() => {
    let current: any[] = [];

    templates.forEach((template) => {
        const { layout } = router.currentRoute.value.meta;

        if (template.__name === `${layout}`) {
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
