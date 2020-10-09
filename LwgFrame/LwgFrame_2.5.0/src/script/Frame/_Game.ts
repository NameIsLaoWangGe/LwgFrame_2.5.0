import { Admin, Click, Effects, TimerAdmin, Tools } from "./lwg";

/**测试模块,每个模块分开，默认导出一个类，这个类是默认挂载的脚本类，如果有多个脚本，
 * 那么在这个默认类中进行添加，或者在其他地方动态添加*/
export module _Game {

    /**数据表和其中的数据增删改查*/
    export let _data = {
        da: '_data',
        /**对表格整体取值*/
        get array(): Array<any> {
            return [];
        },
        /**对表格整体修改替换*/
        set array(arr: Array<any>) {

        },
        // 获取方法
        getFunc1: (): any => {
            return '测试1';
        },
        getFunc2: (any: any): any => {
            return;
        },
        // 设置方法
        setFunc1: () => {
        },
        setFunc2: (any: any) => {
            console.log(any);
        },
        // 检查方法
        checkFunc1: (bool: boolean): boolean => {
            return bool;
        },
        checkFunc2: (bool: boolean): boolean => {
            return bool;
        },
        // 临时属性赋值方法
        getTemporary_variable: (): any => {
            if (!_data['name']) {
                _data['name'] = '王大哥';
            } else {
                return _data['name'];
            }
        }
    }

    /**本地存储变量格式*/
    export let _variable = {
        get value(): number | any {
            return Laya.LocalStorage.getItem('_Game_variable') ? Number(Laya.LocalStorage.getItem('_Game_variable')) : null;
        },
        set value(date: number | any) {
            Laya.LocalStorage.setItem('_Game_variable', date.toString());
        }
    }

    /**
      * 数组存储
      */
    export let _arraydata = {
        get arr(): Array<string> {
            return Laya.LocalStorage.getJSON('_Game_arraydata') ? JSON.parse(Laya.LocalStorage.getJSON('_Game_arraydata')) : [];
        },

        set arr(array: Array<string>) {
            Laya.LocalStorage.setJSON('_Game_arraydata', JSON.stringify(array));
        },
    }

    /**普通变量必须初始化*/
    export let any_variable: any;

    /**事件类型，必须枚举,因为有可能在全局使用,命名必须使用模块名称+事件名称*/
    export enum EventType {
        event1 = '_Game_Event1',
        event2 = '_Game_Event2',
    }

    /**全模块中的临时变量可能在其他地方使用，所以在必要的时候枚举*/
    export enum Any_variableEnum {
        this_variable1 = 'this_variable1',
        this_variable2 = 'this_variable2',
    }
    export function _init(): void {

    }

    /**通用类，进行通用初始化，可在每个游戏中重复使用重复*/
    export class _GameGeneral extends Admin._Scene {
        moduleOnAwake(): void {
        }
        moduleOnEnable(): void {
        }
        moduleEventRegister(): void {
        }
    }
    /**其他类*/
    export class _Singleton {

    }
}

export default class GameScene extends _Game._GameGeneral {
    lwgOnAwake(): void {
        TimerAdmin._frameLoop(30, this, () => {
            Effects._Particle._slowlyUp(this.ImgVar('Parent1'));
        })

        TimerAdmin._frameLoop(30, this, () => {
            Effects._Particle._spray(this.ImgVar('Parent2'));
        })

    }
    lwgOnEnable(): void {
    }
    lwgBtnClick(): void {
        Click._on(Click._Type.largen, this.btnVar('BtnBack'), this, null, null, () => {
            Admin._openScene(Admin._SceneName.UIStart, this.calssName);
        });
    }

}
export class GameSceneItem extends Admin._Object {

}

