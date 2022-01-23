
import router from '@system.router';
export default {
    data: {
        title: "大前端之旅",
        isHarmonyOS: true,
        next: "下一页",

    },

    switchTitle() {
        let that = this;
        that.title = that.isHarmonyOS ? "Hello World" : "Hello HarmonyOS";
        that.isHarmonyOS = !that.isHarmonyOS;
    },
    launch() {
        router.push ({
            uri:'pages/page2/page2', // 指定要跳转的页面
        })
    }
}