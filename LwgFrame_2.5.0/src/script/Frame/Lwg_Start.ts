import { Admin, Click } from "./lwg";

/**测试模块,每个模块分开，默认导出一个类，这个类是默认挂载的脚本类，如果有多个脚本，
 * 那么在这个默认类中进行添加，或者在其他地方动态添加*/
export module Lwg_Start {

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
        getFunc2: (any): any => {
            return;
        },
        // 设置方法
        setFunc1: () => {
        },
        setFunc2: (any) => {
            console.log(any);
        },
        // 检查方法
        checkFunc1: (bool): boolean => {
            return bool;
        },
        checkFunc2: (bool): boolean => {
            return bool;
        },
        // 临时属性赋值方法
        getTemporaryVariable: (): any => {
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
            return Laya.LocalStorage.getItem('Example_variable') ? Number(Laya.LocalStorage.getItem('Example_variable')) : null;
        },
        set value(date: number | any) {
            Laya.LocalStorage.setItem('Example_variable', date.toString());
        }
    }

    /**
      * 数组存储
      */
    export let _arrayData = {
        get arr(): Array<string> {
            return Laya.LocalStorage.getJSON('Example__array') ? JSON.parse(Laya.LocalStorage.getJSON('Example__array')) : [];
        },

        set arr(array: Array<string>) {
            Laya.LocalStorage.setJSON('Example__array', JSON.stringify(array));
        },
    }

    /**普通变量必须初始化*/
    export let _anyVariable: any;

    /**事件类型，必须枚举,因为有可能在全局使用,命名必须使用模块名称+事件名称*/
    export enum _EventType {
        event1 = 'Example_Event1',
        event2 = 'Example_Event2',
    }

    /**全模块中的临时变量可能在其他地方使用，所以在必要的时候枚举*/
    export enum _AnyVariableEnum {
        thisVariable1 = 'thisVariable1',
        thisVariable2 = 'thisVariable2',
    }

    /**通用类，进行通用初始化，可在每个游戏中重复使用重复*/
    export class _StartScene extends Admin._Scene {
        moduleOnAwake(): void {
        }
        moduleOnEnable(): void {
        }
        moduleEventReg(): void {
        }
    }
    /**其他类*/
    export class Singleton {

    }
}
/**可以手动挂在脚本中的类，全脚本唯一的默认导出，也可动态添加，动态添加写在模块内更方便*/
export default class UIStart extends Lwg_Start._StartScene {
    lwgOnAwake(): void {
    }
    lwgBtnClick(): void {
        Click._on(Click._Type.largen, this.btnVar('BtnStart'), this, null, null, () => {
            Admin._openScene(Admin._SceneName.GameScene, this.calssName);
        })
    }
}
export class UIStartItem extends Admin._Object {

}

