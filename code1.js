gdjs.Start_32ScreenCode = {};
gdjs.Start_32ScreenCode.GDMoreTextObjects1= [];
gdjs.Start_32ScreenCode.GDMoreTextObjects2= [];
gdjs.Start_32ScreenCode.GDStartButtonObjects1= [];
gdjs.Start_32ScreenCode.GDStartButtonObjects2= [];
gdjs.Start_32ScreenCode.GDHintTextObjects1= [];
gdjs.Start_32ScreenCode.GDHintTextObjects2= [];
gdjs.Start_32ScreenCode.GDEasyButtonObjects1= [];
gdjs.Start_32ScreenCode.GDEasyButtonObjects2= [];
gdjs.Start_32ScreenCode.GDNormalButtonObjects1= [];
gdjs.Start_32ScreenCode.GDNormalButtonObjects2= [];
gdjs.Start_32ScreenCode.GDHardButtonObjects1= [];
gdjs.Start_32ScreenCode.GDHardButtonObjects2= [];
gdjs.Start_32ScreenCode.GDContinueTextObjects1= [];
gdjs.Start_32ScreenCode.GDContinueTextObjects2= [];
gdjs.Start_32ScreenCode.GDDifficultyTextObjects1= [];
gdjs.Start_32ScreenCode.GDDifficultyTextObjects2= [];
gdjs.Start_32ScreenCode.GDDifficultyDescriptionObjects1= [];
gdjs.Start_32ScreenCode.GDDifficultyDescriptionObjects2= [];
gdjs.Start_32ScreenCode.GDTerminalWindowObjects1= [];
gdjs.Start_32ScreenCode.GDTerminalWindowObjects2= [];

gdjs.Start_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Start_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Start_32ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.Start_32ScreenCode.condition2IsTrue_0 = {val:false};
gdjs.Start_32ScreenCode.condition3IsTrue_0 = {val:false};


gdjs.Start_32ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Hard drive.wav", 4, true, 75, 1);
}}

}


};gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.Start_32ScreenCode.GDStartButtonObjects1});gdjs.Start_32ScreenCode.eventsList1 = function(runtimeScene) {

{


gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "UI click.wav", false, 40, 1);
}}

}


};gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.Start_32ScreenCode.GDStartButtonObjects1});gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.Start_32ScreenCode.GDStartButtonObjects1});gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDEasyButtonObjects1Objects = Hashtable.newFrom({"EasyButton": gdjs.Start_32ScreenCode.GDEasyButtonObjects1});gdjs.Start_32ScreenCode.eventsList2 = function(runtimeScene) {

{


gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "UI click.wav", false, 40, 1);
}}

}


};gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDNormalButtonObjects1Objects = Hashtable.newFrom({"NormalButton": gdjs.Start_32ScreenCode.GDNormalButtonObjects1});gdjs.Start_32ScreenCode.eventsList3 = function(runtimeScene) {

{


gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "UI click.wav", false, 40, 1);
}}

}


};gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDHardButtonObjects1Objects = Hashtable.newFrom({"HardButton": gdjs.Start_32ScreenCode.GDHardButtonObjects1});gdjs.Start_32ScreenCode.eventsList4 = function(runtimeScene) {

{


gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "UI click.wav", false, 40, 1);
}}

}


};gdjs.Start_32ScreenCode.eventsList5 = function(runtimeScene) {

{



}


{


gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NormalButton"), gdjs.Start_32ScreenCode.GDNormalButtonObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.Start_32ScreenCode.GDNormalButtonObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDNormalButtonObjects1[i].returnVariable(gdjs.Start_32ScreenCode.GDNormalButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{ //Subevents
gdjs.Start_32ScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Start_32ScreenCode.GDStartButtonObjects1);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Start_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Start_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Start_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Start_32ScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Lore Screen");
}
{ //Subevents
gdjs.Start_32ScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Start_32ScreenCode.GDStartButtonObjects1);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32ScreenCode.GDStartButtonObjects1 */
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDStartButtonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Start_32ScreenCode.GDStartButtonObjects1);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDStartButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32ScreenCode.GDStartButtonObjects1 */
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDStartButtonObjects1[i].setAnimation(0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("EasyButton"), gdjs.Start_32ScreenCode.GDEasyButtonObjects1);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Start_32ScreenCode.condition1IsTrue_0.val = false;
gdjs.Start_32ScreenCode.condition2IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDEasyButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Start_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Start_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Start_32ScreenCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Start_32ScreenCode.GDEasyButtonObjects1.length;i<l;++i) {
    if ( gdjs.Start_32ScreenCode.GDEasyButtonObjects1[i].getVariableNumber(gdjs.Start_32ScreenCode.GDEasyButtonObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.Start_32ScreenCode.condition2IsTrue_0.val = true;
        gdjs.Start_32ScreenCode.GDEasyButtonObjects1[k] = gdjs.Start_32ScreenCode.GDEasyButtonObjects1[i];
        ++k;
    }
}
gdjs.Start_32ScreenCode.GDEasyButtonObjects1.length = k;}}
}
if (gdjs.Start_32ScreenCode.condition2IsTrue_0.val) {
/* Reuse gdjs.Start_32ScreenCode.GDEasyButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("HardButton"), gdjs.Start_32ScreenCode.GDHardButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("NormalButton"), gdjs.Start_32ScreenCode.GDNormalButtonObjects1);
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDEasyButtonObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDEasyButtonObjects1[i].returnVariable(gdjs.Start_32ScreenCode.GDEasyButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.Start_32ScreenCode.GDNormalButtonObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDNormalButtonObjects1[i].returnVariable(gdjs.Start_32ScreenCode.GDNormalButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.Start_32ScreenCode.GDHardButtonObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDHardButtonObjects1[i].returnVariable(gdjs.Start_32ScreenCode.GDHardButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
{ //Subevents
gdjs.Start_32ScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NormalButton"), gdjs.Start_32ScreenCode.GDNormalButtonObjects1);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Start_32ScreenCode.condition1IsTrue_0.val = false;
gdjs.Start_32ScreenCode.condition2IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDNormalButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Start_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Start_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Start_32ScreenCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Start_32ScreenCode.GDNormalButtonObjects1.length;i<l;++i) {
    if ( gdjs.Start_32ScreenCode.GDNormalButtonObjects1[i].getVariableNumber(gdjs.Start_32ScreenCode.GDNormalButtonObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.Start_32ScreenCode.condition2IsTrue_0.val = true;
        gdjs.Start_32ScreenCode.GDNormalButtonObjects1[k] = gdjs.Start_32ScreenCode.GDNormalButtonObjects1[i];
        ++k;
    }
}
gdjs.Start_32ScreenCode.GDNormalButtonObjects1.length = k;}}
}
if (gdjs.Start_32ScreenCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("EasyButton"), gdjs.Start_32ScreenCode.GDEasyButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("HardButton"), gdjs.Start_32ScreenCode.GDHardButtonObjects1);
/* Reuse gdjs.Start_32ScreenCode.GDNormalButtonObjects1 */
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDEasyButtonObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDEasyButtonObjects1[i].returnVariable(gdjs.Start_32ScreenCode.GDEasyButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.Start_32ScreenCode.GDNormalButtonObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDNormalButtonObjects1[i].returnVariable(gdjs.Start_32ScreenCode.GDNormalButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.Start_32ScreenCode.GDHardButtonObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDHardButtonObjects1[i].returnVariable(gdjs.Start_32ScreenCode.GDHardButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
{ //Subevents
gdjs.Start_32ScreenCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HardButton"), gdjs.Start_32ScreenCode.GDHardButtonObjects1);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Start_32ScreenCode.condition1IsTrue_0.val = false;
gdjs.Start_32ScreenCode.condition2IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDHardButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Start_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Start_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Start_32ScreenCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Start_32ScreenCode.GDHardButtonObjects1.length;i<l;++i) {
    if ( gdjs.Start_32ScreenCode.GDHardButtonObjects1[i].getVariableNumber(gdjs.Start_32ScreenCode.GDHardButtonObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.Start_32ScreenCode.condition2IsTrue_0.val = true;
        gdjs.Start_32ScreenCode.GDHardButtonObjects1[k] = gdjs.Start_32ScreenCode.GDHardButtonObjects1[i];
        ++k;
    }
}
gdjs.Start_32ScreenCode.GDHardButtonObjects1.length = k;}}
}
if (gdjs.Start_32ScreenCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("EasyButton"), gdjs.Start_32ScreenCode.GDEasyButtonObjects1);
/* Reuse gdjs.Start_32ScreenCode.GDHardButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NormalButton"), gdjs.Start_32ScreenCode.GDNormalButtonObjects1);
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDEasyButtonObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDEasyButtonObjects1[i].returnVariable(gdjs.Start_32ScreenCode.GDEasyButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.Start_32ScreenCode.GDNormalButtonObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDNormalButtonObjects1[i].returnVariable(gdjs.Start_32ScreenCode.GDNormalButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.Start_32ScreenCode.GDHardButtonObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDHardButtonObjects1[i].returnVariable(gdjs.Start_32ScreenCode.GDHardButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{ //Subevents
gdjs.Start_32ScreenCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EasyButton"), gdjs.Start_32ScreenCode.GDEasyButtonObjects1);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Start_32ScreenCode.GDEasyButtonObjects1.length;i<l;++i) {
    if ( gdjs.Start_32ScreenCode.GDEasyButtonObjects1[i].getVariableNumber(gdjs.Start_32ScreenCode.GDEasyButtonObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.Start_32ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Start_32ScreenCode.GDEasyButtonObjects1[k] = gdjs.Start_32ScreenCode.GDEasyButtonObjects1[i];
        ++k;
    }
}
gdjs.Start_32ScreenCode.GDEasyButtonObjects1.length = k;}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32ScreenCode.GDEasyButtonObjects1 */
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDEasyButtonObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDEasyButtonObjects1[i].setAnimationName("Option");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NormalButton"), gdjs.Start_32ScreenCode.GDNormalButtonObjects1);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Start_32ScreenCode.GDNormalButtonObjects1.length;i<l;++i) {
    if ( gdjs.Start_32ScreenCode.GDNormalButtonObjects1[i].getVariableNumber(gdjs.Start_32ScreenCode.GDNormalButtonObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.Start_32ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Start_32ScreenCode.GDNormalButtonObjects1[k] = gdjs.Start_32ScreenCode.GDNormalButtonObjects1[i];
        ++k;
    }
}
gdjs.Start_32ScreenCode.GDNormalButtonObjects1.length = k;}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32ScreenCode.GDNormalButtonObjects1 */
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDNormalButtonObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDNormalButtonObjects1[i].setAnimationName("Option");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HardButton"), gdjs.Start_32ScreenCode.GDHardButtonObjects1);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Start_32ScreenCode.GDHardButtonObjects1.length;i<l;++i) {
    if ( gdjs.Start_32ScreenCode.GDHardButtonObjects1[i].getVariableNumber(gdjs.Start_32ScreenCode.GDHardButtonObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.Start_32ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Start_32ScreenCode.GDHardButtonObjects1[k] = gdjs.Start_32ScreenCode.GDHardButtonObjects1[i];
        ++k;
    }
}
gdjs.Start_32ScreenCode.GDHardButtonObjects1.length = k;}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32ScreenCode.GDHardButtonObjects1 */
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDHardButtonObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDHardButtonObjects1[i].setAnimationName("Option");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EasyButton"), gdjs.Start_32ScreenCode.GDEasyButtonObjects1);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Start_32ScreenCode.GDEasyButtonObjects1.length;i<l;++i) {
    if ( gdjs.Start_32ScreenCode.GDEasyButtonObjects1[i].getVariableNumber(gdjs.Start_32ScreenCode.GDEasyButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.Start_32ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Start_32ScreenCode.GDEasyButtonObjects1[k] = gdjs.Start_32ScreenCode.GDEasyButtonObjects1[i];
        ++k;
    }
}
gdjs.Start_32ScreenCode.GDEasyButtonObjects1.length = k;}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32ScreenCode.GDEasyButtonObjects1 */
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDEasyButtonObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDEasyButtonObjects1[i].setAnimationName("Pressed");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NormalButton"), gdjs.Start_32ScreenCode.GDNormalButtonObjects1);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Start_32ScreenCode.GDNormalButtonObjects1.length;i<l;++i) {
    if ( gdjs.Start_32ScreenCode.GDNormalButtonObjects1[i].getVariableNumber(gdjs.Start_32ScreenCode.GDNormalButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.Start_32ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Start_32ScreenCode.GDNormalButtonObjects1[k] = gdjs.Start_32ScreenCode.GDNormalButtonObjects1[i];
        ++k;
    }
}
gdjs.Start_32ScreenCode.GDNormalButtonObjects1.length = k;}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32ScreenCode.GDNormalButtonObjects1 */
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDNormalButtonObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDNormalButtonObjects1[i].setAnimationName("Pressed");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HardButton"), gdjs.Start_32ScreenCode.GDHardButtonObjects1);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Start_32ScreenCode.GDHardButtonObjects1.length;i<l;++i) {
    if ( gdjs.Start_32ScreenCode.GDHardButtonObjects1[i].getVariableNumber(gdjs.Start_32ScreenCode.GDHardButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.Start_32ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Start_32ScreenCode.GDHardButtonObjects1[k] = gdjs.Start_32ScreenCode.GDHardButtonObjects1[i];
        ++k;
    }
}
gdjs.Start_32ScreenCode.GDHardButtonObjects1.length = k;}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32ScreenCode.GDHardButtonObjects1 */
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDHardButtonObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDHardButtonObjects1[i].setAnimationName("Pressed");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}}

}


{



}


{


gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DifficultyDescription"), gdjs.Start_32ScreenCode.GDDifficultyDescriptionObjects1);
gdjs.copyArray(runtimeScene.getObjects("DifficultyText"), gdjs.Start_32ScreenCode.GDDifficultyTextObjects1);
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDDifficultyTextObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDDifficultyTextObjects1[i].setString("Double-Action\n     (Easy)");
}
}{for(var i = 0, len = gdjs.Start_32ScreenCode.GDDifficultyDescriptionObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDDifficultyDescriptionObjects1[i].setString("0.5x Damage Taken\n0.5x Score");
}
}}

}


{


gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DifficultyDescription"), gdjs.Start_32ScreenCode.GDDifficultyDescriptionObjects1);
gdjs.copyArray(runtimeScene.getObjects("DifficultyText"), gdjs.Start_32ScreenCode.GDDifficultyTextObjects1);
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDDifficultyTextObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDDifficultyTextObjects1[i].setString("Single-Action\n     (Normal)");
}
}{for(var i = 0, len = gdjs.Start_32ScreenCode.GDDifficultyDescriptionObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDDifficultyDescriptionObjects1[i].setString("1x Damage Taken\n1x Score");
}
}}

}


{


gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DifficultyDescription"), gdjs.Start_32ScreenCode.GDDifficultyDescriptionObjects1);
gdjs.copyArray(runtimeScene.getObjects("DifficultyText"), gdjs.Start_32ScreenCode.GDDifficultyTextObjects1);
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDDifficultyTextObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDDifficultyTextObjects1[i].setString("Gunslinger\n     (Hard)");
}
}{for(var i = 0, len = gdjs.Start_32ScreenCode.GDDifficultyDescriptionObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDDifficultyDescriptionObjects1[i].setString("1.5x Damage Taken\n2x Score");
}
}}

}


};

gdjs.Start_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32ScreenCode.GDMoreTextObjects1.length = 0;
gdjs.Start_32ScreenCode.GDMoreTextObjects2.length = 0;
gdjs.Start_32ScreenCode.GDStartButtonObjects1.length = 0;
gdjs.Start_32ScreenCode.GDStartButtonObjects2.length = 0;
gdjs.Start_32ScreenCode.GDHintTextObjects1.length = 0;
gdjs.Start_32ScreenCode.GDHintTextObjects2.length = 0;
gdjs.Start_32ScreenCode.GDEasyButtonObjects1.length = 0;
gdjs.Start_32ScreenCode.GDEasyButtonObjects2.length = 0;
gdjs.Start_32ScreenCode.GDNormalButtonObjects1.length = 0;
gdjs.Start_32ScreenCode.GDNormalButtonObjects2.length = 0;
gdjs.Start_32ScreenCode.GDHardButtonObjects1.length = 0;
gdjs.Start_32ScreenCode.GDHardButtonObjects2.length = 0;
gdjs.Start_32ScreenCode.GDContinueTextObjects1.length = 0;
gdjs.Start_32ScreenCode.GDContinueTextObjects2.length = 0;
gdjs.Start_32ScreenCode.GDDifficultyTextObjects1.length = 0;
gdjs.Start_32ScreenCode.GDDifficultyTextObjects2.length = 0;
gdjs.Start_32ScreenCode.GDDifficultyDescriptionObjects1.length = 0;
gdjs.Start_32ScreenCode.GDDifficultyDescriptionObjects2.length = 0;
gdjs.Start_32ScreenCode.GDTerminalWindowObjects1.length = 0;
gdjs.Start_32ScreenCode.GDTerminalWindowObjects2.length = 0;

gdjs.Start_32ScreenCode.eventsList5(runtimeScene);
return;

}

gdjs['Start_32ScreenCode'] = gdjs.Start_32ScreenCode;
