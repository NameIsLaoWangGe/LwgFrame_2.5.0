import GameScene from "./_Game";
import UIGuide, { _Guide } from "./_Guide";
import { Admin, Backpack, DrawCard, TimerAdmin, Setting, CheckIn, Loding, _SceneName } from "./lwg";
import UIExample from "./_Example";
// import ZJADMgr from "../../TJ/ZJADMgr";
import UITask, { _Task } from "./_Task";
import UIStart, { _Start } from "./_Start";
import UIFrontPage from "./_FrontPage";
export module _Init {
    export function _init(): void {
        (function admin() {
            Admin._sceneScript = {
                UIStart: UIStart,
                GameScene: GameScene,
                UIGuide: UIGuide,
                UITask: UITask,
                UIFrontPage: UIFrontPage,
            };
            Admin._evaluating = false;
            Admin._platform = Admin._platformTpye.Bytedance;
        }());
        (function d2() {


        }());
        (function d3() {


        }());
        (function other() {
            // new ZJADMgr();
        }());
        (function module() {
            _Start._init();
            _Task._init();
            _Guide._init();//放在最后
        }());
        console.log('初始化完毕！');
    }
}
export default _Init