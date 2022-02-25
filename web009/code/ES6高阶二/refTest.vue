<template>

    <canvas ref="myCanvas" class="myCanvas"></canvas>
    <canvas ref="myCanvas2"></canvas>
    <button @click="aaa()">aaa</button>
</template>
<script>
    export default   {
        data: function () {

        },
        method: {
            aaa() {
                let myCanvas = this.refs.myCanvas;
                let myCanvas2 = this.refs.myCanvas2;
                myCanvas.style.height = '300px';
                let myc = document.querySelector(".myCanvas");
            },
        },
    }
    export class refTest2 {}
</script>
<style>

</style>