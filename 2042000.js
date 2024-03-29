/* 
    This file is part of the OdinMS Maple Story Server 
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
               Matthias Butz <matze@odinms.de> 
               Jan Christian Meyer <vimes@odinms.de> 

    This program is free software: you can redistribute it and/or modify 
    it under the terms of the GNU Affero General Public License as 
    published by the Free Software Foundation version 3 as published by 
    the Free Software Foundation. You may not use, modify or distribute 
    this program under any other version of the GNU Affero General Public 
    License. 

    This program is distributed in the hope that it will be useful, 
    but WITHOUT ANY WARRANTY; without even the implied warranty of 
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the 
    GNU Affero General Public License for more details. 

    You should have received a copy of the GNU Affero General Public License 
    along with this program.  If not, see <http://www.gnu.org/licenses/>. 
*/ 
/* 
 * @Name: Spinel 
 * @NPC ID: 9000020 
 * @Author: Alcandon 
 */ 

var status = -1; 
var possibleJobs = new Array(); 
var maps = [ 
/*BossMaps*/[100020101, 105070002, 100020301, 690000071, 230040420, 220080001, 240020402, 240020101, 801040003, 801040100, 610010012, 280030001, 240060201], 
/*MonsterMaps*/[100040001, 101010100, 104040000, 103000101, 103000105, 101030110, 106000002, 101030103, 101040001, 101040003, 101030001, 104010001, 105070001, 105090300, 105040306, 230020000, 230010400, 211041400, 222010000, 220080000, 220070301, 220070201, 220050300, 220010500, 250020000, 251010000, 200040000, 200010301, 240020100, 240040500, 240040000, 600020300, 801040004, 800020130, 800020400, 541000300, 240040800, 240040900, 610030010, 270000100, 240070010, 240070010, 240070020, 240070030, 240070040, 240070050, 240070060, 240070100, 240070101, 240070102, 240070103, 240070200, 240070201, 240070202, 240070203, 240070300, 240070301, 240070302, 240070303, 240070400, 240070401, 240070402, 240070403, 240070500, 240070501, 240070502, 240070503, 240070600, 240070601, 240070602, 240070603, 682010201, 682010202, 682010203, 551030100], 
/*Towns*/[130000000, 300000000, 680000000, 230000000, 101000000, 211000000, 100000000, 251000000, 103000000, 222000000, 104000000, 240000000, 220000000, 250000000, 800000000, 600000000, 221000000, 200000000, 102000000, 801000000, 105040300, 610010004, 260000000, 540010000, 120000000, 550000000, 240070000]]; 
var jobA = false; 
var warper = false; 
var job; 
var newJob; 
var chosenMap = -1; 
var chosenSection = -1; 

function start() { 
    cm.sendSimple("#fUI/UIWindow.img/QuestIcon/3/0#\r\n#L0#World Tour#l"); 
} 

function action(mode, type, selection) { 
    status++; 
    if(mode != 1){ 
        cm.dispose(); 
        return; 
    } 
    if (!jobA && !warper) 
        if (selection == 1) 
            jobA = true; 
        else 
            warper = true; 
    if (jobA) 
        jobAdv(selection); 
    else 
        warp(selection); 
} 


function warp(selection){ 
    if (status == 0) 
        cm.sendSimple("#fUI/UIWindow.img/QuestIcon/3/0#\r\n#L0#Boss Maps#l\r\n#L1#Monster Maps#l\r\n#L2#Town Maps#l"); 
    else if (status == 1) { 
        chosenSection = selection; 
        var selStr = "Select your destination.#b"; 
        for (var i = 0; i < maps[selection].length; i++) 
            selStr += "\r\n#L" + i + "##m" + maps[selection][i] + "#"; 
        cm.sendSimple(selStr); 
    } else if (status == 2) { 
        chosenMap = selection; 
        cm.sendYesNo("Do you want to go to #m" + maps[chosenSection][selection] + "#?"); 
    } else if (status == 3) { 
        cm.warp(maps[chosenSection][chosenMap]); 
        cm.dispose(); 
    } 
} 

  
  