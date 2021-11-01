// com/Tabs/Tabs.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        list: {
            type: Array,
            value: [{
                    id: 0,
                    da: "首页",
                    is: true,
                },
                {
                    id: 1,
                    da: "全部",
                    is: false,
                },
                {
                    id: 2,
                    da: "分类",
                    is: false,
                },
                {
                    id: 3,
                    da: "我的",
                    is: false,
                }
            ]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        bindc(e) {
            const {index} = e.currentTarget.dataset;
            this.triggerEvent("itemChange",{index});
        }
    }
})