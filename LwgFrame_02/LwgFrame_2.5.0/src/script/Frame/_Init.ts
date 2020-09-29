import GameScene from "./_Game";
import UIGuide, { _Guide } from "./_Guide";
import { Admin, Backpack, DrawCard, TimerAdmin, Setting, CheckIn, Loding } from "./lwg";
import UILoding from "./_Loding";
import UIStart, { _Start } from "./_Start";
import UIExample from "./_Example";
import ZJADMgr from "../../TJ/ZJADMgr";
import UITask, { _Task } from "./_Task";
export module _Init {
    export class _InitScene extends Admin._Scene {
        moduleOnAwake(): void {
            Admin._sceneScript = {
                UIStart: UIStart,
                GameScene: GameScene,
                UIGuide: UIGuide,
                UITask: UITask,
                UIExample: UIExample,
            };
            (function d2() {


            }());
            (function d3() {


            }());
            (function module() {
                _Start._init();
                _Guide._init();
                _Task._init();
            }());
            console.log('完成初始化');
        }
    }
}
export default class UIInit extends _Init._InitScene {
    lwgOnEnable(): void {
        new ZJADMgr();
        console.log('是否进行过新手引导：', _Guide._complete.bool);
        if (_Guide._complete.bool) {
            Admin._openScene(Admin._SceneName.UIStart, this.calssName);
        } else {
            Backpack._haveCardArray.arr = [];
            DrawCard._drawCount.num = 0;
            DrawCard._residueDraw.num = 2;
            Admin._openScene(Admin._SceneName.UIDrawCard, this.calssName, () => {
                let caller = {};
                TimerAdmin._frameLoop(1, caller, () => {
                    if (Laya.stage.getChildByName('UIDrawCard')) {
                        Laya.timer.clearAll(caller);
                        Admin._openScene(Admin._SceneName.UIGuide);
                    }
                })
            });
        }
    }
}