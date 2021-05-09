gdjs.Lore_32ScreenCode = {};
gdjs.Lore_32ScreenCode.GDTerminalWindowObjects1= [];
gdjs.Lore_32ScreenCode.GDTerminalWindowObjects2= [];
gdjs.Lore_32ScreenCode.GDTitleTextObjects1= [];
gdjs.Lore_32ScreenCode.GDTitleTextObjects2= [];
gdjs.Lore_32ScreenCode.GDDescriptionText2Objects1= [];
gdjs.Lore_32ScreenCode.GDDescriptionText2Objects2= [];
gdjs.Lore_32ScreenCode.GDDescriptionText3Objects1= [];
gdjs.Lore_32ScreenCode.GDDescriptionText3Objects2= [];
gdjs.Lore_32ScreenCode.GDDescriptionText4Objects1= [];
gdjs.Lore_32ScreenCode.GDDescriptionText4Objects2= [];
gdjs.Lore_32ScreenCode.GDDescriptionTextObjects1= [];
gdjs.Lore_32ScreenCode.GDDescriptionTextObjects2= [];
gdjs.Lore_32ScreenCode.GDStartButtonObjects1= [];
gdjs.Lore_32ScreenCode.GDStartButtonObjects2= [];

gdjs.Lore_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Lore_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Lore_32ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.Lore_32ScreenCode.condition2IsTrue_0 = {val:false};
gdjs.Lore_32ScreenCode.condition3IsTrue_0 = {val:false};


gdjs.Lore_32ScreenCode.mapOfGDgdjs_46Lore_9532ScreenCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.Lore_32ScreenCode.GDStartButtonObjects1});gdjs.Lore_32ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Lore_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Lore_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if (gdjs.Lore_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "UI click.wav", false, 40, 1);
}}

}


};gdjs.Lore_32ScreenCode.mapOfGDgdjs_46Lore_9532ScreenCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.Lore_32ScreenCode.GDStartButtonObjects1});gdjs.Lore_32ScreenCode.mapOfGDgdjs_46Lore_9532ScreenCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.Lore_32ScreenCode.GDStartButtonObjects1});gdjs.Lore_32ScreenCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Lore_32ScreenCode.GDStartButtonObjects1);

gdjs.Lore_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Lore_32ScreenCode.condition1IsTrue_0.val = false;
gdjs.Lore_32ScreenCode.condition2IsTrue_0.val = false;
{
gdjs.Lore_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lore_32ScreenCode.mapOfGDgdjs_46Lore_9532ScreenCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Lore_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Lore_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Lore_32ScreenCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Lore_32ScreenCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.Lore_32ScreenCode.GDStartButtonObjects1[i].getVariableNumber(gdjs.Lore_32ScreenCode.GDStartButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.Lore_32ScreenCode.condition2IsTrue_0.val = true;
        gdjs.Lore_32ScreenCode.GDStartButtonObjects1[k] = gdjs.Lore_32ScreenCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.Lore_32ScreenCode.GDStartButtonObjects1.length = k;}}
}
if (gdjs.Lore_32ScreenCode.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 3);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 4);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Test scene");
}
{ //Subevents
gdjs.Lore_32ScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Lore_32ScreenCode.GDStartButtonObjects1);

gdjs.Lore_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Lore_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lore_32ScreenCode.mapOfGDgdjs_46Lore_9532ScreenCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Lore_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Lore_32ScreenCode.GDStartButtonObjects1 */
{for(var i = 0, len = gdjs.Lore_32ScreenCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.Lore_32ScreenCode.GDStartButtonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Lore_32ScreenCode.GDStartButtonObjects1);

gdjs.Lore_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Lore_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lore_32ScreenCode.mapOfGDgdjs_46Lore_9532ScreenCode_46GDStartButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Lore_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Lore_32ScreenCode.GDStartButtonObjects1 */
{for(var i = 0, len = gdjs.Lore_32ScreenCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.Lore_32ScreenCode.GDStartButtonObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.Lore_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Lore_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Lore_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DescriptionText"), gdjs.Lore_32ScreenCode.GDDescriptionTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("DescriptionText2"), gdjs.Lore_32ScreenCode.GDDescriptionText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("DescriptionText3"), gdjs.Lore_32ScreenCode.GDDescriptionText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("DescriptionText4"), gdjs.Lore_32ScreenCode.GDDescriptionText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Lore_32ScreenCode.GDStartButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TitleText"), gdjs.Lore_32ScreenCode.GDTitleTextObjects1);
{for(var i = 0, len = gdjs.Lore_32ScreenCode.GDTitleTextObjects1.length ;i < len;++i) {
    gdjs.Lore_32ScreenCode.GDTitleTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Lore_32ScreenCode.GDDescriptionText2Objects1.length ;i < len;++i) {
    gdjs.Lore_32ScreenCode.GDDescriptionText2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Lore_32ScreenCode.GDDescriptionText3Objects1.length ;i < len;++i) {
    gdjs.Lore_32ScreenCode.GDDescriptionText3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Lore_32ScreenCode.GDDescriptionText4Objects1.length ;i < len;++i) {
    gdjs.Lore_32ScreenCode.GDDescriptionText4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Lore_32ScreenCode.GDDescriptionTextObjects1.length ;i < len;++i) {
    gdjs.Lore_32ScreenCode.GDDescriptionTextObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StartTimer");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "StartTimer");
}{for(var i = 0, len = gdjs.Lore_32ScreenCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.Lore_32ScreenCode.GDStartButtonObjects1[i].hide();
}
}}

}


{


gdjs.Lore_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Lore_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "StartTimer");
}if (gdjs.Lore_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TitleText"), gdjs.Lore_32ScreenCode.GDTitleTextObjects1);
{for(var i = 0, len = gdjs.Lore_32ScreenCode.GDTitleTextObjects1.length ;i < len;++i) {
    gdjs.Lore_32ScreenCode.GDTitleTextObjects1[i].hide(false);
}
}}

}


{


gdjs.Lore_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Lore_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "StartTimer");
}if (gdjs.Lore_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DescriptionText"), gdjs.Lore_32ScreenCode.GDDescriptionTextObjects1);
{for(var i = 0, len = gdjs.Lore_32ScreenCode.GDDescriptionTextObjects1.length ;i < len;++i) {
    gdjs.Lore_32ScreenCode.GDDescriptionTextObjects1[i].hide(false);
}
}}

}


{


gdjs.Lore_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Lore_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "StartTimer");
}if (gdjs.Lore_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DescriptionText2"), gdjs.Lore_32ScreenCode.GDDescriptionText2Objects1);
{for(var i = 0, len = gdjs.Lore_32ScreenCode.GDDescriptionText2Objects1.length ;i < len;++i) {
    gdjs.Lore_32ScreenCode.GDDescriptionText2Objects1[i].hide(false);
}
}}

}


{


gdjs.Lore_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Lore_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 7, "StartTimer");
}if (gdjs.Lore_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DescriptionText3"), gdjs.Lore_32ScreenCode.GDDescriptionText3Objects1);
{for(var i = 0, len = gdjs.Lore_32ScreenCode.GDDescriptionText3Objects1.length ;i < len;++i) {
    gdjs.Lore_32ScreenCode.GDDescriptionText3Objects1[i].hide(false);
}
}}

}


{


gdjs.Lore_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Lore_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 9, "StartTimer");
}if (gdjs.Lore_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DescriptionText4"), gdjs.Lore_32ScreenCode.GDDescriptionText4Objects1);
{for(var i = 0, len = gdjs.Lore_32ScreenCode.GDDescriptionText4Objects1.length ;i < len;++i) {
    gdjs.Lore_32ScreenCode.GDDescriptionText4Objects1[i].hide(false);
}
}}

}


{


gdjs.Lore_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Lore_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 11, "StartTimer");
}if (gdjs.Lore_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Lore_32ScreenCode.GDStartButtonObjects1);
{for(var i = 0, len = gdjs.Lore_32ScreenCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.Lore_32ScreenCode.GDStartButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Lore_32ScreenCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.Lore_32ScreenCode.GDStartButtonObjects1[i].returnVariable(gdjs.Lore_32ScreenCode.GDStartButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


};

gdjs.Lore_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lore_32ScreenCode.GDTerminalWindowObjects1.length = 0;
gdjs.Lore_32ScreenCode.GDTerminalWindowObjects2.length = 0;
gdjs.Lore_32ScreenCode.GDTitleTextObjects1.length = 0;
gdjs.Lore_32ScreenCode.GDTitleTextObjects2.length = 0;
gdjs.Lore_32ScreenCode.GDDescriptionText2Objects1.length = 0;
gdjs.Lore_32ScreenCode.GDDescriptionText2Objects2.length = 0;
gdjs.Lore_32ScreenCode.GDDescriptionText3Objects1.length = 0;
gdjs.Lore_32ScreenCode.GDDescriptionText3Objects2.length = 0;
gdjs.Lore_32ScreenCode.GDDescriptionText4Objects1.length = 0;
gdjs.Lore_32ScreenCode.GDDescriptionText4Objects2.length = 0;
gdjs.Lore_32ScreenCode.GDDescriptionTextObjects1.length = 0;
gdjs.Lore_32ScreenCode.GDDescriptionTextObjects2.length = 0;
gdjs.Lore_32ScreenCode.GDStartButtonObjects1.length = 0;
gdjs.Lore_32ScreenCode.GDStartButtonObjects2.length = 0;

gdjs.Lore_32ScreenCode.eventsList1(runtimeScene);
return;

}

gdjs['Lore_32ScreenCode'] = gdjs.Lore_32ScreenCode;
