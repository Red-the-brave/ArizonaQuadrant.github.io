gdjs.End_32ScreenCode = {};
gdjs.End_32ScreenCode.GDTerminalWindowObjects1= [];
gdjs.End_32ScreenCode.GDTerminalWindowObjects2= [];
gdjs.End_32ScreenCode.GDTitleTextObjects1= [];
gdjs.End_32ScreenCode.GDTitleTextObjects2= [];
gdjs.End_32ScreenCode.GDDescriptionTextObjects1= [];
gdjs.End_32ScreenCode.GDDescriptionTextObjects2= [];
gdjs.End_32ScreenCode.GDDescriptionText2Objects1= [];
gdjs.End_32ScreenCode.GDDescriptionText2Objects2= [];
gdjs.End_32ScreenCode.GDDescriptionText3Objects1= [];
gdjs.End_32ScreenCode.GDDescriptionText3Objects2= [];
gdjs.End_32ScreenCode.GDDescriptionText4Objects1= [];
gdjs.End_32ScreenCode.GDDescriptionText4Objects2= [];
gdjs.End_32ScreenCode.GDDescriptionText5Objects1= [];
gdjs.End_32ScreenCode.GDDescriptionText5Objects2= [];
gdjs.End_32ScreenCode.GDStartButtonObjects1= [];
gdjs.End_32ScreenCode.GDStartButtonObjects2= [];
gdjs.End_32ScreenCode.GDContinueTextObjects1= [];
gdjs.End_32ScreenCode.GDContinueTextObjects2= [];

gdjs.End_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.End_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.End_32ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.End_32ScreenCode.condition2IsTrue_0 = {val:false};
gdjs.End_32ScreenCode.condition3IsTrue_0 = {val:false};


gdjs.End_32ScreenCode.mapOfGDgdjs_46End_9532ScreenCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.End_32ScreenCode.GDStartButtonObjects1});gdjs.End_32ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if (gdjs.End_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "UI click.wav", false, 40, 1);
}}

}


};gdjs.End_32ScreenCode.mapOfGDgdjs_46End_9532ScreenCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.End_32ScreenCode.GDStartButtonObjects1});gdjs.End_32ScreenCode.mapOfGDgdjs_46End_9532ScreenCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.End_32ScreenCode.GDStartButtonObjects1});gdjs.End_32ScreenCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.End_32ScreenCode.GDStartButtonObjects1);

gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.End_32ScreenCode.condition1IsTrue_0.val = false;
gdjs.End_32ScreenCode.condition2IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.End_32ScreenCode.mapOfGDgdjs_46End_9532ScreenCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.End_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.End_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.End_32ScreenCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.End_32ScreenCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.End_32ScreenCode.GDStartButtonObjects1[i].getVariableNumber(gdjs.End_32ScreenCode.GDStartButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.End_32ScreenCode.condition2IsTrue_0.val = true;
        gdjs.End_32ScreenCode.GDStartButtonObjects1[k] = gdjs.End_32ScreenCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.End_32ScreenCode.GDStartButtonObjects1.length = k;}}
}
if (gdjs.End_32ScreenCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Entry scene");
}
{ //Subevents
gdjs.End_32ScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.End_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ContinueText"), gdjs.End_32ScreenCode.GDContinueTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("DescriptionText"), gdjs.End_32ScreenCode.GDDescriptionTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("DescriptionText2"), gdjs.End_32ScreenCode.GDDescriptionText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("DescriptionText3"), gdjs.End_32ScreenCode.GDDescriptionText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("DescriptionText4"), gdjs.End_32ScreenCode.GDDescriptionText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("DescriptionText5"), gdjs.End_32ScreenCode.GDDescriptionText5Objects1);
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.End_32ScreenCode.GDStartButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TitleText"), gdjs.End_32ScreenCode.GDTitleTextObjects1);
{for(var i = 0, len = gdjs.End_32ScreenCode.GDTitleTextObjects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDTitleTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.End_32ScreenCode.GDDescriptionText2Objects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDDescriptionText2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.End_32ScreenCode.GDDescriptionText3Objects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDDescriptionText3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.End_32ScreenCode.GDDescriptionText4Objects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDDescriptionText4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.End_32ScreenCode.GDDescriptionTextObjects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDDescriptionTextObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StartTimer");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "StartTimer");
}{for(var i = 0, len = gdjs.End_32ScreenCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDStartButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.End_32ScreenCode.GDDescriptionText5Objects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDDescriptionText5Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.End_32ScreenCode.GDContinueTextObjects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDContinueTextObjects1[i].hide();
}
}}

}


{


gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.End_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DescriptionText"), gdjs.End_32ScreenCode.GDDescriptionTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("DescriptionText2"), gdjs.End_32ScreenCode.GDDescriptionText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("DescriptionText4"), gdjs.End_32ScreenCode.GDDescriptionText4Objects1);
{for(var i = 0, len = gdjs.End_32ScreenCode.GDDescriptionTextObjects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDDescriptionTextObjects1[i].setString(">_ ENEMIES KILLED: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)));
}
}{for(var i = 0, len = gdjs.End_32ScreenCode.GDDescriptionText2Objects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDDescriptionText2Objects1[i].setString(">_ TOTAL TIME PLAYED: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) + "s");
}
}{for(var i = 0, len = gdjs.End_32ScreenCode.GDDescriptionText4Objects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDDescriptionText4Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "StartTimer");
}if (gdjs.End_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TitleText"), gdjs.End_32ScreenCode.GDTitleTextObjects1);
{for(var i = 0, len = gdjs.End_32ScreenCode.GDTitleTextObjects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDTitleTextObjects1[i].hide(false);
}
}}

}


{


gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "StartTimer");
}if (gdjs.End_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DescriptionText"), gdjs.End_32ScreenCode.GDDescriptionTextObjects1);
{for(var i = 0, len = gdjs.End_32ScreenCode.GDDescriptionTextObjects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDDescriptionTextObjects1[i].hide(false);
}
}}

}


{


gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "StartTimer");
}if (gdjs.End_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DescriptionText2"), gdjs.End_32ScreenCode.GDDescriptionText2Objects1);
{for(var i = 0, len = gdjs.End_32ScreenCode.GDDescriptionText2Objects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDDescriptionText2Objects1[i].hide(false);
}
}}

}


{


gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 7, "StartTimer");
}if (gdjs.End_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DescriptionText3"), gdjs.End_32ScreenCode.GDDescriptionText3Objects1);
{for(var i = 0, len = gdjs.End_32ScreenCode.GDDescriptionText3Objects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDDescriptionText3Objects1[i].hide(false);
}
}}

}


{


gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 9, "StartTimer");
}if (gdjs.End_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DescriptionText4"), gdjs.End_32ScreenCode.GDDescriptionText4Objects1);
{for(var i = 0, len = gdjs.End_32ScreenCode.GDDescriptionText4Objects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDDescriptionText4Objects1[i].hide(false);
}
}}

}


{


gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 11, "StartTimer");
}if (gdjs.End_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ContinueText"), gdjs.End_32ScreenCode.GDContinueTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("DescriptionText4"), gdjs.End_32ScreenCode.GDDescriptionText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.End_32ScreenCode.GDStartButtonObjects1);
{for(var i = 0, len = gdjs.End_32ScreenCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDStartButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.End_32ScreenCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDStartButtonObjects1[i].returnVariable(gdjs.End_32ScreenCode.GDStartButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.End_32ScreenCode.GDDescriptionText4Objects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDDescriptionText4Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.End_32ScreenCode.GDContinueTextObjects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDContinueTextObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.End_32ScreenCode.GDStartButtonObjects1);

gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.End_32ScreenCode.mapOfGDgdjs_46End_9532ScreenCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.End_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.End_32ScreenCode.GDStartButtonObjects1 */
{for(var i = 0, len = gdjs.End_32ScreenCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDStartButtonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.End_32ScreenCode.GDStartButtonObjects1);

gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.End_32ScreenCode.mapOfGDgdjs_46End_9532ScreenCode_46GDStartButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.End_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.End_32ScreenCode.GDStartButtonObjects1 */
{for(var i = 0, len = gdjs.End_32ScreenCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDStartButtonObjects1[i].setAnimation(0);
}
}}

}


{


{
}

}


};

gdjs.End_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.End_32ScreenCode.GDTerminalWindowObjects1.length = 0;
gdjs.End_32ScreenCode.GDTerminalWindowObjects2.length = 0;
gdjs.End_32ScreenCode.GDTitleTextObjects1.length = 0;
gdjs.End_32ScreenCode.GDTitleTextObjects2.length = 0;
gdjs.End_32ScreenCode.GDDescriptionTextObjects1.length = 0;
gdjs.End_32ScreenCode.GDDescriptionTextObjects2.length = 0;
gdjs.End_32ScreenCode.GDDescriptionText2Objects1.length = 0;
gdjs.End_32ScreenCode.GDDescriptionText2Objects2.length = 0;
gdjs.End_32ScreenCode.GDDescriptionText3Objects1.length = 0;
gdjs.End_32ScreenCode.GDDescriptionText3Objects2.length = 0;
gdjs.End_32ScreenCode.GDDescriptionText4Objects1.length = 0;
gdjs.End_32ScreenCode.GDDescriptionText4Objects2.length = 0;
gdjs.End_32ScreenCode.GDDescriptionText5Objects1.length = 0;
gdjs.End_32ScreenCode.GDDescriptionText5Objects2.length = 0;
gdjs.End_32ScreenCode.GDStartButtonObjects1.length = 0;
gdjs.End_32ScreenCode.GDStartButtonObjects2.length = 0;
gdjs.End_32ScreenCode.GDContinueTextObjects1.length = 0;
gdjs.End_32ScreenCode.GDContinueTextObjects2.length = 0;

gdjs.End_32ScreenCode.eventsList1(runtimeScene);
return;

}

gdjs['End_32ScreenCode'] = gdjs.End_32ScreenCode;
