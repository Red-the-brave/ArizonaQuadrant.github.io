gdjs.Death_32ScreenCode = {};
gdjs.Death_32ScreenCode.GDGameOverTextObjects1= [];
gdjs.Death_32ScreenCode.GDGameOverTextObjects2= [];
gdjs.Death_32ScreenCode.GDRestartButtonObjects1= [];
gdjs.Death_32ScreenCode.GDRestartButtonObjects2= [];
gdjs.Death_32ScreenCode.GDRestartTextObjects1= [];
gdjs.Death_32ScreenCode.GDRestartTextObjects2= [];
gdjs.Death_32ScreenCode.GDDescriptionObjects1= [];
gdjs.Death_32ScreenCode.GDDescriptionObjects2= [];

gdjs.Death_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Death_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Death_32ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.Death_32ScreenCode.condition2IsTrue_0 = {val:false};


gdjs.Death_32ScreenCode.mapOfGDgdjs_46Death_9532ScreenCode_46GDRestartButtonObjects1Objects = Hashtable.newFrom({"RestartButton": gdjs.Death_32ScreenCode.GDRestartButtonObjects1});gdjs.Death_32ScreenCode.mapOfGDgdjs_46Death_9532ScreenCode_46GDRestartButtonObjects1Objects = Hashtable.newFrom({"RestartButton": gdjs.Death_32ScreenCode.GDRestartButtonObjects1});gdjs.Death_32ScreenCode.mapOfGDgdjs_46Death_9532ScreenCode_46GDRestartButtonObjects1Objects = Hashtable.newFrom({"RestartButton": gdjs.Death_32ScreenCode.GDRestartButtonObjects1});gdjs.Death_32ScreenCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.Death_32ScreenCode.GDRestartButtonObjects1);

gdjs.Death_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Death_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Death_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Death_32ScreenCode.mapOfGDgdjs_46Death_9532ScreenCode_46GDRestartButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Death_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Death_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Death_32ScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Test scene");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.Death_32ScreenCode.GDRestartButtonObjects1);

gdjs.Death_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Death_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Death_32ScreenCode.mapOfGDgdjs_46Death_9532ScreenCode_46GDRestartButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Death_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Death_32ScreenCode.GDRestartButtonObjects1 */
{for(var i = 0, len = gdjs.Death_32ScreenCode.GDRestartButtonObjects1.length ;i < len;++i) {
    gdjs.Death_32ScreenCode.GDRestartButtonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.Death_32ScreenCode.GDRestartButtonObjects1);

gdjs.Death_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Death_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Death_32ScreenCode.mapOfGDgdjs_46Death_9532ScreenCode_46GDRestartButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Death_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Death_32ScreenCode.GDRestartButtonObjects1 */
{for(var i = 0, len = gdjs.Death_32ScreenCode.GDRestartButtonObjects1.length ;i < len;++i) {
    gdjs.Death_32ScreenCode.GDRestartButtonObjects1[i].setAnimation(0);
}
}}

}


};

gdjs.Death_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Death_32ScreenCode.GDGameOverTextObjects1.length = 0;
gdjs.Death_32ScreenCode.GDGameOverTextObjects2.length = 0;
gdjs.Death_32ScreenCode.GDRestartButtonObjects1.length = 0;
gdjs.Death_32ScreenCode.GDRestartButtonObjects2.length = 0;
gdjs.Death_32ScreenCode.GDRestartTextObjects1.length = 0;
gdjs.Death_32ScreenCode.GDRestartTextObjects2.length = 0;
gdjs.Death_32ScreenCode.GDDescriptionObjects1.length = 0;
gdjs.Death_32ScreenCode.GDDescriptionObjects2.length = 0;

gdjs.Death_32ScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['Death_32ScreenCode'] = gdjs.Death_32ScreenCode;
