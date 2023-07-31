<script lang="ts" setup>
import logoImg from '@/assets/images/headerLogo.svg';
import { ref } from 'vue';

const linksItems = ref<string[]>(['ВОЗМОЖНОСТИ', 'ПРОЦЕСС', 'ПОДКЛЮЧИТЬСЯ']);
const expand = ref(false);
</script>

<template>
    <header class="header">
        <div class="container header__inner">
            <nav class="header__nav">
                <div class="header__logo">
                    <v-img :src="logoImg" height="32" width="176" />
                </div>
                <ul class="list d-md-flex d-none">
                    <li v-for="link in linksItems" :key="link" class="list__item">
                        <a class="link" href="#gg">{{ link }}</a>
                    </li>
                    <li class="list__item">
                        <v-btn
                            :ripple="true"
                            class="header__btn btn-primary rounded-sm"
                            elevation="0"
                            text="АВТОРИЗАЦИЯ"
                        />
                    </li>
                </ul>
                <!--on mobile-->
                <v-btn
                    class="btn-menu d-md-none d-flex rounded-xs"
                    elevation="0"
                    @click="expand = !expand"
                >
                    <span>Меню</span>
                    <v-icon class="ml-2" color="primary" icon="mdi-menu" />
                </v-btn>
                <v-expand-transition>
                    <ul v-show="expand" class="list mobile">
                        <li v-for="link in linksItems" :key="link" class="list__item">
                            <a class="link" href="#gg">{{ link }}</a>
                        </li>
                        <li class="list__item">
                            <v-btn
                                :ripple="true"
                                class="header__btn btn-primary rounded-sm"
                                elevation="0"
                                text="АВТОРИЗАЦИЯ"
                            />
                        </li>
                    </ul>
                </v-expand-transition>
            </nav>
        </div>
    </header>
</template>

<style lang="scss">
@import 'style';
</style>
