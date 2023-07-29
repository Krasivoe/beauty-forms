<script setup>
import logoImg from '@/assets/images/headerLogo.svg';
import { ref } from 'vue';

const linksItems = ref(['ВОЗМОЖНОСТИ', 'ПРОЦЕСС', 'ПОДКЛЮЧИТЬСЯ']);
</script>

<template>
    <header class="header">
        <v-container class="header__inner">
            <nav class="header__nav">
                <div class="header__logo">
                    <v-img :src="logoImg" height="32" width="176" />
                </div>
                <ul class="list">
                    <li v-for="link in linksItems" :key="link" class="list__item">
                        <a class="link" href="#gg">{{ link }}</a>
                    </li>
                    <li class="list__item">
                        <v-btn
                            :ripple="false"
                            class="header__btn btn-outlined rounded-sm"
                            elevation="0"
                            >АВТОРИЗАЦИЯ
                        </v-btn>
                    </li>
                </ul>
            </nav>
        </v-container>
    </header>
</template>

<style lang="scss">
@import 'style';
</style>
