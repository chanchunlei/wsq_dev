<template>
    <div class="aside">
        <ul class="base_list">
            <template v-for="(v,k) in baseTools">
                <li :key="k" @dragstart="dragstart(v.type, $event)" draggable="true">{{v.type}}</li>
            </template>
        </ul>
    </div>
</template>

<script>
// 基础组件 配置
import BaseTools from "@/components/iotTools/config/baseTools";

export default {
    name: "ToolsAside",
    data() {
        return {
            baseTools: BaseTools
        };
    },
    methods: {
        // 拖动开始
        dragstart(type, ev) {
            ev.dataTransfer.setData("type", type);
            // console.log("dragstrat");
        }
    },
    computed: {}
};
</script>

<style scoped>
.aside {
    width: 150px;
    padding: 10px;
    border: 1px solid #000;
}
.base_list>li,
.add_layout {
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #33adff;
    color: #fff;
    margin-bottom: 10px;
}
.add_layout {
    background-color: #f56c6c;
}
</style>