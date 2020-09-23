import UIInit from "./Lwg_Init"
import UILoding from "./Lwg_Loding"
/**场景的声明*/
export module LwgScene {
    /**
     * 所有场景的名称
     * */
    export enum Name {
        UILoding = 'UILoding',
        UIStart = 'UIStart',
        UIGuide = 'UIGuide',
        UISkin = 'UISkin',
        UIShop = 'UIShop',
        UITask = 'UITask',
        UISet = 'UISet',
        UIPifu = 'UIPifu',
        UIPuase = 'UIPuase',
        UIShare = 'UIShare',
        GameMain3D = 'GameMain3D',
        UIVictory = 'UIVictory',
        UIDefeated = 'UIDefeated',
        UIPassHint = 'UIPassHint',
        UISkinQualified = 'UISkinQualified',
        UISkinTry = 'UISkinTry',
        UIRedeem = 'UIRedeem',
        UIAnchorXD = 'UIAnchorXD',
        UITurntable = 'UITurntable',
        UICaiDanQiang = 'UICaiDanQiang',
        UICaidanPifu = 'UICaidanPifu',
        UIOperation = 'UIOperation',
        UIVictoryBox = 'UIVictoryBox',
        UICheckIn = 'UICheckIn',
        UIResurgence = 'UIResurgence',
        UIEasterEgg = 'UIEasterEgg',
        UIAds = 'UIAds',
        UILwgInit = 'UILwgInit',
        GameScene = 'GameScene',
        UISmallHint = 'UISmallHint',
        UIExecutionHint = 'UIExecutionHint',
        UIDrawCard = 'UIDrawCard',
        UIPropTry = 'UIPropTry',
        UICard = 'UICard',
        UIInit = 'UIInit'
    }

    /**
     * 场景集合
     * */
    export let control = {
    }
    /** 
     * 场景的脚本声明
    */
    export let script = {
        UILoding: UILoding,
        UIInit: UIInit,
    }
}