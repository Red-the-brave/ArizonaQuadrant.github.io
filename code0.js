gdjs.Entry_32sceneCode = {};
gdjs.Entry_32sceneCode.GDBGObjects1= [];
gdjs.Entry_32sceneCode.GDBGObjects2= [];
gdjs.Entry_32sceneCode.GDTitleTextObjects1= [];
gdjs.Entry_32sceneCode.GDTitleTextObjects2= [];
gdjs.Entry_32sceneCode.GDContinueTextObjects1= [];
gdjs.Entry_32sceneCode.GDContinueTextObjects2= [];

gdjs.Entry_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Entry_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Entry_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.Entry_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Entry_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Entry_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if (gdjs.Entry_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "engine.wav", 3, true, 5, 1);
}}

}


};gdjs.Entry_32sceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.Entry_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Entry_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Entry_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ContinueText"), gdjs.Entry_32sceneCode.GDContinueTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TitleText"), gdjs.Entry_32sceneCode.GDTitleTextObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "startTimer");
}{for(var i = 0, len = gdjs.Entry_32sceneCode.GDContinueTextObjects1.length ;i < len;++i) {
    gdjs.Entry_32sceneCode.GDContinueTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Entry_32sceneCode.GDTitleTextObjects1.length ;i < len;++i) {
    gdjs.Entry_32sceneCode.GDTitleTextObjects1[i].hide();
}
}
{ //Subevents
gdjs.Entry_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Entry_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Entry_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "startTimer");
}if (gdjs.Entry_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ContinueText"), gdjs.Entry_32sceneCode.GDContinueTextObjects1);
{for(var i = 0, len = gdjs.Entry_32sceneCode.GDContinueTextObjects1.length ;i < len;++i) {
    gdjs.Entry_32sceneCode.GDContinueTextObjects1[i].hide(false);
}
}}

}


{


gdjs.Entry_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Entry_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "startTimer");
}if (gdjs.Entry_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TitleText"), gdjs.Entry_32sceneCode.GDTitleTextObjects1);
{for(var i = 0, len = gdjs.Entry_32sceneCode.GDTitleTextObjects1.length ;i < len;++i) {
    gdjs.Entry_32sceneCode.GDTitleTextObjects1[i].hide(false);
}
}}

}


{


gdjs.Entry_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Entry_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.Entry_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Start Screen");
}}

}


};

gdjs.Entry_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Entry_32sceneCode.GDBGObjects1.length = 0;
gdjs.Entry_32sceneCode.GDBGObjects2.length = 0;
gdjs.Entry_32sceneCode.GDTitleTextObjects1.length = 0;
gdjs.Entry_32sceneCode.GDTitleTextObjects2.length = 0;
gdjs.Entry_32sceneCode.GDContinueTextObjects1.length = 0;
gdjs.Entry_32sceneCode.GDContinueTextObjects2.length = 0;

gdjs.Entry_32sceneCode.eventsList1(runtimeScene);
return;

}

gdjs['Entry_32sceneCode'] = gdjs.Entry_32sceneCode;
