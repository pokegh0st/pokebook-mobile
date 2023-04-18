<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button color="primary"></ion-menu-button>
                </ion-buttons>
                <ion-title>Draft</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Draft</ion-title>
                </ion-toolbar>
            </ion-header>

            <ion-grid style="display: flex; flex-wrap: nowrap; overflow-x: auto;">
                <ion-row style="display: flex; flex-wrap: nowrap;">
                    <ion-col style="width: 90vw;">
                        <PoemNotebook></PoemNotebook>
                    </ion-col>
                    <ion-col style="width: 90vw;">
                        <PoemNotebook></PoemNotebook>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import PoemNotebook from '@/components/PoemNotebook.vue';
</script>
<style scoped>
.notebook {
    display: inline;
}

#notebook-container {
    width: 100%;
}
</style>