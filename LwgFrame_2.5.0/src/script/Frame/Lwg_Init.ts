import { Admin, Backpack, DrawCard, TimerAdmin, Setting, CheckIn, Loding } from "./lwg";
import GameScene from "./Lwg_Game";
// import { Game3D } from "../Game/Game3D";
// import ZJADMgr from "../../TJ/ZJADMgr";
import { Lwg_Guide } from "./Lwg_Guide";
import UILoding from "./Lwg_Loding";
import UIStart from "./Lwg_Start";
export module Lwg_Init {
    export class InitScene extends Admin._Scene {
        moduleOnAwake(): void {
            this.lwg();
            this.lwg3D();
            //如果加载时间过长，可以复制loding页面的内容到init界面
            // Setting.createSetBtn(64, 96, 82, 82, 'Game/UI/Common/shezhi.png');
            Admin._sceneScript = {
                UIStart: UIStart,
                GameScene: GameScene,
            }
        }
        /**基础参数初始化*/
        lwg(): void {
            Admin._commonVanishAni = true;
            Admin._platform = Admin._platformTpye.Bytedance;
            Admin._evaluating = false;
        }
        /**3D模块初始化*/
        lwg3D(): void {
            // Game3D.dataInit();
            // Game3D.Scene3D = Laya.loader.getRes(Loding.list_3DScene[0]);
            // Laya.stage.addChild(Game3D.Scene3D);
            // Game3D.Scene3D.addComponent(Game3D.MainScene);
        }
    }
}
/**可以手动挂在脚本中的类，全脚本唯一的默认导出，也可动态添加，动态添加写在模块内更方便*/
export default class UIInit extends Lwg_Init.InitScene {
    lwgOnEnable(): void {
        // new ZJADMgr();
        console.log('完成初始化');
        // console.log('是否进行过新手引导：', Lwg_Guide._complete.bool);
        // if (Lwg_Guide._complete.bool) {
        Admin._openScene(Admin._SceneName.UIStart, this.calssName);
        // } else {
        //     Backpack._haveCardArray.arr = [];
        //     DrawCard._drawCount.num = 0;
        //     DrawCard._residueDraw.num = 2;
        //     Admin._openScene(Admin.SceneName.UIDrawCard, this.self, () => {
        //         let caller = {};
        //         TimerAdmin.frameLoop(1, caller, () => {
        //             if (Laya.stage.getChildByName('UIDrawCard')) {
        //                 Laya.timer.clearAll(caller);
        //                 Admin._openScene(Admin.SceneName.UIGuide);
        //             }
        //         })
        //     });
        // }
    }
    lwgOnDisable(): void {
        Admin._closeScene(Admin._SceneName.UILoding);
    }
}