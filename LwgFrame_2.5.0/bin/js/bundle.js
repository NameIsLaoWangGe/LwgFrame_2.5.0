(function () {
    'use strict';

    var lwg;
    (function (lwg) {
        let Pause;
        (function (Pause) {
            function _createBtnPause(parent) {
                let sp;
                Laya.loader.load('prefab/BtnPause.json', Laya.Handler.create(this, function (prefab) {
                    let _prefab = new Laya.Prefab();
                    _prefab.json = prefab;
                    sp = Laya.Pool.getItemByCreateFun('prefab', _prefab.create, _prefab);
                    parent.addChild(sp);
                    sp.pos(645, 167);
                    sp.zOrder = 0;
                    Pause.BtnPauseNode = sp;
                    Pause.BtnPauseNode.name = 'BtnPauseNode';
                    Click._on(Click._Type.largen, sp, null, null, btnPauseUp, null);
                }));
            }
            Pause._createBtnPause = _createBtnPause;
            function btnPauseUp(event) {
                event.stopPropagation();
                event.currentTarget.scale(1, 1);
                lwg.Admin._openScene('UIPause', null, null, null);
            }
            Pause.btnPauseUp = btnPauseUp;
        })(Pause = lwg.Pause || (lwg.Pause = {}));
        let Elect;
        (function (Elect) {
            function _createP201_01(parent) {
                let sp;
                Laya.loader.load('prefab/P201.json', Laya.Handler.create(this, function (prefab) {
                    let _prefab = new Laya.Prefab();
                    _prefab.json = prefab;
                    sp = Laya.Pool.getItemByCreateFun('P201', _prefab.create, _prefab);
                    parent.addChild(sp);
                    sp.pos(80, 290);
                    sp.zOrder = 65;
                }));
            }
            Elect._createP201_01 = _createP201_01;
        })(Elect = lwg.Elect || (lwg.Elect = {}));
        let Dialog;
        (function (Dialog) {
            let HintContent;
            (function (HintContent) {
                HintContent[HintContent["\u91D1\u5E01\u4E0D\u591F\u4E86\uFF01"] = 0] = "\u91D1\u5E01\u4E0D\u591F\u4E86\uFF01";
                HintContent[HintContent["\u6CA1\u6709\u53EF\u4EE5\u8D2D\u4E70\u7684\u76AE\u80A4\u4E86\uFF01"] = 1] = "\u6CA1\u6709\u53EF\u4EE5\u8D2D\u4E70\u7684\u76AE\u80A4\u4E86\uFF01";
                HintContent[HintContent["\u6682\u65F6\u6CA1\u6709\u5E7F\u544A\uFF0C\u8FC7\u4F1A\u513F\u518D\u8BD5\u8BD5\u5427\uFF01"] = 2] = "\u6682\u65F6\u6CA1\u6709\u5E7F\u544A\uFF0C\u8FC7\u4F1A\u513F\u518D\u8BD5\u8BD5\u5427\uFF01";
                HintContent[HintContent["\u6682\u65E0\u76AE\u80A4!"] = 3] = "\u6682\u65E0\u76AE\u80A4!";
                HintContent[HintContent["\u6682\u65E0\u5206\u4EAB!"] = 4] = "\u6682\u65E0\u5206\u4EAB!";
                HintContent[HintContent["\u6682\u65E0\u63D0\u793A\u673A\u4F1A!"] = 5] = "\u6682\u65E0\u63D0\u793A\u673A\u4F1A!";
                HintContent[HintContent["\u89C2\u770B\u5B8C\u6574\u5E7F\u544A\u624D\u80FD\u83B7\u53D6\u5956\u52B1\u54E6\uFF01"] = 6] = "\u89C2\u770B\u5B8C\u6574\u5E7F\u544A\u624D\u80FD\u83B7\u53D6\u5956\u52B1\u54E6\uFF01";
                HintContent[HintContent["\u901A\u5173\u4E0A\u4E00\u5173\u624D\u80FD\u89E3\u9501\u672C\u5173\uFF01"] = 7] = "\u901A\u5173\u4E0A\u4E00\u5173\u624D\u80FD\u89E3\u9501\u672C\u5173\uFF01";
                HintContent[HintContent["\u5206\u4EAB\u6210\u529F\u540E\u624D\u80FD\u83B7\u53D6\u5956\u52B1\uFF01"] = 8] = "\u5206\u4EAB\u6210\u529F\u540E\u624D\u80FD\u83B7\u53D6\u5956\u52B1\uFF01";
                HintContent[HintContent["\u5206\u4EAB\u6210\u529F!"] = 9] = "\u5206\u4EAB\u6210\u529F!";
                HintContent[HintContent["\u6682\u65E0\u89C6\u9891\uFF0C\u73A9\u4E00\u5C40\u6E38\u620F\u4E4B\u540E\u5206\u4EAB\uFF01"] = 10] = "\u6682\u65E0\u89C6\u9891\uFF0C\u73A9\u4E00\u5C40\u6E38\u620F\u4E4B\u540E\u5206\u4EAB\uFF01";
                HintContent[HintContent["\u6D88\u80172\u70B9\u4F53\u529B\uFF01"] = 11] = "\u6D88\u80172\u70B9\u4F53\u529B\uFF01";
                HintContent[HintContent["\u4ECA\u65E5\u4F53\u529B\u798F\u5229\u5DF2\u9886\u53D6\uFF01"] = 12] = "\u4ECA\u65E5\u4F53\u529B\u798F\u5229\u5DF2\u9886\u53D6\uFF01";
                HintContent[HintContent["\u5206\u4EAB\u6210\u529F\uFF0C\u83B7\u5F97125\u91D1\u5E01\uFF01"] = 13] = "\u5206\u4EAB\u6210\u529F\uFF0C\u83B7\u5F97125\u91D1\u5E01\uFF01";
                HintContent[HintContent["\u5206\u4EAB\u6210\u529F\uFF0C\u83B7\u5F9750\u91D1\u5E01\uFF01"] = 14] = "\u5206\u4EAB\u6210\u529F\uFF0C\u83B7\u5F9750\u91D1\u5E01\uFF01";
                HintContent[HintContent["\u9650\u5B9A\u76AE\u80A4\u5DF2\u7ECF\u83B7\u5F97\uFF0C\u8BF7\u524D\u5F80\u76AE\u80A4\u754C\u9762\u67E5\u770B\u3002"] = 15] = "\u9650\u5B9A\u76AE\u80A4\u5DF2\u7ECF\u83B7\u5F97\uFF0C\u8BF7\u524D\u5F80\u76AE\u80A4\u754C\u9762\u67E5\u770B\u3002";
                HintContent[HintContent["\u5206\u4EAB\u5931\u8D25\uFF01"] = 16] = "\u5206\u4EAB\u5931\u8D25\uFF01";
                HintContent[HintContent["\u5151\u6362\u7801\u9519\u8BEF\uFF01"] = 17] = "\u5151\u6362\u7801\u9519\u8BEF\uFF01";
                HintContent[HintContent["\u5C1A\u672A\u83B7\u5F97\u8BE5\u5546\u54C1!"] = 18] = "\u5C1A\u672A\u83B7\u5F97\u8BE5\u5546\u54C1!";
                HintContent[HintContent["\u606D\u559C\u83B7\u5F97\u65B0\u76AE\u80A4!"] = 19] = "\u606D\u559C\u83B7\u5F97\u65B0\u76AE\u80A4!";
                HintContent[HintContent["\u8BF7\u524D\u5F80\u76AE\u80A4\u9650\u5B9A\u754C\u9762\u83B7\u53D6!"] = 20] = "\u8BF7\u524D\u5F80\u76AE\u80A4\u9650\u5B9A\u754C\u9762\u83B7\u53D6!";
                HintContent[HintContent["\u901A\u8FC7\u76F8\u5E94\u7684\u5173\u5361\u6570\u8FBE\u5230\u5C31\u53EF\u4EE5\u5F97\u5230\u4E86!"] = 21] = "\u901A\u8FC7\u76F8\u5E94\u7684\u5173\u5361\u6570\u8FBE\u5230\u5C31\u53EF\u4EE5\u5F97\u5230\u4E86!";
                HintContent[HintContent["\u70B9\u51FB\u91D1\u5E01\u62BD\u5956\u6309\u94AE\u8D2D\u4E70!"] = 22] = "\u70B9\u51FB\u91D1\u5E01\u62BD\u5956\u6309\u94AE\u8D2D\u4E70!";
                HintContent[HintContent["\u6CA1\u6709\u9886\u53D6\u6B21\u6570\u4E86\uFF01"] = 23] = "\u6CA1\u6709\u9886\u53D6\u6B21\u6570\u4E86\uFF01";
                HintContent[HintContent["\u589E\u52A0\u4E09\u6B21\u5F00\u542F\u5B9D\u7BB1\u6B21\u6570\uFF01"] = 24] = "\u589E\u52A0\u4E09\u6B21\u5F00\u542F\u5B9D\u7BB1\u6B21\u6570\uFF01";
                HintContent[HintContent["\u89C2\u770B\u5E7F\u544A\u53EF\u4EE5\u83B7\u5F97\u4E09\u6B21\u5F00\u5B9D\u7BB1\u6B21\u6570\uFF01"] = 25] = "\u89C2\u770B\u5E7F\u544A\u53EF\u4EE5\u83B7\u5F97\u4E09\u6B21\u5F00\u5B9D\u7BB1\u6B21\u6570\uFF01";
                HintContent[HintContent["\u6CA1\u6709\u5B9D\u7BB1\u9886\u53EF\u4EE5\u9886\u4E86\uFF01"] = 26] = "\u6CA1\u6709\u5B9D\u7BB1\u9886\u53EF\u4EE5\u9886\u4E86\uFF01";
                HintContent[HintContent["\u8BF7\u524D\u5F80\u76AE\u80A4\u754C\u9762\u8D2D\u4E70\uFF01"] = 27] = "\u8BF7\u524D\u5F80\u76AE\u80A4\u754C\u9762\u8D2D\u4E70\uFF01";
                HintContent[HintContent["\u4ECA\u5929\u5DF2\u7ECF\u7B7E\u5230\u8FC7\u4E86\uFF01"] = 28] = "\u4ECA\u5929\u5DF2\u7ECF\u7B7E\u5230\u8FC7\u4E86\uFF01";
                HintContent[HintContent["\u6CA1\u6709\u62BD\u5956\u6B21\u6570\u4E86\uFF0C\u8BF7\u901A\u8FC7\u89C2\u770B\u5E7F\u544A\u83B7\u53D6\uFF01"] = 29] = "\u6CA1\u6709\u62BD\u5956\u6B21\u6570\u4E86\uFF0C\u8BF7\u901A\u8FC7\u89C2\u770B\u5E7F\u544A\u83B7\u53D6\uFF01";
                HintContent[HintContent["\u6CA1\u6709\u5E93\u5B58\u4E86\uFF01"] = 30] = "\u6CA1\u6709\u5E93\u5B58\u4E86\uFF01";
                HintContent[HintContent["\u724C\u6570\u592A\u5C11\uFF0C\u65E0\u6CD5\u4F7F\u7528\u9053\u5177\uFF01"] = 31] = "\u724C\u6570\u592A\u5C11\uFF0C\u65E0\u6CD5\u4F7F\u7528\u9053\u5177\uFF01";
                HintContent[HintContent["\u6CA1\u6709\u53EF\u4EE5\u8D2D\u4E70\u7684\u5361\u724C\u4E86\uFF01"] = 32] = "\u6CA1\u6709\u53EF\u4EE5\u8D2D\u4E70\u7684\u5361\u724C\u4E86\uFF01";
                HintContent[HintContent["\u656C\u8BF7\u671F\u5F85!"] = 33] = "\u656C\u8BF7\u671F\u5F85!";
            })(HintContent = Dialog.HintContent || (Dialog.HintContent = {}));
            let Skin;
            (function (Skin) {
                Skin["blackBord"] = "Frame/UI/ui_orthogon_black.png";
            })(Skin || (Skin = {}));
            function createHint_Middle(describe) {
                let Hint_M = Laya.Pool.getItemByClass('Hint_M', Laya.Sprite);
                Hint_M.name = 'Hint_M';
                Laya.stage.addChild(Hint_M);
                Hint_M.width = Laya.stage.width;
                Hint_M.height = 100;
                Hint_M.pivotY = Hint_M.height / 2;
                Hint_M.pivotX = Laya.stage.width / 2;
                Hint_M.x = Laya.stage.width / 2;
                Hint_M.y = Laya.stage.height / 2;
                Hint_M.zOrder = 100;
                let Pic = new Laya.Image();
                Hint_M.addChild(Pic);
                Pic.skin = Skin.blackBord;
                Pic.width = Laya.stage.width;
                Pic.pivotX = Laya.stage.width / 2;
                Pic.height = 100;
                Pic.pivotY = Pic.height / 2;
                Pic.y = Hint_M.height / 2;
                Pic.x = Laya.stage.width / 2;
                Pic.alpha = 0.6;
                let Dec = new Laya.Label();
                Hint_M.addChild(Dec);
                Dec.width = Laya.stage.width;
                Dec.text = HintContent[describe];
                Dec.pivotX = Laya.stage.width / 2;
                Dec.x = Laya.stage.width / 2;
                Dec.height = 100;
                Dec.pivotY = 50;
                Dec.y = Hint_M.height / 2;
                Dec.bold = true;
                Dec.fontSize = 35;
                Dec.color = '#ffffff';
                Dec.align = 'center';
                Dec.valign = 'middle';
                Dec.alpha = 0;
                Animation2D.scale_Alpha(Hint_M, 0, 1, 0, 1, 1, 1, 200, 0, f => {
                    Animation2D.fadeOut(Dec, 0, 1, 150, 0, f => {
                        Animation2D.fadeOut(Dec, 1, 0, 200, 800, f => {
                            Animation2D.scale_Alpha(Hint_M, 1, 1, 1, 1, 0, 0, 200, 0, f => {
                                Hint_M.removeSelf();
                            });
                        });
                    });
                });
            }
            Dialog.createHint_Middle = createHint_Middle;
            Dialog._dialogContent = {
                get Array() {
                    return Laya.loader.getRes("GameData/Dialog/Dialog.json")['RECORDS'] !== null ? Laya.loader.getRes("GameData/Dialog/Dialog.json")['RECORDS'] : [];
                },
            };
            function getDialogContent(useWhere, name) {
                let dia;
                for (let index = 0; index < Dialog._dialogContent.Array.length; index++) {
                    const element = Dialog._dialogContent.Array[index];
                    if (element['useWhere'] == useWhere && element['name'] == name) {
                        dia = element;
                        break;
                    }
                }
                let arr = [];
                for (const key in dia) {
                    if (dia.hasOwnProperty(key)) {
                        const value = dia[key];
                        if (key.substring(0, 7) == 'content' || value !== -1) {
                            arr.push(value);
                        }
                    }
                }
                return arr;
            }
            Dialog.getDialogContent = getDialogContent;
            function getDialogContent_Random(useWhere) {
                let contentArr = [];
                let whereArr = getUseWhere(useWhere);
                let index = Math.floor(Math.random() * whereArr.length);
                for (const key in whereArr[index]) {
                    if (whereArr[index].hasOwnProperty(key)) {
                        const value = whereArr[index][key];
                        if (key.substring(0, 7) == 'content' && value !== "-1") {
                            contentArr.push(value);
                        }
                    }
                }
                return contentArr;
            }
            Dialog.getDialogContent_Random = getDialogContent_Random;
            function getUseWhere(useWhere) {
                let arr = [];
                for (let index = 0; index < Dialog._dialogContent.Array.length; index++) {
                    const element = Dialog._dialogContent.Array[index];
                    if (element['useWhere'] == useWhere) {
                        arr.push(element);
                    }
                }
                return arr;
            }
            Dialog.getUseWhere = getUseWhere;
            let UseWhere;
            (function (UseWhere) {
                UseWhere["scene1"] = "scene1";
                UseWhere["scene2"] = "scene2";
                UseWhere["scene3"] = "scene3";
            })(UseWhere = Dialog.UseWhere || (Dialog.UseWhere = {}));
            let DialogProperty;
            (function (DialogProperty) {
                DialogProperty["name"] = "name";
                DialogProperty["useWhere"] = "useWhere";
                DialogProperty["content"] = "content";
                DialogProperty["max"] = "max";
            })(DialogProperty = Dialog.DialogProperty || (Dialog.DialogProperty = {}));
            let PlayMode;
            (function (PlayMode) {
                PlayMode["voluntarily"] = "voluntarily";
                PlayMode["manual"] = "manual";
                PlayMode["clickContent"] = "clickContent";
            })(PlayMode = Dialog.PlayMode || (Dialog.PlayMode = {}));
            function createVoluntarilyDialogue(x, y, useWhere, startDelayed, delayed, parent, content) {
                if (startDelayed == undefined) {
                    startDelayed = 0;
                }
                Laya.timer.once(startDelayed, this, () => {
                    let Pre_Dialogue;
                    Laya.loader.load('Prefab/Dialogue_Common.json', Laya.Handler.create(this, function (prefab) {
                        let _prefab = new Laya.Prefab();
                        _prefab.json = prefab;
                        Pre_Dialogue = Laya.Pool.getItemByCreateFun('Pre_Dialogue', _prefab.create, _prefab);
                        if (parent) {
                            parent.addChild(Pre_Dialogue);
                        }
                        else {
                            Laya.stage.addChild(Pre_Dialogue);
                        }
                        Pre_Dialogue.x = x;
                        Pre_Dialogue.y = y;
                        let ContentLabel = Pre_Dialogue.getChildByName('Content');
                        let contentArr;
                        if (content !== undefined) {
                            ContentLabel.text = content[0];
                        }
                        else {
                            contentArr = getDialogContent_Random(useWhere);
                            ContentLabel.text = contentArr[0];
                        }
                        Pre_Dialogue.zOrder = 100;
                        if (delayed == undefined) {
                            delayed = 1000;
                        }
                        Animation2D.scale_Alpha(Pre_Dialogue, 0, 0, 0, 1, 1, 1, 150, 1000, () => {
                            for (let index = 0; index < contentArr.length; index++) {
                                Laya.timer.once(index * delayed, this, () => {
                                    ContentLabel.text = contentArr[index];
                                    if (index == contentArr.length - 1) {
                                        Laya.timer.once(delayed, this, () => {
                                            Animation2D.scale_Alpha(Pre_Dialogue, 1, 1, 1, 0, 0, 0, 150, 1000, () => {
                                                Pre_Dialogue.removeSelf();
                                            });
                                        });
                                    }
                                });
                            }
                        });
                        Dialog.DialogueNode = Pre_Dialogue;
                    }));
                });
            }
            Dialog.createVoluntarilyDialogue = createVoluntarilyDialogue;
            function createCommonDialog(parent, x, y, content) {
                let Dialogue_Common;
                Laya.loader.load('Prefab/Dialogue_Common.json', Laya.Handler.create(this, function (prefab) {
                    let _prefab = new Laya.Prefab();
                    _prefab.json = prefab;
                    Dialogue_Common = Laya.Pool.getItemByCreateFun('Dialogue_Common', _prefab.create, _prefab);
                    parent.addChild(Dialogue_Common);
                    Dialogue_Common.pos(x, y);
                    let Content = Dialogue_Common.getChildByName('Dialogue_Common');
                    Content.text = content;
                }));
            }
            Dialog.createCommonDialog = createCommonDialog;
        })(Dialog = lwg.Dialog || (lwg.Dialog = {}));
        let Execution;
        (function (Execution) {
            Execution._execution = {
                get value() {
                    return Laya.LocalStorage.getItem('_execution') ? Number(Laya.LocalStorage.getItem('_execution')) : 15;
                },
                set value(val) {
                    Laya.LocalStorage.setItem('_execution', val.toString());
                }
            };
            function _createExecutionNum(parent) {
                let sp;
                Laya.loader.load('prefab/ExecutionNum.json', Laya.Handler.create(this, function (prefab) {
                    let _prefab = new Laya.Prefab();
                    _prefab.json = prefab;
                    sp = Laya.Pool.getItemByCreateFun('prefab', _prefab.create, _prefab);
                    parent.addChild(sp);
                    let num = sp.getChildByName('Num');
                    sp.pos(297, 90);
                    sp.zOrder = 50;
                    Execution.ExecutionNumNode = sp;
                    Execution.ExecutionNumNode.name = 'ExecutionNumNode';
                }));
            }
            Execution._createExecutionNum = _createExecutionNum;
            function _createAddExecution(x, y, func) {
                let sp;
                Laya.loader.load('prefab/execution.json', Laya.Handler.create(this, function (prefab) {
                    let _prefab = new Laya.Prefab();
                    _prefab.json = prefab;
                    sp = Laya.Pool.getItemByCreateFun('prefab', _prefab.create, _prefab);
                    Laya.stage.addChild(sp);
                    sp.x = Laya.stage.width / 2;
                    sp.y = Laya.stage.height / 2;
                    sp.zOrder = 50;
                    if (Execution.ExecutionNumNode) {
                        Animation2D.move_Simple(sp, sp.x, sp.y, Execution.ExecutionNumNode.x, Execution.ExecutionNumNode.y, 800, 100, f => {
                            Animation2D.fadeOut(sp, 1, 0, 200, 0, f => {
                                lwg.Animation2D.upDwon_Shake(Execution.ExecutionNumNode, 10, 80, 0, null);
                                if (func) {
                                    func();
                                }
                            });
                        }, Laya.Ease.expoIn);
                    }
                }));
            }
            Execution._createAddExecution = _createAddExecution;
            function createConsumeEx(subEx) {
                let label = Laya.Pool.getItemByClass('label', Laya.Label);
                label.name = 'label';
                Laya.stage.addChild(label);
                label.text = '-2';
                label.fontSize = 40;
                label.bold = true;
                label.color = '#59245c';
                label.x = Execution.ExecutionNumNode.x + 100;
                label.y = Execution.ExecutionNumNode.y - label.height / 2 + 4;
                label.zOrder = 100;
                lwg.Animation2D.fadeOut(label, 0, 1, 200, 150, f => {
                    lwg.Animation2D.leftRight_Shake(Execution.ExecutionNumNode, 15, 60, 0, null);
                    lwg.Animation2D.fadeOut(label, 1, 0, 600, 400, f => {
                    });
                });
            }
            Execution.createConsumeEx = createConsumeEx;
        })(Execution = lwg.Execution || (lwg.Execution = {}));
        let Gold;
        (function (Gold_1) {
            Gold_1._num = {
                get value() {
                    return Laya.LocalStorage.getItem('_goldNum') ? Number(Laya.LocalStorage.getItem('_goldNum')) : 0;
                },
                set value(val) {
                    Laya.LocalStorage.setItem('_goldNum', val.toString());
                }
            };
            function createGoldNode(x, y, parent) {
                if (!parent) {
                    parent = Laya.stage;
                }
                if (Gold_1.GoldNode) {
                    Gold_1.GoldNode.removeSelf();
                }
                let sp;
                Laya.loader.load('Prefab/PreGold.json', Laya.Handler.create(this, function (prefab) {
                    let _prefab = new Laya.Prefab();
                    _prefab.json = prefab;
                    sp = Laya.Pool.getItemByCreateFun('gold', _prefab.create, _prefab);
                    let Num = sp.getChildByName('Num');
                    Num.text = Gold_1._num.value.toString();
                    parent.addChild(sp);
                    let Pic = sp.getChildByName('Pic');
                    sp.pos(x, y);
                    sp.zOrder = 100;
                    Gold_1.GoldNode = sp;
                }));
            }
            Gold_1.createGoldNode = createGoldNode;
            function addGold(number) {
                Gold_1._num.value += Number(number);
                let Num = Gold_1.GoldNode.getChildByName('Num');
                Num.text = Gold_1._num.value.toString();
            }
            Gold_1.addGold = addGold;
            function addGoldDisPlay(number) {
                let Num = Gold_1.GoldNode.getChildByName('Num');
                Num.value = (Number(Num.value) + Number(number)).toString();
            }
            Gold_1.addGoldDisPlay = addGoldDisPlay;
            function addGoldNoDisPlay(number) {
                Gold_1._num.value += Number(number);
            }
            Gold_1.addGoldNoDisPlay = addGoldNoDisPlay;
            function goldAppear(delayed, x, y) {
                if (!Gold_1.GoldNode) {
                    return;
                }
                if (delayed) {
                    Animation2D.scale_Alpha(Gold_1.GoldNode, 0, 1, 1, 1, 1, 1, delayed, 0, f => {
                        Gold_1.GoldNode.visible = true;
                    });
                }
                else {
                    Gold_1.GoldNode.visible = true;
                }
                if (x) {
                    Gold_1.GoldNode.x = x;
                }
                if (y) {
                    Gold_1.GoldNode.y = y;
                }
            }
            Gold_1.goldAppear = goldAppear;
            function goldVinish(delayed) {
                if (!Gold_1.GoldNode) {
                    return;
                }
                if (delayed) {
                    Animation2D.scale_Alpha(Gold_1.GoldNode, 1, 1, 1, 1, 1, 0, delayed, 0, f => {
                        Gold_1.GoldNode.visible = false;
                    });
                }
                else {
                    Gold_1.GoldNode.visible = false;
                }
            }
            Gold_1.goldVinish = goldVinish;
            let SkinUrl;
            (function (SkinUrl) {
                SkinUrl[SkinUrl["Frame/Effects/icon_gold.png"] = 0] = "Frame/Effects/icon_gold.png";
            })(SkinUrl || (SkinUrl = {}));
            function createOneGold(width, height, url) {
                let Gold = Laya.Pool.getItemByClass('addGold', Laya.Image);
                Gold.name = 'addGold';
                let num = Math.floor(Math.random() * 12);
                Gold.alpha = 1;
                Gold.zOrder = 60;
                Gold.width = width;
                Gold.height = height;
                Gold.pivotX = width / 2;
                Gold.pivotY = height / 2;
                if (!url) {
                    Gold.skin = SkinUrl[0];
                }
                else {
                    Gold.skin = url;
                }
                return Gold;
            }
            Gold_1.createOneGold = createOneGold;
            function getGoldAni_Single(parent, number, width, height, url, firstPoint, targetPoint, func1, func2) {
                for (let index = 0; index < number; index++) {
                    Laya.timer.once(index * 30, this, () => {
                        let Gold = createOneGold(width, height, url);
                        parent.addChild(Gold);
                        Animation2D.move_Scale(Gold, 1, firstPoint.x, firstPoint.y, targetPoint.x, targetPoint.y, 1, 350, 0, null, () => {
                            PalyAudio.playSound(PalyAudio.voiceUrl.huodejinbi);
                            if (index === number - 1) {
                                Laya.timer.once(200, this, () => {
                                    if (func2) {
                                        func2();
                                    }
                                });
                            }
                            else {
                                if (func1) {
                                    func1();
                                }
                            }
                            Gold.removeSelf();
                        });
                    });
                }
            }
            Gold_1.getGoldAni_Single = getGoldAni_Single;
            function getGoldAni_Heap(parent, number, width, height, url, firstPoint, targetPoint, func1, func2) {
                for (let index = 0; index < number; index++) {
                    let Gold = createOneGold(width, height, url);
                    parent.addChild(Gold);
                    if (!url) {
                        Gold.skin = SkinUrl[0];
                    }
                    else {
                        Gold.skin = url;
                    }
                    let x = Math.floor(Math.random() * 2) == 1 ? firstPoint.x + Math.random() * 100 : firstPoint.x - Math.random() * 100;
                    let y = Math.floor(Math.random() * 2) == 1 ? firstPoint.y + Math.random() * 100 : firstPoint.y - Math.random() * 100;
                    Animation2D.move_Scale(Gold, 0.5, firstPoint.x, firstPoint.y, x, y, 1, 300, Math.random() * 100 + 100, Laya.Ease.expoIn, () => {
                        Animation2D.move_Scale(Gold, 1, Gold.x, Gold.y, targetPoint.x, targetPoint.y, 1, 400, Math.random() * 200 + 100, Laya.Ease.cubicOut, () => {
                            PalyAudio.playSound(PalyAudio.voiceUrl.huodejinbi);
                            if (index === number - 1) {
                                Laya.timer.once(200, this, () => {
                                    if (func2) {
                                        func2();
                                    }
                                });
                            }
                            else {
                                if (func1) {
                                    func1();
                                }
                            }
                            Gold.removeSelf();
                        });
                    });
                }
            }
            Gold_1.getGoldAni_Heap = getGoldAni_Heap;
            class GoldAniBase extends Laya.Script {
                onAwake() {
                    this.initProperty();
                }
                onEnable() {
                    this.self = this.owner;
                    this.selfScene = this.self.scene;
                    let calssName = this['__proto__']['constructor'].name;
                    this.self[calssName] = this;
                    this.timer = 0;
                    this.lwgInit();
                    this.propertyAssign();
                }
                lwgInit() {
                }
                initProperty() {
                }
                propertyAssign() {
                    if (this.startAlpha) {
                        this.self.alpha = this.startAlpha;
                    }
                    if (this.startScale) {
                        this.self.scale(this.startScale, this.startScale);
                    }
                    if (this.startRotat) {
                        this.self.rotation = this.startRotat;
                    }
                }
                commonSpeedXYByAngle(angle, speed) {
                    this.self.x += Tools.point_SpeedXYByAngle(angle, speed + this.accelerated).x;
                    this.self.y += Tools.point_SpeedXYByAngle(angle, speed + this.accelerated).y;
                }
                moveRules() {
                }
                onUpdate() {
                    this.moveRules();
                }
                onDisable() {
                    Laya.Pool.recover(this.self.name, this.self);
                    this.destroy();
                    Laya.Tween.clearAll(this);
                    Laya.timer.clearAll(this);
                }
            }
            Gold_1.GoldAniBase = GoldAniBase;
            class AddGold extends GoldAniBase {
                lwgInit() {
                    this.self.width = 115;
                    this.self.height = 111;
                    this.self.pivotX = this.self.width / 2;
                    this.self.pivotY = this.self.height / 2;
                }
                initProperty() {
                }
                moveRules() {
                    if (this.moveSwitch) {
                        this.timer++;
                        if (this.timer > 0) {
                            lwg.Animation2D.move_Scale(this.self, 1, this.self.x, this.self.y, this.targetX, this.targetY, 0.35, 250, 0, f => {
                                this.self.removeSelf();
                                if (this.func !== null) {
                                    this.func();
                                }
                            });
                            this.moveSwitch = false;
                        }
                    }
                }
            }
            Gold_1.AddGold = AddGold;
        })(Gold = lwg.Gold || (lwg.Gold = {}));
        let EventAdmin;
        (function (EventAdmin) {
            EventAdmin.dispatcher = new Laya.EventDispatcher();
            function reg(type, caller, listener) {
                if (!caller) {
                    console.error("事件的执行域必须存在!");
                }
                EventAdmin.dispatcher.on(type.toString(), caller, listener);
            }
            EventAdmin.reg = reg;
            function regOnce(type, caller, listener) {
                if (!caller) {
                    console.error("事件的执行域必须存在!");
                }
                EventAdmin.dispatcher.once(type.toString(), caller, listener);
            }
            EventAdmin.regOnce = regOnce;
            function notify(type, args) {
                EventAdmin.dispatcher.event(type.toString(), args);
            }
            EventAdmin.notify = notify;
            function off(type, caller, listener) {
                this.dispatcher.off(type.toString(), caller, listener);
            }
            EventAdmin.off = off;
            function offAll(type) {
                EventAdmin.dispatcher.offAll(type.toString());
            }
            EventAdmin.offAll = offAll;
            function offCaller(caller) {
                EventAdmin.dispatcher.offAllCaller(caller);
            }
            EventAdmin.offCaller = offCaller;
        })(EventAdmin = lwg.EventAdmin || (lwg.EventAdmin = {}));
        let DateAdmin;
        (function (DateAdmin) {
            DateAdmin._date = {
                get year() {
                    return (new Date()).getFullYear();
                },
                get month() {
                    return (new Date()).getMonth();
                },
                get date() {
                    return (new Date()).getDate();
                },
                get day() {
                    return (new Date()).getDay();
                },
                get hours() {
                    return (new Date()).getHours();
                },
                get minutes() {
                    return (new Date()).getMinutes();
                },
                get seconds() {
                    return (new Date()).getSeconds();
                },
                get milliseconds() {
                    return (new Date()).getMilliseconds();
                },
                get toLocaleDateString() {
                    return (new Date()).toLocaleDateString();
                },
                get toLocaleTimeString() {
                    return (new Date()).toLocaleTimeString();
                }
            };
            DateAdmin._loginDate = {
                get value() {
                    let data = Laya.LocalStorage.getJSON('Date_loginDate');
                    let dataArr = [];
                    let d = new Date();
                    let date1 = [d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getDay()];
                    if (data) {
                        dataArr = JSON.parse(data);
                        let equal = false;
                        for (let index = 0; index < dataArr.length; index++) {
                            if (dataArr[index].toString() == date1.toString()) {
                                equal = true;
                            }
                        }
                        if (!equal) {
                            dataArr.push(date1);
                        }
                    }
                    if (dataArr.length == 0) {
                        dataArr.push(date1);
                    }
                    Laya.LocalStorage.setJSON('Date_loginDate', JSON.stringify(dataArr));
                    return dataArr;
                },
            };
            DateAdmin._loginNumber = {
                get value() {
                    return Laya.LocalStorage.getItem('_loginNumber') ? Number(Laya.LocalStorage.getItem('_loginNumber')) : 1;
                },
                set value(val) {
                    Laya.LocalStorage.setItem('_loginNumber', val.toString());
                }
            };
        })(DateAdmin = lwg.DateAdmin || (lwg.DateAdmin = {}));
        let TimerAdmin;
        (function (TimerAdmin) {
            function _frameLoop(delay, caller, method, immediately, args, coverBefore) {
                if (immediately) {
                    method();
                }
                Laya.timer.frameLoop(delay, caller, () => {
                    method();
                }, args, coverBefore);
            }
            TimerAdmin._frameLoop = _frameLoop;
            function _frameRandomLoop(delay1, delay2, caller, method, immediately, args, coverBefore) {
                if (immediately) {
                    method();
                }
                Laya.timer.frameLoop(delay1, caller, () => {
                    let delay = Tools.randomNumber(delay1, delay2);
                    Laya.timer.frameOnce(delay, caller, () => {
                        method();
                    });
                }, args, coverBefore);
            }
            TimerAdmin._frameRandomLoop = _frameRandomLoop;
            function _frameNumLoop(delay, num, caller, method, immediately, args, coverBefore) {
                if (immediately) {
                    method();
                }
                let num0 = 0;
                Laya.timer.frameLoop(delay, caller, () => {
                    num0++;
                    if (num0 > num) {
                        Laya.timer.clearAll(caller);
                    }
                    else {
                        method();
                    }
                }, args, coverBefore);
            }
            TimerAdmin._frameNumLoop = _frameNumLoop;
            function _frameOnce(delay, caller, afterMethod, beforeMethod, args, coverBefore) {
                if (beforeMethod) {
                    beforeMethod();
                }
                Laya.timer.frameOnce(delay, caller, () => {
                    afterMethod();
                }, args, coverBefore);
            }
            TimerAdmin._frameOnce = _frameOnce;
            function _loop(delay, caller, method, immediately, args, coverBefore) {
                if (immediately) {
                    method();
                }
                Laya.timer.loop(delay, caller, () => {
                    method();
                }, args, coverBefore);
            }
            TimerAdmin._loop = _loop;
            function _randomLoop(delay1, delay2, caller, method, immediately, args, coverBefore) {
                if (immediately) {
                    method();
                }
                Laya.timer.loop(delay1, caller, () => {
                    let delay = Tools.randomNumber(delay1, delay2);
                    Laya.timer.frameOnce(delay, caller, () => {
                        method();
                    });
                }, args, coverBefore);
            }
            TimerAdmin._randomLoop = _randomLoop;
            function _NumLoop(delay, num, method, immediately, args, coverBefore) {
                if (immediately) {
                    method();
                }
                let caller = {
                    num0: 0,
                };
                Laya.timer.loop(delay, caller, () => {
                    caller.num0++;
                    if (num >= caller.num0) {
                        Laya.timer.clearAll(caller);
                    }
                    else {
                        method();
                    }
                }, args, coverBefore);
            }
            TimerAdmin._NumLoop = _NumLoop;
            function _once(delay, afterMethod, beforeMethod, args, coverBefore) {
                if (beforeMethod) {
                    beforeMethod();
                }
                let caller = {};
                Laya.timer.once(delay, caller, () => {
                    afterMethod();
                }, args, coverBefore);
            }
            TimerAdmin._once = _once;
        })(TimerAdmin = lwg.TimerAdmin || (lwg.TimerAdmin = {}));
        let Admin;
        (function (Admin) {
            let _platformTpye;
            (function (_platformTpye) {
                _platformTpye["WeChat"] = "WeChat";
                _platformTpye["OPPO"] = "OPPO";
                _platformTpye["Bytedance"] = "Bytedance";
                _platformTpye["All"] = "All";
            })(_platformTpye = Admin._platformTpye || (Admin._platformTpye = {}));
            Admin._platform = _platformTpye.Bytedance;
            Admin._evaluating = false;
            Admin._gameSwitch = false;
            Admin._gameLevel = {
                get value() {
                    return Laya.LocalStorage.getItem('_gameLevel') ? Number(Laya.LocalStorage.getItem('_gameLevel')) : 1;
                },
                set value(val) {
                    Laya.LocalStorage.setItem('_gameLevel', val.toString());
                }
            };
            Admin._practicalLevel = {
                get value() {
                    return Laya.LocalStorage.getItem('_practicalLevel') ? Number(Laya.LocalStorage.getItem('_practicalLevel')) : Admin._gameLevel.value;
                },
                set value(val) {
                    Laya.LocalStorage.setItem('_practicalLevel', val.toString());
                }
            };
            function _createLevel(parent, x, y) {
                let sp;
                Laya.loader.load('prefab/LevelNode.json', Laya.Handler.create(this, function (prefab) {
                    let _prefab = new Laya.Prefab();
                    _prefab.json = prefab;
                    sp = Laya.Pool.getItemByCreateFun('prefab', _prefab.create, _prefab);
                    parent.addChild(sp);
                    sp.pos(x, y);
                    sp.zOrder = 0;
                    let level = sp.getChildByName('level');
                    Admin._LevelNode = sp;
                }));
            }
            Admin._createLevel = _createLevel;
            Admin._pause = {
                get switch() {
                    return Admin._gameSwitch;
                },
                set switch(bool) {
                    this.bool = bool;
                    if (bool) {
                        Admin._gameSwitch = false;
                        Laya.timer.pause();
                    }
                    else {
                        Admin._gameSwitch = true;
                        Laya.timer.resume();
                    }
                }
            };
            Admin._clickLock = {
                get switch() {
                    return Laya.stage.getChildByName('__stageClickLock__') ? true : false;
                },
                set switch(bool) {
                    if (bool) {
                        if (!Laya.stage.getChildByName('__stageClickLock__')) {
                            console.log('锁住点击！');
                            let __stageClickLock__ = new Laya.Sprite();
                            __stageClickLock__.name = '__stageClickLock__';
                            Laya.stage.addChild(__stageClickLock__);
                            __stageClickLock__.zOrder = 3000;
                            __stageClickLock__.width = Laya.stage.width;
                            __stageClickLock__.height = Laya.stage.height;
                            __stageClickLock__.pos(0, 0);
                            Click._on(Click._Type.noEffect, __stageClickLock__, this, null, null, (e) => {
                                console.log('舞台点击被锁住了！请用admin._clickLock=false解锁');
                                e.stopPropagation();
                            });
                        }
                        else {
                        }
                    }
                    else {
                        if (Laya.stage.getChildByName('__stageClickLock__')) {
                            Laya.stage.getChildByName('__stageClickLock__').removeSelf();
                        }
                    }
                }
            };
            function _secneLockClick(scene) {
                _unlockPreventClick(scene);
                let __lockClick__ = new Laya.Sprite();
                scene.addChild(__lockClick__);
                __lockClick__.zOrder = 1000;
                __lockClick__.name = '__lockClick__';
                __lockClick__.width = Laya.stage.width;
                __lockClick__.height = Laya.stage.height;
                __lockClick__.pos(0, 0);
                Click._on(Click._Type.noEffect, __lockClick__, this, null, null, (e) => {
                    console.log('场景点击被锁住了！请用admin._unlockPreventClick（）解锁');
                    e.stopPropagation();
                });
            }
            Admin._secneLockClick = _secneLockClick;
            function _unlockPreventClick(scene) {
                let __lockClick__ = scene.getChildByName('__lockClick__');
                if (__lockClick__) {
                    __lockClick__.removeSelf();
                }
            }
            Admin._unlockPreventClick = _unlockPreventClick;
            Admin._sceneControl = {};
            Admin._sceneScript = {};
            let _OpenAniType;
            (function (_OpenAniType) {
                _OpenAniType["fadeOut"] = "fadeOut";
                _OpenAniType["leftMove"] = "fadeOut";
                _OpenAniType["rightMove"] = "rightMove";
                _OpenAniType["centerRotate"] = "centerRotate";
            })(_OpenAniType = Admin._OpenAniType || (Admin._OpenAniType = {}));
            Admin._commonOpenAniType = _OpenAniType.fadeOut;
            Admin._commonVanishAni = false;
            let _SceneName;
            (function (_SceneName) {
                _SceneName["UILoding"] = "UILoding";
                _SceneName["UIStart"] = "UIStart";
                _SceneName["UIGuide"] = "UIGuide";
                _SceneName["UISkin"] = "UISkin";
                _SceneName["UIShop"] = "UIShop";
                _SceneName["UITask"] = "UITask";
                _SceneName["UISet"] = "UISet";
                _SceneName["UIPifu"] = "UIPifu";
                _SceneName["UIPuase"] = "UIPuase";
                _SceneName["UIShare"] = "UIShare";
                _SceneName["GameMain3D"] = "GameMain3D";
                _SceneName["UIVictory"] = "UIVictory";
                _SceneName["UIDefeated"] = "UIDefeated";
                _SceneName["UIPassHint"] = "UIPassHint";
                _SceneName["UISkinQualified"] = "UISkinQualified";
                _SceneName["UISkinTry"] = "UISkinTry";
                _SceneName["UIRedeem"] = "UIRedeem";
                _SceneName["UIAnchorXD"] = "UIAnchorXD";
                _SceneName["UITurntable"] = "UITurntable";
                _SceneName["UICaiDanQiang"] = "UICaiDanQiang";
                _SceneName["UICaidanPifu"] = "UICaidanPifu";
                _SceneName["UIOperation"] = "UIOperation";
                _SceneName["UIVictoryBox"] = "UIVictoryBox";
                _SceneName["UICheckIn"] = "UICheckIn";
                _SceneName["UIResurgence"] = "UIResurgence";
                _SceneName["UIEasterEgg"] = "UIEasterEgg";
                _SceneName["UIAds"] = "UIAds";
                _SceneName["UILwgInit"] = "UILwgInit";
                _SceneName["GameScene"] = "GameScene";
                _SceneName["UISmallHint"] = "UISmallHint";
                _SceneName["UIExecutionHint"] = "UIExecutionHint";
                _SceneName["UIDrawCard"] = "UIDrawCard";
                _SceneName["UIPropTry"] = "UIPropTry";
                _SceneName["UICard"] = "UICard";
                _SceneName["UIInit"] = "UIInit";
            })(_SceneName = Admin._SceneName || (Admin._SceneName = {}));
            function _openScene(openName, cloesName, func, zOder) {
                Admin._clickLock.switch = true;
                Laya.Scene.load('Scene/' + openName + '.json', Laya.Handler.create(this, function (scene) {
                    if (Admin._sceneScript[openName]) {
                        if (!scene.getComponent(Admin._sceneScript[openName])) {
                            scene.addComponent(Admin._sceneScript[openName]);
                        }
                    }
                    else {
                        console.log('当前场景没有同名脚本！');
                    }
                    scene.width = Laya.stage.width;
                    scene.height = Laya.stage.height;
                    var openf = () => {
                        if (zOder) {
                            Laya.stage.addChildAt(scene, zOder);
                        }
                        else {
                            Laya.stage.addChild(scene);
                        }
                    };
                    scene.name = openName;
                    Admin._sceneControl[openName] = scene;
                    let background = scene.getChildByName('Background');
                    if (background) {
                        background.width = Laya.stage.width;
                        background.height = Laya.stage.height;
                    }
                    if (Admin._sceneControl[cloesName]) {
                        _closeScene(cloesName, openf);
                    }
                    else {
                        openf();
                    }
                    if (func) {
                        func();
                    }
                }));
            }
            Admin._openScene = _openScene;
            function _closeScene(closeName, func) {
                if (!Admin._sceneControl[closeName]) {
                    console.log('场景', closeName, '关闭失败！可能是名称不对！');
                    return;
                }
                var closef = () => {
                    Admin._clickLock.switch = false;
                    Admin._sceneControl[closeName].close();
                    if (func) {
                        func();
                    }
                };
                if (!Admin._commonVanishAni) {
                    closef();
                    return;
                }
                var vanishAni = () => {
                    let time = 0;
                    let delay = 0;
                    switch (Admin._commonOpenAniType) {
                        case _OpenAniType.fadeOut:
                            time = 150;
                            delay = 50;
                            if (Admin._sceneControl[closeName]['Background']) {
                                Animation2D.fadeOut(Admin._sceneControl[closeName], 1, 0, time / 2);
                            }
                            Animation2D.fadeOut(Admin._sceneControl[closeName], 1, 0, time, delay, () => {
                                closef();
                            });
                            break;
                        case _OpenAniType.leftMove:
                            break;
                        default:
                            break;
                    }
                };
                let cloesSceneScript = Admin._sceneControl[closeName][Admin._sceneControl[closeName].name];
                if (cloesSceneScript) {
                    if (cloesSceneScript) {
                        Admin._clickLock.switch = true;
                        cloesSceneScript.lwgBeforeVanishAni();
                        let time0 = cloesSceneScript.lwgVanishAni();
                        if (time0 !== null) {
                            Laya.timer.once(time0, this, () => {
                                closef();
                                Admin._clickLock.switch = false;
                            });
                        }
                        else {
                            cloesSceneScript.lwgBeforeVanishAni();
                            vanishAni();
                        }
                    }
                }
            }
            Admin._closeScene = _closeScene;
            function _commonOpenAni(scene) {
                let time = 0;
                let delay = 0;
                var afterAni = () => {
                    Admin._clickLock.switch = false;
                    if (scene[scene.name]) {
                        scene[scene.name].lwgOpenAniAfter();
                        scene[scene.name].lwgBtnClick();
                    }
                };
                switch (Admin._commonOpenAniType) {
                    case _OpenAniType.fadeOut:
                        time = 400;
                        delay = 300;
                        if (scene['Background']) {
                            Animation2D.fadeOut(scene, 0, 1, time / 2, delay);
                        }
                        Animation2D.fadeOut(scene, 0, 1, time, 0);
                        Laya.timer.once(500, this, () => {
                            afterAni();
                        });
                        break;
                    case _OpenAniType.leftMove:
                        break;
                    default:
                        break;
                }
                return time;
            }
            Admin._commonOpenAni = _commonOpenAni;
            let _GameState;
            (function (_GameState) {
                _GameState["Start"] = "Start";
                _GameState["Play"] = "Play";
                _GameState["Pause"] = "pause";
                _GameState["Victory"] = "victory";
                _GameState["Defeated"] = "defeated";
            })(_GameState = Admin._GameState || (Admin._GameState = {}));
            function gameState(calssName) {
                switch (calssName) {
                    case _SceneName.UIStart:
                        Admin._gameState = _GameState.Start;
                        break;
                    case _SceneName.GameScene:
                        Admin._gameState = _GameState.Play;
                        break;
                    case _SceneName.UIDefeated:
                        Admin._gameState = _GameState.Defeated;
                        break;
                    case _SceneName.UIVictory:
                        Admin._gameState = _GameState.Victory;
                        break;
                    default:
                        break;
                }
            }
            Admin.gameState = gameState;
            class _Scene extends Laya.Script {
                constructor() {
                    super();
                    this.aniTime = 100;
                    this.aniDelayde = 100;
                }
                SpriteVar(str) {
                    if (this.self[str]) {
                        return this.self[str];
                    }
                    else {
                        console.log('场景内不存在全局节点：', str);
                    }
                }
                btnVar(str) {
                    if (this.self[str]) {
                        return this.self[str];
                    }
                    else {
                        console.log('场景内不存在全局按钮：', str);
                    }
                }
                ImgVar(str) {
                    if (this.self[str]) {
                        return this.self[str];
                    }
                    else {
                        console.log('场景内不存在全局节点：', str);
                    }
                }
                ListVar(str) {
                    if (this.self[str]) {
                        return this.self[str];
                    }
                    else {
                        console.log('场景内不存在全局节点：', str);
                    }
                }
                TapVar(str) {
                    if (this.self[str]) {
                        return this.self[str];
                    }
                    else {
                        console.log('场景内不存在全局节点：', str);
                    }
                }
                point(str) {
                    return this['str'];
                }
                number() {
                    return this['str'];
                }
                bool() {
                    return this['str'];
                }
                array() {
                    return this['str'];
                }
                onAwake() {
                    this.self = this.owner;
                    if (this.self.name == null) {
                        console.log('场景名称失效，脚本赋值失败');
                    }
                    else {
                        this.calssName = this.self.name;
                        this.self[this.calssName] = this;
                    }
                    gameState(this.calssName);
                    this.lwgNodeDec();
                    this.moduleOnAwake();
                    this.lwgOnAwake();
                    this.lwgAdaptive();
                }
                lwgOnAwake() { }
                ;
                moduleOnAwake() { }
                onEnable() {
                    this.moduleEventReg();
                    this.lwgEventReg();
                    this.moduleOnEnable();
                    this.lwgOnEnable();
                    this.btnAndlwgOpenAni();
                }
                moduleOnEnable() { }
                ;
                lwgNodeDec() { }
                ;
                lwgEventReg() { }
                ;
                moduleEventReg() { }
                ;
                lwgOnEnable() { }
                btnAndlwgOpenAni() {
                    let time = this.lwgOpenAni();
                    if (time) {
                        Laya.timer.once(time, this, f => {
                            Admin._clickLock.switch = false;
                            this.lwgOpenAniAfter();
                            this.lwgBtnClick();
                        });
                    }
                    else {
                        time = _commonOpenAni(this.self);
                    }
                }
                lwgOpenAni() { return null; }
                ;
                lwgOpenAniAfter() { }
                ;
                lwgBtnClick() { }
                ;
                lwgAdaptive() { }
                ;
                onUpdate() { this.lwgOnUpdate(); }
                ;
                lwgOnUpdate() { }
                ;
                lwgBeforeVanishAni() { }
                lwgVanishAni() { return null; }
                ;
                onDisable() {
                    Animation2D.fadeOut(this.self, 1, 0, 2000, 1);
                    this.lwgOnDisable();
                    Laya.timer.clearAll(this);
                    Laya.Tween.clearAll(this);
                    EventAdmin.offCaller(this);
                }
                lwgOnDisable() { }
                ;
            }
            Admin._Scene = _Scene;
            class _Person extends Laya.Script {
                constructor() {
                    super();
                }
                onAwake() {
                    this.lwgOnAwake();
                }
                lwgOnAwake() {
                }
                onEnable() {
                    this.self = this.owner;
                    this.selfScene = this.self.scene;
                    this.rig = this.self.getComponent(Laya.RigidBody);
                    let calssName = this['__proto__']['constructor'].name;
                    this.self[calssName] = this;
                    this.lwgOnEnable();
                }
                lwgOnEnable() {
                    console.log('父类的初始化！');
                }
            }
            Admin._Person = _Person;
            class _Object extends Laya.Script {
                constructor() {
                    super();
                }
                onAwake() {
                    this.self = this.owner;
                    this.selfScene = this.self.scene;
                    let calssName = this['__proto__']['constructor'].name;
                    this.self[calssName] = this;
                    this.lwgNodeDec();
                    this.lwgOnAwake();
                }
                lwgNodeDec() { }
                lwgOnAwake() { }
                onEnable() {
                    this.lwgBtnClick();
                    this.lwgEventReg();
                    this.lwgOnEnable();
                }
                lwgOnEnable() { }
                lwgBtnClick() { }
                lwgEventReg() { }
                onUpdate() {
                    this.lwgOnUpdate();
                }
                lwgOnUpdate() { }
                onDisable() {
                    this.lwgOnDisable();
                    Laya.timer.clearAll(this);
                    EventAdmin.offCaller(this);
                }
                lwgOnDisable() { }
            }
            Admin._Object = _Object;
        })(Admin = lwg.Admin || (lwg.Admin = {}));
        let Color;
        (function (Color) {
            function RGBtoHexString(r, g, b) {
                return '#' + ("00000" + (r << 16 | g << 8 | b).toString(16)).slice(-6);
            }
            Color.RGBtoHexString = RGBtoHexString;
            function colour(node, RGBA, vanishtime) {
                let cf = new Laya.ColorFilter();
                if (!RGBA) {
                    cf.color(255, 0, 0, 1);
                }
                else {
                    cf.color(RGBA[0], RGBA[1], RGBA[2], RGBA[3]);
                }
                node.filters = [cf];
                if (vanishtime) {
                    Laya.timer.once(vanishtime, this, () => {
                        for (let index = 0; index < node.filters.length; index++) {
                            if (node.filters[index] == cf) {
                                node.filters = [];
                                break;
                            }
                        }
                    });
                }
                return cf;
            }
            Color.colour = colour;
            function changeOnce(node, RGBA, time) {
                if (!node) {
                    return;
                }
                let cf = new Laya.ColorFilter();
                cf.color(0, 0, 0, 0);
                let speedR = RGBA[0] / time;
                let speedG = RGBA[1] / time;
                let speedB = RGBA[2] / time;
                let speedA = 0;
                if (RGBA[3]) {
                    speedA = RGBA[3] / time;
                }
                let caller = {
                    add: true,
                };
                let R = 0, G = 0, B = 0, A = 0;
                TimerAdmin._frameLoop(1, caller, () => {
                    if (R < RGBA[0] && caller.add) {
                        R += speedR;
                        G += speedG;
                        B += speedB;
                        if (speedA !== 0)
                            A += speedA;
                        if (R >= RGBA[0]) {
                            caller.add = false;
                        }
                    }
                    else {
                        R -= speedR;
                        G -= speedG;
                        B -= speedB;
                        if (speedA !== 0)
                            A -= speedA;
                        if (R <= 0) {
                            Laya.timer.clearAll(caller);
                        }
                    }
                    cf.color(R, G, B, A);
                    node.filters = [cf];
                });
            }
            Color.changeOnce = changeOnce;
            function changeConstant(node, RGBA1, RGBA2, time) {
                let cf;
                let RGBA0 = [];
                if (!node.filters) {
                    cf = new Laya.ColorFilter();
                    cf.color(RGBA1[0], RGBA1[1], RGBA1[2], RGBA1[3] ? RGBA1[3] : 1);
                    RGBA0 = [RGBA1[0], RGBA1[1], RGBA1[2], RGBA1[3] ? RGBA1[3] : 1];
                    node.filters = [cf];
                }
                else {
                    cf = node.filters[0];
                    RGBA0 = [node.filters[0]['_alpha'][0], node.filters[0]['_alpha'][1], node.filters[0]['_alpha'][2], node.filters[0]['_alpha'][3] ? node.filters[0]['_alpha'][3] : 1];
                }
                let RGBA = [Tools.randomCountNumer(RGBA1[0], RGBA2[0])[0], Tools.randomCountNumer(RGBA1[1], RGBA2[1])[0], Tools.randomCountNumer(RGBA1[2], RGBA2[2])[0], Tools.randomCountNumer(RGBA1[3] ? RGBA1[3] : 1, RGBA2[3] ? RGBA2[3] : 1)[0]];
                let speedR = (RGBA[0] - RGBA0[0]) / time;
                let speedG = (RGBA[1] - RGBA0[1]) / time;
                let speedB = (RGBA[2] - RGBA0[2]) / time;
                let speedA = 0;
                if (RGBA[3]) {
                    speedA = (RGBA[3] - RGBA0[3]) / time;
                }
                let caller = {};
                let time0 = 0;
                TimerAdmin._frameLoop(1, caller, () => {
                    time0++;
                    if (time0 <= time) {
                        RGBA0[0] += speedR;
                        RGBA0[1] += speedG;
                        RGBA0[2] += speedB;
                    }
                    else {
                        Laya.timer.clearAll(caller);
                    }
                    cf.color(RGBA0[0], RGBA0[1], RGBA0[2], RGBA0[3]);
                    node.filters = [cf];
                });
            }
            Color.changeConstant = changeConstant;
        })(Color = lwg.Color || (lwg.Color = {}));
        let Effects;
        (function (Effects) {
            let _SkinUrl;
            (function (_SkinUrl) {
                _SkinUrl[_SkinUrl["Frame/Effects/cir_white.png"] = 0] = "Frame/Effects/cir_white.png";
                _SkinUrl[_SkinUrl["Frame/Effects/cir_black.png"] = 1] = "Frame/Effects/cir_black.png";
                _SkinUrl[_SkinUrl["Frame/Effects/cir_blue.png"] = 2] = "Frame/Effects/cir_blue.png";
                _SkinUrl[_SkinUrl["Frame/Effects/cir_bluish.png"] = 3] = "Frame/Effects/cir_bluish.png";
                _SkinUrl[_SkinUrl["Frame/Effects/cir_cyan.png"] = 4] = "Frame/Effects/cir_cyan.png";
                _SkinUrl[_SkinUrl["Frame/Effects/cir_grass.png"] = 5] = "Frame/Effects/cir_grass.png";
                _SkinUrl[_SkinUrl["Frame/Effects/cir_green.png"] = 6] = "Frame/Effects/cir_green.png";
                _SkinUrl[_SkinUrl["Frame/Effects/cir_orange.png"] = 7] = "Frame/Effects/cir_orange.png";
                _SkinUrl[_SkinUrl["Frame/Effects/cir_pink.png"] = 8] = "Frame/Effects/cir_pink.png";
                _SkinUrl[_SkinUrl["Frame/Effects/cir_purple.png"] = 9] = "Frame/Effects/cir_purple.png";
                _SkinUrl[_SkinUrl["Frame/Effects/cir_red.png"] = 10] = "Frame/Effects/cir_red.png";
                _SkinUrl[_SkinUrl["Frame/Effects/cir_yellow.png"] = 11] = "Frame/Effects/cir_yellow.png";
                _SkinUrl[_SkinUrl["Frame/Effects/star_black.png"] = 12] = "Frame/Effects/star_black.png";
                _SkinUrl[_SkinUrl["Frame/Effects/star_blue.png"] = 13] = "Frame/Effects/star_blue.png";
                _SkinUrl[_SkinUrl["Frame/Effects/star_bluish.png"] = 14] = "Frame/Effects/star_bluish.png";
                _SkinUrl[_SkinUrl["Frame/Effects/star_cyan.png"] = 15] = "Frame/Effects/star_cyan.png";
                _SkinUrl[_SkinUrl["Frame/Effects/star_grass.png"] = 16] = "Frame/Effects/star_grass.png";
                _SkinUrl[_SkinUrl["Frame/Effects/star_green.png"] = 17] = "Frame/Effects/star_green.png";
                _SkinUrl[_SkinUrl["Frame/Effects/star_orange.png"] = 18] = "Frame/Effects/star_orange.png";
                _SkinUrl[_SkinUrl["Frame/Effects/star_pink.png"] = 19] = "Frame/Effects/star_pink.png";
                _SkinUrl[_SkinUrl["Frame/Effects/star_purple.png"] = 20] = "Frame/Effects/star_purple.png";
                _SkinUrl[_SkinUrl["Frame/Effects/star_red.png"] = 21] = "Frame/Effects/star_red.png";
                _SkinUrl[_SkinUrl["Frame/Effects/star_white.png"] = 22] = "Frame/Effects/star_white.png";
                _SkinUrl[_SkinUrl["Frame/Effects/star_yellow.png"] = 23] = "Frame/Effects/star_yellow.png";
                _SkinUrl[_SkinUrl["Frame/Effects/ui_Circular_l_yellow.png"] = 24] = "Frame/Effects/ui_Circular_l_yellow.png";
                _SkinUrl[_SkinUrl["Frame/UI/ui_square_guang.png"] = 25] = "Frame/UI/ui_square_guang.png";
            })(_SkinUrl = Effects._SkinUrl || (Effects._SkinUrl = {}));
            let _SkinStyle;
            (function (_SkinStyle) {
                _SkinStyle["star"] = "star";
                _SkinStyle["dot"] = "dot";
            })(_SkinStyle = Effects._SkinStyle || (Effects._SkinStyle = {}));
            function aureole_Continuous(parent, centerPoint, width, height, rotation, urlArr, zOder, speed, accelerated) {
                let Img = new Laya.Image();
                Img.skin = urlArr ? Tools.arrayRandomGetOut(urlArr)[0] : _SkinUrl[Tools.randomCountNumer(0, 12)[0]];
                parent.addChild(Img);
                Img.pos(centerPoint.x, centerPoint.y);
                Img.width = width ? width : 100;
                Img.height = height ? height : 100;
                Img.pivotX = Img.width / 2;
                Img.pivotY = Img.height / 2;
                Img.alpha = 0;
                Img.zOrder = zOder ? zOder : 0;
                speed = speed ? speed : 0.025;
                let angle = Tools.randomCountNumer(0, 360)[0];
                let caller = {};
                let acc = 0;
                accelerated = accelerated ? accelerated : 0.0005;
                let firstOff = false;
                TimerAdmin._frameLoop(1, caller, () => {
                    if (Img.alpha < 1 && !firstOff) {
                        Img.alpha += 0.05;
                        acc += (accelerated / 5);
                        Img.scaleX += (speed / 2 + acc);
                        Img.scaleY += (speed / 2 + acc);
                    }
                    else {
                        firstOff = true;
                        acc += accelerated;
                        Img.scaleX += (speed + acc);
                        Img.scaleY += (speed + acc);
                        if (Img.scaleX > 2.4) {
                            acc -= accelerated;
                            if (Img.scaleX > 3.2) {
                                Img.alpha -= 0.015;
                                if (Img.alpha <= 0.005) {
                                    Img.removeSelf();
                                    Laya.timer.clearAll(caller);
                                }
                            }
                        }
                    }
                });
            }
            Effects.aureole_Continuous = aureole_Continuous;
            function particle_FallingVertical(parent, centerPoint, section, distance, width, height, urlArr, speed, accelerated, zOder) {
                let Img = new Laya.Image();
                parent.addChild(Img);
                let sectionWidth = section ? Tools.randomCountNumer(section[0], section[1])[0] : Tools.randomCountNumer(-200, 200)[0];
                let sectionHeight = section ? Tools.randomCountNumer(section[1], section[1])[0] : Tools.randomCountNumer(-25, 25)[0];
                Img.x = centerPoint ? centerPoint.x + sectionWidth : sectionWidth;
                Img.y = centerPoint ? centerPoint.y + sectionHeight : sectionHeight;
                width = width ? width : [25, 50];
                Img.width = Tools.randomCountNumer(width[0], width[1])[0];
                Img.height = height ? Tools.randomCountNumer(height[0], height[1])[0] : Img.width;
                Img.pivotX = Img.width / 2;
                Img.pivotY = Img.height / 2;
                Img.skin = urlArr ? Tools.arrayRandomGetOut(urlArr)[0] : _SkinUrl[Tools.randomCountNumer(0, 12)[0]];
                Img.alpha = 0;
                let speed0 = speed ? Tools.randomCountNumer(speed[0], speed[1])[0] : Tools.randomCountNumer(4, 8)[0];
                let accelerated0 = accelerated ? Tools.randomCountNumer(accelerated[0], accelerated[1])[0] : Tools.randomCountNumer(0.25, 0.45)[0];
                let acc = 0;
                let caller = {
                    alpha: true,
                    move: false,
                    vinish: false,
                };
                let distance0 = 0;
                let distance1 = distance ? Tools.randomCountNumer(distance[0], distance[1])[0] : Tools.randomCountNumer(100, 300)[0];
                TimerAdmin._frameLoop(1, caller, () => {
                    if (Img.alpha < 1 && caller.alpha) {
                        Img.alpha += 0.05;
                        distance0 = Img.y++;
                        if (Img.alpha >= 1) {
                            caller.alpha = false;
                            caller.move = true;
                        }
                    }
                    if (distance0 < distance1 && caller.move) {
                        acc += accelerated0;
                        distance0 = Img.y += (speed0 + acc);
                        if (distance0 >= distance1) {
                            caller.move = false;
                            caller.vinish = true;
                        }
                    }
                    if (caller.vinish) {
                        acc -= accelerated0 / 2;
                        Img.alpha -= 0.03;
                        Img.y += (speed0 + acc);
                        if (Img.alpha <= 0 || (speed0 + acc) <= 0) {
                            Img.removeSelf();
                            Laya.timer.clearAll(caller);
                        }
                    }
                });
            }
            Effects.particle_FallingVertical = particle_FallingVertical;
            function particle_AnnularInhalation(parent, centerPoint, radius, rotation, width, height, urlArr, speed, accelerated, zOder) {
                let Img = new Laya.Image();
                parent.addChild(Img);
                width = width ? width : [25, 50];
                Img.width = Tools.randomCountNumer(width[0], width[1])[0];
                Img.height = height ? Tools.randomCountNumer(height[0], height[1])[0] : Img.width;
                Img.pivotX = Img.width / 2;
                Img.pivotY = Img.height / 2;
                Img.skin = urlArr ? Tools.arrayRandomGetOut(urlArr)[0] : _SkinUrl[Tools.randomCountNumer(0, 12)[0]];
                let radius0 = Tools.randomCountNumer(radius[0], radius[1])[0];
                Img.alpha = 0;
                let speed0 = speed ? Tools.randomCountNumer(speed[0], speed[1])[0] : Tools.randomCountNumer(5, 10)[0];
                let angle = rotation ? Tools.randomCountNumer(rotation[0], rotation[1])[0] : Tools.randomCountNumer(0, 360)[0];
                let caller = {};
                let acc = 0;
                accelerated = accelerated ? accelerated : 0.35;
                TimerAdmin._frameLoop(1, caller, () => {
                    if (Img.alpha < 1) {
                        Img.alpha += 0.05;
                        acc += (accelerated / 5);
                        radius0 -= (speed0 / 2 + acc);
                    }
                    else {
                        acc += accelerated;
                        radius0 -= (speed0 + acc);
                    }
                    let point = Tools.point_GetRoundPos(angle, radius0, centerPoint);
                    Img.pos(point.x, point.y);
                    if (point.distance(centerPoint.x, centerPoint.y) <= 20 || point.distance(centerPoint.x, centerPoint.y) >= 1000) {
                        Img.removeSelf();
                        Laya.timer.clearAll(caller);
                    }
                });
            }
            Effects.particle_AnnularInhalation = particle_AnnularInhalation;
            function light_SimpleInfinite(parent, x, y, width, height, zOder, url, speed) {
                let Img = new Laya.Image();
                parent.addChild(Img);
                Img.pos(x, y);
                Img.width = width;
                Img.height = height;
                Img.pivotX = width / 2;
                Img.pivotY = height / 2;
                Img.skin = url ? url : _SkinUrl[24];
                Img.alpha = 0;
                Img.zOrder = zOder ? zOder : 0;
                let add = true;
                let caller = {};
                let func = () => {
                    if (!add) {
                        Img.alpha -= speed ? speed : 0.01;
                        if (Img.alpha <= 0) {
                            if (caller['end']) {
                                Laya.timer.clearAll(caller);
                                Img.removeSelf();
                            }
                            else {
                                add = true;
                            }
                        }
                    }
                    else {
                        Img.alpha += speed ? speed * 2 : 0.01 * 2;
                        if (Img.alpha >= 1) {
                            add = false;
                            caller['end'] = true;
                        }
                    }
                };
                Laya.timer.frameLoop(1, caller, func);
            }
            Effects.light_SimpleInfinite = light_SimpleInfinite;
            function blink_Star(parent, centerPos, radiusX, radiusY, skinUrl, width, height, speed, rotationSpeed) {
                if (!rotationSpeed) {
                    rotationSpeed = Tools.randomOneHalf() == 0 ? -5 : 5;
                }
                let star = Laya.Pool.getItemByClass('star_Blink', Laya.Image);
                star.name = 'star_Blink';
                let num;
                if (skinUrl == _SkinStyle.star || !skinUrl) {
                    num = 12 + Math.floor(Math.random() * 12);
                    star.skin = _SkinUrl[num];
                }
                else if (skinUrl == _SkinStyle.dot) {
                    num = Math.floor(Math.random() * 12);
                    star.skin = _SkinUrl[num];
                }
                else {
                    star.skin = skinUrl;
                }
                star.alpha = 0;
                star.width = width;
                star.height = height;
                star.scaleX = 0;
                star.scaleY = 0;
                star.pivotX = star.width / 2;
                star.pivotY = star.height / 2;
                parent.addChild(star);
                let p = Tools.point_RandomPointByCenter(centerPos, radiusX, radiusY, 1);
                star.pos(p[0].x, p[0].y);
                let maxScale = Tools.randomCountNumer(0.8, 1.2)[0];
                let timer = 0;
                let caller = {};
                var ani = () => {
                    timer++;
                    if (timer > 0 && timer <= 20) {
                        star.alpha += 0.1;
                        star.rotation += rotationSpeed;
                        star.scaleX += 0.011;
                        star.scaleY += 0.011;
                    }
                    else if (timer > 20) {
                        if (!star['reduce']) {
                            if (star.scaleX > maxScale) {
                                star['reduce'] = true;
                            }
                            else {
                                star.rotation += rotationSpeed;
                                star.scaleX += 0.02;
                                star.scaleY += 0.02;
                            }
                        }
                        else {
                            star.rotation -= rotationSpeed;
                            star.alpha -= 0.015;
                            star.scaleX -= 0.01;
                            star.scaleY -= 0.01;
                            if (star.scaleX <= 0) {
                                star.removeSelf();
                                Laya.timer.clearAll(caller);
                            }
                        }
                    }
                };
                Laya.timer.frameLoop(1, caller, ani);
            }
            Effects.blink_Star = blink_Star;
        })(Effects = lwg.Effects || (lwg.Effects = {}));
        let Click;
        (function (Click) {
            function _createButton() {
                let Btn = new Laya.Sprite();
                let img = new Laya.Image();
                let label = new Laya.Label();
            }
            Click._createButton = _createButton;
            let _Type;
            (function (_Type) {
                _Type["noEffect"] = "noEffect";
                _Type["largen"] = "largen";
                _Type["balloon"] = "balloon";
                _Type["beetle"] = "beetle";
            })(_Type = Click._Type || (Click._Type = {}));
            function _on(effect, target, caller, down, move, up, out) {
                let btnEffect;
                switch (effect) {
                    case _Type.noEffect:
                        btnEffect = new Btn_NoEffect();
                        break;
                    case _Type.largen:
                        btnEffect = new Btn_LargenEffect();
                        break;
                    case _Type.balloon:
                        btnEffect = new Btn_Balloon();
                        break;
                    case _Type.balloon:
                        btnEffect = new Btn_Beetle();
                        break;
                    default:
                        btnEffect = new Btn_LargenEffect();
                        break;
                }
                target.on(Laya.Event.MOUSE_DOWN, caller, down);
                target.on(Laya.Event.MOUSE_MOVE, caller, move);
                target.on(Laya.Event.MOUSE_UP, caller, up);
                target.on(Laya.Event.MOUSE_OUT, caller, out);
                target.on(Laya.Event.MOUSE_DOWN, caller, btnEffect.down);
                target.on(Laya.Event.MOUSE_MOVE, caller, btnEffect.move);
                target.on(Laya.Event.MOUSE_UP, caller, btnEffect.up);
                target.on(Laya.Event.MOUSE_OUT, caller, btnEffect.out);
            }
            Click._on = _on;
            function _off(effect, target, caller, down, move, up, out) {
                let btnEffect;
                switch (effect) {
                    case _Type.noEffect:
                        btnEffect = new Btn_NoEffect();
                        break;
                    case _Type.largen:
                        btnEffect = new Btn_LargenEffect();
                        break;
                    case _Type.balloon:
                        btnEffect = new Btn_Balloon();
                        break;
                    case _Type.balloon:
                        btnEffect = new Btn_Beetle();
                        break;
                    default:
                        btnEffect = new Btn_LargenEffect();
                        break;
                }
                target.off(Laya.Event.MOUSE_DOWN, caller, down);
                target.off(Laya.Event.MOUSE_MOVE, caller, move);
                target.off(Laya.Event.MOUSE_UP, caller, up);
                target.off(Laya.Event.MOUSE_OUT, caller, out);
                target.off(Laya.Event.MOUSE_DOWN, caller, btnEffect.down);
                target.off(Laya.Event.MOUSE_MOVE, caller, btnEffect.move);
                target.off(Laya.Event.MOUSE_UP, caller, btnEffect.up);
                target.off(Laya.Event.MOUSE_OUT, caller, btnEffect.out);
            }
            Click._off = _off;
        })(Click = lwg.Click || (lwg.Click = {}));
        class Btn_NoEffect {
            constructor() {
            }
            down(event) {
            }
            move(event) {
            }
            up(event) {
            }
            out(event) {
            }
        }
        lwg.Btn_NoEffect = Btn_NoEffect;
        class Btn_LargenEffect {
            constructor() {
            }
            down(event) {
                event.currentTarget.scale(1.1, 1.1);
                PalyAudio.playSound(Click._audioUrl);
            }
            move(event) {
            }
            up(event) {
                event.currentTarget.scale(1, 1);
            }
            out(event) {
                event.currentTarget.scale(1, 1);
            }
        }
        lwg.Btn_LargenEffect = Btn_LargenEffect;
        class Btn_Balloon {
            constructor() {
            }
            down(event) {
                event.currentTarget.scale(Click._balloonScale + 0.06, Click._balloonScale + 0.06);
                PalyAudio.playSound(Click._audioUrl);
            }
            up(event) {
                event.currentTarget.scale(Click._balloonScale, Click._balloonScale);
            }
            move(event) {
                event.currentTarget.scale(Click._balloonScale, Click._balloonScale);
            }
            out(event) {
                event.currentTarget.scale(Click._balloonScale, Click._balloonScale);
            }
        }
        lwg.Btn_Balloon = Btn_Balloon;
        class Btn_Beetle {
            constructor() {
            }
            down(event) {
                event.currentTarget.scale(Click._beetleScale + 0.06, Click._beetleScale + 0.06);
                PalyAudio.playSound(Click._audioUrl);
            }
            up(event) {
                event.currentTarget.scale(Click._beetleScale, Click._beetleScale);
            }
            move(event) {
                event.currentTarget.scale(Click._beetleScale, Click._beetleScale);
            }
            out(event) {
                event.currentTarget.scale(Click._beetleScale, Click._beetleScale);
            }
        }
        lwg.Btn_Beetle = Btn_Beetle;
        let Animation3D;
        (function (Animation3D) {
            Animation3D.tweenMap = {};
            Animation3D.frameRate = 1;
            function moveTo(target, toPos, duration, caller, ease, complete, delay = 0, coverBefore = true, update, frame) {
                let position = target.transform.position.clone();
                if (duration == 0 || duration === undefined || duration === null) {
                    target.transform.position = toPos.clone();
                    complete && complete.apply(caller);
                    return;
                }
                if (frame <= 0 || frame === undefined || frame === null) {
                    frame = Animation3D.frameRate;
                }
                let updateRenderPos = function () {
                    if (target.transform) {
                        target.transform.position = position;
                    }
                    update && update();
                };
                Laya.timer.once(delay, target, function () {
                    Laya.timer.frameLoop(frame, target, updateRenderPos);
                });
                let endTween = function () {
                    if (target.transform) {
                        target.transform.position = toPos.clone();
                        Laya.timer.clear(target, updateRenderPos);
                    }
                    complete && complete.apply(caller);
                };
                let tween = Laya.Tween.to(position, { x: toPos.x, y: toPos.y, z: toPos.z }, duration, ease, Laya.Handler.create(target, endTween), delay, coverBefore);
                if (!Animation3D.tweenMap[target.id]) {
                    Animation3D.tweenMap[target.id] = [];
                }
                Animation3D.tweenMap[target.id].push(tween);
            }
            Animation3D.moveTo = moveTo;
            function rotateTo(target, toRotation, duration, caller, ease, complete, delay, coverBefore, update, frame) {
                let rotation = target.transform.localRotationEuler.clone();
                if (duration == 0 || duration === undefined || duration === null) {
                    target.transform.localRotationEuler = toRotation.clone();
                    complete && complete.apply(caller);
                    return;
                }
                if (frame <= 0 || frame === undefined || frame === null) {
                    frame = Animation3D.frameRate;
                }
                let updateRenderRotation = function () {
                    if (target.transform) {
                        target.transform.localRotationEuler = rotation;
                    }
                    update && update();
                };
                Laya.timer.once(delay, target, function () {
                    Laya.timer.frameLoop(frame, target, updateRenderRotation);
                });
                let endTween = function () {
                    if (target.transform) {
                        target.transform.localRotationEuler = toRotation.clone();
                        Laya.timer.clear(target, updateRenderRotation);
                    }
                    complete && complete.apply(caller);
                };
                let tween = Laya.Tween.to(rotation, { x: toRotation.x, y: toRotation.y, z: toRotation.z }, duration, ease, Laya.Handler.create(target, endTween), delay, coverBefore);
                if (!Animation3D.tweenMap[target.id]) {
                    Animation3D.tweenMap[target.id] = [];
                }
                Animation3D.tweenMap[target.id].push(tween);
            }
            Animation3D.rotateTo = rotateTo;
            function scaleTo(target, toScale, duration, caller, ease, complete, delay, coverBefore, update, frame) {
                let localScale = target.transform.localScale.clone();
                if (duration == 0 || duration === undefined || duration === null) {
                    target.transform.localScale = toScale.clone();
                    complete && complete.apply(caller);
                    return;
                }
                if (frame <= 0 || frame === undefined || frame === null) {
                    frame = Animation3D.frameRate;
                }
                let updateRenderPos = function () {
                    target.transform.localScale = localScale.clone();
                    update && update();
                };
                Laya.timer.once(delay, this, function () {
                    Laya.timer.frameLoop(frame, target, updateRenderPos);
                });
                let endTween = function () {
                    target.transform.localScale = toScale.clone();
                    Laya.timer.clear(target, updateRenderPos);
                    complete && complete.apply(caller);
                };
                let tween = Laya.Tween.to(localScale, { x: toScale.x, y: toScale.y, z: toScale.z }, duration, ease, Laya.Handler.create(target, endTween), delay, coverBefore);
                if (!Animation3D.tweenMap[target.id]) {
                    Animation3D.tweenMap[target.id] = [];
                }
                Animation3D.tweenMap[target.id].push(tween);
            }
            Animation3D.scaleTo = scaleTo;
            function ClearTween(target) {
                let tweens = Animation3D.tweenMap[target.id];
                if (tweens && tweens.length) {
                    while (tweens.length > 0) {
                        let tween = tweens.pop();
                        tween.clear();
                    }
                }
                Laya.timer.clearAll(target);
            }
            Animation3D.ClearTween = ClearTween;
            function rock(target, range, duration, caller, func, delayed, ease) {
                if (!delayed) {
                    delayed = 0;
                }
                let v1 = new Laya.Vector3(target.transform.localRotationEulerX + range.x, target.transform.localRotationEulerY + range.y, target.transform.localRotationEulerZ + range.z);
                rotateTo(target, v1, duration / 2, caller, ease, () => {
                    let v2 = new Laya.Vector3(target.transform.localRotationEulerX - range.x * 2, target.transform.localRotationEulerY - range.y * 2, target.transform.localRotationEulerZ - range.z * 2);
                    rotateTo(target, v2, duration, caller, ease, () => {
                        let v3 = new Laya.Vector3(target.transform.localRotationEulerX + range.x, target.transform.localRotationEulerY + range.y, target.transform.localRotationEulerZ + range.z);
                        rotateTo(target, v3, duration / 2, caller, ease, () => {
                            if (func) {
                                func();
                            }
                        });
                    });
                }, delayed);
            }
            Animation3D.rock = rock;
            function moveRotateTo(Sp3d, Target, duration, caller, ease, complete, delay, coverBefore, update, frame) {
                moveTo(Sp3d, Target.transform.position, duration, caller, ease, null, delay, coverBefore, update, frame);
                rotateTo(Sp3d, Target.transform.localRotationEuler, duration, caller, ease, complete, delay, coverBefore, null, frame);
            }
            Animation3D.moveRotateTo = moveRotateTo;
        })(Animation3D = lwg.Animation3D || (lwg.Animation3D = {}));
        let Animation2D;
        (function (Animation2D) {
            function simple_Rotate(node, Frotate, Erotate, time, delayed, func) {
                node.rotation = Frotate;
                if (!delayed) {
                    delayed = 0;
                }
                Laya.Tween.to(node, { rotation: Erotate }, time, null, Laya.Handler.create(this, function () {
                    if (func) {
                        func();
                    }
                }), delayed);
            }
            Animation2D.simple_Rotate = simple_Rotate;
            function upDown_Overturn(node, time, func) {
                Laya.Tween.to(node, { scaleY: 0 }, time, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(node, { scaleY: 1 }, time, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(node, { scaleY: 0 }, time, null, Laya.Handler.create(this, function () {
                            Laya.Tween.to(node, { scaleY: 1 }, time, null, Laya.Handler.create(this, function () {
                                if (func !== null || func !== undefined) {
                                    func();
                                }
                            }), 0);
                        }), 0);
                    }), 0);
                }), 0);
            }
            Animation2D.upDown_Overturn = upDown_Overturn;
            function leftRight_Overturn(node, time, func) {
                Laya.Tween.to(node, { scaleX: 0 }, time, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(node, { scaleX: 1 }, time, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(node, { scaleX: 0 }, time, null, Laya.Handler.create(this, function () {
                            Laya.Tween.to(node, { scaleX: 1 }, time, null, Laya.Handler.create(this, function () {
                            }), 0);
                            if (func !== null) {
                                func();
                            }
                        }), 0);
                    }), 0);
                }), 0);
            }
            Animation2D.leftRight_Overturn = leftRight_Overturn;
            function leftRight_Shake(node, range, time, delayed, func, click) {
                if (!delayed) {
                    delayed = 0;
                }
                if (!click) {
                    Admin._clickLock.switch = true;
                }
                Laya.Tween.to(node, { x: node.x - range }, time, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(node, { x: node.x + range * 2 }, time, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(node, { x: node.x - range }, time, null, Laya.Handler.create(this, function () {
                            if (func) {
                                func();
                            }
                            if (!click) {
                                Admin._clickLock.switch = false;
                            }
                        }));
                    }));
                }), delayed);
            }
            Animation2D.leftRight_Shake = leftRight_Shake;
            function upDwon_Shake(node, range, time, delayed, func) {
                Laya.Tween.to(node, { y: node.y + range }, time, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(node, { y: node.y - range * 2 }, time, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(node, { y: node.y + range }, time, null, Laya.Handler.create(this, function () {
                            if (func !== null) {
                                func();
                            }
                        }));
                    }));
                }), delayed);
            }
            Animation2D.upDwon_Shake = upDwon_Shake;
            function fadeOut(node, alpha1, alpha2, time, delayed, func, stageClick) {
                node.alpha = alpha1;
                if (!delayed) {
                    delayed = 0;
                }
                Laya.Tween.to(node, { alpha: alpha2 }, time, null, Laya.Handler.create(this, function () {
                    if (func) {
                        func();
                    }
                }), delayed);
            }
            Animation2D.fadeOut = fadeOut;
            function fadeOut_KickBack(node, alpha1, alpha2, time, delayed, func) {
                node.alpha = alpha1;
                Laya.Tween.to(node, { alpha: alpha2 }, time, null, Laya.Handler.create(this, function () {
                    if (func !== null) {
                        func();
                    }
                }), delayed);
            }
            Animation2D.fadeOut_KickBack = fadeOut_KickBack;
            function move_FadeOut(node, firstX, firstY, targetX, targetY, time, delayed, func) {
                node.alpha = 0;
                node.x = firstX;
                node.y = firstY;
                Laya.Tween.to(node, { alpha: 1, x: targetX, y: targetY }, time, null, Laya.Handler.create(this, function () {
                    if (func !== null) {
                        func();
                    }
                }), delayed);
            }
            Animation2D.move_FadeOut = move_FadeOut;
            function move_Fade_Out(node, firstX, firstY, targetX, targetY, time, delayed, func) {
                node.alpha = 1;
                node.x = firstX;
                node.y = firstY;
                Laya.Tween.to(node, { alpha: 0, x: targetX, y: targetY }, time, null, Laya.Handler.create(this, function () {
                    if (func !== null) {
                        func();
                    }
                }), delayed);
            }
            Animation2D.move_Fade_Out = move_Fade_Out;
            function move_FadeOut_Scale_01(node, firstX, firstY, targetX, targetY, time, delayed, func) {
                node.alpha = 0;
                node.targetX = 0;
                node.targetY = 0;
                node.x = firstX;
                node.y = firstY;
                Laya.Tween.to(node, { alpha: 1, x: targetX, y: targetY, scaleX: 1, scaleY: 1 }, time, null, Laya.Handler.create(this, function () {
                    if (func !== null) {
                        func();
                    }
                }), delayed);
            }
            Animation2D.move_FadeOut_Scale_01 = move_FadeOut_Scale_01;
            function move_Scale(node, fScale, fX, fY, tX, tY, eScale, time, delayed, ease, func) {
                node.scaleX = fScale;
                node.scaleY = fScale;
                node.x = fX;
                node.y = fY;
                Laya.Tween.to(node, { x: tX, y: tY, scaleX: eScale, scaleY: eScale }, time, ease ? null : ease, Laya.Handler.create(this, function () {
                    if (func) {
                        func();
                    }
                }), delayed ? delayed : 0);
            }
            Animation2D.move_Scale = move_Scale;
            function rotate_Scale(target, fRotate, fScaleX, fScaleY, eRotate, eScaleX, eScaleY, time, delayed, func) {
                target.scaleX = fScaleX;
                target.scaleY = fScaleY;
                target.rotation = fRotate;
                Laya.Tween.to(target, { rotation: eRotate, scaleX: eScaleX, scaleY: eScaleY }, time, null, Laya.Handler.create(this, () => {
                    if (func) {
                        func();
                    }
                    target.rotation = 0;
                }), delayed ? delayed : 0);
            }
            Animation2D.rotate_Scale = rotate_Scale;
            function drop_Simple(node, fY, tY, rotation, time, delayed, func) {
                node.y = fY;
                Laya.Tween.to(node, { y: tY, rotation: rotation }, time, Laya.Ease.circOut, Laya.Handler.create(this, function () {
                    if (func !== null) {
                        func();
                    }
                }), delayed);
            }
            Animation2D.drop_Simple = drop_Simple;
            function drop_KickBack(target, fAlpha, firstY, targetY, extendY, time1, delayed, func) {
                target.alpha = fAlpha;
                target.y = firstY;
                if (!delayed) {
                    delayed = 0;
                }
                Laya.Tween.to(target, { alpha: 1, y: targetY + extendY }, time1, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(target, { y: targetY - extendY / 2 }, time1 / 2, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(target, { y: targetY }, time1 / 4, null, Laya.Handler.create(this, function () {
                            if (func) {
                                func();
                            }
                        }), 0);
                    }), 0);
                }), delayed);
            }
            Animation2D.drop_KickBack = drop_KickBack;
            function drop_Excursion(node, targetY, targetX, rotation, time, delayed, func) {
                Laya.Tween.to(node, { x: node.x + targetX, y: node.y + targetY * 1 / 6 }, time, Laya.Ease.expoIn, Laya.Handler.create(this, function () {
                    Laya.Tween.to(node, { x: node.x + targetX + 50, y: targetY, rotation: rotation }, time, null, Laya.Handler.create(this, function () {
                        if (func !== null) {
                            func();
                        }
                    }), 0);
                }), delayed);
            }
            Animation2D.drop_Excursion = drop_Excursion;
            function goUp_Simple(node, initialY, initialR, targetY, time, delayed, func) {
                node.y = initialY;
                node.rotation = initialR;
                Laya.Tween.to(node, { y: targetY, rotation: 0 }, time, Laya.Ease.cubicOut, Laya.Handler.create(this, function () {
                    if (func !== null) {
                        func();
                    }
                }), delayed);
            }
            Animation2D.goUp_Simple = goUp_Simple;
            function cardRotateX_TowFace(node, time, func1, delayed, func2) {
                Laya.Tween.to(node, { scaleX: 0 }, time, null, Laya.Handler.create(this, function () {
                    Tools.node_2DChildrenVisible(node, false);
                    if (func1) {
                        func1();
                    }
                    Laya.Tween.to(node, { scaleX: 1 }, time * 0.9, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(node, { scaleX: 0 }, time * 0.8, null, Laya.Handler.create(this, function () {
                            Tools.node_2DChildrenVisible(node, true);
                            Laya.Tween.to(node, { scaleX: 1 }, time * 0.7, null, Laya.Handler.create(this, function () {
                                if (func2) {
                                    func2();
                                }
                            }), 0);
                        }), 0);
                    }), 0);
                }), delayed);
            }
            Animation2D.cardRotateX_TowFace = cardRotateX_TowFace;
            function cardRotateX_OneFace(node, func1, time, delayed, func2) {
                Laya.Tween.to(node, { scaleX: 0 }, time, null, Laya.Handler.create(this, function () {
                    if (func1 !== null) {
                        func1();
                    }
                    Laya.Tween.to(node, { scaleX: 1 }, time, null, Laya.Handler.create(this, function () {
                        if (func2 !== null) {
                            func2();
                        }
                    }), 0);
                }), delayed);
            }
            Animation2D.cardRotateX_OneFace = cardRotateX_OneFace;
            function cardRotateY_TowFace(node, time, func1, delayed, func2) {
                Laya.Tween.to(node, { scaleY: 0 }, time, null, Laya.Handler.create(this, function () {
                    Tools.node_2DChildrenVisible(node, false);
                    if (func1) {
                        func1();
                    }
                    Laya.Tween.to(node, { scaleY: 1 }, time, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(node, { scaleY: 0 }, time, null, Laya.Handler.create(this, function () {
                            Laya.Tween.to(node, { scaleY: 1 }, time * 1 / 2, null, Laya.Handler.create(this, function () {
                                Tools.node_2DChildrenVisible(node, true);
                                if (func2) {
                                    func2();
                                }
                            }), 0);
                        }), 0);
                    }), 0);
                }), delayed);
            }
            Animation2D.cardRotateY_TowFace = cardRotateY_TowFace;
            function cardRotateY_OneFace(node, func1, time, delayed, func2) {
                Laya.Tween.to(node, { scaleY: 0 }, time, null, Laya.Handler.create(this, function () {
                    if (func1) {
                        func1();
                    }
                    Laya.Tween.to(node, { scaleY: 1 }, time, null, Laya.Handler.create(this, function () {
                        if (func2) {
                            func2();
                        }
                    }), 0);
                }), delayed ? delayed : 0);
            }
            Animation2D.cardRotateY_OneFace = cardRotateY_OneFace;
            function move_changeRotate(node, targetX, targetY, per, rotation_pe, time, func) {
                let targetPerX = targetX * per + node.x * (1 - per);
                let targetPerY = targetY * per + node.y * (1 - per);
                Laya.Tween.to(node, { x: targetPerX, y: targetPerY, rotation: 45 }, time, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(node, { x: targetX, y: targetY, rotation: 0 }, time, null, Laya.Handler.create(this, function () {
                        if (func !== null) {
                            func();
                        }
                    }), 0);
                }), 0);
            }
            Animation2D.move_changeRotate = move_changeRotate;
            function bomb_LeftRight(node, MaxScale, time, func, delayed) {
                Laya.Tween.to(node, { scaleX: MaxScale }, time, Laya.Ease.cubicInOut, Laya.Handler.create(this, function () {
                    Laya.Tween.to(node, { scaleX: 0.85 }, time * 0.5, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(node, { scaleX: MaxScale * 0.9 }, time * 0.55, null, Laya.Handler.create(this, function () {
                            Laya.Tween.to(node, { scaleX: 0.95 }, time * 0.6, null, Laya.Handler.create(this, function () {
                                Laya.Tween.to(node, { scaleX: 1 }, time * 0.65, null, Laya.Handler.create(this, function () {
                                    if (func)
                                        func();
                                }), 0);
                            }), 0);
                        }), 0);
                    }), 0);
                }), delayed);
            }
            Animation2D.bomb_LeftRight = bomb_LeftRight;
            function bombs_Appear(node, firstAlpha, endScale, scale1, rotation1, time1, time2, delayed, func) {
                node.scale(0, 0);
                node.alpha = firstAlpha;
                Laya.Tween.to(node, { scaleX: scale1, scaleY: scale1, alpha: 1, rotation: rotation1 }, time1, Laya.Ease.cubicInOut, Laya.Handler.create(this, function () {
                    Laya.Tween.to(node, { scaleX: endScale, scaleY: endScale, rotation: 0 }, time2, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(node, { scaleX: endScale + (scale1 - endScale) * 0.2, scaleY: endScale + (scale1 - endScale) * 0.2, rotation: 0 }, time2, null, Laya.Handler.create(this, function () {
                            Laya.Tween.to(node, { scaleX: endScale, scaleY: endScale, rotation: 0 }, time2, null, Laya.Handler.create(this, function () {
                                if (func) {
                                    func();
                                }
                            }), 0);
                        }), 0);
                    }), 0);
                }), delayed ? delayed : 0);
            }
            Animation2D.bombs_Appear = bombs_Appear;
            function bombs_AppearAllChild(node, firstAlpha, endScale, scale1, rotation1, time1, time2, interval, func, audioType) {
                let de1 = 0;
                if (!interval) {
                    interval = 100;
                }
                for (let index = 0; index < node.numChildren; index++) {
                    let Child = node.getChildAt(index);
                    Child.alpha = 0;
                    Laya.timer.once(de1, this, () => {
                        Child.alpha = 1;
                        if (index !== node.numChildren - 1) {
                            func == null;
                        }
                        bombs_Appear(Child, firstAlpha, endScale, scale1, rotation1, time1, time2, null, func);
                    });
                    de1 += interval;
                }
            }
            Animation2D.bombs_AppearAllChild = bombs_AppearAllChild;
            function bombs_VanishAllChild(node, endScale, alpha, rotation, time, interval, func) {
                let de1 = 0;
                if (!interval) {
                    interval = 100;
                }
                for (let index = 0; index < node.numChildren; index++) {
                    let Child = node.getChildAt(index);
                    Laya.timer.once(de1, this, () => {
                        if (index !== node.numChildren - 1) {
                            func == null;
                        }
                        bombs_Vanish(node, endScale, alpha, rotation, time, 0, func);
                    });
                    de1 += interval;
                }
            }
            Animation2D.bombs_VanishAllChild = bombs_VanishAllChild;
            function bombs_Vanish(node, scale, alpha, rotation, time, delayed, func) {
                Laya.Tween.to(node, { scaleX: scale, scaleY: scale, alpha: alpha, rotation: rotation }, time, Laya.Ease.cubicOut, Laya.Handler.create(this, function () {
                    if (func) {
                        func();
                    }
                }), delayed ? delayed : 0);
            }
            Animation2D.bombs_Vanish = bombs_Vanish;
            function swell_shrink(node, firstScale, scale1, time, delayed, func) {
                if (!delayed) {
                    delayed = 0;
                }
                Laya.Tween.to(node, { scaleX: scale1, scaleY: scale1, alpha: 1, }, time, Laya.Ease.cubicInOut, Laya.Handler.create(this, function () {
                    Laya.Tween.to(node, { scaleX: firstScale, scaleY: firstScale, rotation: 0 }, time, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(node, { scaleX: firstScale + (scale1 - firstScale) * 0.5, scaleY: firstScale + (scale1 - firstScale) * 0.5, rotation: 0 }, time * 0.5, null, Laya.Handler.create(this, function () {
                            Laya.Tween.to(node, { scaleX: firstScale, scaleY: firstScale, rotation: 0 }, time, null, Laya.Handler.create(this, function () {
                                if (func) {
                                    func();
                                }
                            }), 0);
                        }), 0);
                    }), 0);
                }), delayed);
            }
            Animation2D.swell_shrink = swell_shrink;
            function move_Simple(node, fX, fY, targetX, targetY, time, delayed, func, ease) {
                node.x = fX;
                node.y = fY;
                Laya.Tween.to(node, { x: targetX, y: targetY }, time, ease ? ease : null, Laya.Handler.create(this, function () {
                    if (func) {
                        func();
                    }
                }), delayed ? delayed : 0);
            }
            Animation2D.move_Simple = move_Simple;
            function move_Deform_X(node, firstX, firstR, targetX, scaleX, scaleY, time, delayed, func) {
                node.alpha = 0;
                node.x = firstX;
                node.rotation = firstR;
                Laya.Tween.to(node, { x: targetX, scaleX: 1 + scaleX, scaleY: 1 + scaleY, rotation: firstR / 3, alpha: 1 }, time, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(node, { scaleX: 1, scaleY: 1, rotation: 0 }, time, null, Laya.Handler.create(this, function () {
                        if (func !== null) {
                            func();
                        }
                    }), 0);
                }), delayed);
            }
            Animation2D.move_Deform_X = move_Deform_X;
            function move_Deform_Y(target, firstY, firstR, targeY, scaleX, scaleY, time, delayed, func) {
                target.alpha = 0;
                if (firstY) {
                    target.y = firstY;
                }
                target.rotation = firstR;
                Laya.Tween.to(target, { y: targeY, scaleX: 1 + scaleX, scaleY: 1 + scaleY, rotation: firstR / 3, alpha: 1 }, time, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(target, { scaleX: 1, scaleY: 1, rotation: 0 }, time, null, Laya.Handler.create(this, function () {
                        if (func !== null) {
                            func();
                        }
                    }), 0);
                }), delayed);
            }
            Animation2D.move_Deform_Y = move_Deform_Y;
            function blink_FadeOut_v(target, minAlpha, maXalpha, time, delayed, func) {
                target.alpha = minAlpha;
                Laya.Tween.to(target, { alpha: maXalpha }, time, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(target, { alpha: minAlpha }, time, null, Laya.Handler.create(this, function () {
                        if (func !== null) {
                            func();
                        }
                    }), 0);
                }), delayed);
            }
            Animation2D.blink_FadeOut_v = blink_FadeOut_v;
            function blink_FadeOut(target, minAlpha, maXalpha, time, delayed, func) {
                target.alpha = minAlpha;
                if (!delayed) {
                    delayed = 0;
                }
                Laya.Tween.to(target, { alpha: minAlpha }, time, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(target, { alpha: maXalpha }, time, null, Laya.Handler.create(this, function () {
                        if (func) {
                            func();
                        }
                    }), 0);
                }), delayed);
            }
            Animation2D.blink_FadeOut = blink_FadeOut;
            function shookHead_Simple(target, rotate, time, delayed, func) {
                let firstR = target.rotation;
                Laya.Tween.to(target, { rotation: firstR + rotate }, time, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(target, { rotation: firstR - rotate * 2 }, time, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(target, { rotation: firstR + rotate }, time, null, Laya.Handler.create(this, function () {
                            Laya.Tween.to(target, { rotation: firstR }, time, null, Laya.Handler.create(this, function () {
                                if (func) {
                                    func();
                                }
                            }), 0);
                        }), 0);
                    }), 0);
                }), delayed ? delayed : 0);
            }
            Animation2D.shookHead_Simple = shookHead_Simple;
            function HintAni_01(target, upNum, time1, stopTime, downNum, time2, func) {
                target.alpha = 0;
                Laya.Tween.to(target, { alpha: 1, y: target.y - upNum }, time1, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(target, { y: target.y - 15 }, stopTime, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(target, { alpha: 0, y: target.y + upNum + downNum }, time2, null, Laya.Handler.create(this, function () {
                            if (func !== null) {
                                func();
                            }
                        }), 0);
                    }), 0);
                }), 0);
            }
            Animation2D.HintAni_01 = HintAni_01;
            function scale_Alpha(target, fAlpha, fScaleX, fScaleY, eScaleX, eScaleY, eAlpha, time, delayed, func, ease) {
                if (!delayed) {
                    delayed = 0;
                }
                if (!delayed) {
                    ease = null;
                }
                target.alpha = fAlpha;
                target.scaleX = fScaleX;
                target.scaleY = fScaleY;
                Laya.Tween.to(target, { scaleX: eScaleX, scaleY: eScaleY, alpha: eAlpha }, time, ease, Laya.Handler.create(this, function () {
                    if (func) {
                        func();
                    }
                }), delayed);
            }
            Animation2D.scale_Alpha = scale_Alpha;
            function rotate_Magnify_KickBack(node, eAngle, eScale, time1, time2, delayed1, delayed2, func) {
                node.alpha = 0;
                node.scaleX = 0;
                node.scaleY = 0;
                Laya.Tween.to(node, { alpha: 1, rotation: 360 + eAngle, scaleX: 1 + eScale, scaleY: 1 + eScale }, time1, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(node, { rotation: 360 - eAngle / 2, scaleX: 1 + eScale / 2, scaleY: 1 + eScale / 2 }, time2, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(node, { rotation: 360 + eAngle / 3, scaleX: 1 + eScale / 5, scaleY: 1 + eScale / 5 }, time2, null, Laya.Handler.create(this, function () {
                            Laya.Tween.to(node, { rotation: 360, scaleX: 1, scaleY: 1 }, time2, null, Laya.Handler.create(this, function () {
                                node.rotation = 0;
                                if (func !== null) {
                                    func();
                                }
                            }), 0);
                        }), delayed2);
                    }), 0);
                }), delayed1);
            }
            Animation2D.rotate_Magnify_KickBack = rotate_Magnify_KickBack;
        })(Animation2D = lwg.Animation2D || (lwg.Animation2D = {}));
        let Setting;
        (function (Setting) {
            Setting._sound = {
                get switch() {
                    return Laya.LocalStorage.getItem('Setting_sound') == '0' ? false : true;
                },
                set switch(value) {
                    let val;
                    if (value) {
                        val = 1;
                    }
                    else {
                        val = 0;
                    }
                    Laya.LocalStorage.setItem('Setting_sound', val.toString());
                }
            };
            Setting._bgMusic = {
                get switch() {
                    return Laya.LocalStorage.getItem('Setting_bgMusic') == '0' ? false : true;
                },
                set switch(value) {
                    let val;
                    if (value) {
                        val = 1;
                        Laya.LocalStorage.setItem('Setting_bgMusic', val.toString());
                        PalyAudio.playMusic();
                    }
                    else {
                        val = 0;
                        Laya.LocalStorage.setItem('Setting_bgMusic', val.toString());
                        PalyAudio.stopMusic();
                    }
                }
            };
            Setting._shake = {
                get switch() {
                    return Laya.LocalStorage.getItem('Setting_shake') == '0' ? false : true;
                },
                set switch(value) {
                    let val;
                    if (value) {
                        val = 1;
                    }
                    else {
                        val = 0;
                    }
                    Laya.LocalStorage.setItem('Setting_shake', val.toString());
                }
            };
            function createSetBtn(x, y, width, height, url, parent) {
                let _url = 'Frame/UI/icon_set.png';
                let btn = new Laya.Image;
                if (width) {
                    btn.width = width;
                }
                else {
                    btn.width = 100;
                }
                if (height) {
                    btn.height = height;
                }
                else {
                    btn.height = 100;
                }
                if (url) {
                    btn.skin = url;
                }
                else {
                    btn.skin = _url;
                }
                if (parent) {
                    parent.addChild(btn);
                }
                else {
                    Laya.stage.addChild(btn);
                }
                btn.pivotX = btn.width / 2;
                btn.pivotY = btn.height / 2;
                btn.x = x;
                btn.y = y;
                btn.zOrder = 100;
                var btnSetUp = function (e) {
                    e.stopPropagation();
                    Admin._openScene(Admin._SceneName.UISet);
                };
                Click._on(Click._Type.largen, btn, null, null, btnSetUp, null);
                Setting.BtnSetNode = btn;
                Setting.BtnSetNode.name = 'BtnSetNode';
            }
            Setting.createSetBtn = createSetBtn;
            function setBtnAppear(delayed, x, y) {
                if (!Setting.BtnSetNode) {
                    return;
                }
                if (delayed) {
                    Animation2D.scale_Alpha(Setting.BtnSetNode, 0, 1, 1, 1, 1, 1, delayed, 0, f => {
                        Setting.BtnSetNode.visible = true;
                    });
                }
                else {
                    Setting.BtnSetNode.visible = true;
                }
                if (x) {
                    Setting.BtnSetNode.x = x;
                }
                if (y) {
                    Setting.BtnSetNode.y = y;
                }
            }
            Setting.setBtnAppear = setBtnAppear;
            function setBtnVinish(delayed) {
                if (!Setting.BtnSetNode) {
                    return;
                }
                if (delayed) {
                    Animation2D.scale_Alpha(Setting.BtnSetNode, 1, 1, 1, 1, 1, 0, delayed, 0, f => {
                        Setting.BtnSetNode.visible = false;
                    });
                }
                else {
                    Setting.BtnSetNode.visible = false;
                }
            }
            Setting.setBtnVinish = setBtnVinish;
        })(Setting = lwg.Setting || (lwg.Setting = {}));
        let PalyAudio;
        (function (PalyAudio) {
            let voiceUrl;
            (function (voiceUrl) {
                voiceUrl["btn"] = "Frame/Voice/btn.wav";
                voiceUrl["bgm"] = "Frame/Voice/bgm.mp3";
                voiceUrl["victory"] = "Frame/Voice/guoguan.wav";
                voiceUrl["defeated"] = "Frame/Voice/wancheng.wav";
                voiceUrl["huodejinbi"] = "Frame/Voice/huodejinbi.wav";
            })(voiceUrl = PalyAudio.voiceUrl || (PalyAudio.voiceUrl = {}));
            function playSound(url, number, func) {
                if (!url) {
                    url = voiceUrl.btn;
                }
                if (!number) {
                    number = 1;
                }
                if (Setting._sound.switch) {
                    Laya.SoundManager.playSound(url, number, Laya.Handler.create(this, function () {
                        if (func) {
                            func();
                        }
                    }));
                }
            }
            PalyAudio.playSound = playSound;
            function playDefeatedSound(url, number, func) {
                if (!url) {
                    url = voiceUrl.defeated;
                }
                if (!number) {
                    number = 1;
                }
                if (Setting._sound.switch) {
                    Laya.SoundManager.playSound(url, number, Laya.Handler.create(this, function () {
                        if (func) {
                            func();
                        }
                    }));
                }
            }
            PalyAudio.playDefeatedSound = playDefeatedSound;
            function playVictorySound(url, number, func) {
                if (!url) {
                    url = voiceUrl.victory;
                }
                if (!number) {
                    number = 1;
                }
                if (Setting._sound.switch) {
                    Laya.SoundManager.playSound(url, number, Laya.Handler.create(this, function () {
                        if (func) {
                            func();
                        }
                    }));
                }
            }
            PalyAudio.playVictorySound = playVictorySound;
            function playMusic(url, number, delayed) {
                if (!url) {
                    url = voiceUrl.bgm;
                }
                if (!number) {
                    number = 0;
                }
                if (!delayed) {
                    delayed = 0;
                }
                if (Setting._bgMusic.switch) {
                    Laya.SoundManager.playMusic(url, number, Laya.Handler.create(this, function () { }), delayed);
                }
            }
            PalyAudio.playMusic = playMusic;
            function stopMusic() {
                Laya.SoundManager.stopMusic();
            }
            PalyAudio.stopMusic = stopMusic;
        })(PalyAudio = lwg.PalyAudio || (lwg.PalyAudio = {}));
        let Tools;
        (function (Tools) {
            function color_RGBtoHexString(r, g, b) {
                return '#' + ("00000" + (r << 16 | g << 8 | b).toString(16)).slice(-6);
            }
            Tools.color_RGBtoHexString = color_RGBtoHexString;
            function format_FormatNumber(number) {
                if (typeof (number) !== "number") {
                    console.warn("要转化的数字并不为number");
                    return number;
                }
                let backNum;
                if (number < 1000) {
                    backNum = "" + number;
                }
                else if (number < 1000000) {
                    backNum = "" + (number / 1000).toFixed(1) + "k";
                }
                else if (number < 10e8) {
                    backNum = "" + (number / 1000000).toFixed(1) + "m";
                }
                else {
                    backNum = "" + number;
                }
                return backNum;
            }
            Tools.format_FormatNumber = format_FormatNumber;
            function format_StrAddNum(str, num) {
                return (Number(str) + num).toString();
            }
            Tools.format_StrAddNum = format_StrAddNum;
            function format_NumAddStr(num, str) {
                return Number(str) + num;
            }
            Tools.format_NumAddStr = format_NumAddStr;
            function node_GetChildArrByProperty(node, property, value) {
                let childArr = [];
                for (let index = 0; index < node.numChildren; index++) {
                    const element = node.getChildAt(index);
                    if (element[property] == value) {
                        childArr.push(element);
                    }
                }
                return childArr;
            }
            Tools.node_GetChildArrByProperty = node_GetChildArrByProperty;
            function node_RandomChildren(node, num) {
                let childArr = [];
                let indexArr = [];
                for (let i = 0; i < node.numChildren; i++) {
                    indexArr.push(i);
                }
                let randomIndex = Tools.arrayRandomGetOut(indexArr, num);
                for (let j = 0; j < randomIndex.length; j++) {
                    childArr.push(node.getChildAt(randomIndex[j]));
                }
                return childArr;
            }
            Tools.node_RandomChildren = node_RandomChildren;
            function node_RemoveAllChildren(node) {
                if (node.numChildren > 0) {
                    node.removeChildren(0, node.numChildren - 1);
                }
            }
            Tools.node_RemoveAllChildren = node_RemoveAllChildren;
            function node_2DShowExcludedChild(node, childNameArr, bool) {
                for (let i = 0; i < node.numChildren; i++) {
                    let Child = node.getChildAt(i);
                    for (let j = 0; j < childNameArr.length; j++) {
                        if (Child.name == childNameArr[j]) {
                            if (bool || bool == undefined) {
                                Child.visible = true;
                            }
                            else {
                                Child.visible = false;
                            }
                        }
                        else {
                            if (bool || bool == undefined) {
                                Child.visible = false;
                            }
                            else {
                                Child.visible = true;
                            }
                        }
                    }
                }
            }
            Tools.node_2DShowExcludedChild = node_2DShowExcludedChild;
            function node_3DShowExcludedChild(node, childNameArr, bool) {
                for (let i = 0; i < node.numChildren; i++) {
                    let Child = node.getChildAt(i);
                    for (let j = 0; j < childNameArr.length; j++) {
                        if (Child.name == childNameArr[j]) {
                            if (bool || bool == undefined) {
                                Child.active = true;
                            }
                            else {
                                Child.active = false;
                            }
                        }
                        else {
                            if (bool || bool == undefined) {
                                Child.active = false;
                            }
                            else {
                                Child.active = true;
                            }
                        }
                    }
                }
            }
            Tools.node_3DShowExcludedChild = node_3DShowExcludedChild;
            function node_2DChildrenVisible(node, bool) {
                for (let index = 0; index < node.numChildren; index++) {
                    const element = node.getChildAt(index);
                    if (bool) {
                        element.visible = true;
                    }
                    else {
                        element.visible = false;
                    }
                }
            }
            Tools.node_2DChildrenVisible = node_2DChildrenVisible;
            function node_3DChildrenVisible(node, bool) {
                for (let index = 0; index < node.numChildren; index++) {
                    const element = node.getChildAt(index);
                    if (bool) {
                        element.active = true;
                    }
                    else {
                        element.active = false;
                    }
                }
            }
            Tools.node_3DChildrenVisible = node_3DChildrenVisible;
            function node_3dFindChild(parent, name) {
                var item = null;
                item = parent.getChildByName(name);
                if (item != null)
                    return item;
                var go = null;
                for (var i = 0; i < parent.numChildren; i++) {
                    go = node_3dFindChild(parent.getChildAt(i), name);
                    if (go != null)
                        return go;
                }
                return null;
            }
            Tools.node_3dFindChild = node_3dFindChild;
            function node_2dFindChild(parent, name) {
                var item = null;
                item = parent.getChildByName(name);
                if (item != null)
                    return item;
                var go = null;
                for (var i = 0; i < parent.numChildren; i++) {
                    go = node_2dFindChild(parent.getChildAt(i), name);
                    if (go != null)
                        return go;
                }
                return null;
            }
            Tools.node_2dFindChild = node_2dFindChild;
            function randomOneHalf() {
                let number;
                number = Math.floor(Math.random() * 2);
                return number;
            }
            Tools.randomOneHalf = randomOneHalf;
            function randomNumber(section1, section2) {
                if (section2) {
                    return Math.floor(Math.random() * (section2 - section1)) + section1;
                }
                else {
                    return Math.floor(Math.random() * section1);
                }
            }
            Tools.randomNumber = randomNumber;
            function randomCountNumer(section1, section2, count, intSet) {
                let arr = [];
                if (!count) {
                    count = 1;
                }
                if (intSet == undefined) {
                    intSet = true;
                }
                if (section2) {
                    while (count > arr.length) {
                        let num;
                        if (intSet) {
                            num = Math.floor(Math.random() * (section2 - section1)) + section1;
                        }
                        else {
                            num = Math.random() * (section2 - section1) + section1;
                        }
                        arr.push(num);
                        Tools.arrayUnique_01(arr);
                    }
                    ;
                    return arr;
                }
                else {
                    while (count > arr.length) {
                        let num;
                        if (intSet) {
                            num = Math.floor(Math.random() * section1);
                        }
                        else {
                            num = Math.random() * section1;
                        }
                        arr.push(num);
                        Tools.arrayUnique_01(arr);
                    }
                    return arr;
                }
            }
            Tools.randomCountNumer = randomCountNumer;
            function d2_twoObjectsLen(obj1, obj2) {
                let point = new Laya.Point(obj1.x, obj1.y);
                let len = point.distance(obj2.x, obj2.y);
                return len;
            }
            Tools.d2_twoObjectsLen = d2_twoObjectsLen;
            function d2_Vector_Angle(x, y) {
                let radian = Math.atan2(x, y);
                let angle = 90 - radian * (180 / Math.PI);
                if (angle <= 0) {
                    angle = 270 + (90 + angle);
                }
                return angle - 90;
            }
            Tools.d2_Vector_Angle = d2_Vector_Angle;
            ;
            function d2_angle_Vector(angle) {
                angle -= 90;
                let radian = (90 - angle) / (180 / Math.PI);
                let p = new Laya.Point(Math.sin(radian), Math.cos(radian));
                p.normalize();
                return p;
            }
            Tools.d2_angle_Vector = d2_angle_Vector;
            ;
            function d3_twoObjectsLen(obj1, obj2) {
                let obj1V3 = obj1.transform.position;
                let obj2V3 = obj2.transform.position;
                let p = new Laya.Vector3();
                Laya.Vector3.subtract(obj1V3, obj2V3, p);
                let lenp = Laya.Vector3.scalarLength(p);
                return lenp;
            }
            Tools.d3_twoObjectsLen = d3_twoObjectsLen;
            function d3_twoPositionLen(v1, v2) {
                let p = d3_twoSubV3(v1, v2);
                let lenp = Laya.Vector3.scalarLength(p);
                return lenp;
            }
            Tools.d3_twoPositionLen = d3_twoPositionLen;
            function d3_twoSubV3(V3_01, V3_02, normalizing) {
                let p = new Laya.Vector3();
                Laya.Vector3.subtract(V3_01, V3_02, p);
                if (normalizing) {
                    let p1 = new Laya.Vector3();
                    Laya.Vector3.normalize(p, p1);
                    return p1;
                }
                else {
                    return p;
                }
            }
            Tools.d3_twoSubV3 = d3_twoSubV3;
            function d3_maximumDistanceLimi(originV3, obj, length) {
                let subP = new Laya.Vector3();
                let objP = obj.transform.position;
                Laya.Vector3.subtract(objP, originV3, subP);
                let lenP = Laya.Vector3.scalarLength(subP);
                if (lenP >= length) {
                    let normalizP = new Laya.Vector3();
                    Laya.Vector3.normalize(subP, normalizP);
                    let x = originV3.x + normalizP.x * length;
                    let y = originV3.y + normalizP.y * length;
                    let z = originV3.z + normalizP.z * length;
                    let p = new Laya.Vector3(x, y, z);
                    obj.transform.position = p;
                    return p;
                }
            }
            Tools.d3_maximumDistanceLimi = d3_maximumDistanceLimi;
            function d3_rayScanning(camera, scene3D, vector2, filtrateName) {
                let _ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
                let outs = new Array();
                camera.viewportPointToRay(vector2, _ray);
                scene3D.physicsSimulation.rayCastAll(_ray, outs);
                if (outs.length != 0 && filtrateName) {
                    let outsChaild = null;
                    for (var i = 0; i < outs.length; i++) {
                        let hitResult = outs[i].collider.owner;
                        if (hitResult.name === filtrateName) {
                            outsChaild = outs[i];
                        }
                    }
                    return outsChaild;
                }
                else {
                    return outs;
                }
            }
            Tools.d3_rayScanning = d3_rayScanning;
            function d3_TransitionScreenPointfor(v3, camera) {
                let ScreenV4 = new Laya.Vector4();
                camera.viewport.project(v3, camera.projectionViewMatrix, ScreenV4);
                let point = new Laya.Vector2();
                point.x = ScreenV4.x;
                point.y = ScreenV4.y;
                return point;
            }
            Tools.d3_TransitionScreenPointfor = d3_TransitionScreenPointfor;
            function d3_animatorPlay(Sp3D, aniName, normalizedTime, layerIndex) {
                let sp3DAni = Sp3D.getComponent(Laya.Animator);
                if (!sp3DAni) {
                    console.log(Sp3D.name, '没有动画组件');
                    return;
                }
                if (!layerIndex) {
                    layerIndex = 0;
                }
                sp3DAni.play(aniName, layerIndex, normalizedTime);
                return sp3DAni;
            }
            Tools.d3_animatorPlay = d3_animatorPlay;
            function dAll_reverseVector(type, Vecoter1, Vecoter2, normalizing) {
                let p;
                if (type === '2d') {
                    p = new Laya.Point(Vecoter1.x - Vecoter2.x, Vecoter1.y - Vecoter2.y);
                    if (normalizing) {
                        p.normalize();
                    }
                    return p;
                }
                else if (type === '3d') {
                    p = new Laya.Vector3(Vecoter1.x - Vecoter2.x, Vecoter1.y - Vecoter2.y, Vecoter1.z - Vecoter2.z);
                    if (normalizing) {
                        let returnP = new Laya.Vector3();
                        Laya.Vector3.normalize(p, returnP);
                        return returnP;
                    }
                    else {
                        return p;
                    }
                }
            }
            Tools.dAll_reverseVector = dAll_reverseVector;
            function sk_indexControl(sk, name) {
                sk.play(name, true);
                sk.player.currentTime = 15 * 1000 / sk.player.cacheFrameRate;
            }
            Tools.sk_indexControl = sk_indexControl;
            let Draw;
            (function (Draw) {
                function drawPieMask(parent, startAngle, endAngle) {
                    parent.cacheAs = "bitmap";
                    let drawPieSpt = new Laya.Sprite();
                    drawPieSpt.blendMode = "destination-out";
                    parent.addChild(drawPieSpt);
                    let drawPie = drawPieSpt.graphics.drawPie(parent.width / 2, parent.height / 2, parent.width / 2 + 10, startAngle, endAngle, "#000000");
                    return drawPie;
                }
                Draw.drawPieMask = drawPieMask;
                function reverseRoundMask(node, x, y, radius, eliminate) {
                    if (eliminate == undefined || eliminate == true) {
                        node_RemoveAllChildren(node);
                    }
                    let interactionArea = new Laya.Sprite();
                    interactionArea.name = 'reverseRoundMask';
                    interactionArea.blendMode = "destination-out";
                    node.cacheAs = "bitmap";
                    node.addChild(interactionArea);
                    interactionArea.graphics.drawCircle(0, 0, radius, "#000000");
                    interactionArea.pos(x, y);
                }
                Draw.reverseRoundMask = reverseRoundMask;
                function reverseRoundrectMask(node, x, y, width, height, round, eliminate) {
                    if (eliminate == undefined || eliminate == true) {
                        node_RemoveAllChildren(node);
                    }
                    let interactionArea = new Laya.Sprite();
                    interactionArea.name = 'reverseRoundrectMask';
                    interactionArea.blendMode = "destination-out";
                    node.cacheAs = "bitmap";
                    node.addChild(interactionArea);
                    interactionArea.graphics.drawPath(0, 0, [["moveTo", 5, 0], ["lineTo", width - round, 0], ["arcTo", width, 0, width, round, round], ["lineTo", width, height - round], ["arcTo", width, height, width - round, height, round], ["lineTo", height - round, height], ["arcTo", 0, height, 0, height - round, round], ["lineTo", 0, round], ["arcTo", 0, 0, round, 0, round], ["closePath"]], { fillStyle: "#000000" });
                    interactionArea.width = width;
                    interactionArea.height = height;
                    interactionArea.pivotX = width / 2;
                    interactionArea.pivotY = height / 2;
                    interactionArea.pos(x, y);
                }
                Draw.reverseRoundrectMask = reverseRoundrectMask;
            })(Draw = Tools.Draw || (Tools.Draw = {}));
            function objArrPropertySort(array, property) {
                var compare = function (obj1, obj2) {
                    var val1 = obj1[property];
                    var val2 = obj2[property];
                    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                        val1 = Number(val1);
                        val2 = Number(val2);
                    }
                    if (val1 < val2) {
                        return -1;
                    }
                    else if (val1 > val2) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                };
                array.sort(compare);
                return array;
            }
            Tools.objArrPropertySort = objArrPropertySort;
            function objArr2DifferentPropertyObjArr1(objArr1, objArr2, property) {
                var result = [];
                for (var i = 0; i < objArr1.length; i++) {
                    var obj1 = objArr1[i];
                    var obj1Name = obj1[property];
                    var isExist = false;
                    for (var j = 0; j < objArr2.length; j++) {
                        var obj2 = objArr2[j];
                        var obj2Name = obj2[property];
                        if (obj2Name == obj1Name) {
                            isExist = true;
                            break;
                        }
                    }
                    if (!isExist) {
                        result.push(obj1);
                    }
                }
                return result;
            }
            Tools.objArr2DifferentPropertyObjArr1 = objArr2DifferentPropertyObjArr1;
            function objArr1IdenticalPropertyObjArr2(data1, data2, property) {
                var result = [];
                for (var i = 0; i < data1.length; i++) {
                    var obj1 = data1[i];
                    var obj1Name = obj1[property];
                    var isExist = false;
                    for (var j = 0; j < data2.length; j++) {
                        var obj2 = data2[j];
                        var obj2Name = obj2[property];
                        if (obj2Name == name) {
                            isExist = true;
                            break;
                        }
                    }
                    if (isExist) {
                        result.push(obj1);
                    }
                }
                return result;
            }
            Tools.objArr1IdenticalPropertyObjArr2 = objArr1IdenticalPropertyObjArr2;
            function objArrUnique(arr, property) {
                for (var i = 0, len = arr.length; i < len; i++) {
                    for (var j = i + 1, len = arr.length; j < len; j++) {
                        if (arr[i][property] === arr[j][property]) {
                            arr.splice(j, 1);
                            j--;
                            len--;
                        }
                    }
                }
                return arr;
            }
            Tools.objArrUnique = objArrUnique;
            function objArrGetValue(objArr, property) {
                let arr = [];
                for (let i = 0; i < objArr.length; i++) {
                    if (objArr[i][property]) {
                        arr.push(objArr[i][property]);
                    }
                }
                return arr;
            }
            Tools.objArrGetValue = objArrGetValue;
            function objArray_Copy(ObjArray) {
                var sourceCopy = ObjArray instanceof Array ? [] : {};
                for (var item in ObjArray) {
                    sourceCopy[item] = typeof ObjArray[item] === 'object' ? obj_Copy(ObjArray[item]) : ObjArray[item];
                }
                return sourceCopy;
            }
            Tools.objArray_Copy = objArray_Copy;
            function obj_Copy(obj) {
                var objCopy = {};
                for (const item in obj) {
                    if (obj.hasOwnProperty(item)) {
                        const element = obj[item];
                        if (typeof element === 'object') {
                            if (Array.isArray(element)) {
                                let arr1 = array_Copy(element);
                                objCopy[item] = arr1;
                            }
                            else {
                                obj_Copy(element);
                            }
                        }
                        else {
                            objCopy[item] = element;
                        }
                    }
                }
                return objCopy;
            }
            Tools.obj_Copy = obj_Copy;
            function arrayAddToarray(array1, array2) {
                for (let index = 0; index < array2.length; index++) {
                    const element = array2[index];
                    array1.push(element);
                }
                return array1;
            }
            Tools.arrayAddToarray = arrayAddToarray;
            function arrayRandomGetOut(arr, num) {
                if (!num) {
                    num = 1;
                }
                let arrCopy = Tools.array_Copy(arr);
                let arr0 = [];
                if (num > arrCopy.length) {
                    return '数组长度小于取出的数！';
                }
                else {
                    for (let index = 0; index < num; index++) {
                        let ran = Math.round(Math.random() * (arrCopy.length - 1));
                        let a1 = arrCopy[ran];
                        arrCopy.splice(ran, 1);
                        arr0.push(a1);
                    }
                    return arr0;
                }
            }
            Tools.arrayRandomGetOut = arrayRandomGetOut;
            function array_Copy(arr1) {
                var arr = [];
                for (var i = 0; i < arr1.length; i++) {
                    arr.push(arr1[i]);
                }
                return arr;
            }
            Tools.array_Copy = array_Copy;
            function arrayUnique_01(arr) {
                for (var i = 0, len = arr.length; i < len; i++) {
                    for (var j = i + 1, len = arr.length; j < len; j++) {
                        if (arr[i] === arr[j]) {
                            arr.splice(j, 1);
                            j--;
                            len--;
                        }
                    }
                }
                return arr;
            }
            Tools.arrayUnique_01 = arrayUnique_01;
            function arrayUnique_02(arr) {
                arr = arr.sort();
                var arr1 = [arr[0]];
                for (var i = 1, len = arr.length; i < len; i++) {
                    if (arr[i] !== arr[i - 1]) {
                        arr1.push(arr[i]);
                    }
                }
                return arr1;
            }
            Tools.arrayUnique_02 = arrayUnique_02;
            function arrayUnique_03(arr) {
                return Array.from(new Set(arr));
            }
            Tools.arrayUnique_03 = arrayUnique_03;
            function array1ExcludeArray2(arr1, arr2) {
                let arr1Capy = array_Copy(arr1);
                let arr2Capy = array_Copy(arr2);
                for (let i = 0; i < arr1Capy.length; i++) {
                    for (let j = 0; j < arr2Capy.length; j++) {
                        if (arr1Capy[i] === arr2Capy[j]) {
                            arr1Capy.splice(i, 1);
                            i--;
                        }
                    }
                }
                return arr1Capy;
            }
            Tools.array1ExcludeArray2 = array1ExcludeArray2;
            function array_ExcludeArrays(arrays, exclude) {
                let arr0 = [];
                for (let i = 0; i < arrays.length; i++) {
                    for (let j = 0; j < arrays[i].length; j++) {
                        arr0.push(arrays[i][j]);
                    }
                }
                let arr1 = Tools.array_Copy(arr0);
                let arr2 = Tools.arrayUnique_01(arr1);
                let arrNum = [];
                for (let k = 0; k < arr2.length; k++) {
                    arrNum.push({
                        name: arr2[k],
                        num: 0,
                    });
                }
                for (let l = 0; l < arr0.length; l++) {
                    for (let m = 0; m < arrNum.length; m++) {
                        if (arr0[l] == arrNum[m]['name']) {
                            arrNum[m]['num']++;
                        }
                    }
                }
                let arrAllHave = [];
                let arrDiffHave = [];
                for (let n = 0; n < arrNum.length; n++) {
                    const element = arrNum[n];
                    if (arrNum[n]['num'] == arrays.length) {
                        arrAllHave.push(arrNum[n]['name']);
                    }
                    else {
                        arrDiffHave.push(arrNum[n]['name']);
                    }
                }
                if (!exclude) {
                    return arrAllHave;
                }
                else {
                    return arrDiffHave;
                }
            }
            Tools.array_ExcludeArrays = array_ExcludeArrays;
            function point_DotRotatePoint(x0, y0, x1, y1, angle) {
                let x2 = x0 + (x1 - x0) * Math.cos(angle * Math.PI / 180) - (y1 - y0) * Math.sin(angle * Math.PI / 180);
                let y2 = y0 + (x1 - x0) * Math.sin(angle * Math.PI / 180) + (y1 - y0) * Math.cos(angle * Math.PI / 180);
                return new Laya.Point(x2, y2);
            }
            Tools.point_DotRotatePoint = point_DotRotatePoint;
            function point_SpeedXYByAngle(angle, speed) {
                if (angle % 90 === 0 || !angle) {
                }
                const speedXY = { x: 0, y: 0 };
                speedXY.x = speed * Math.cos(angle * Math.PI / 180);
                speedXY.y = speed * Math.sin(angle * Math.PI / 180);
                return new Laya.Point(speedXY.x, speedXY.y);
            }
            Tools.point_SpeedXYByAngle = point_SpeedXYByAngle;
            function point_GetRoundPos(angle, radius, centerPos) {
                var center = centerPos;
                var radius = radius;
                var hudu = (2 * Math.PI / 360) * angle;
                var X = center.x + Math.sin(hudu) * radius;
                var Y = center.y - Math.cos(hudu) * radius;
                return new Laya.Point(X, Y);
            }
            Tools.point_GetRoundPos = point_GetRoundPos;
            function point_RandomPointByCenter(centerPos, radiusX, radiusY, count) {
                if (!count) {
                    count = 1;
                }
                let arr = [];
                for (let index = 0; index < count; index++) {
                    let x0 = Tools.randomCountNumer(0, radiusX, 1, false);
                    let y0 = Tools.randomCountNumer(0, radiusY, 1, false);
                    let diffX = Tools.randomOneHalf() == 0 ? x0[0] : -x0[0];
                    let diffY = Tools.randomOneHalf() == 0 ? y0[0] : -y0[0];
                    let p = new Laya.Point(centerPos.x + diffX, centerPos.y + diffY);
                    arr.push(p);
                }
                return arr;
            }
            Tools.point_RandomPointByCenter = point_RandomPointByCenter;
            function angle_GetRad(angle) {
                return angle / 180 * Math.PI;
            }
            Tools.angle_GetRad = angle_GetRad;
            function jsonCompare(url, storageName, propertyName) {
                let dataArr;
                if (Laya.LocalStorage.getJSON(storageName)) {
                    dataArr = JSON.parse(Laya.LocalStorage.getJSON(storageName))[storageName];
                    console.log(storageName + '从本地缓存中获取到数据,将和文件夹的json文件进行对比');
                    try {
                        let dataArr_0 = Laya.loader.getRes(url)['RECORDS'];
                        if (dataArr_0.length >= dataArr.length) {
                            let diffArray = Tools.objArr2DifferentPropertyObjArr1(dataArr_0, dataArr, propertyName);
                            console.log('两个数据的差值为：', diffArray);
                            Tools.arrayAddToarray(dataArr, diffArray);
                        }
                        else {
                            console.log(storageName + '数据表填写有误，长度不能小于之前的长度');
                        }
                    }
                    catch (error) {
                        console.log(storageName, '数据赋值失败！请检查数据表或者手动赋值！');
                    }
                }
                else {
                    try {
                        dataArr = Laya.loader.getRes(url)['RECORDS'];
                    }
                    catch (error) {
                        console.log(storageName + '数据赋值失败！请检查数据表或者手动赋值！');
                    }
                }
                let data = {};
                data[storageName] = dataArr;
                Laya.LocalStorage.setJSON(storageName, JSON.stringify(data));
                return dataArr;
            }
            Tools.jsonCompare = jsonCompare;
        })(Tools = lwg.Tools || (lwg.Tools = {}));
        let Shop;
        (function (Shop) {
            Shop.goodsClassArr = [];
            Shop.classWarehouse = [];
            Shop._tryName = [];
            Shop.allSkin = [];
            Shop._currentSkin = {
                get name() {
                    return Laya.LocalStorage.getItem('Shop_currentSkin') ? Laya.LocalStorage.getItem('Shop_currentSkin') : null;
                },
                set name(name) {
                    Laya.LocalStorage.setItem('Shop_currentSkin', name);
                }
            };
            Shop.allProps = [];
            Shop._currentProp = {
                get name() {
                    return Laya.LocalStorage.getItem('Shop_currentProp') ? Laya.LocalStorage.getItem('Shop_currentProp') : null;
                },
                set name(name) {
                    Laya.LocalStorage.setItem('Shop_currentProp', name);
                }
            };
            Shop.allOther = [];
            Shop._currentOther = {
                get name() {
                    return Laya.LocalStorage.getItem('Shop_crrentOther') ? Laya.LocalStorage.getItem('Shop_crrentOther') : null;
                },
                set name(name) {
                    Laya.LocalStorage.setItem('Shop_crrentOther', name);
                }
            };
            Shop.useSkinType = [];
            function setUseSkinType() {
                let arr;
                if (Laya.LocalStorage.getJSON('Shop_useSkinType')) {
                    arr = JSON.parse(Laya.LocalStorage.getJSON('Shop_useSkinType'));
                }
                else {
                    return;
                }
                Shop.useSkinType = arr !== null ? arr['Shop_useSkinType'] : [];
                Shop.useSkinType.push(Shop._currentOther.name, Shop._currentProp.name, Shop._currentSkin.name);
                Shop.useSkinType = Tools.arrayUnique_03(Shop.useSkinType);
                let data = {
                    Shop_useSkinType: Shop.useSkinType,
                };
                Laya.LocalStorage.setJSON('Shop_useSkinType', JSON.stringify(data));
                return Shop.useSkinType.length;
            }
            Shop.setUseSkinType = setUseSkinType;
            function getProperty(goodsClass, name, property) {
                let pro = null;
                let arr = getClassArr(goodsClass);
                for (let index = 0; index < arr.length; index++) {
                    const element = arr[index];
                    if (element['name'] === name) {
                        pro = element[property];
                        break;
                    }
                }
                if (pro !== null) {
                    return pro;
                }
                else {
                    console.log(name + '找不到属性:' + property, pro);
                    return null;
                }
            }
            Shop.getProperty = getProperty;
            function setProperty(goodsClass, name, property, value) {
                let arr = getClassArr(goodsClass);
                for (let index = 0; index < arr.length; index++) {
                    const element = arr[index];
                    if (element['name'] === name) {
                        element[property] = value;
                        break;
                    }
                }
                let data = {};
                data[goodsClass] = arr;
                Laya.LocalStorage.setJSON(goodsClass, JSON.stringify(data));
                if (Shop._ShopList) {
                    Shop._ShopList.refresh();
                }
            }
            Shop.setProperty = setProperty;
            function getHaveArr(goodsClass) {
                let arr = getClassArr(goodsClass);
                let arrHave = [];
                for (let index = 0; index < arr.length; index++) {
                    const element = arr[index];
                    if (element[GoodsProperty.have]) {
                        arrHave.push(element);
                    }
                }
                return arrHave;
            }
            Shop.getHaveArr = getHaveArr;
            function getwayGoldArr(goodsClass, have, excludeCurrent) {
                let arr = getClassArr(goodsClass);
                let arrNoHave = [];
                for (let index = 0; index < arr.length; index++) {
                    const element = arr[index];
                    if (have && have !== undefined) {
                        if (element[GoodsProperty.have] && element[GoodsProperty.getway] === Getway.gold) {
                            arrNoHave.push(element);
                        }
                    }
                    else if (!have && have !== undefined) {
                        if (!element[GoodsProperty.have] && element[GoodsProperty.getway] === Getway.gold) {
                            arrNoHave.push(element);
                        }
                    }
                    else if (have == undefined) {
                        if (element[GoodsProperty.getway] === Getway.gold) {
                            arrNoHave.push(element);
                        }
                    }
                }
                if (excludeCurrent && excludeCurrent !== undefined) {
                    for (let index = 0; index < arrNoHave.length; index++) {
                        const element = arrNoHave[index];
                        if (element[GoodsProperty.name] === get_Current(goodsClass)) {
                            arrNoHave.splice(index, 1);
                            break;
                        }
                    }
                }
                return arrNoHave;
            }
            Shop.getwayGoldArr = getwayGoldArr;
            function getwayIneedwinArr(goodsClass, have) {
                let arr = getClassArr(goodsClass);
                let arrIneedwin = [];
                for (let index = 0; index < arr.length; index++) {
                    const element = arr[index];
                    if (have && have !== undefined) {
                        if (element[GoodsProperty.have] && element[GoodsProperty.getway] === Getway.ineedwin) {
                            arrIneedwin.push(element);
                        }
                    }
                    else if (!have && have !== undefined) {
                        if (!element[GoodsProperty.have] && element[GoodsProperty.getway] === Getway.ineedwin) {
                            arrIneedwin.push(element);
                        }
                    }
                    else if (have == undefined) {
                        if (element[GoodsProperty.getway] === Getway.ineedwin) {
                            arrIneedwin.push(element);
                        }
                    }
                }
                return arrIneedwin;
            }
            Shop.getwayIneedwinArr = getwayIneedwinArr;
            function get_Current(goodsClass) {
                let _current = null;
                switch (goodsClass) {
                    case GoodsClass.Skin:
                        _current = Shop._currentSkin.name;
                        break;
                    case GoodsClass.Props:
                        _current = Shop._currentProp.name;
                        break;
                    case GoodsClass.Other:
                        _current = Shop._currentOther.name;
                        break;
                    default:
                        break;
                }
                return _current;
            }
            Shop.get_Current = get_Current;
            function getClassArr(goodsClass) {
                let arr = [];
                switch (goodsClass) {
                    case GoodsClass.Skin:
                        arr = Shop.allSkin;
                        break;
                    case GoodsClass.Props:
                        arr = Shop.allProps;
                        break;
                    case GoodsClass.Other:
                        arr = Shop.allOther;
                        break;
                    default:
                        break;
                }
                return arr;
            }
            Shop.getClassArr = getClassArr;
            function buyGoods(calssName, name, number) {
                if (!number) {
                    number = 1;
                }
                let resCondition = getProperty(calssName, name, GoodsProperty.resCondition);
                let condition = getProperty(calssName, name, GoodsProperty.condition);
                let have = getProperty(calssName, name, GoodsProperty.have);
                if (have !== true && have !== null) {
                    if (condition <= resCondition + number) {
                        setProperty(calssName, name, GoodsProperty.resCondition, condition);
                        setProperty(calssName, name, GoodsProperty.have, true);
                        if (Shop._ShopList) {
                            Shop._ShopList.refresh();
                        }
                        return true;
                    }
                    else {
                        setProperty(calssName, name, GoodsProperty.resCondition, resCondition + number);
                        if (Shop._ShopList) {
                            Shop._ShopList.refresh();
                        }
                        return false;
                    }
                }
                else {
                    return -1;
                }
            }
            Shop.buyGoods = buyGoods;
            function initShop() {
                Shop.allSkin = Tools.jsonCompare('GameData/Shop/Skin.json', GoodsClass.Skin, GoodsProperty.name);
                Shop.allProps = Tools.jsonCompare('GameData/Shop/Props.json', GoodsClass.Props, GoodsProperty.name);
                Shop.allOther = Tools.jsonCompare('GameData/Shop/Other.json', GoodsClass.Other, GoodsProperty.name);
            }
            Shop.initShop = initShop;
            let GoodsProperty;
            (function (GoodsProperty) {
                GoodsProperty["name"] = "name";
                GoodsProperty["getway"] = "getway";
                GoodsProperty["condition"] = "condition";
                GoodsProperty["resCondition"] = "resCondition";
                GoodsProperty["arrange"] = "arrange";
                GoodsProperty["getOder"] = "getOder";
                GoodsProperty["have"] = "have";
            })(GoodsProperty = Shop.GoodsProperty || (Shop.GoodsProperty = {}));
            let Getway;
            (function (Getway) {
                Getway["free"] = "free";
                Getway["ads"] = "ads";
                Getway["adsXD"] = "adsXD";
                Getway["ineedwin"] = "ineedwin";
                Getway["gold"] = "gold";
                Getway["diamond"] = "diamond";
                Getway["easterEgg"] = "easterEgg";
                Getway["other"] = "other";
            })(Getway = Shop.Getway || (Shop.Getway = {}));
            let GoodsClass;
            (function (GoodsClass) {
                GoodsClass["Skin"] = "Shop_Skin";
                GoodsClass["Props"] = "Shop_Props";
                GoodsClass["Other"] = "Shop_Other";
            })(GoodsClass = Shop.GoodsClass || (Shop.GoodsClass = {}));
            let EventType;
            (function (EventType) {
                EventType["select"] = "select";
            })(EventType = Shop.EventType || (Shop.EventType = {}));
            class ShopScene extends Admin._Scene {
                moduleOnAwake() {
                    Shop._ShopTap = this.self['MyTap'];
                    Shop._ShopList = this.self['MyList'];
                    if (!Shop.allSkin) {
                        Shop.allSkin = Tools.jsonCompare('GameData/Shop/Skin.json', GoodsClass.Skin, GoodsProperty.name);
                    }
                    if (!Shop.allProps) {
                        Shop.allProps = Tools.jsonCompare('GameData/Shop/Props.json', GoodsClass.Props, GoodsProperty.name);
                    }
                    if (!Shop.allOther) {
                        Shop.allOther = Tools.jsonCompare('GameData/Shop/Other.json', GoodsClass.Other, GoodsProperty.name);
                    }
                    Shop.goodsClassArr = [Shop.allSkin, Shop.allProps, Shop.allOther];
                    Shop.classWarehouse = [GoodsClass.Skin, GoodsClass.Props, GoodsClass.Skin];
                }
                moduleOnEnable() {
                    this.myList_Create();
                    this.myTap_Create();
                }
                myTap_Create() {
                    Shop._ShopTap.selectHandler = new Laya.Handler(this, this.myTap_Select);
                }
                myTap_Select(index) { }
                myList_Create() {
                    Shop._ShopList.selectEnable = true;
                    Shop._ShopList.selectHandler = new Laya.Handler(this, this.myList_Scelet);
                    Shop._ShopList.renderHandler = new Laya.Handler(this, this.myList_Update);
                    this.myList_refresh();
                }
                myList_Scelet(index) { }
                myList_Update(cell, index) { }
                myList_refresh() {
                    if (Shop._ShopList && Shop.goodsClassArr.length > 0) {
                        Shop._ShopList.array = Shop.goodsClassArr[0];
                        Shop._ShopList.refresh();
                    }
                }
            }
            Shop.ShopScene = ShopScene;
        })(Shop = lwg.Shop || (lwg.Shop = {}));
        let VictoryBox;
        (function (VictoryBox) {
            VictoryBox._BoxArray = [];
            VictoryBox._canOpenNum = 3;
            VictoryBox._alreadyOpenNum = 0;
            VictoryBox._adsMaxOpenNum = 6;
            VictoryBox._openVictoryBoxNum = 0;
            function getProperty(name, property) {
                let pro = null;
                for (let index = 0; index < VictoryBox._BoxArray.length; index++) {
                    const element = VictoryBox._BoxArray[index];
                    if (element['name'] === name) {
                        pro = element[property];
                        break;
                    }
                }
                if (pro !== null) {
                    return pro;
                }
                else {
                    console.log(name + '找不到属性:' + property, pro);
                    return null;
                }
            }
            VictoryBox.getProperty = getProperty;
            function setProperty(name, property, value) {
                for (let index = 0; index < VictoryBox._BoxArray.length; index++) {
                    const element = VictoryBox._BoxArray[index];
                    if (element['name'] === name) {
                        element[property] = value;
                        break;
                    }
                }
                if (VictoryBox._BoxList) {
                    VictoryBox._BoxList.refresh();
                }
            }
            VictoryBox.setProperty = setProperty;
            let BoxProperty;
            (function (BoxProperty) {
                BoxProperty["name"] = "name";
                BoxProperty["rewardType"] = "rewardType";
                BoxProperty["rewardNum"] = "rewardNum";
                BoxProperty["openState"] = "openState";
                BoxProperty["ads"] = "ads";
                BoxProperty["select"] = "select";
            })(BoxProperty = VictoryBox.BoxProperty || (VictoryBox.BoxProperty = {}));
            let EventType;
            (function (EventType) {
                EventType["openBox"] = "openBox";
            })(EventType = VictoryBox.EventType || (VictoryBox.EventType = {}));
            class VictoryBoxScene extends Admin._Scene {
                moduleOnAwake() {
                    VictoryBox._BoxList = this.self['MyList'];
                    VictoryBox._BoxArray = Tools.objArray_Copy(Laya.loader.getRes("GameData/VictoryBox/VictoryBox.json")['RECORDS']);
                    VictoryBox._selectBox = null;
                    VictoryBox._canOpenNum = 3;
                    VictoryBox._openVictoryBoxNum++;
                    VictoryBox._adsMaxOpenNum = 6;
                    VictoryBox._alreadyOpenNum = 0;
                }
                moduleOnEnable() {
                    this.boxList_Create();
                }
                boxList_Create() {
                    VictoryBox._BoxList.selectEnable = true;
                    VictoryBox._BoxList.selectHandler = new Laya.Handler(this, this.boxList_Scelet);
                    VictoryBox._BoxList.renderHandler = new Laya.Handler(this, this.boxList_Update);
                    this.boxList_refresh();
                }
                boxList_Scelet(index) { }
                boxList_Update(cell, index) { }
                boxList_refresh() {
                    if (VictoryBox._BoxList) {
                        VictoryBox._BoxList.array = VictoryBox._BoxArray;
                        VictoryBox._BoxList.refresh();
                    }
                }
            }
            VictoryBox.VictoryBoxScene = VictoryBoxScene;
        })(VictoryBox = lwg.VictoryBox || (lwg.VictoryBox = {}));
        let CheckIn;
        (function (CheckIn) {
            CheckIn._fromWhich = Admin._SceneName.UILoding;
            CheckIn._lastCheckDate = {
                get date() {
                    return Laya.LocalStorage.getItem('Check_lastCheckDate') ? Number(Laya.LocalStorage.getItem('Check_lastCheckDate')) : -1;
                },
                set date(date) {
                    Laya.LocalStorage.setItem('Check_lastCheckDate', date.toString());
                }
            };
            CheckIn._checkInNum = {
                get number() {
                    return Laya.LocalStorage.getItem('Check_checkInNum') ? Number(Laya.LocalStorage.getItem('Check_checkInNum')) : 0;
                },
                set number(num) {
                    Laya.LocalStorage.setItem('Check_checkInNum', num.toString());
                }
            };
            CheckIn._todayCheckIn = {
                get bool() {
                    return CheckIn._lastCheckDate.date == DateAdmin._date.date ? true : false;
                },
            };
            function getProperty(name, property) {
                let pro = null;
                for (let index = 0; index < CheckIn._checkArray.length; index++) {
                    const element = CheckIn._checkArray[index];
                    if (element['name'] === name) {
                        pro = element[property];
                        break;
                    }
                }
                if (pro !== null) {
                    return pro;
                }
                else {
                    console.log(name + '找不到属性:' + property, pro);
                    return null;
                }
            }
            CheckIn.getProperty = getProperty;
            function setProperty(className, name, property, value) {
                for (let index = 0; index < CheckIn._checkArray.length; index++) {
                    const element = CheckIn._checkArray[index];
                    if (element['name'] === name) {
                        element[property] = value;
                        break;
                    }
                }
                let data = {};
                data[className] = CheckIn._checkArray;
                Laya.LocalStorage.setJSON(className, JSON.stringify(data));
                if (CheckIn._checkList) {
                    CheckIn._checkList.refresh();
                }
            }
            CheckIn.setProperty = setProperty;
            function openCheckIn() {
                if (!CheckIn._todayCheckIn.bool) {
                    console.log('没有签到过，弹出签到页面！');
                    Admin._openScene(Admin._SceneName.UICheckIn);
                }
                else {
                    if (SkinQualified._adsNum.value < 7) {
                        Admin._openScene(Admin._SceneName.UISkinQualified);
                    }
                    console.log('签到过了，今日不可以再签到');
                }
            }
            CheckIn.openCheckIn = openCheckIn;
            function todayCheckIn_7Days() {
                CheckIn._lastCheckDate.date = DateAdmin._date.date;
                CheckIn._checkInNum.number++;
                setProperty(CheckClass.chek_7Days, 'day' + CheckIn._checkInNum.number, CheckProPerty.checkInState, true);
                let rewardNum = getProperty('day' + CheckIn._checkInNum.number, CheckProPerty.rewardNum);
                return rewardNum;
            }
            CheckIn.todayCheckIn_7Days = todayCheckIn_7Days;
            function init() {
                if (CheckIn._checkInNum.number === 7 && !CheckIn._todayCheckIn.bool) {
                    CheckIn._checkInNum.number = 0;
                    Laya.LocalStorage.removeItem(CheckClass.chek_7Days);
                }
            }
            CheckIn.init = init;
            let CheckClass;
            (function (CheckClass) {
                CheckClass["chek_7Days"] = "Chek_7Days";
                CheckClass["chek_15Days"] = "Chek_15Days";
                CheckClass["chek_30Days"] = "Chek_30Days";
            })(CheckClass = CheckIn.CheckClass || (CheckIn.CheckClass = {}));
            let CheckProPerty;
            (function (CheckProPerty) {
                CheckProPerty["name"] = "name";
                CheckProPerty["rewardType"] = "rewardType";
                CheckProPerty["rewardNum"] = "rewardNum";
                CheckProPerty["checkInState"] = "checkInState";
                CheckProPerty["arrange"] = "arrange";
            })(CheckProPerty = CheckIn.CheckProPerty || (CheckIn.CheckProPerty = {}));
            let EventType;
            (function (EventType) {
                EventType["removeCheckBtn"] = "removeCheckBtn";
            })(EventType = CheckIn.EventType || (CheckIn.EventType = {}));
            class CheckInScene extends Admin._Scene {
                moduleOnAwake() {
                    CheckIn._checkList = this.self['CheckList'];
                    CheckIn._checkArray = Tools.jsonCompare('GameData/CheckIn/CheckIn.json', CheckClass.chek_7Days, CheckProPerty.name);
                }
                moduleOnEnable() {
                    this.checkList_Create();
                }
                moduleEventReg() {
                }
                checkList_Create() {
                    CheckIn._checkList.selectEnable = true;
                    CheckIn._checkList.selectHandler = new Laya.Handler(this, this.checkList_Scelet);
                    CheckIn._checkList.renderHandler = new Laya.Handler(this, this.checkList_Update);
                    this.checkList_refresh();
                }
                checkList_Scelet(index) { }
                checkList_Update(cell, index) { }
                checkList_refresh() {
                    if (CheckIn._checkList) {
                        CheckIn._checkList.array = CheckIn._checkArray;
                        CheckIn._checkList.refresh();
                    }
                }
            }
            CheckIn.CheckInScene = CheckInScene;
        })(CheckIn = lwg.CheckIn || (lwg.CheckIn = {}));
        let SkinQualified;
        (function (SkinQualified) {
            SkinQualified._adsNum = {
                get value() {
                    return Laya.LocalStorage.getItem('SkinQualified_adsNum') ? Number(Laya.LocalStorage.getItem('SkinQualified_adsNum')) : 0;
                },
                set value(value) {
                    Laya.LocalStorage.setItem('SkinQualified_adsNum', value.toString());
                }
            };
            function openUISkinQualified(fromScene) {
                if (SkinQualified._adsNum.value >= SkinQualified._needAdsNum) {
                    return;
                }
                else {
                    Admin._openScene(Admin._SceneName.UISkinQualified);
                    SkinQualified._fromScene = fromScene;
                }
            }
            SkinQualified.openUISkinQualified = openUISkinQualified;
            let EventType;
            (function (EventType) {
                EventType["acquisition"] = "acquisition";
            })(EventType = SkinQualified.EventType || (SkinQualified.EventType = {}));
            class SkinQualifiedScene extends Admin._Scene {
                moduleOnEnable() {
                    SkinQualified._needAdsNum = 3;
                }
            }
            SkinQualified.SkinQualifiedScene = SkinQualifiedScene;
        })(SkinQualified = lwg.SkinQualified || (lwg.SkinQualified = {}));
        let Skin;
        (function (Skin) {
            Skin._skinClassArr = [];
            Skin._headSkinArr = [];
            Skin._currentHead = {
                get name() {
                    return Laya.LocalStorage.getItem('Skin_currentHead') ? Laya.LocalStorage.getItem('Skin_currentHead') : null;
                },
                set name(name) {
                    Laya.LocalStorage.setItem('Skin_currentHead', name);
                }
            };
            Skin._eyeSkinArr = [];
            Skin._currentEye = {
                get name() {
                    return Laya.LocalStorage.getItem('Skin_currentEye') ? Laya.LocalStorage.getItem('Skin_currentEye') : null;
                },
                set name(name) {
                    Laya.LocalStorage.setItem('Skin_currentEye', name);
                }
            };
            let SkinClass;
            (function (SkinClass) {
                SkinClass["head"] = "head";
                SkinClass["eye"] = "eye";
                SkinClass["body"] = "body";
                SkinClass["upperBody"] = "upperBody";
                SkinClass["lowerBody"] = "lowerBody";
            })(SkinClass = Skin.SkinClass || (Skin.SkinClass = {}));
            let SkinProperty;
            (function (SkinProperty) {
                SkinProperty["name"] = "name";
                SkinProperty["getway"] = "getway";
                SkinProperty["condition"] = "condition";
                SkinProperty["resCondition"] = "resCondition";
                SkinProperty["arrange"] = "arrange";
                SkinProperty["getOder"] = "getOder";
                SkinProperty["classify"] = "classify";
                SkinProperty["have"] = "have";
            })(SkinProperty = Skin.SkinProperty || (Skin.SkinProperty = {}));
            let EventType;
            (function (EventType) {
                EventType["purchase"] = "purchase";
                EventType["select"] = "select";
            })(EventType = Skin.EventType || (Skin.EventType = {}));
            class SkinScene extends Admin._Scene {
                moduleOnAwake() {
                    Skin._SkinTap = this.self['SkinTap'];
                    Skin._SkinList = this.self['SkinList'];
                    Skin._skinClassArr = [Skin._eyeSkinArr, Skin._headSkinArr];
                }
                moduleOnEnable() {
                    this.skinList_Create();
                    this.skinTap_Create();
                }
                skinTap_Create() {
                    Skin._SkinTap.selectHandler = new Laya.Handler(this, this.skinTap_Select);
                }
                skinTap_Select(index) { }
                skinList_Create() {
                    Skin._SkinList.selectEnable = true;
                    Skin._SkinList.selectHandler = new Laya.Handler(this, this.skinList_Scelet);
                    Skin._SkinList.renderHandler = new Laya.Handler(this, this.skinList_Update);
                    this.skinList_refresh();
                }
                skinList_Scelet(index) { }
                skinList_Update(cell, index) { }
                skinList_refresh() {
                    if (Skin._SkinList && Skin._skinClassArr.length > 1) {
                        Skin._SkinList.array = Skin._skinClassArr[0];
                        Skin._SkinList.refresh();
                    }
                }
            }
            Skin.SkinScene = SkinScene;
        })(Skin = lwg.Skin || (lwg.Skin = {}));
        let EasterEgg;
        (function (EasterEgg) {
            EasterEgg._easterEgg_1Arr = [];
            EasterEgg._easterEgg_1 = {
                get value() {
                    if (!Laya.LocalStorage.getItem('_easterEgg_01')) {
                        return false;
                    }
                    else {
                        return true;
                    }
                },
                set value(val) {
                    Laya.LocalStorage.setItem('_easterEgg_01', val.toString());
                }
            };
            function initEasterEgg() {
                EasterEgg._easterEgg_1Arr = Tools.jsonCompare("GameData/EasterEgg/EasterEgg.json", Classify.EasterEgg_01, Property.name);
                Laya.loader.getRes("GameData/EasterEgg/EasterEgg.json")['RECORDS'];
            }
            EasterEgg.initEasterEgg = initEasterEgg;
            function getProperty(classify, name, property) {
                let pro = null;
                let arr = getClassArr(classify);
                for (let index = 0; index < arr.length; index++) {
                    const element = arr[index];
                    if (element['name'] === name) {
                        pro = element[property];
                        break;
                    }
                }
                if (pro !== null) {
                    return pro;
                }
                else {
                    console.log(name + '找不到属性:' + property, pro);
                    return null;
                }
            }
            EasterEgg.getProperty = getProperty;
            function setProperty(classify, name, property, value) {
                let arr = getClassArr(classify);
                for (let index = 0; index < arr.length; index++) {
                    const element = arr[index];
                    if (element['name'] === name) {
                        element[property] = value;
                        break;
                    }
                }
                let data = {};
                data[classify] = arr;
                Laya.LocalStorage.setJSON(classify, JSON.stringify(data));
            }
            EasterEgg.setProperty = setProperty;
            function getClassArr(classify) {
                let arr = [];
                switch (classify) {
                    case Classify.EasterEgg_01:
                        arr = EasterEgg._easterEgg_1Arr;
                        break;
                    default:
                        break;
                }
                return arr;
            }
            EasterEgg.getClassArr = getClassArr;
            function doDetection(classify, name, number) {
                if (!number) {
                    number = 0;
                }
                let resCondition = getProperty(classify, name, Property.resCondition);
                let condition = getProperty(classify, name, Property.condition);
                if (!getProperty(classify, name, Property.complete)) {
                    if (condition <= resCondition + number) {
                        setProperty(classify, name, Property.resCondition, condition);
                        setProperty(classify, name, Property.complete, true);
                        console.log(getProperty(classify, name, Property.complete));
                        return true;
                    }
                    else {
                        setProperty(classify, name, Property.resCondition, resCondition + number);
                        return false;
                    }
                }
                else {
                    return true;
                }
            }
            EasterEgg.doDetection = doDetection;
            function detectAllTasks(classify) {
                let num = 1;
                let arr = getClassArr(classify);
                for (const key in arr) {
                    if (arr.hasOwnProperty(key)) {
                        const element = arr[key];
                        let resCondition = getProperty(classify, element.name, Property.resCondition);
                        let condition = getProperty(classify, element.name, Property.condition);
                        if (condition > resCondition) {
                            num = 0;
                        }
                    }
                }
                if (num == 1) {
                    console.log(classify, '完成了！');
                }
                else {
                    console.log(classify, '没有完成！');
                }
                return num;
            }
            EasterEgg.detectAllTasks = detectAllTasks;
            let rewardType;
            (function (rewardType) {
                rewardType["gold"] = "gold";
                rewardType["diamond"] = "diamond";
                rewardType["assembly"] = "assembly";
            })(rewardType = EasterEgg.rewardType || (EasterEgg.rewardType = {}));
            let Property;
            (function (Property) {
                Property["name"] = "name";
                Property["explain"] = "explain";
                Property["condition"] = "condition";
                Property["resCondition"] = "resCondition";
                Property["complete"] = "complete";
            })(Property = EasterEgg.Property || (EasterEgg.Property = {}));
            let Classify;
            (function (Classify) {
                Classify["EasterEgg_01"] = "EasterEgg_01";
            })(Classify = EasterEgg.Classify || (EasterEgg.Classify = {}));
            let Name;
            (function (Name) {
                Name["assembly_1"] = "assembly_1";
                Name["assembly_2"] = "assembly_2";
                Name["assembly_3"] = "assembly_3";
                Name["assembly_4"] = "assembly_4";
                Name["assembly_5"] = "assembly_5";
            })(Name = EasterEgg.Name || (EasterEgg.Name = {}));
            let EventType;
            (function (EventType) {
                EventType["trigger"] = "trigger";
                EventType["easterEggAds"] = "easterEggAds";
            })(EventType = EasterEgg.EventType || (EasterEgg.EventType = {}));
            class EasterEggScene extends Admin._Scene {
                moduleOnAwake() {
                }
                moduleOnEnable() {
                }
                moduleEventReg() {
                }
            }
            EasterEgg.EasterEggScene = EasterEggScene;
        })(EasterEgg = lwg.EasterEgg || (lwg.EasterEgg = {}));
        let Victory;
        (function (Victory) {
            class VictoryScene extends Admin._Scene {
                moduleOnAwake() {
                }
                ;
                moduleEventReg() {
                }
                ;
                moduleOnEnable() {
                }
                ;
            }
            Victory.VictoryScene = VictoryScene;
        })(Victory = lwg.Victory || (lwg.Victory = {}));
        let Defeated;
        (function (Defeated) {
            class DefeatedScene extends Admin._Scene {
                moduleOnAwake() {
                }
                ;
                moduleEventReg() {
                }
                ;
                moduleOnEnable() {
                }
                ;
            }
            Defeated.DefeatedScene = DefeatedScene;
        })(Defeated = lwg.Defeated || (lwg.Defeated = {}));
        let DrawCard;
        (function (DrawCard) {
            DrawCard._freeAds = {
                get num() {
                    return Laya.LocalStorage.getItem('DrawCard_freeAdsNum') ? Number(Laya.LocalStorage.getItem('DrawCard_freeAdsNum')) : 0;
                },
                set num(val) {
                    Laya.LocalStorage.setItem('DrawCard_freeAdsNum', val.toString());
                }
            };
            DrawCard._residueDraw = {
                get num() {
                    return Laya.LocalStorage.getItem('DrawCard_residueDraw') ? Number(Laya.LocalStorage.getItem('DrawCard_residueDraw')) : 2;
                },
                set num(val) {
                    Laya.LocalStorage.setItem('DrawCard_residueDraw', val.toString());
                }
            };
            DrawCard._drawCount = {
                get num() {
                    return Laya.LocalStorage.getItem('DrawCard_drawCount') ? Number(Laya.LocalStorage.getItem('DrawCard_drawCount')) : 0;
                },
                set num(val) {
                    Laya.LocalStorage.setItem('DrawCard_drawCount', val.toString());
                }
            };
            class DrawCardScene extends Admin._Scene {
                moduleOnAwake() {
                }
                ;
                moduleEventReg() {
                }
                ;
                moduleOnEnable() {
                }
                ;
            }
            DrawCard.DrawCardScene = DrawCardScene;
        })(DrawCard = lwg.DrawCard || (lwg.DrawCard = {}));
        let Share;
        (function (Share) {
            Share._fromWhich = Admin._SceneName.UIVictory;
            class ShareScene extends Admin._Scene {
                moduleOnAwake() {
                }
                ;
                moduleEventReg() {
                }
                ;
                moduleOnEnable() {
                }
                ;
            }
            Share.ShareScene = ShareScene;
        })(Share = lwg.Share || (lwg.Share = {}));
        let PropTry;
        (function (PropTry) {
            class PropTryScene extends Admin._Scene {
                moduleOnAwake() {
                }
                ;
                moduleEventReg() {
                }
                ;
                moduleOnEnable() {
                }
                ;
            }
            PropTry.PropTryScene = PropTryScene;
        })(PropTry = lwg.PropTry || (lwg.PropTry = {}));
        let Backpack;
        (function (Backpack) {
            Backpack._prop1 = {
                get num() {
                    return Laya.LocalStorage.getItem('Backpack_prop1') ? Number(Laya.LocalStorage.getItem('Backpack_prop1')) : 1;
                },
                set num(val) {
                    Laya.LocalStorage.setItem('Backpack_prop1', val.toString());
                }
            };
            Backpack._prop2 = {
                get num() {
                    return Laya.LocalStorage.getItem('Backpack_prop2') ? Number(Laya.LocalStorage.getItem('Backpack_prop2')) : 1;
                },
                set num(val) {
                    Laya.LocalStorage.setItem('Backpack_prop2', val.toString());
                }
            };
            Backpack._trophy = {
                get num() {
                    return Laya.LocalStorage.getItem('Backpack_trophy') ? Number(Laya.LocalStorage.getItem('Backpack_trophy')) : 0;
                },
                set num(val) {
                    Laya.LocalStorage.setItem('Backpack_trophy', val.toString());
                }
            };
            Backpack._haveCardArray = {
                get arr() {
                    return Laya.LocalStorage.getJSON('Backpack_haveCardArray') ? JSON.parse(Laya.LocalStorage.getJSON('Backpack_haveCardArray')) : [];
                },
                set arr(array) {
                    Laya.LocalStorage.setJSON('Backpack_haveCardArray', JSON.stringify(array));
                },
                add(arr1) {
                    let arr0 = Backpack._haveCardArray.arr;
                    for (let index = 0; index < arr1.length; index++) {
                        arr0.push(arr1[index]);
                    }
                    let arr00 = Tools.arrayUnique_01(arr0);
                    Laya.LocalStorage.setJSON('Backpack_haveCardArray', JSON.stringify(arr00));
                    return arr00;
                },
                sub(arr1) {
                    let arr0 = Backpack._haveCardArray.arr;
                    for (let i = 0; i < arr0.length; i++) {
                        for (let j = 0; j < arr1.length; j++) {
                            if (arr0[i] == arr1[j]) {
                                arr0.splice(i, 1);
                                i--;
                            }
                        }
                    }
                    Laya.LocalStorage.setJSON('Backpack_haveCardArray', JSON.stringify(arr0));
                    return arr0;
                }
            };
            Backpack._backpackArray = [];
            class BackpackScene extends Admin._Scene {
                moduleOnAwake() {
                }
                ;
                moduleEventReg() {
                }
                ;
                moduleOnEnable() {
                }
                ;
            }
            Backpack.BackpackScene = BackpackScene;
        })(Backpack = lwg.Backpack || (lwg.Backpack = {}));
        let Loding;
        (function (Loding) {
            Loding.list_3DScene = [];
            Loding.list_3DPrefab = [];
            Loding.list_3DMesh = [];
            Loding.lolist_3DBaseMaterial = [];
            Loding.list_3DTexture2D = [];
            Loding.list_2DPic = [];
            Loding.list_2DScene = [];
            Loding.list_2DPrefab = [];
            Loding.list_JsonData = [];
            Loding.sumProgress = 0;
            Loding.currentProgress = {
                p: 0,
                get value() {
                    return this.p;
                },
                set value(v) {
                    this.p = v;
                    if (this.p >= Loding.sumProgress) {
                        console.log('当前进度条进度为:', Loding.currentProgress.value / Loding.sumProgress);
                        console.log('进度条停止！');
                        console.log('所有资源加载完成！此时所有资源可通过例如 Laya.loader.getRes("Data/levelsData.json")获取');
                        EventAdmin.notify(Loding.LodingType.complete);
                    }
                    else {
                        let number = 0;
                        for (let index = 0; index <= Loding.loadOrderIndex; index++) {
                            number += Loding.loadOrder[index].length;
                        }
                        if (this.p === number) {
                            Loding.loadOrderIndex++;
                        }
                        EventAdmin.notify(Loding.LodingType.loding);
                    }
                },
            };
            let LodingType;
            (function (LodingType) {
                LodingType["complete"] = "complete";
                LodingType["loding"] = "loding";
                LodingType["progress"] = "progress";
            })(LodingType = Loding.LodingType || (Loding.LodingType = {}));
            class LodingScene extends Admin._Scene {
                moduleOnAwake() {
                    Admin._sceneControl[Admin._SceneName.UILoding] = this.self;
                    DateAdmin._loginNumber.value++;
                    console.log('玩家登陆的天数为：', DateAdmin._loginDate.value.length, '天');
                }
                moduleEventReg() {
                    EventAdmin.reg(LodingType.loding, this, () => { this.lodingRule(); });
                    EventAdmin.reg(LodingType.complete, this, () => {
                        let time = this.lodingComplete();
                        PalyAudio.playMusic();
                        Laya.timer.once(time, this, () => { Admin._openScene(Admin._SceneName.UIInit); });
                    });
                    EventAdmin.reg(LodingType.progress, this, (skip) => {
                        Loding.currentProgress.value++;
                        if (Loding.currentProgress.value < Loding.sumProgress) {
                            console.log('当前进度条进度为:', Loding.currentProgress.value / Loding.sumProgress);
                            this.lodingPhaseComplete();
                        }
                    });
                }
                moduleOnEnable() {
                    Loding.loadOrder = [Loding.list_2DPic, Loding.list_2DScene, Loding.list_2DPrefab, Loding.list_3DScene, Loding.list_3DPrefab, Loding.list_JsonData];
                    for (let index = 0; index < Loding.loadOrder.length; index++) {
                        Loding.sumProgress += Loding.loadOrder[index].length;
                        if (Loding.loadOrder[index].length <= 0) {
                            Loding.loadOrder.splice(index, 1);
                            index--;
                        }
                    }
                    Loding.loadOrderIndex = 0;
                    let time = this.lwgOpenAni();
                    if (time == null) {
                        time = 0;
                    }
                    Laya.timer.once(time, this, () => {
                        EventAdmin.notify(Loding.LodingType.loding);
                    });
                }
                lodingRule() {
                    if (Loding.loadOrder.length <= 0) {
                        console.log('没有加载项');
                        return;
                    }
                    let alreadyPro = 0;
                    for (let i = 0; i < Loding.loadOrderIndex; i++) {
                        alreadyPro += Loding.loadOrder[i].length;
                    }
                    let index = Loding.currentProgress.value - alreadyPro;
                    switch (Loding.loadOrder[Loding.loadOrderIndex]) {
                        case Loding.list_2DPic:
                            Laya.loader.load(Loding.list_2DPic[index], Laya.Handler.create(this, (any) => {
                                if (any == null) {
                                    console.log('XXXXXXXXXXX2D资源' + Loding.list_2DPic[index] + '加载失败！不会停止加载进程！', '数组下标为：', index, 'XXXXXXXXXXX');
                                }
                                else {
                                    console.log('2D图片' + Loding.list_2DPic[index] + '加载完成！', '数组下标为：', index);
                                }
                                EventAdmin.notify(LodingType.progress);
                            }));
                            break;
                        case Loding.list_2DScene:
                            Laya.loader.load(Loding.list_2DScene[index], Laya.Handler.create(this, (any) => {
                                if (any == null) {
                                    console.log('XXXXXXXXXXX数据表' + Loding.list_2DScene[index] + '加载失败！不会停止加载进程！', '数组下标为：', index, 'XXXXXXXXXXX');
                                }
                                else {
                                    console.log('2D场景' + Loding.list_2DScene[index] + '加载完成！', '数组下标为：', index);
                                }
                                EventAdmin.notify(LodingType.progress);
                            }), null, Laya.Loader.JSON);
                            break;
                        case Loding.list_2DPrefab:
                            Laya.loader.load(Loding.list_2DPrefab[index], Laya.Handler.create(this, (any) => {
                                if (any == null) {
                                    console.log('XXXXXXXXXXX数据表' + Loding.list_2DPrefab[index] + '加载失败！不会停止加载进程！', '数组下标为：', index, 'XXXXXXXXXXX');
                                }
                                else {
                                    console.log('2D预制体' + Loding.list_2DPrefab[index] + '加载完成！', '数组下标为：', index);
                                }
                                EventAdmin.notify(LodingType.progress);
                            }), null, Laya.Loader.JSON);
                            break;
                        case Loding.list_3DScene:
                            Laya.Scene3D.load(Loding.list_3DScene[index], Laya.Handler.create(this, (any) => {
                                if (any == null) {
                                    console.log('XXXXXXXXXXX3D场景' + Loding.list_3DScene[index] + '加载失败！不会停止加载进程！', '数组下标为：', index, 'XXXXXXXXXXX');
                                }
                                else {
                                    console.log('3D场景' + Loding.list_3DScene[index] + '加载完成！', '数组下标为：', index);
                                }
                                EventAdmin.notify(LodingType.progress);
                            }));
                            break;
                        case Loding.list_3DPrefab:
                            Laya.Sprite3D.load(Loding.list_3DPrefab[index], Laya.Handler.create(this, (any) => {
                                if (any == null) {
                                    console.log('XXXXXXXXXXX3D预设体' + Loding.list_3DPrefab[index] + '加载失败！不会停止加载进程！', '数组下标为：', index, 'XXXXXXXXXXX');
                                }
                                else {
                                    console.log('3D预制体' + Loding.list_3DPrefab[index] + '加载完成！', '数组下标为：', index);
                                }
                                EventAdmin.notify(LodingType.progress);
                            }));
                            break;
                        case Loding.list_JsonData:
                            Laya.loader.load(Loding.list_JsonData[index], Laya.Handler.create(this, (any) => {
                                if (any == null) {
                                    console.log('XXXXXXXXXXX数据表' + Loding.list_JsonData[index] + '加载失败！不会停止加载进程！', '数组下标为：', index, 'XXXXXXXXXXX');
                                }
                                else {
                                    console.log('数据表' + Loding.list_JsonData[index] + '加载完成！', '数组下标为：', index);
                                }
                                EventAdmin.notify(LodingType.progress);
                            }), null, Laya.Loader.JSON);
                            break;
                        default:
                            break;
                    }
                }
                lodingPhaseComplete() { }
                lodingComplete() { return 0; }
                ;
            }
            Loding.LodingScene = LodingScene;
        })(Loding = lwg.Loding || (lwg.Loding = {}));
        let Start;
        (function (Start) {
            class StartScene extends Admin._Scene {
                moduleOnAwake() {
                }
                moduleOnEnable() {
                }
                moduleEventReg() {
                }
            }
            Start.StartScene = StartScene;
        })(Start = lwg.Start || (lwg.Start = {}));
        let Tomato;
        (function (Tomato) {
            let scenePointType;
            (function (scenePointType) {
                scenePointType["open"] = "open";
                scenePointType["close"] = "close";
            })(scenePointType = Tomato.scenePointType || (Tomato.scenePointType = {}));
        })(Tomato = lwg.Tomato || (lwg.Tomato = {}));
    })(lwg || (lwg = {}));
    var lwg$1 = lwg;
    let Admin = lwg.Admin;
    let EventAdmin = lwg.EventAdmin;
    let DateAdmin = lwg.DateAdmin;
    let TimerAdmin = lwg.TimerAdmin;
    let Pause = lwg.Pause;
    let Execution = lwg.Execution;
    let Gold = lwg.Gold;
    let Setting = lwg.Setting;
    let PalyAudio = lwg.PalyAudio;
    let Click = lwg.Click;
    let Color = lwg.Color;
    let Effects = lwg.Effects;
    let Dialog = lwg.Dialog;
    let Animation2D = lwg.Animation2D;
    let Animation3D = lwg.Animation3D;
    let Tools = lwg.Tools;
    let Elect = lwg.Elect;
    let Loding = lwg.Loding;
    let LodeScene = lwg.Loding.LodingScene;
    let Shop = lwg.Shop;
    let ShopScene = lwg.Shop.ShopScene;
    let VictoryBox = lwg.VictoryBox;
    let VictoryBoxScene = lwg.VictoryBox.VictoryBoxScene;
    let CheckIn = lwg.CheckIn;
    let CheckInScene = lwg.CheckIn.CheckInScene;
    let SkinQualified = lwg.SkinQualified;
    let SkinXDScene = lwg.SkinQualified.SkinQualifiedScene;
    let Skin = lwg.Skin;
    let SkinScene = lwg.Skin.SkinScene;
    let EasterEgg = lwg.EasterEgg;
    let Start = lwg.Start;
    let StartScene = lwg.Start.StartScene;
    let Victory = lwg.Victory;
    let VictoryScene = lwg.Victory.VictoryScene;
    let Defeated = lwg.Defeated;
    let DefeatedScene = lwg.Defeated.DefeatedScene;
    let DrawCard = lwg.DrawCard;
    let DrawCardScene = lwg.DrawCard.DrawCardScene;
    let Share = lwg.Share;
    let ShareScene = lwg.Share.ShareScene;
    let PropTry = lwg.PropTry;
    let PropTryScene = lwg.PropTry.PropTryScene;
    let Backpack = lwg.Backpack;
    let BackpackScene = lwg.Backpack.BackpackScene;
    let Tomato = lwg.Tomato;

    var Lwg_Game;
    (function (Lwg_Game) {
        Lwg_Game.data = {
            da: 'data',
            get array() {
                return [];
            },
            set array(arr) {
            },
            getFunc1: () => {
                return '测试1';
            },
            getFunc2: (any) => {
                return;
            },
            setFunc1: () => {
            },
            setFunc2: (any) => {
                console.log(any);
            },
            checkFunc1: (bool) => {
                return bool;
            },
            checkFunc2: (bool) => {
                return bool;
            },
            getTemporaryVariable: () => {
                if (!Lwg_Game.data['name']) {
                    Lwg_Game.data['name'] = '王大哥';
                }
                else {
                    return Lwg_Game.data['name'];
                }
            }
        };
        Lwg_Game.variable = {
            get value() {
                return Laya.LocalStorage.getItem('Example_variable') ? Number(Laya.LocalStorage.getItem('Example_variable')) : null;
            },
            set value(date) {
                Laya.LocalStorage.setItem('Example_variable', date.toString());
            }
        };
        Lwg_Game._arrayData = {
            get arr() {
                return Laya.LocalStorage.getJSON('Example__array') ? JSON.parse(Laya.LocalStorage.getJSON('Example__array')) : [];
            },
            set arr(array) {
                Laya.LocalStorage.setJSON('Example__array', JSON.stringify(array));
            },
        };
        let EventType;
        (function (EventType) {
            EventType["event1"] = "Example_Event1";
            EventType["event2"] = "Example_Event2";
        })(EventType = Lwg_Game.EventType || (Lwg_Game.EventType = {}));
        let AnyVariableEnum;
        (function (AnyVariableEnum) {
            AnyVariableEnum["thisVariable1"] = "thisVariable1";
            AnyVariableEnum["thisVariable2"] = "thisVariable2";
        })(AnyVariableEnum = Lwg_Game.AnyVariableEnum || (Lwg_Game.AnyVariableEnum = {}));
        class GameGeneral extends Admin._Scene {
            moduleOnAwake() {
            }
            moduleOnEnable() {
            }
            moduleEventReg() {
            }
        }
        Lwg_Game.GameGeneral = GameGeneral;
        class Singleton {
        }
        Lwg_Game.Singleton = Singleton;
    })(Lwg_Game || (Lwg_Game = {}));
    class GameScene extends Lwg_Game.GameGeneral {
        lwgOnAwake() {
            console.log('游戏界面！');
        }
        lwgOnEnable() {
            TimerAdmin._frameNumLoop(30, 20, this, () => {
                Effects.particle_FallingVertical(this.ImgVar('Parent1'));
            });
        }
        lwgBtnClick() {
            this.btnVar('BtnBack');
            Click._on(Click._Type.largen, this.btnVar('BtnBack'), this, null, null, () => {
                Admin._openScene(Admin._SceneName.UIStart, this.calssName);
            });
        }
    }
    class GameSceneItem extends Admin._Object {
    }

    var Lwg_Init;
    (function (Lwg_Init) {
        class InitScene extends Admin._Scene {
            moduleOnAwake() {
                this.lwg();
                this.lwg3D();
            }
            lwg() {
                Admin._commonVanishAni = true;
                Admin._platform = Admin._platformTpye.Bytedance;
                Admin._evaluating = false;
            }
            lwg3D() {
            }
        }
        Lwg_Init.InitScene = InitScene;
    })(Lwg_Init || (Lwg_Init = {}));
    class UIInit extends Lwg_Init.InitScene {
        lwgOnEnable() {
            console.log('完成初始化');
            Admin._openScene(Admin._SceneName.UIStart, this.calssName);
        }
        lwgOnDisable() {
            Admin._closeScene(Admin._SceneName.UILoding);
        }
    }

    var Lwg_Start;
    (function (Lwg_Start) {
        Lwg_Start._data = {
            da: '_data',
            get array() {
                return [];
            },
            set array(arr) {
            },
            getFunc1: () => {
                return '测试1';
            },
            getFunc2: (any) => {
                return;
            },
            setFunc1: () => {
            },
            setFunc2: (any) => {
                console.log(any);
            },
            checkFunc1: (bool) => {
                return bool;
            },
            checkFunc2: (bool) => {
                return bool;
            },
            getTemporaryVariable: () => {
                if (!Lwg_Start._data['name']) {
                    Lwg_Start._data['name'] = '王大哥';
                }
                else {
                    return Lwg_Start._data['name'];
                }
            }
        };
        Lwg_Start._variable = {
            get value() {
                return Laya.LocalStorage.getItem('Example_variable') ? Number(Laya.LocalStorage.getItem('Example_variable')) : null;
            },
            set value(date) {
                Laya.LocalStorage.setItem('Example_variable', date.toString());
            }
        };
        Lwg_Start._arrayData = {
            get arr() {
                return Laya.LocalStorage.getJSON('Example__array') ? JSON.parse(Laya.LocalStorage.getJSON('Example__array')) : [];
            },
            set arr(array) {
                Laya.LocalStorage.setJSON('Example__array', JSON.stringify(array));
            },
        };
        let _EventType;
        (function (_EventType) {
            _EventType["event1"] = "Example_Event1";
            _EventType["event2"] = "Example_Event2";
        })(_EventType = Lwg_Start._EventType || (Lwg_Start._EventType = {}));
        let _AnyVariableEnum;
        (function (_AnyVariableEnum) {
            _AnyVariableEnum["thisVariable1"] = "thisVariable1";
            _AnyVariableEnum["thisVariable2"] = "thisVariable2";
        })(_AnyVariableEnum = Lwg_Start._AnyVariableEnum || (Lwg_Start._AnyVariableEnum = {}));
        class _StartScene extends Admin._Scene {
            moduleOnAwake() {
            }
            moduleOnEnable() {
            }
            moduleEventReg() {
            }
        }
        Lwg_Start._StartScene = _StartScene;
        class Singleton {
        }
        Lwg_Start.Singleton = Singleton;
    })(Lwg_Start || (Lwg_Start = {}));
    class UIStart extends Lwg_Start._StartScene {
        lwgOnAwake() {
        }
        lwgBtnClick() {
            Click._on(Click._Type.largen, this.btnVar('BtnStart'), this, null, null, () => {
                Admin._openScene(Admin._SceneName.GameScene, this.calssName);
            });
        }
    }
    class UIStartItem extends Admin._Object {
    }

    class UILoding extends Loding.LodingScene {
        lwgOnAwake() {
            console.log(window);
            Loding.list_2DPic = [];
            Loding.list_2DScene = [
                "Scene/UIInit.json",
                "Scene/UIStart.json",
            ];
            Loding.list_2DPrefab = [];
            Loding.list_3DScene = [];
            Loding.list_3DPrefab = [];
            Loding.list_JsonData = [];
            Admin._sceneScript = {
                UILoding: UILoding,
                UIInit: UIInit,
                UIStart: UIStart,
                GameScene: GameScene,
            };
        }
        lwgAdaptive() {
        }
        lwgOnEnable() {
        }
        lwgOpenAni() { return 0; }
        lodingPhaseComplete() {
        }
        lodingComplete() {
            return 200;
        }
    }

    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var test;
        (function (test) {
            class TestSceneUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("test/TestScene");
                }
            }
            test.TestSceneUI = TestSceneUI;
            REG("ui.test.TestSceneUI", TestSceneUI);
        })(test = ui.test || (ui.test = {}));
    })(ui || (ui = {}));

    class GameUI extends ui.test.TestSceneUI {
        constructor() {
            super();
            this.newScene = Laya.stage.addChild(new Laya.Scene3D());
            var camera = this.newScene.addChild(new Laya.Camera(0, 0.1, 100));
            camera.transform.translate(new Laya.Vector3(0, 6, 9.5));
            camera.transform.rotate(new Laya.Vector3(-15, 0, 0), true, false);
            var directionLight = new Laya.DirectionLight();
            this.newScene.addChild(directionLight);
            directionLight.color = new Laya.Vector3(0.6, 0.6, 0.6);
            var mat = directionLight.transform.worldMatrix;
            mat.setForward(new Laya.Vector3(-1.0, -1.0, -1.0));
            directionLight.transform.worldMatrix = mat;
            var plane = this.newScene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createPlane(10, 10, 10, 10)));
            var planeMat = new Laya.BlinnPhongMaterial();
            Laya.Texture2D.load("res/grass.png", Laya.Handler.create(this, function (tex) {
                planeMat.albedoTexture = tex;
            }));
            var tilingOffset = planeMat.tilingOffset;
            tilingOffset.setValue(5, 5, 0, 0);
            planeMat.tilingOffset = tilingOffset;
            plane.meshRenderer.material = planeMat;
            var planeStaticCollider = plane.addComponent(Laya.PhysicsCollider);
            var planeShape = new Laya.BoxColliderShape(10, 0, 10);
            planeStaticCollider.colliderShape = planeShape;
            planeStaticCollider.friction = 2;
            planeStaticCollider.restitution = 0.3;
            this.mat1 = new Laya.BlinnPhongMaterial();
            Laya.Texture2D.load("res/wood.jpg", Laya.Handler.create(this, function (tex) {
                this.mat1.albedoTexture = tex;
                Laya.timer.once(100, this, function () {
                    this.addBox();
                });
            }));
        }
        addBox() {
            var box = this.newScene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(0.75, 0.5, 0.5)));
            box.meshRenderer.material = this.mat1;
            var transform = box.transform;
            var pos = transform.position;
            pos.setValue(0, 10, 0);
            transform.position = pos;
            var rigidBody = box.addComponent(Laya.Rigidbody3D);
            var boxShape = new Laya.BoxColliderShape(0.75, 0.5, 0.5);
            rigidBody.colliderShape = boxShape;
            rigidBody.mass = 10;
        }
    }

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("script/Frame/Lwg_Loding.ts", UILoding);
            reg("script/GameUI.ts", GameUI);
        }
    }
    GameConfig.width = 720;
    GameConfig.height = 1280;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "Scene/UILoding.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError = true;
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        }
    }
    new Main();

}());
