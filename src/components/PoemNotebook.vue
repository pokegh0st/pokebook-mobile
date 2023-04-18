<template>
    <ion-input class="top"></ion-input>
    <ion-textarea class="paper"></ion-textarea>
</template>
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
    padding: 35px;
    line-height: 32px;
    font-size: 22px;
    position: relative;
    height: 60vh;
}
</style>
