<template>
    <div>Modbus</div>
</template>

<script>
// @ is an alias to /src
import ModbusCommand from "@/utils/modbus-command";
export default {
    name: "Modbus",
    data() {
        return {};
    },
    created() {
        const modbus = new ModbusCommand();
        // console.log(modbus);
        // 读取操作

        // let buffer = modbus.readCoils(0, 2);
        // let buffer = modbus.readDiscreteInputs(0, 3);
        // let buffer = modbus.readHoldingRegisters(2, 5);
        // let buffer = modbus.readInputRegisters(2, 4);

        // 写入操作
        // let buffer = modbus.writeCoil(0, 1);
        // let buffer = modbus.writeRegister(0, 20);
        // let buffer = modbus.writeCoils(0, [0,0,1,0, 0,1,0,0, 0,1,0,0, 0,0,1,0, 0,0,1,0]);
        // let buffer = modbus.writeRegisters(0, [10, 20]);

        // 解析 数据
        // let buffer = Buffer.from([0x01, 0x01, 0x02, 0x05, 0x01, 0x07b, 0x6c]);
        // let buffer = Buffer.from([0x01, 0x03, 0x04, 0x03, 0xe8, 0x02, 0xa1, 0xba, 0x9b]);

        // let buffer = Buffer.from([0x01, 0x05, 0x00,0x00, 0x00,0x00, 0xcd,0xca]);
        // let buffer = Buffer.from([0x01, 0x06, 0x00,0x00, 0x00,0xf0, 0x89,0x8e]);

        let buffer = Buffer.from([0x01, 0x0f, 0x00, 0x00, 0x00, 0x14, 0x03, 0x24, 0x42, 0x04, 0x21, 0x1d]);
        // let buffer = Buffer.from([0x01, 0x10, 0x00, 0x00, 0x00, 0x02, 0x04, 0x1a, 0x1f, 0x0c, 0xbd]);

        // let buffer = Buffer.from([0x01, 0x81, 0x02, 0xc1, 0x91]);
        // console.log(buffer);

        // 验证 crc 校验码是否正确
        // let check = modbus.checkCrc(buffer);
        // console.log(check);

        // 解析 数据
        let result = modbus.parse(buffer);
        console.log(result);
    },
    methods: {},
    computed: {}
};
</script>

<style>
</style>
