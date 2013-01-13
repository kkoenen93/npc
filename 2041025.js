/*
	Machine Apparatus - Origin of Clocktower(220080001)
*/

var status; 

function start() { // starts the NPC 
    status = -1; // sets the status of the NPC to -1 
    action(1, 0, 0); // sets the mode to 1, type to 0, and selection to 0 for the NPC 
} // closes off the start function 

function action(mode, type, selection) { // calls what you set above in function start, almost all actions are done here 
    if (mode == 1) { // the mode is set to 1 because of the function start, as shown above 
        status++; // advances the NPC to the next status, in this case, status 0 
    }else{ // if mode does not equal 1 
        status--; // does not advance the NPC to the next status. 
    } 
     
    if (status == 0) { // if mode was 1, status would move from -1 to 0. If status is 0, these actions will happen 
        cm.sendSimple("beep... beep..... What would you like to do?. \r\n #L0# I would like to buy a Cracked piece of Dimension for 1m #i4031179 #l \r\n #L1# I would like to get out of here. #l"); // Opens a window with 2 choices (selections)
    } else if (status == 1) { // NPC advances to next status if a selection is chosen. 
        if (selection == 0) { // selection 0 is #L0#, "Fight him!" 
				cm.gainItem(4031179,1); { // I will give you your Piece of cracked dimension.
                cm.sendOk("I have gave you your Piece of cracked dimension, Good luck fighting!"); // You are ready to fight papu.
                cm.dispose(); 
            }
        } else if (selection == 1) { // "i dont want to fight papu."
				cm.warp(100000110,0);
				cm.resetReactors(); 
				cm.sendOk("There you go! Come back when you are ready!"); // Get me out of here.
                cm.dispose(); 
        } 
    } 
}  