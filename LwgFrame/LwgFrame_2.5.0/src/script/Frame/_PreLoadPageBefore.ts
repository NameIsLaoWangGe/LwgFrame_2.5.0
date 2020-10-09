import { Admin, EventAdmin, _PreLoad } from "./lwg";

/**每个页面前的加载页面，需要手动调出*/
export module _PreLoadPageBefore {
    /**事件类型，必须枚举,因为有可能在全局使用,命名必须使用模块名称+事件名称*/
    // export enum _EventType {
    //     event1 = '_PreLoadPageBefore_Event1',
    //     event2 = '_PreLoadPageBefore_Event2',
    // }
    /**通用类，进行通用初始化，可在每个游戏中重复使用重复*/
    export class _PreLoadPageBeforeScene extends Admin._Scene {

    }
}
/**可以手动挂在脚本中的类，全脚本唯一的默认导出，也可动态添加，动态添加写在模块内更方便*/
export default class UIPreLoadPageBefore extends _PreLoad._PreLoadScene {
    constructor() {
        super();
    }

    lwgOnAwake(): void {
        _PreLoad._remakeLode();
        _PreLoad.list_3DPrefab = [
            "3DPrefab/LayaScene_GameMain/Conventional/CardContainer.lh"
        ];
    }
    lwgEventregister(): void {
        EventAdmin.register(_PreLoad._EventType.pageBefore, this, (openName: string, cloesName?: string, func?: Function, zOder?: number) => {
            Admin._openScene(openName, cloesName, func, zOder);
        })
    }

    lodingComplete(): number {
        return 0;
    }

}
export class UIFrontPageItem extends Admin._Object {

}

