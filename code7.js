gdjs.Outro_32ScreenCode = {};
gdjs.Outro_32ScreenCode.GDTerminalWindowObjects1= [];
gdjs.Outro_32ScreenCode.GDTerminalWindowObjects2= [];
gdjs.Outro_32ScreenCode.GDTitleTextObjects1= [];
gdjs.Outro_32ScreenCode.GDTitleTextObjects2= [];
gdjs.Outro_32ScreenCode.GDDescriptionTextObjects1= [];
gdjs.Outro_32ScreenCode.GDDescriptionTextObjects2= [];
gdjs.Outro_32ScreenCode.GDDescriptionText2Objects1= [];
gdjs.Outro_32ScreenCode.GDDescriptionText2Objects2= [];
gdjs.Outro_32ScreenCode.GDDescriptionText3Objects1= [];
gdjs.Outro_32ScreenCode.GDDescriptionText3Objects2= [];
gdjs.Outro_32ScreenCode.GDDescriptionText4Objects1= [];
gdjs.Outro_32ScreenCode.GDDescriptionText4Objects2= [];
gdjs.Outro_32ScreenCode.GDDescriptionText5Objects1= [];
gdjs.Outro_32ScreenCode.GDDescriptionText5Objects2= [];
gdjs.Outro_32ScreenCode.GDStartButtonObjects1= [];
gdjs.Outro_32ScreenCode.GDStartButtonObjects2= [];
gdjs.Outro_32ScreenCode.GDContinueTextObjects1= [];
gdjs.Outro_32ScreenCode.GDContinueTextObjects2= [];

gdjs.Outro_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Outro_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Outro_32ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.Outro_32ScreenCode.condition2IsTrue_0 = {val:false};
gdjs.Outro_32ScreenCode.condition3IsTrue_0 = {val:false};


gdjs.Outro_32ScreenCode.mapOfGDgdjs_46Outro_9532ScreenCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.Outro_32ScreenCode.GDStartButtonObjects1});gdjs.Outro_32ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if (gdjs.Outro_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "UI click.wav", false, 40, 1);
}}

}


};gdjs.Outro_32ScreenCode.eventsList1 = function(runtimeScene) {

{


gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if (gdjs.Outro_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Hard drive.wav", true, 75, 1);
}}

}


};gdjs.Outro_32ScreenCode.mapOfGDgdjs_46Outro_9532ScreenCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.Outro_32ScreenCode.GDStartButtonObjects1});gdjs.Outro_32ScreenCode.mapOfGDgdjs_46Outro_9532ScreenCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.Outro_32ScreenCode.GDStartButtonObjects1});gdjs.Outro_32ScreenCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Outro_32ScreenCode.GDStartButtonObjects1);

gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Outro_32ScreenCode.condition1IsTrue_0.val = false;
gdjs.Outro_32ScreenCode.condition2IsTrue_0.val = false;
{
gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Outro_32ScreenCode.mapOfGDgdjs_46Outro_9532ScreenCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Outro_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Outro_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Outro_32ScreenCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Outro_32ScreenCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.Outro_32ScreenCode.GDStartButtonObjects1[i].getVariableNumber(gdjs.Outro_32ScreenCode.GDStartButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.Outro_32ScreenCode.condition2IsTrue_0.val = true;
        gdjs.Outro_32ScreenCode.GDStartButtonObjects1[k] = gdjs.Outro_32ScreenCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.Outro_32ScreenCode.GDStartButtonObjects1.length = k;}}
}
if (gdjs.Outro_32ScreenCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "End Screen");
}
{ //Subevents
gdjs.Outro_32ScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Outro_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ContinueText"), gdjs.Outro_32ScreenCode.GDContinueTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("DescriptionText"), gdjs.Outro_32ScreenCode.GDDescriptionTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("DescriptionText2"), gdjs.Outro_32ScreenCode.GDDescriptionText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("DescriptionText3"), gdjs.Outro_32ScreenCode.GDDescriptionText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("DescriptionText4"), gdjs.Outro_32ScreenCode.GDDescriptionText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("DescriptionText5"), gdjs.Outro_32ScreenCode.GDDescriptionText5Objects1);
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Outro_32ScreenCode.GDStartButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TitleText"), gdjs.Outro_32ScreenCode.GDTitleTextObjects1);
{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDTitleTextObjects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDTitleTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDDescriptionText2Objects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDDescriptionText2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDDescriptionText3Objects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDDescriptionText3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDDescriptionText4Objects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDDescriptionText4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDDescriptionTextObjects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDDescriptionTextObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StartTimer");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "StartTimer");
}{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDStartButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDDescriptionText5Objects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDDescriptionText5Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDContinueTextObjects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDContinueTextObjects1[i].hide();
}
}
{ //Subevents
gdjs.Outro_32ScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "StartTimer");
}if (gdjs.Outro_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TitleText"), gdjs.Outro_32ScreenCode.GDTitleTextObjects1);
{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDTitleTextObjects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDTitleTextObjects1[i].hide(false);
}
}}

}


{


gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "StartTimer");
}if (gdjs.Outro_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DescriptionText"), gdjs.Outro_32ScreenCode.GDDescriptionTextObjects1);
{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDDescriptionTextObjects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDDescriptionTextObjects1[i].hide(false);
}
}}

}


{


gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "StartTimer");
}if (gdjs.Outro_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DescriptionText2"), gdjs.Outro_32ScreenCode.GDDescriptionText2Objects1);
{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDDescriptionText2Objects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDDescriptionText2Objects1[i].hide(false);
}
}}

}


{


gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 7, "StartTimer");
}if (gdjs.Outro_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DescriptionText3"), gdjs.Outro_32ScreenCode.GDDescriptionText3Objects1);
{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDDescriptionText3Objects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDDescriptionText3Objects1[i].hide(false);
}
}}

}


{


gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 9, "StartTimer");
}if (gdjs.Outro_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DescriptionText"), gdjs.Outro_32ScreenCode.GDDescriptionTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("DescriptionText2"), gdjs.Outro_32ScreenCode.GDDescriptionText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("DescriptionText3"), gdjs.Outro_32ScreenCode.GDDescriptionText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("DescriptionText4"), gdjs.Outro_32ScreenCode.GDDescriptionText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("DescriptionText5"), gdjs.Outro_32ScreenCode.GDDescriptionText5Objects1);
gdjs.copyArray(runtimeScene.getObjects("TitleText"), gdjs.Outro_32ScreenCode.GDTitleTextObjects1);
{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDTitleTextObjects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDTitleTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDDescriptionTextObjects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDDescriptionTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDDescriptionText2Objects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDDescriptionText2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDDescriptionText3Objects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDDescriptionText3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDTitleTextObjects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDTitleTextObjects1[i].setString("-----------------------------\nMISSION COMPLETE\n-----------------------------");
}
}{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDDescriptionTextObjects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDDescriptionTextObjects1[i].setString(">_ Congratulations Ranger, excellent work.");
}
}{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDDescriptionText2Objects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDDescriptionText2Objects1[i].setString(">_ With Texas Red defeated, it's only a matter of time until the rest of his gang disbands.");
}
}{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDDescriptionText3Objects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDDescriptionText3Objects1[i].setString(">_ A Marine dropship is on its way to finish securing the station.");
}
}{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDDescriptionText4Objects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDDescriptionText4Objects1[i].setString(">_ Feel free to return to your spacecraft. A new mission will be uploaded to your terminal shortly.");
}
}{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDDescriptionText5Objects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDDescriptionText5Objects1[i].setString(">_ Union Command Out.");
}
}}

}


{


gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 11, "StartTimer");
}if (gdjs.Outro_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TitleText"), gdjs.Outro_32ScreenCode.GDTitleTextObjects1);
{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDTitleTextObjects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDTitleTextObjects1[i].hide(false);
}
}}

}


{


gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 13, "StartTimer");
}if (gdjs.Outro_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DescriptionText"), gdjs.Outro_32ScreenCode.GDDescriptionTextObjects1);
{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDDescriptionTextObjects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDDescriptionTextObjects1[i].hide(false);
}
}}

}


{


gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 15, "StartTimer");
}if (gdjs.Outro_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DescriptionText2"), gdjs.Outro_32ScreenCode.GDDescriptionText2Objects1);
{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDDescriptionText2Objects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDDescriptionText2Objects1[i].hide(false);
}
}}

}


{


gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 17, "StartTimer");
}if (gdjs.Outro_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DescriptionText3"), gdjs.Outro_32ScreenCode.GDDescriptionText3Objects1);
{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDDescriptionText3Objects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDDescriptionText3Objects1[i].hide(false);
}
}}

}


{


gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 19, "StartTimer");
}if (gdjs.Outro_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DescriptionText4"), gdjs.Outro_32ScreenCode.GDDescriptionText4Objects1);
{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDDescriptionText4Objects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDDescriptionText4Objects1[i].hide(false);
}
}}

}


{


gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 21, "StartTimer");
}if (gdjs.Outro_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DescriptionText5"), gdjs.Outro_32ScreenCode.GDDescriptionText5Objects1);
{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDDescriptionText5Objects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDDescriptionText5Objects1[i].hide(false);
}
}}

}


{


gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 23, "StartTimer");
}if (gdjs.Outro_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ContinueText"), gdjs.Outro_32ScreenCode.GDContinueTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("DescriptionText4"), gdjs.Outro_32ScreenCode.GDDescriptionText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Outro_32ScreenCode.GDStartButtonObjects1);
{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDStartButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDStartButtonObjects1[i].returnVariable(gdjs.Outro_32ScreenCode.GDStartButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDDescriptionText4Objects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDDescriptionText4Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDContinueTextObjects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDContinueTextObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Outro_32ScreenCode.GDStartButtonObjects1);

gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Outro_32ScreenCode.mapOfGDgdjs_46Outro_9532ScreenCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Outro_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Outro_32ScreenCode.GDStartButtonObjects1 */
{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDStartButtonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Outro_32ScreenCode.GDStartButtonObjects1);

gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Outro_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Outro_32ScreenCode.mapOfGDgdjs_46Outro_9532ScreenCode_46GDStartButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Outro_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Outro_32ScreenCode.GDStartButtonObjects1 */
{for(var i = 0, len = gdjs.Outro_32ScreenCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.Outro_32ScreenCode.GDStartButtonObjects1[i].setAnimation(0);
}
}}

}


{


{
}

}


};

gdjs.Outro_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Outro_32ScreenCode.GDTerminalWindowObjects1.length = 0;
gdjs.Outro_32ScreenCode.GDTerminalWindowObjects2.length = 0;
gdjs.Outro_32ScreenCode.GDTitleTextObjects1.length = 0;
gdjs.Outro_32ScreenCode.GDTitleTextObjects2.length = 0;
gdjs.Outro_32ScreenCode.GDDescriptionTextObjects1.length = 0;
gdjs.Outro_32ScreenCode.GDDescriptionTextObjects2.length = 0;
gdjs.Outro_32ScreenCode.GDDescriptionText2Objects1.length = 0;
gdjs.Outro_32ScreenCode.GDDescriptionText2Objects2.length = 0;
gdjs.Outro_32ScreenCode.GDDescriptionText3Objects1.length = 0;
gdjs.Outro_32ScreenCode.GDDescriptionText3Objects2.length = 0;
gdjs.Outro_32ScreenCode.GDDescriptionText4Objects1.length = 0;
gdjs.Outro_32ScreenCode.GDDescriptionText4Objects2.length = 0;
gdjs.Outro_32ScreenCode.GDDescriptionText5Objects1.length = 0;
gdjs.Outro_32ScreenCode.GDDescriptionText5Objects2.length = 0;
gdjs.Outro_32ScreenCode.GDStartButtonObjects1.length = 0;
gdjs.Outro_32ScreenCode.GDStartButtonObjects2.length = 0;
gdjs.Outro_32ScreenCode.GDContinueTextObjects1.length = 0;
gdjs.Outro_32ScreenCode.GDContinueTextObjects2.length = 0;

gdjs.Outro_32ScreenCode.eventsList2(runtimeScene);
return;

}

gdjs['Outro_32ScreenCode'] = gdjs.Outro_32ScreenCode;
