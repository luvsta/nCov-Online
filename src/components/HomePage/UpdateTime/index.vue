<template>
    <div>
        <span class="update-time">更新时间：{{this.updateTime}}</span>
        <h2 class="update-title">今日疫情</h2>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: {
            ...mapState('HomePage', ['updateTime']), // 数据更新时间
        }
    }

</script>

<style>
    .update-time {
        color: #666666;
        font-size: .7rem;
        font-weight: bold;
    }

    .update-title {
        margin-top: 0.2rem;
        margin-bottom: 0.4rem;
    }
</style>