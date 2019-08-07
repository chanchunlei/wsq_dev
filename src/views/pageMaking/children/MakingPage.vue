<template>
    <div>
        <div class="page_flex">

            <ToolsAside></ToolsAside>

            <ToolsPage :toolsConfig="toolsConfig"></ToolsPage>

            <ToolsConfig></ToolsConfig>
        </div>
    </div>
</template>

<script>
// 控件 导航
import ToolsAside from "@/components/iotTools/ToolsAside"
// 控件 主页面
import ToolsPage from "@/components/iotTools/ToolsPage";
// 配置 控件
import ToolsConfig from "@/components/iotTools/ToolsConfig";
export default {
    name: "MakingPage",
    components: {
        ToolsAside,
        ToolsPage,
        ToolsConfig
    },
    data(){
        return {
            toolsConfig: []
        }
    }
};
</script>

<style scoped>
.page_flex {
    display: flex;
    min-width: 1000px;
    height: 100%;
    justify-content: center;
}
</style>