const baseTools = {
    "Switch": {
        key: '',
        type: 'Switch',
        bindkey: '',
        value: false,
        label: '开关',
        disabled: false,
        activeText: '',
        inactiveText: '',
    },
    "Slider": {
        key: '',
        type: 'Slider',
        bindkey: '',
        value: 0,
        label: '滑块',
        disabled: false,
        min: 0,
        max: 100,
        step: 1,
    },
    "InputNumber": {
        key: '',
        type: 'InputNumber',
        bindkey: '',
        value: 0,
        label: '计数器',
        disabled: false,
        step: 1,
        size: 'small',
        min: 0,
        max: 100,
    },
    "Loops": {
        key: '',
        type: 'Loops',
        bindkey: '',
        value: 1,
        label: '循环切换',
        disabled: false,
        options: [
            {val: 1, lab: '选项一'},
            {val: 2, lab: '选项二'},
        ],
    },

    "Layout": {
        key: '',
        type: 'Layout',
        label: 'Layout',
        cols:[
            {key: '', type: ''},
            {key: '', type: ''},
        ],
    }
};

export default baseTools;