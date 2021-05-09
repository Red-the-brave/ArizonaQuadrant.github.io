gdjs.Pause_32menuCode = {};
gdjs.Pause_32menuCode.GDPauseTitleObjects1= [];
gdjs.Pause_32menuCode.GDPauseTitleObjects2= [];
gdjs.Pause_32menuCode.GDBackButtonObjects1= [];
gdjs.Pause_32menuCode.GDBackButtonObjects2= [];
gdjs.Pause_32menuCode.GDAudioToggleObjects1= [];
gdjs.Pause_32menuCode.GDAudioToggleObjects2= [];
gdjs.Pause_32menuCode.GDStatsTitleObjects1= [];
gdjs.Pause_32menuCode.GDStatsTitleObjects2= [];
gdjs.Pause_32menuCode.GDTimePlayedObjects1= [];
gdjs.Pause_32menuCode.GDTimePlayedObjects2= [];
gdjs.Pause_32menuCode.GDHitsObjects1= [];
gdjs.Pause_32menuCode.GDHitsObjects2= [];
gdjs.Pause_32menuCode.GDMissesObjects1= [];
gdjs.Pause_32menuCode.GDMissesObjects2= [];
gdjs.Pause_32menuCode.GDTimePausedObjects1= [];
gdjs.Pause_32menuCode.GDTimePausedObjects2= [];
gdjs.Pause_32menuCode.GDHostilesKilledObjects1= [];
gdjs.Pause_32menuCode.GDHostilesKilledObjects2= [];
gdjs.Pause_32menuCode.GDHostilesLeftObjects1= [];
gdjs.Pause_32menuCode.GDHostilesLeftObjects2= [];
gdjs.Pause_32menuCode.GDTotalHealedObjects1= [];
gdjs.Pause_32menuCode.GDTotalHealedObjects2= [];
gdjs.Pause_32menuCode.GDO2UsedObjects1= [];
gdjs.Pause_32menuCode.GDO2UsedObjects2= [];
gdjs.Pause_32menuCode.GDTerminalWindowObjects1= [];
gdjs.Pause_32menuCode.GDTerminalWindowObjects2= [];
gdjs.Pause_32menuCode.GDHintTextObjects1= [];
gdjs.Pause_32menuCode.GDHintTextObjects2= [];
gdjs.Pause_32menuCode.GDBulletsFiredObjects1= [];
gdjs.Pause_32menuCode.GDBulletsFiredObjects2= [];
gdjs.Pause_32menuCode.GDControlsTitleObjects1= [];
gdjs.Pause_32menuCode.GDControlsTitleObjects2= [];
gdjs.Pause_32menuCode.GDControlsTextObjects1= [];
gdjs.Pause_32menuCode.GDControlsTextObjects2= [];

gdjs.Pause_32menuCode.conditionTrue_0 = {val:false};
gdjs.Pause_32menuCode.condition0IsTrue_0 = {val:false};
gdjs.Pause_32menuCode.condition1IsTrue_0 = {val:false};
gdjs.Pause_32menuCode.condition2IsTrue_0 = {val:false};
gdjs.Pause_32menuCode.condition3IsTrue_0 = {val:false};
gdjs.Pause_32menuCode.condition4IsTrue_0 = {val:false};


gdjs.Pause_32menuCode.mapOfGDgdjs_46Pause_9532menuCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.Pause_32menuCode.GDBackButtonObjects1});gdjs.Pause_32menuCode.mapOfGDgdjs_46Pause_9532menuCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.Pause_32menuCode.GDBackButtonObjects1});gdjs.Pause_32menuCode.mapOfGDgdjs_46Pause_9532menuCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.Pause_32menuCode.GDBackButtonObjects1});gdjs.Pause_32menuCode.mapOfGDgdjs_46Pause_9532menuCode_46GDAudioToggleObjects1Objects = Hashtable.newFrom({"AudioToggle": gdjs.Pause_32menuCode.GDAudioToggleObjects1});gdjs.Pause_32menuCode.mapOfGDgdjs_46Pause_9532menuCode_46GDAudioToggleObjects1Objects = Hashtable.newFrom({"AudioToggle": gdjs.Pause_32menuCode.GDAudioToggleObjects1});gdjs.Pause_32menuCode.mapOfGDgdjs_46Pause_9532menuCode_46GDAudioToggleObjects1Objects = Hashtable.newFrom({"AudioToggle": gdjs.Pause_32menuCode.GDAudioToggleObjects1});gdjs.Pause_32menuCode.mapOfGDgdjs_46Pause_9532menuCode_46GDAudioToggleObjects1Objects = Hashtable.newFrom({"AudioToggle": gdjs.Pause_32menuCode.GDAudioToggleObjects1});gdjs.Pause_32menuCode.mapOfGDgdjs_46Pause_9532menuCode_46GDAudioToggleObjects1Objects = Hashtable.newFrom({"AudioToggle": gdjs.Pause_32menuCode.GDAudioToggleObjects1});gdjs.Pause_32menuCode.mapOfGDgdjs_46Pause_9532menuCode_46GDAudioToggleObjects1Objects = Hashtable.newFrom({"AudioToggle": gdjs.Pause_32menuCode.GDAudioToggleObjects1});gdjs.Pause_32menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.Pause_32menuCode.GDBackButtonObjects1);

gdjs.Pause_32menuCode.condition0IsTrue_0.val = false;
gdjs.Pause_32menuCode.condition1IsTrue_0.val = false;
{
gdjs.Pause_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pause_32menuCode.mapOfGDgdjs_46Pause_9532menuCode_46GDBackButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Pause_32menuCode.condition0IsTrue_0.val ) {
{
gdjs.Pause_32menuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Pause_32menuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.Pause_32menuCode.GDBackButtonObjects1);

gdjs.Pause_32menuCode.condition0IsTrue_0.val = false;
{
gdjs.Pause_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pause_32menuCode.mapOfGDgdjs_46Pause_9532menuCode_46GDBackButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Pause_32menuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Pause_32menuCode.GDBackButtonObjects1 */
{for(var i = 0, len = gdjs.Pause_32menuCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.Pause_32menuCode.GDBackButtonObjects1[i].setAnimationName("Hover");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.Pause_32menuCode.GDBackButtonObjects1);

gdjs.Pause_32menuCode.condition0IsTrue_0.val = false;
{
gdjs.Pause_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pause_32menuCode.mapOfGDgdjs_46Pause_9532menuCode_46GDBackButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Pause_32menuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Pause_32menuCode.GDBackButtonObjects1 */
{for(var i = 0, len = gdjs.Pause_32menuCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.Pause_32menuCode.GDBackButtonObjects1[i].setAnimationName("Normal");
}
}}

}


{


gdjs.Pause_32menuCode.condition0IsTrue_0.val = false;
gdjs.Pause_32menuCode.condition1IsTrue_0.val = false;
{
gdjs.Pause_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if ( gdjs.Pause_32menuCode.condition0IsTrue_0.val ) {
{
gdjs.Pause_32menuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}}
if (gdjs.Pause_32menuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}}

}


{


gdjs.Pause_32menuCode.condition0IsTrue_0.val = false;
{
gdjs.Pause_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.Pause_32menuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AudioToggle"), gdjs.Pause_32menuCode.GDAudioToggleObjects1);

gdjs.Pause_32menuCode.condition0IsTrue_0.val = false;
gdjs.Pause_32menuCode.condition1IsTrue_0.val = false;
{
gdjs.Pause_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pause_32menuCode.mapOfGDgdjs_46Pause_9532menuCode_46GDAudioToggleObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Pause_32menuCode.condition0IsTrue_0.val ) {
{
gdjs.Pause_32menuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}}
if (gdjs.Pause_32menuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Pause_32menuCode.GDAudioToggleObjects1 */
{for(var i = 0, len = gdjs.Pause_32menuCode.GDAudioToggleObjects1.length ;i < len;++i) {
    gdjs.Pause_32menuCode.GDAudioToggleObjects1[i].setAnimationName("OnHover");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AudioToggle"), gdjs.Pause_32menuCode.GDAudioToggleObjects1);

gdjs.Pause_32menuCode.condition0IsTrue_0.val = false;
gdjs.Pause_32menuCode.condition1IsTrue_0.val = false;
{
gdjs.Pause_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pause_32menuCode.mapOfGDgdjs_46Pause_9532menuCode_46GDAudioToggleObjects1Objects, runtimeScene, true, true);
}if ( gdjs.Pause_32menuCode.condition0IsTrue_0.val ) {
{
gdjs.Pause_32menuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}}
if (gdjs.Pause_32menuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Pause_32menuCode.GDAudioToggleObjects1 */
{for(var i = 0, len = gdjs.Pause_32menuCode.GDAudioToggleObjects1.length ;i < len;++i) {
    gdjs.Pause_32menuCode.GDAudioToggleObjects1[i].setAnimationName("On");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AudioToggle"), gdjs.Pause_32menuCode.GDAudioToggleObjects1);

gdjs.Pause_32menuCode.condition0IsTrue_0.val = false;
gdjs.Pause_32menuCode.condition1IsTrue_0.val = false;
{
gdjs.Pause_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pause_32menuCode.mapOfGDgdjs_46Pause_9532menuCode_46GDAudioToggleObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Pause_32menuCode.condition0IsTrue_0.val ) {
{
gdjs.Pause_32menuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}}
if (gdjs.Pause_32menuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Pause_32menuCode.GDAudioToggleObjects1 */
{for(var i = 0, len = gdjs.Pause_32menuCode.GDAudioToggleObjects1.length ;i < len;++i) {
    gdjs.Pause_32menuCode.GDAudioToggleObjects1[i].setAnimationName("OffHover");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AudioToggle"), gdjs.Pause_32menuCode.GDAudioToggleObjects1);

gdjs.Pause_32menuCode.condition0IsTrue_0.val = false;
gdjs.Pause_32menuCode.condition1IsTrue_0.val = false;
{
gdjs.Pause_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pause_32menuCode.mapOfGDgdjs_46Pause_9532menuCode_46GDAudioToggleObjects1Objects, runtimeScene, true, true);
}if ( gdjs.Pause_32menuCode.condition0IsTrue_0.val ) {
{
gdjs.Pause_32menuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}}
if (gdjs.Pause_32menuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Pause_32menuCode.GDAudioToggleObjects1 */
{for(var i = 0, len = gdjs.Pause_32menuCode.GDAudioToggleObjects1.length ;i < len;++i) {
    gdjs.Pause_32menuCode.GDAudioToggleObjects1[i].setAnimationName("Off");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AudioToggle"), gdjs.Pause_32menuCode.GDAudioToggleObjects1);

gdjs.Pause_32menuCode.condition0IsTrue_0.val = false;
gdjs.Pause_32menuCode.condition1IsTrue_0.val = false;
gdjs.Pause_32menuCode.condition2IsTrue_0.val = false;
gdjs.Pause_32menuCode.condition3IsTrue_0.val = false;
{
gdjs.Pause_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pause_32menuCode.mapOfGDgdjs_46Pause_9532menuCode_46GDAudioToggleObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Pause_32menuCode.condition0IsTrue_0.val ) {
{
gdjs.Pause_32menuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Pause_32menuCode.condition1IsTrue_0.val ) {
{
gdjs.Pause_32menuCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if ( gdjs.Pause_32menuCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Pause_32menuCode.GDAudioToggleObjects1.length;i<l;++i) {
    if ( gdjs.Pause_32menuCode.GDAudioToggleObjects1[i].getVariableNumber(gdjs.Pause_32menuCode.GDAudioToggleObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.Pause_32menuCode.condition3IsTrue_0.val = true;
        gdjs.Pause_32menuCode.GDAudioToggleObjects1[k] = gdjs.Pause_32menuCode.GDAudioToggleObjects1[i];
        ++k;
    }
}
gdjs.Pause_32menuCode.GDAudioToggleObjects1.length = k;}}
}
}
if (gdjs.Pause_32menuCode.condition3IsTrue_0.val) {
/* Reuse gdjs.Pause_32menuCode.GDAudioToggleObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{for(var i = 0, len = gdjs.Pause_32menuCode.GDAudioToggleObjects1.length ;i < len;++i) {
    gdjs.Pause_32menuCode.GDAudioToggleObjects1[i].returnVariable(gdjs.Pause_32menuCode.GDAudioToggleObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 3);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 4);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AudioToggle"), gdjs.Pause_32menuCode.GDAudioToggleObjects1);

gdjs.Pause_32menuCode.condition0IsTrue_0.val = false;
gdjs.Pause_32menuCode.condition1IsTrue_0.val = false;
gdjs.Pause_32menuCode.condition2IsTrue_0.val = false;
gdjs.Pause_32menuCode.condition3IsTrue_0.val = false;
{
gdjs.Pause_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pause_32menuCode.mapOfGDgdjs_46Pause_9532menuCode_46GDAudioToggleObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Pause_32menuCode.condition0IsTrue_0.val ) {
{
gdjs.Pause_32menuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Pause_32menuCode.condition1IsTrue_0.val ) {
{
gdjs.Pause_32menuCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if ( gdjs.Pause_32menuCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Pause_32menuCode.GDAudioToggleObjects1.length;i<l;++i) {
    if ( gdjs.Pause_32menuCode.GDAudioToggleObjects1[i].getVariableNumber(gdjs.Pause_32menuCode.GDAudioToggleObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.Pause_32menuCode.condition3IsTrue_0.val = true;
        gdjs.Pause_32menuCode.GDAudioToggleObjects1[k] = gdjs.Pause_32menuCode.GDAudioToggleObjects1[i];
        ++k;
    }
}
gdjs.Pause_32menuCode.GDAudioToggleObjects1.length = k;}}
}
}
if (gdjs.Pause_32menuCode.condition3IsTrue_0.val) {
/* Reuse gdjs.Pause_32menuCode.GDAudioToggleObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{for(var i = 0, len = gdjs.Pause_32menuCode.GDAudioToggleObjects1.length ;i < len;++i) {
    gdjs.Pause_32menuCode.GDAudioToggleObjects1[i].returnVariable(gdjs.Pause_32menuCode.GDAudioToggleObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AudioToggle"), gdjs.Pause_32menuCode.GDAudioToggleObjects1);

gdjs.Pause_32menuCode.condition0IsTrue_0.val = false;
gdjs.Pause_32menuCode.condition1IsTrue_0.val = false;
{
gdjs.Pause_32menuCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.Pause_32menuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Pause_32menuCode.GDAudioToggleObjects1.length;i<l;++i) {
    if ( gdjs.Pause_32menuCode.GDAudioToggleObjects1[i].getVariableNumber(gdjs.Pause_32menuCode.GDAudioToggleObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.Pause_32menuCode.condition1IsTrue_0.val = true;
        gdjs.Pause_32menuCode.GDAudioToggleObjects1[k] = gdjs.Pause_32menuCode.GDAudioToggleObjects1[i];
        ++k;
    }
}
gdjs.Pause_32menuCode.GDAudioToggleObjects1.length = k;}}
if (gdjs.Pause_32menuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Pause_32menuCode.GDAudioToggleObjects1 */
{for(var i = 0, len = gdjs.Pause_32menuCode.GDAudioToggleObjects1.length ;i < len;++i) {
    gdjs.Pause_32menuCode.GDAudioToggleObjects1[i].returnVariable(gdjs.Pause_32menuCode.GDAudioToggleObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


{


gdjs.Pause_32menuCode.condition0IsTrue_0.val = false;
{
gdjs.Pause_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Pause_32menuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BulletsFired"), gdjs.Pause_32menuCode.GDBulletsFiredObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hits"), gdjs.Pause_32menuCode.GDHitsObjects1);
gdjs.copyArray(runtimeScene.getObjects("HostilesKilled"), gdjs.Pause_32menuCode.GDHostilesKilledObjects1);
gdjs.copyArray(runtimeScene.getObjects("Misses"), gdjs.Pause_32menuCode.GDMissesObjects1);
gdjs.copyArray(runtimeScene.getObjects("TimePaused"), gdjs.Pause_32menuCode.GDTimePausedObjects1);
gdjs.copyArray(runtimeScene.getObjects("TimePlayed"), gdjs.Pause_32menuCode.GDTimePlayedObjects1);
{runtimeScene.getVariables().getFromIndex(0).setNumber((gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) - gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8))));
}{for(var i = 0, len = gdjs.Pause_32menuCode.GDTimePlayedObjects1.length ;i < len;++i) {
    gdjs.Pause_32menuCode.GDTimePlayedObjects1[i].setString("Time Played: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) + "s");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pausedTimer");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "pausedTimer");
}{for(var i = 0, len = gdjs.Pause_32menuCode.GDTimePausedObjects1.length ;i < len;++i) {
    gdjs.Pause_32menuCode.GDTimePausedObjects1[i].setString("Time spent in Pause Menu: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) + "s");
}
}{for(var i = 0, len = gdjs.Pause_32menuCode.GDHostilesKilledObjects1.length ;i < len;++i) {
    gdjs.Pause_32menuCode.GDHostilesKilledObjects1[i].setString("Enemies Killed: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)));
}
}{for(var i = 0, len = gdjs.Pause_32menuCode.GDBulletsFiredObjects1.length ;i < len;++i) {
    gdjs.Pause_32menuCode.GDBulletsFiredObjects1[i].setString("Bullets Fired: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}{for(var i = 0, len = gdjs.Pause_32menuCode.GDHitsObjects1.length ;i < len;++i) {
    gdjs.Pause_32menuCode.GDHitsObjects1[i].setString("Shots Hit: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
}{for(var i = 0, len = gdjs.Pause_32menuCode.GDMissesObjects1.length ;i < len;++i) {
    gdjs.Pause_32menuCode.GDMissesObjects1[i].setString("Shots Missed: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 5);
}}

}


{


gdjs.Pause_32menuCode.condition0IsTrue_0.val = false;
{
gdjs.Pause_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "pausedTimer");
}if (gdjs.Pause_32menuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimePaused"), gdjs.Pause_32menuCode.GDTimePausedObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(5).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pausedTimer");
}{for(var i = 0, len = gdjs.Pause_32menuCode.GDTimePausedObjects1.length ;i < len;++i) {
    gdjs.Pause_32menuCode.GDTimePausedObjects1[i].setString("Time spent in Pause Menu: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) + "s");
}
}}

}


};

gdjs.Pause_32menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Pause_32menuCode.GDPauseTitleObjects1.length = 0;
gdjs.Pause_32menuCode.GDPauseTitleObjects2.length = 0;
gdjs.Pause_32menuCode.GDBackButtonObjects1.length = 0;
gdjs.Pause_32menuCode.GDBackButtonObjects2.length = 0;
gdjs.Pause_32menuCode.GDAudioToggleObjects1.length = 0;
gdjs.Pause_32menuCode.GDAudioToggleObjects2.length = 0;
gdjs.Pause_32menuCode.GDStatsTitleObjects1.length = 0;
gdjs.Pause_32menuCode.GDStatsTitleObjects2.length = 0;
gdjs.Pause_32menuCode.GDTimePlayedObjects1.length = 0;
gdjs.Pause_32menuCode.GDTimePlayedObjects2.length = 0;
gdjs.Pause_32menuCode.GDHitsObjects1.length = 0;
gdjs.Pause_32menuCode.GDHitsObjects2.length = 0;
gdjs.Pause_32menuCode.GDMissesObjects1.length = 0;
gdjs.Pause_32menuCode.GDMissesObjects2.length = 0;
gdjs.Pause_32menuCode.GDTimePausedObjects1.length = 0;
gdjs.Pause_32menuCode.GDTimePausedObjects2.length = 0;
gdjs.Pause_32menuCode.GDHostilesKilledObjects1.length = 0;
gdjs.Pause_32menuCode.GDHostilesKilledObjects2.length = 0;
gdjs.Pause_32menuCode.GDHostilesLeftObjects1.length = 0;
gdjs.Pause_32menuCode.GDHostilesLeftObjects2.length = 0;
gdjs.Pause_32menuCode.GDTotalHealedObjects1.length = 0;
gdjs.Pause_32menuCode.GDTotalHealedObjects2.length = 0;
gdjs.Pause_32menuCode.GDO2UsedObjects1.length = 0;
gdjs.Pause_32menuCode.GDO2UsedObjects2.length = 0;
gdjs.Pause_32menuCode.GDTerminalWindowObjects1.length = 0;
gdjs.Pause_32menuCode.GDTerminalWindowObjects2.length = 0;
gdjs.Pause_32menuCode.GDHintTextObjects1.length = 0;
gdjs.Pause_32menuCode.GDHintTextObjects2.length = 0;
gdjs.Pause_32menuCode.GDBulletsFiredObjects1.length = 0;
gdjs.Pause_32menuCode.GDBulletsFiredObjects2.length = 0;
gdjs.Pause_32menuCode.GDControlsTitleObjects1.length = 0;
gdjs.Pause_32menuCode.GDControlsTitleObjects2.length = 0;
gdjs.Pause_32menuCode.GDControlsTextObjects1.length = 0;
gdjs.Pause_32menuCode.GDControlsTextObjects2.length = 0;

gdjs.Pause_32menuCode.eventsList0(runtimeScene);
return;

}

gdjs['Pause_32menuCode'] = gdjs.Pause_32menuCode;
