/* 
    NPC Name:       Custom Made
    Map(s):         TroepieMS Tutorial Island Reward (100000010)
    Description:        Gives you rewards for completing the tutorial island
*/
/* 
@    Creator :  Angelo & Tim ----> TroepieMS @ Ragezone
@    Updater :  Angelo & Tim ----> TroepieMS @ Ragezone
@    NPC = Custom Made
@    Function = Gives reward for completing a tutorial island
@ 
*/ 

var choice = 0;
var choicemade = false;

function start (mode, type, selection) { // begin van je start functie
    status = -1; // Door je status op -1 te zetten, zorg je ervoor dat de npc start.
    action(1, 0, 0); // deze regel zorgt ervoor dat action word aangeroepen(hier beneden) deze geeft de waardes 1, 0, 0, mee. de 1 staat voor mode.
} // einde van je start functie

function action(mode, type, selection) { // begin je action functie (roept de gegevens op die je boven heb gedefinieerd)
    // Dit deel als altijd standaard, want deze zorgt dat de status omhoog of omlaag gaat :)

    // start of static part
    if (mode == -1) { // when the mode is -1, the npc closes.
        cm.sendOk("Alright speak to me if you change your mind.");
        cm.dispose();
    }else{
        if (mode == 1) { // when mode gets 1, status will raise with 1
           status++;  
        } else if (mode == 0) { 
            status--; // when mode isn't 1, status will lower with 1
        }
    }
    //end of static part


    // Hier kan je de tekst aanpassen
    if (status == 0) { // Kijk, in het standaard deel hierboven, word het status aangepast. status is aan het begin van de npc -1. maar onder status = -1 staat 1, 0, 0, die 1 staat voor mode
        cm.sendNext("Congratulations on completing the Tutorial Island! \r\n\ Thank you for completing all the quests"); // dit venster heeft alleen een next knop. klikken op next maakt mode 1. daardoor gaat status weer 1 omhoog              
    } else if (status == 1){
        cm.sendNextPrev("For completing the quests, i want to give you a reward."); // Player clicks next, status becomes 3.
    } else if (status == 2){
        cm.sendNextPrev("As you can see, there are 3 chests in this map.\r\n\ As a reward, you may open 1 chest.\r\n\ Everything in the chosen chest is yours. "); // Player clicks next, status becomes 4
    } else if (status == 3){
        cm.sendSimple("What chest would you like to open?\r\n\
#L1# I would like to open the left chest!\r\n\
#L2# I would like to open the right chest!\r\n\
#L3# I would like to open the top chest"); // player clicks an option, status becomes 4 and a selection is made.
    } else if (status == 4){
        if (selection == 1 && cm.getChar().getGender() == 0){ // if the left chest is opened, and you are a male, then this code is being run.
            cm.gainItem(1000000,1);
            cm.gainItem(1052025,1);
            cm.gainItem(1072260,1);
            cm.gainNX(8000);
            cm.warp(100000000);
             choice = 1;
         } else if (selection == 1 && cm.getChar().getGender() == 1){ // if the left chest is opened, and you are a female, then this code is being run.
        cm.gainItem(1001009,1);
        cm.gainItem(1052275,1);
        cm.gainItem(1072258,1);
        cm.gainNX(4000);
        cm.warp(100000000);
            choice = 2;
         } else if (selection == 2 && cm.getChar().getGender() == 0){ // if the right chest is opened, and you are a male, then this code is being run.
        cm.gainItem(1002250,1);
        cm.gainItem(1052142,1);
        cm.gainItem(1072631,1);
        cm.gainNX(4000);
        cm.warp(100000000);
            choice = 3;
         } else if (selection == 2 && cm.getChar().getGender() == 1){ // if the right chest is opened, and you are a female, then this code is being run.
        cm.gainItem(1002890,1);
        cm.gainItem(1052025,1);
        cm.gainItem(1072330,1);
        cm.gainNX(4000);
        cm.warp(100000000);
            choice = 4;
         } else if (selection == 3 && cm.getChar().getGender() == 0){ // if the top chest is opened, and you are a male, then this code is being run.
        cm.gainItem(1002487,1);
        cm.gainItem(1050184,1);
        cm.gainItem(1070003,1);
        cm.gainNX(4000);
        cm.warp(100000000);
            choice = 5;
         } else if (selection == 3 && cm.getChar().getGender() == 1){
        cm.gainItem(1002724,1);
        cm.gainItem(1051223,1);
        cm.gainItem(1072330,1);
        cm.gainNX(4000);
        cm.warp(100000000);
                choice = 6;  
         }
         choicemade = true;
    }  else if (status == 5){
    } if (choicemade && choice == 1){ // if the player is a male, and chooses the left box, and press next, they get the items and nx, and warp to henesys.
        //Left Chest --> Male items
            cm.sendOk("#fUI/UIWindow.img/QuestIcon/3/0# \r\n\
\r\n\ #e#k#t1000000# \t #i1000000# \r\n\
\r\n\ #e#k#t1052025# \t #i1052025# \r\n\
\r\n\ #e#k#t1072260# \t #i1072260# \r\n\
\r\n\ 4000 NX ");
            cm.dispose();
    } else if (choicemade && choice == 2){ // if the player is a female, and chooses the left box, and press next, they get the items and nx, and warp to henesys.
        //Left Chest --> Female items
            cm.sendOk("#fUI/UIWindow.img/QuestIcon/3/0# \r\n\
\r\n\ #e#k#t1001009# \t #i1001009# \r\n\
\r\n\ #e#k#t1052275# \t #i1052275# \r\n\
\r\n\ #e#k#t1072258# \t #i1072258# \r\n\
\r\n\ 4000 NX "); 
            cm.dispose(); 
    } else if (choicemade && choice == 3){ // if the player is a male, and chooses the right box, and press next, they get the items and nx, and warp to henesys.
        //Right Chest --> Male Items
            cm.sendOk("#fUI/UIWindow.img/QuestIcon/3/0# \r\n\
\r\n\ #e#k#t1002250# \t #i1002250# \r\n\
\r\n\ #e#k#t1052142# \t #i1052142# \r\n\
\r\n\ #e#k#t1072631# \t #i1072631# \r\n\
\r\n\ 4000 NX ");
            cm.dispose();
    } else if (choicemade && choice == 4){  // if the player is a female, and chooses the right box, and press next, they get the items and nx, and warp to henesys.
        //Right Chest --> Female Items
            cm.sendOk("#fUI/UIWindow.img/QuestIcon/3/0# \r\n\
\r\n\ #e#k1002890# \t #i1002890 \r\n\
\r\n\ #e#k1052025# \t #i1052025 \r\n\
\r\n\ #e#k#t1072484# \t #i1072484# \r\n\
\r\n\ 4000 NX ");
            cm.dispose();
    } else if (choicemade && choice == 5){  // if the player is a male, and chooses the top box, and press next, they get the items and nx, and warp to henesys.
        //Top Chest --> Male Items
            cm.sendOk("#fUI/UIWindow.img/QuestIcon/3/0# \r\n\
\r\n\ #e#k#t1002487# \t #i1002487# \r\n\
\r\n\ #e#k#t1050184# \t #i1050184# \r\n\
\r\n\ #e#k#t1070003# \t #i1070003# \r\n\
\r\n\ 4000 NX ");
            cm.dispose();
    } else if (choicemade && choice == 6){ // if the player is a female, and chooses the top box, and press next, they get the items and nx, and warp to henesys.
        //Top Chest --> Female Items
            cm.sendOk("#fUI/UIWindow.img/QuestIcon/3/0# \r\n\
\r\n\ #e#k#t1002724# \t #i1002724# \r\n\
\r\n\ #e#k#t1051223# \t #i1051223# \r\n\
\r\n\ #e#k#t1072330# \t #i1072330# \r\n\
\r\n\ 4000 NX ");
            cm.dispose();
    }
}