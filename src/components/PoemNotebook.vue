<template>
    <ion-input aria-label="Name of the poem" class="top"></ion-input>
    <div class="textarea-wrapper">
        <ion-textarea aria-label="Text of the poem" @keyup="updatePoem"
            v-model="poemText" :auto-grow="true" class="custom"></ion-textarea>
    </div>
</template>
<script lang="ts">
import { IonTextarea, IonInput } from '@ionic/vue'
import { Preferences } from '@capacitor/preferences';
import { ref } from 'vue';

const poem = await Preferences.get({ key: 'poem' })

export default {
    name: "PoemNotebook",
    components: {
        IonTextarea, IonInput
    },
    setup() {
        const poemText = ref('');

        const getPoemValueFromStorage = async () => {
            const res = await Preferences.get({ key: 'poem' });
            if (res.value !== null) {
                poemText.value = res.value;
            }
        }

        getPoemValueFromStorage();

        const updatePoem = async (event: KeyboardEvent) => {
            // const scrollPosition = window.scrollY;
            // console.log(event.target)
            await Preferences.set({
                key: 'poem',
                value: (event.target as HTMLInputElement).value
            });
            // (event.target as HTMLInputElement).style.height = "auto";
            // (event.target as HTMLInputElement).style.height = ((event.target as HTMLInputElement).scrollHeight)+"px";
            // window.scrollTo(0, scrollPosition);
        };
        return {
            updatePoem,
            poemText
        }
    }
};
</script>
<style scoped>
.top {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-radius: 5px 5px 0 0;
    position: relative;
    z-index: 1;
    background: #333;
    color: #fff;
    padding-left: 1.25em;
}

.paper {
    background: repeating-linear-gradient(#F7F3EC, #F7F3EC 31px, #94ACD4 31px, #94ACD4 32px);
    box-shadow: 0 1px 1px #00000026, 0 10px 0 -5px #eee, 0 10px 1px -4px #00000026, 0 20px 0 -10px #eee, 0 20px 1px -9px #00000026;
    width: 100%;
    height: fit-content;
    padding: 0 35px 0 35px;
    position: relative;
    margin-top: 0;
    min-height: 60vh;
}

ion-textarea.custom {
    /* border: 1px solid red!important; */
    font-size: 22px;
    background: repeating-linear-gradient(#F7F3EC, #F7F3EC 31px, #94ACD4 31px, #94ACD4 32px);
    box-shadow: 0 1px 1px #00000026, 0 10px 0 -5px #eee, 0 10px 1px -4px #00000026, 0 20px 0 -10px #eee, 0 20px 1px -9px #00000026;
    height: fit-content;
    padding: 22px 35px 22px 35px;
    position: relative;
    margin-top: 0;
    min-height: 60vh;
}

</style>
