<template>
    <div class="loading"></div>
</template>

<script>
    export default {
        name: "loading"
    }
</script>

<style scoped>
    .loading {
        position: fixed;
        left: 20%;
        top: 20%;
        
        background: url('https://ftp.bmp.ovh/imgs/2021/03/e75890093bd57098.gif') center center no-repeat ;
        width:50vw;
        height: 50vh;
        z-index: 1000;
    }

</style>