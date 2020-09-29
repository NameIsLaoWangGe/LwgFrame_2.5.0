import { Loding } from "./lwg";
import _Init from "./_Init";

export default class UILoding extends Loding.LodingScene {
    lwgOnAwake(): void {
        Loding.list_2DPic = [
            // "res/atlas/Frame/Effects.png",
            // "res/atlas/Frame/UI.png",
            // "res/atlas/Game/UI/UISkinQualified.png",
            // "res/atlas/Game/UI/UIDrawCard/Card.png",
        ];
        Loding.list_2DScene = [
            // "Scene/LwgInit.json",
            // "Scene/UICheckIn.json",
            // "Scene/UIEasterEgg.json",
            // "Scene/UIOperation.json",
            // "Scene/UIGuide.json",
            // "Scene/UISet.json",
            // "Scene/UIShop.json",
            // "Scene/UISkinXD.json",
            // "Scene/UITask.json",
            "Scene/UIStart.json",
            "Scene/UIFrontPage.json",
        ];
        Loding.list_2DPrefab = [
            // "Prefab/PreOption.json",
            // "Prefab/PreGuessCard.json",
        ];
        Loding.list_3DScene = [
            // "3DScene/LayaScene_GameMain/Conventional/GameMain.ls"
        ];
        Loding.list_3DPrefab = [
            // "3DPrefab/LayaScene_GameMain/Conventional/CardContainer.lh"
        ];
        Loding.list_JsonData = [
            // "GameData/Shop/Other.json",
            // "GameData/Shop/Props.json",
            // "GameData/Shop/Skin.json",
            // 'GameData/Task/everydayTask.json',
            // "GameData/VictoryBox/VictoryBox.json",
            // "GameData/CheckIn/CheckIn.json",
            // "GameData/Dialog/Dialog.json",
            // "GameData/Game/Feature.json",
            // "GameData/Game/Card.json",
            // "GameData/EasterEgg/EasterEgg.json",
        ];
    }
    lwgAdaptive(): void {
    }
    lwgOnEnable(): void {
    }
    lwgOpenAni(): number { return 0; }
    lodingPhaseComplete(): void {
        // this.self['Progress'].mask.x = -425 + 425 * Lwg_Loding.currentProgress.value / Lwg_Loding.sumProgress;
    }
    lodingComplete(): number {
        _Init._init();
        // this.self['Progress'].mask.x = 0;
        return 200;
    }
}
