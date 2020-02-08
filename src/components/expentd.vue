<template>
    <div class="father">

        <div class="child" v-on:click.stop="expendDiv()" ref="child">
            oasjdo
        </div>
    </div>

</template>

<script>

    export default {
        methods: {
            expendDiv: function () {
                console.log(1)
                this.$refs.child.setAttribute('class', 'child-expend');

                // console.log("div宽度:", this.$refs.child.offsetWidth)
                // console.log("屏幕宽度:", window.innerWidth)
                // let incrWidth = window.innerWidth - this.$refs.child.offsetWidth
                // console.log("需要增加的宽度:", incrWidth);

            }
        }
    }

</script>

<style>
    .father {
        padding: 0 .6rem;
    }

    .child {
        margin-top: 50%;
        background-color: #000;
        /* transform: 0.5s all ease-in; */
        /* width: 50px; */
    }

    .child-expend {
        /* transform: 0.5s all ease-in; */
        /* position: absolute; */
        /* width: 100vw; */
        height: 50vh;
        margin-top: 50%;

        transform: matrix(1, 0, 0, 1, -30, -30);

        background-color: #000;
        /* margin-left: -0.6rem; */
        /* top: 0; */
        /* left: 0; */
    }
</style>