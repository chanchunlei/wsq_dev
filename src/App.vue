<template>
    <div id="app">
        <div class="top">Wsq -- dev</div>
        <div class="main">
            <Nav class="nav"></Nav>
            <!-- 内容区域 -->
            <router-view class="page"></router-view>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
    name: "",
    components: {
        Nav
    },
    data() {
      return {};
    },
    methods: {}
};
</script>


<style lang="scss">
html, body {
    height: 100%;
}
#app {
    height: 100%;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.top {
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #333;
    box-shadow: 0 2px 10px 1px #999;
    color: #fff;
}
.main {
    display: flex;
    height: calc( 100% - 50px );
}
.nav, .page {
    height: 100%;
    overflow: auto;
}
.page {
    flex: 1;
    padding: 15px;
}
</style>
