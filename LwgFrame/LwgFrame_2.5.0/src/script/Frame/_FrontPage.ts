import { Admin, EventAdmin, _SceneName } from "./lwg";
/**每个页面前的加载页面，需要手动调出*/
export module _FrontPage {
    /**事件类型，必须枚举,因为有可能在全局使用,命名必须使用模块名称+事件名称*/
    // export enum _EventType {
    //     event1 = '_FrontPage_Event1',
    //     event2 = '_FrontPage_Event2',
    // }
    /**通用类，进行通用初始化，可在每个游戏中重复使用重复*/
    export class _FrontPageScene extends Admin._Scene {
    }
}
/**可以手动挂在脚本中的类，全脚本唯一的默认导出，也可动态添加，动态添加写在模块内更方便*/
export default class UIFrontPage extends _FrontPage._FrontPageScene {

    lwgEventregister(): void {
        EventAdmin.register(Admin._EventType._FrontPage_Close, this, (func: Function) => {
            if (func) {
                func();
            }
            // Admin._closeScene(_SceneName.UIFrontPage, () => {
            //     console.log('关闭页面前加载界面！');
            // });
        })
    }
}
export class UIFrontPageItem extends Admin._Object {

}

